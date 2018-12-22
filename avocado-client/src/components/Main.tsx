import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


import { Firebase } from '../integrations/firebase';
import AuthService from '../services/Auth';
import Avatar from './elements/Avatar';


import Chat from './views/chat/Chat';
import Notifications from './views/notifications/Notifications';
import Posts from './views/posts/Posts';
import Timeline from './views/timeline/Timeline';
import Settings from './views/settings/Settings';


interface State {
    text : string
}

interface Props { }


const AppNavigator = createBottomTabNavigator({
    Posts: { screen: Posts },
    Timeline: { screen: Timeline },    
    Notifications: { screen: Notifications },
    Chat: { screen: Chat },
    Settings: { screen: Settings}
});

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default class Main extends React.Component<Props, State> {
    public state: State = { text : "test"};

    constructor(props: Props) {
        super(props);

        // Bind handlers
        this.onClick = this.onClick.bind(this);
    }

    public componentDidMount() {

    }


    private onClick() {

        this.setState({text:this.state.text + "!"});
        //Firebase.database().ref("profiles/" + this.props.RRR + "/gerby").set(true).then((a) => {

        //}).catch(b => {

        //});
    }

    public render() {
        const {text} = this.state;
        
//<StackNavigator />
        return <View style={styles.container}>
                    <AppNavigatorContainer />
            </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'yellow',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
