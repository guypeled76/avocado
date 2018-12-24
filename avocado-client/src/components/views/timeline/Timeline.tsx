import React from 'react';
import { Text,ScrollView, StyleSheet } from 'react-native';
import {TimelineIcon} from '../../elements';
import {default as TimeLineComponent} from 'react-native-timeline-listview';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


interface State {
}

interface Props {}

const data : { time: string; title: string; description: string; }[]= [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
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

        return <ScrollView style={styls.container}>
            <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2012-05-17': {marked: true},
          '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2012-05-19': {disabled: true, disableTouchEvent: true}
        }}
      /><TimeLineComponent
        data={data}
      />
      </ScrollView>;
    }

    static navigationOptions = {
        title: 'Timeline',
        tabBarLabel: 'Timeline',
        tabBarIcon: TimelineIcon
    }
}

const styls = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }

});