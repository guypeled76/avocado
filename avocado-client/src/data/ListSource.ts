import { firestore } from "firebase";
import { db } from "services";

export interface ListSourceConfig {
    pageSize?: number;
}

export type ListSourceItem<TItem> = {id: string, value: TItem};


export class ListSource<TItem> {

    private lastItem: any;

    constructor(private collection: firestore.CollectionReference, private config?: ListSourceConfig) {
        this.config = Object.assign({
            pageSize: 20
        }, this.config);
    }

    private get pageSize(): number {
        return this.config.pageSize;
    }

    public clear() {
        this.lastItem = null;
    }

    public next(): Promise<ListSourceItem<TItem>[]> {
        return new Promise<ListSourceItem<TItem>[]>((resolved, rejected) => {
            if (resolved) {

                let data: firestore.Query = this.collection;
                if (this.lastItem) {
                    data = data.startAfter(this.lastItem);
                }
                data.limit(this.pageSize).get().then((snapshot) => {
                    const docs = snapshot.docs;
                    if (docs.length > 0) {
                        this.lastItem = docs[docs.length - 1];
                        resolved(docs.map(doc => <ListSourceItem<TItem>>{id:doc.id, value: <TItem>doc.data()}));
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
        for(const value of values) {
            batch.set(this.collection.doc(), value);
        }
        return batch.commit();
    }

    public setAll(items : ListSourceItem<TItem>[]){
        const batch = db.batch();
        for(const item of items) {
            batch.set(this.collection.doc(item.id), item.value);
        }
        return batch.commit();
    }

    public set(item : ListSourceItem<TItem>) {
        return this.collection.doc(item.id).set(item.value);
    }


}