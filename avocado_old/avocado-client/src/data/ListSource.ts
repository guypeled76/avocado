import { firestore } from "firebase";
import { db } from "services";

export interface ListSourceConfig {
    pageSize?: number;
    reviseQuery?: (query: firestore.Query) => firestore.Query;
}

export type ListSourceItem<TItem> = {
    id: string,
    value: TItem
};

export type ListSourceEvent = "added" | "modified" | "removed";

export type ListSourceEventHandler<TItem> = (item: ListSourceItem<TItem>) => void;

export class ListSource<TItem> {

    private lastItem: any;

    private addedHandler: ListSourceEventHandler<TItem>;
    private removedHandler: ListSourceEventHandler<TItem>;
    private modifiedHandler: ListSourceEventHandler<TItem>;

    private attached = false;

    constructor(private collection: firestore.CollectionReference, private config?: ListSourceConfig) {
        this.config = Object.assign({
            pageSize: 20,
            reviseQuery: (query: firestore.Query) => query
        }, this.config);
    }

    private get pageSize(): number {
        return this.config.pageSize;
    }

    private get query() : firestore.Query {
        let query = this.config.reviseQuery(this.collection);

        if (this.lastItem) {
            query = query.startAfter(this.lastItem);
        }

        return query;
    }

    protected reviseItem(id: string, item: TItem) : TItem {
        return item;
    }

    public on(event: ListSourceEvent, callback: ListSourceEventHandler<TItem>) {
        this.attachEvents();

        if (event === 'added') {
            this.addedHandler = callback;
        } else if (event === 'modified') {
            this.modifiedHandler = callback;
        } else if (event === 'removed') {
            this.removedHandler = callback;
        }
    }

    public off() {
        this.detachEvents();
    }

    public clear() {
        this.lastItem = null;
    }

    public next(): Promise<ListSourceItem<TItem>[]> {
        return new Promise<ListSourceItem<TItem>[]>((resolved, rejected) => {
            if (resolved) {              
                this.query.limit(this.pageSize).get().then((snapshot) => {
                    
                    const docs = snapshot.docs;
                    if (docs.length > 0) {
                        this.lastItem = docs[docs.length - 1];
                        resolved(docs.map(doc => <ListSourceItem<TItem>>{ id: doc.id, value: this.reviseItem(doc.id, <TItem>doc.data()) }));
                    } else {
                        console.log("next() returned no items.");
                    }
                }, (error) => {
                    if (rejected) {
                        rejected(error);
                    }
                })
            }
        });
    }



    public push(value: TItem) {
        return this.collection.doc().set(value);
    }

    public pushAll(values: TItem[]) {
        const batch = db.batch();
        for (const value of values) {
            batch.set(this.collection.doc(), value);
        }
        return batch.commit();
    }

    public setAll(items: ListSourceItem<TItem>[]) {
        const batch = db.batch();
        for (const item of items) {
            batch.set(this.collection.doc(item.id), item.value);
        }
        return batch.commit();
    }

    public set(item: ListSourceItem<TItem>) {
        return this.collection.doc(item.id).set(item.value);
    }



    private attachEvents() {
        if (!this.attached) {

            this.attached = true;

            this.query.onSnapshot(querySnapshot => {

                querySnapshot.docChanges().forEach(change => {
                    if (change.type === 'added') { 
                        if (this.addedHandler) {
                            this.addedHandler({ id: change.doc.id, value: this.reviseItem(change.doc.id, <TItem>change.doc.data()) })
                        }
                    }
                    else if (change.type === 'modified') {
                        if (this.modifiedHandler) {
                            this.modifiedHandler({ id: change.doc.id, value: this.reviseItem(change.doc.id, <TItem>change.doc.data()) })
                        } 
                    }
                    else if (change.type === 'removed') {
                        if (this.removedHandler) {
                            this.removedHandler({ id: change.doc.id, value: this.reviseItem(change.doc.id, <TItem>change.doc.data()) })
                        }
                    }

                });
            });
        }
    }

    private detachEvents() {
        if (this.attached) {
            this.attached = false;
            const unsubscribe = this.collection.onSnapshot(() => { });
            unsubscribe();
        }
    }
}