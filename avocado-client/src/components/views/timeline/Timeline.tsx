import React from 'react';
import { Text } from 'react-native';
import Icon from '../../elements/Icon';


interface State {
}

interface Props {}

export default class Timeline extends React.Component<Props, State> {
    public state: State = { 
       
    };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        return <Text>Timeline</Text>;
    }

    static navigationOptions = {
        title: 'Timeline',
        tabBarLabel: 'Timeline',
        tabBarIcon: () => (
            <Icon name="md-chatboxes" size={24} color="gray" />
        )
    }
}