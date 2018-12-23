import React from 'react';
import { Text, ViewStyle, Image } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { NavigationTabScreenOptions } from 'react-navigation';
import {ChatIcon} from '../../elements';




interface State {
    messages: IMessage[];
}

interface Props { }

export default class Chat extends React.Component<Props, State> {
    public state: State = {
        messages: []
    };

    constructor(props: Props) {
        super(props);

    }


    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages: IMessage[]) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <GiftedChat
                imageStyle={imageStyle}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }

    static navigationOptions  = {
        tabBarIcon: ChatIcon
    }




}

const imageStyle: ViewStyle = {

}