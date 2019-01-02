import React from 'react';
import { ViewStyle, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, IMessage, IChatMessage, User } from 'react-native-gifted-chat';
import { styles } from 'resources';
import { AuthService, field } from 'services';
import { ChatSource, ListSourceItem } from 'data';
import { MessageInfo } from 'avocado-common';


interface State {
    messages: IChatMessage[];
    user: User;
}

interface Props {
    chatId: string,
    userId: string
}

type GiftedUser = {_id: string, name: string, avatar: string};

type MessageUser = {uid: string, displayName?: string, photoURL?: string};

export class ChatBox extends React.Component<Props, State> {
    public state: State = {
        messages: [],
        user: ChatBox.toGiftedUser(AuthService.loggedUser)
    };

    private chatSource: ChatSource;

    constructor(props: Props) {
        super(props);

        this.chatSource = new ChatSource(props.userId, props.chatId);
    }

    private static fromGiftedMessage(message:IChatMessage) : ListSourceItem<MessageInfo> {
        return { 
            id:message._id,
            value:{ 
                message:message.text,
                created:field.serverTimestamp(),
                user : ChatBox.fromGiftedUser(message.user), 
                image:message.image ? message.image : null
            }
        };
    }

    private static fromGiftedUser(user : GiftedUser) {
        return {
            uid: `${user._id}`,
            displayName: user.name,
            photoURL: user.avatar
        };
    }

    private static toGiftedUser(user : MessageUser) {
        return {
            _id: user.uid,
            name: user.displayName,
            avatar: user.photoURL
        };
    }

    private static toGiftedMessage(item: ListSourceItem<MessageInfo>) : IChatMessage{
        const {id, value} = item;

        return {
            _id: id,
            text: value.message,
            createdAt: ChatBox.toDate(value.created),
            user: ChatBox.toGiftedUser(value.user),
            image: value.image
        };
    } 

    private static toDate(timestamp:firebase.firestore.Timestamp) {
        if(!timestamp) return null;
        return timestamp.toDate();
    }

    componentDidMount() {
        this.chatSource.next().then((items)=> {
            
            const chatMessages = items.map(ChatBox.toGiftedMessage);
            this.setState({
                messages: [...this.state.messages,...chatMessages],
            });
        }).then(()=>{
            this.chatSource.on("added", (item)=> {
                const giftedMessage = ChatBox.toGiftedMessage(item);
                this.setState({
                    messages: [...this.state.messages, giftedMessage]
                });
            });
        }).catch((error)=>{
            
        });

       /* */
    }


    componentWillUnmount() {

    }

    onSendMessages = (messages: IMessage[]) => {
        this.chatSource.setAll(messages.map(ChatBox.fromGiftedMessage));
    }


    render() {
        return (
            <KeyboardAvoidingView enabled behavior="padding" style={styles.fill}>
                <GiftedChat
                    imageStyle={imageStyle}
                    messages={this.state.messages}
                    onSend={this.onSendMessages}
                    user={this.state.user}
                    listViewProps={{
                        style: {
                            backgroundColor: 'lightgray'
                        }
                    }}
                />
            </KeyboardAvoidingView>
        )
    }


}

const imageStyle: ViewStyle = {
    backgroundColor: "lightgray"
}