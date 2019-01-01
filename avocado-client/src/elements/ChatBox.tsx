import React from 'react';
import { ViewStyle, KeyboardAvoidingView, Alert } from 'react-native';
import { GiftedChat, IMessage, IChatMessage, User } from 'react-native-gifted-chat';
import { icons, styles } from 'resources';
import { AuthService } from 'services';
import { ChatSource, ListSourceItem } from 'data';
import { MessageInfo } from 'avocado-common';
import { setMaxListeners } from 'cluster';




interface State {
    messages: IChatMessage[];
    user: User;
}

interface Props {
    chatId: string,
    userId: string
}


export class ChatBox extends React.Component<Props, State> {
    public state: State = {
        messages: [],
        user: {
            _id: AuthService.loggedUser.uid,
            name: AuthService.loggedUser.displayName,
            avatar: AuthService.loggedUser.photoURL
        }
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
                createAt:message.createdAt,
                user : {
                    uid: `${message.user._id}`,
                    displayName: message.user.name,
                    photoURL: message.user.avatar
                }, 
                image:message.image ? message.image : null
            }
        };
    }

    private static toGiftedMessage(item: ListSourceItem<MessageInfo>) : IChatMessage{

        const {id, value} = item;

        return {
            _id: id,
            text: value.message,
            createdAt: value.createAt,
            user: {
                _id: value.user.uid,
                name: value.user.displayName,
                avatar: value.user.photoURL
            },
            image: value.image
        };
    }

    componentDidMount() {

        this.chatSource.next().then((items)=> {
            const chatMessages = items.map(ChatBox.toGiftedMessage);
            this.setState({
                ...this.state,
                messages: [...this.state.messages,...chatMessages],
            });
        }).catch((error)=>{

        });
  
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