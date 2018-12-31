import React from 'react';
import { ViewStyle, KeyboardAvoidingView, Alert } from 'react-native';
import { GiftedChat, IMessage, IChatMessage, User } from 'react-native-gifted-chat';
import { icons, styles } from 'resources';
import { AuthService, ChatService } from 'services';




interface State {
    messages: IMessage[];
    user:User;
}

interface Props { 
    chatId: string,
    userId: string
}

export class ChatView extends React.Component<Props, State> {
    public state: State = {
        messages: [],
        user : {
            _id: AuthService.loggedUser.uid,
            name: AuthService.loggedUser.displayName,
            avatar:AuthService.loggedUser.photoURL
        }
    };

    private chatService: ChatService;

    constructor(props: Props) {
        super(props);

        this.chatService = new ChatService(props.userId, props.chatId, 400);
    }

    componentDidMount() {
        
        this.chatService.onChildAdded(message =>{
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))

        }
        );
    }


    componentWillUnmount() {
        this.chatService.off();
    }

    onSendMessages = (messages:IMessage[]) => {
        this.chatService.appendItems(messages);
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
    backgroundColor:"lightgray"
}