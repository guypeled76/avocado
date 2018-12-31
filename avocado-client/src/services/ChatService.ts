import { ListService } from "services";


export class ChatService extends ListService<any> {

    constructor(userId: string, chatId: string, pageSize: number) {
        super(`chats/${userId}/${chatId}/messages`, pageSize)
    }


    protected toServerValue(item: any) {
        
        const { text, user } = item;

        return {
            key: item._id, 
            value: {
                text,
                user,
                timestamp: this.timestamp
            }
        };
    }



    protected fromServerValue(key: string, value: any) {
        const message = {
            _id: key,
            text: value.text,
            createdAt: null,
            user: value.user,
            image: null,
            system: null
        };

        return message;
    }
}
