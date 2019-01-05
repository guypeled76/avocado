import React from 'react';
import { Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { strings, icons } from 'resources';

interface State {
}

interface Props {}

export class Settings extends React.Component<Props, State> {
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
        title: strings.views.settings,
        tabBarLabel: strings.views.settings,
        tabBarIcon: icons.navigation.settings
    }

   

} 