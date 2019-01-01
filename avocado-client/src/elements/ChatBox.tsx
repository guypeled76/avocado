import React from 'react';
import { ViewStyle, KeyboardAvoidingView, Alert } from 'react-native';
import { GiftedChat, IMessage, IChatMessage, User } from 'react-native-gifted-chat';
import { icons, styles } from 'resources';
import { AuthService } from 'services';
import { ChatSource } from 'data';
import { MessageInfo } from 'avocado-common';
import { setMaxListeners } from 'cluster';




interface State {
    messages: IMessage[];
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

    componentDidMount() {

        this.chatSource.loadNext(item => {
            const {key, value} = item;
            const message : IChatMessage = {
                _id: key,
                text: value.text,
                createdAt: value.createdAt,
                user: {
                    _id: value.user.id,
                    name: value.user.name,
                    avatar: value.user.avatar
                },
                image: value.image,
                system: value.system
            };

            this.setState(previousState => ({
                messages: [...previousState.messages, message],
            }))

        }
        );
    }


    componentWillUnmount() {

    }

    onSendMessages = (messages: IMessage[]) => {

        for (let message of messages) {

            
            const chatMessage : any = message;

            this.chatSource.appendItem({
                key: chatMessage._id, value: {
                    text: chatMessage.text,
                    createdAt: chatMessage.createdAt,
                    user: {
                        id: chatMessage.user._id,
                        name: chatMessage.user.name,
                        avatar: chatMessage.user.avatar
                    },
                    image: chatMessage.image,
                    system: chatMessage.system
                }
            });
        }
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