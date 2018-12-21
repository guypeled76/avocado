import React from 'react';
import { Text } from 'react-native';


interface ChatItem {

}

interface State {
    items : ChatItem[];
}

interface Props {}

export default class Chat extends React.Component<Props, State> {
    public state: State = { 
        items : []
    };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        return <Text>Chat</Text>;
    }

}