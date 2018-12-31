import { Firebase } from "services";



export abstract class ListService<TItem> {

    private page : number = 1;

    constructor(private path: string, private pageSize : number) {

    }

    private get ref() {
        return Firebase.database().ref(this.path);
    }

    protected get timestamp() {
        return Firebase.database.ServerValue.TIMESTAMP;
    }

    public onChildAdded(callback : (TItem) => void) {
        return this.ref
        .limitToLast(this.pageSize)
        .on('child_added', snapshot => callback(this.fromServerSnapshot(snapshot)));
    }

    public onChildRemoved(callback : (TItem) => void) {
        return this.ref
        .on('child_removed', snapshot => callback(this.fromServerSnapshot(snapshot)));
    }

    public onChildChanged(callback : (TItem) => void) {
        return this.ref
        .on('child_changed', snapshot => callback(this.fromServerSnapshot(snapshot)));
    }


    public off() {
        this.ref.off();
    }

    public updateItem(item : TItem) {
        const {key, value} = this.toServerValue(item);
        Firebase.database().ref(`${this.path}/${key}`).set(value);
    }

    public removeItems(...items : TItem[]) {
        items.forEach(item => {
            this.removeItem(item);
        })
    }

    public removeItem(item : TItem) {
        const {key} = this.toServerValue(item);
        Firebase.database().ref(`${this.path}/${key}`).remove();
    }

    public appendItem(item : TItem) {
        const {value} = this.toServerValue(item);
        return this.ref.push(value);
    }

    public appendItems(...items: TItem[]) {
        items.forEach(item => {
            this.appendItem(item);
        });
    }


    protected abstract toServerValue(item:TItem) : {key:string, value:any};

    protected fromServerSnapshot(snapshot : firebase.database.DataSnapshot) {
        return this.fromServerValue(snapshot.key, snapshot.val());
    }

    protected abstract fromServerValue(key:string, value:any) : TItem;
}
