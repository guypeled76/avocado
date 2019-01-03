import { ListSource, ListSourceConfig } from "./ListSource";
import { MessageInfo } from "avocado-common";
import { db } from "services";
import { firestore } from "firebase";


export class ChatSource extends ListSource<MessageInfo> {

    constructor(userId: string, chatId: string, config?: ListSourceConfig) {
        super(db.collection("chats").doc(userId).collection(chatId), {...config, reviseQuery:ChatSource.reviseQuery})
    }


    private static reviseQuery(query:firestore.Query) {
        return query.orderBy("created", "asc");
    } 
}