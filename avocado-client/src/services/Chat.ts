import { Firebase } from "services";


export class ChatService {



    constructor(private userId: string, private chatId: string) {

    }

    private get ref() {
        return Firebase.database().ref(`chats/${this.userId}/${this.chatId}/messages`);
    }

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    parse = snapshot => {
        // 1.
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        // 2.
        const timestamp = new Date(numberStamp);
        // 3.
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    }

    off() {
        this.ref.off();
    }

    get uid() {
        return (Firebase.auth().currentUser || { uid: null }).uid;
    }
    // 2.
    get timestamp() {
        return Firebase.database.ServerValue.TIMESTAMP;
    }

    // 3.
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            // 4.
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };
    // 5.
    append = message => {
        this.ref.push(message)};
}