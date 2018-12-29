import React from 'react';
import { ViewStyle, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { icons, styles } from 'resources';
import { AuthService, ChatService } from 'services';





interface State {
    messages: IMessage[];
}

interface Props { }

export class Chat extends React.Component<Props, State> {
    public state: State = {
        messages: []
    };

    private chatService : ChatService;

    constructor(props: Props) {
        super(props);

    }

    componentDidMount() {
        this.chatService = new ChatService(AuthService.loggedUser.uid, "main");
        this.chatService.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }

    
    componentWillUnmount() {
        this.chatService.off();
    }


    render() {
        return (
            <KeyboardAvoidingView enabled behavior="padding" style={styles.fill}>
                <GiftedChat
                    imageStyle={imageStyle}
                    messages={this.state.messages}
                    onSend={(message)=>this.chatService.send(message)}
                    user={{
                        _id: AuthService.loggedUser.uid,
                        name: AuthService.loggedUser.displayName
                    }}
                    listViewProps={{
                        style: {
                            backgroundColor: 'yellow'
                        }
                    }}
                />
            </KeyboardAvoidingView>
        )
    }

    static navigationOptions = {
        tabBarIcon: icons.navigation.chat
    }




}

const imageStyle: ViewStyle = {

}