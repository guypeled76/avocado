import React from 'react';
import { Text } from 'react-native';
import {SettinsIcon as SettingsIcon} from '../../elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

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

        return <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2012-05-17': {marked: true},
          '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2012-05-19': {disabled: true, disableTouchEvent: true}
        }}
      />;
    }

    static navigationOptions = {
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: SettingsIcon
    }

}