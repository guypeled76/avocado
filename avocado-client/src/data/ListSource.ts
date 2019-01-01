import { firestore } from "firebase";

export interface ListSourceConfig {
    pageSize?: number;
}

export interface ListSourceItem {
    key:string;
    value:any;
}


export class ListSource {

    private lastItem : any;

    constructor(private collection: firestore.CollectionReference, private config?: ListSourceConfig) {

            // Set the default values
            this.config = Object.assign({
                pageSize:20
            }, this.config);
        
    }

 
    
    private get pageSize() : number {
        return this.config.pageSize;
    }

    public loadNext(onsuccess: (ListSourceItem) => void, onfailure?: (Error) => void) {
        let data : firestore.Query = this.collection;
        if(this.lastItem) {
            data = data.startAfter(this.lastItem);
        }
        data.limit(this.pageSize).onSnapshot((snapshot) => {
            const docs = snapshot.docs;
            if (docs.length > 0) {
                this.lastItem = docs[docs.length - 1];
                for (const doc of snapshot.docs) {
                    onsuccess({key:doc.id, value:doc.data()});
                }
            }
        }, (error) => {
            if(onfailure) {
                onfailure(error);
            }
        })
    }

    public appendItems(items: ListSourceItem[]) {
        for(const item of items) {
            this.appendItem(item);
        }
    }

    public appendItem(item: ListSourceItem) {
        this.collection.doc(item.key).set(item.value);
    }

    
}