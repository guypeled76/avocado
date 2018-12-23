import React from 'react';
import { Text } from 'react-native';
import {SettinsIcon as SettingsIcon} from '../../elements';

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
        tabBarIcon: SettingsIcon
    }

}