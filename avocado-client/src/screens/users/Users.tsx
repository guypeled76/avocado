import React from 'react';
import { Text } from 'react-native';
import { strings, icons, styles } from 'resources';





export class Users extends React.Component<{}, {}> {

    
    public state = { 
       
    };

    constructor(props : {}) {
        super(props);

        
    }

    public render() {
        return <Text>Users</Text>;

    }

    static navigationOptions = {
        title: strings.views.users,
        tabBarLabel: strings.views.users,
        tabBarIcon: icons.navigation.users
    }
}