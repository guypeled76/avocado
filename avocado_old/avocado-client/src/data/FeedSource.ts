import { ListSource, ListSourceConfig } from "./ListSource";
import { db } from "services";
import { firestore } from "firebase";
import { PostInfoType } from "avocado-common";

export class FeedSource extends ListSource<PostInfoType> {

    constructor(userId: string, config?: ListSourceConfig) {
        super(db.collection("feed").doc(userId).collection("posts"))
    }


    private static reviseQuery(query:firestore.Query) {
        return query.orderBy("created", "desc");
    } 

    protected reviseItem(id: string, item: PostInfoType) : PostInfoType {
        if(item != null) {
            item.key = id;
        }
        return item;
    }
}