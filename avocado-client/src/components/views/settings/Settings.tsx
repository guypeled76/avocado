import React from 'react';
import { Text } from 'react-native';
import Icon from '../../elements/Icon';

interface State {
}

interface Props {}

export default class Settings extends React.Component<Props, State> {
    public state: State = { 
        
    };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        return <Text>Settings</Text>;
    }

    static navigationOptions = {
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
            <Icon name="md-chatboxes" size={24} color="gray" />
        )
    }

}