import React from 'react';
import { Text } from 'react-native';
import {TimelineIcon} from '../../elements';


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
        tabBarIcon: TimelineIcon
    }
}