import { ListSource, ListSourceConfig } from "./ListSource";
import { MessageInfo } from "avocado-common";
import { db } from "services";


export class ChatSource extends ListSource<MessageInfo> {

    constructor(userId: string, chatId: string, config?: ListSourceConfig) {
        super(db.collection("chats").doc(userId).collection(chatId), config)
    }
}