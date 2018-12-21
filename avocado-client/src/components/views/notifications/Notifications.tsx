import React from 'react';
import { Text } from 'react-native';


interface NotificationItem {

}

interface State {
    items : NotificationItem[];
}

interface Props {}

export default class Notifications extends React.Component<Props, State> {
    public state: State = { 
        items : []
    };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        return <Text>Notifications</Text>;
    }

}