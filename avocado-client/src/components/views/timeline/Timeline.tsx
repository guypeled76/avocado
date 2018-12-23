import React from 'react';
import { Text } from 'react-native';
import {TimelineIcon} from '../../elements';
import {default as TimeLineComponent} from 'react-native-timeline-listview';


interface State {
}

interface Props {}

const data : { time: string; title: string; description: string; }[]= [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ];

export default class Timeline extends React.Component<Props, State> {

    
    public state: State = { 
       
    };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        return <TimeLineComponent
        data={data}
      />;
    }

    static navigationOptions = {
        title: 'Timeline',
        tabBarLabel: 'Timeline',
        tabBarIcon: TimelineIcon
    }
}