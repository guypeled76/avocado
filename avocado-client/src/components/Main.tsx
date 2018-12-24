import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createBottomTabNavigator, createTabNavigator, createAppContainer } from 'react-navigation';


import { Firebase } from '../integrations/firebase';
import AuthService from '../services/Auth';
import Avatar from './elements/Avatar';


import Chat from './views/chat/Chat';
import Notifications from './views/notifications/Notifications';
import Posts from './views/posts/Posts';
import Timeline from './views/timeline/Timeline';
import Settings from './views/settings/Settings';


interface State {
    text: string
}

interface Props { }



const AppNavigator = createBottomTabNavigator({
    Posts: { screen: Posts },
    Timeline: { screen: Timeline },
    Notifications: { screen: Notifications },
    Chat: { screen: Chat },
    Settings: { screen: Settings }
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor:"#3366BB",
        inactiveTintColor:"gray"
    }
});

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default class Main extends React.Component<Props, State> {
    public state: State = { text: "test" };

    constructor(props: Props) {
        super(props);

        // Bind handlers
        this.onClick = this.onClick.bind(this);
    }

    public componentDidMount() {

    }


    private onClick() {

        this.setState({ text: this.state.text + "!" });
        //Firebase.database().ref("profiles/" + this.props.RRR + "/gerby").set(true).then((a) => {

        //}).catch(b => {

        //});
    }

    public render() {
        const { text } = this.state;

        return <View style={styles.container}>
            <View style={styles.searchRow}>
                <View style={styles.avatarBar}>
                    <Avatar size={30} user={AuthService.loggedUser} />
                </View>
                <SearchBar style={styles.searchBar}
                    lightTheme
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' round
                    inputStyle={styles.searchInput}
                    containerStyle={styles.searchContainer} />
            </View>

            <AppNavigatorContainer style={styles.app} />
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'lightgray',
        alignItems: 'stretch',
        justifyContent: 'space-evenly'
    },
    searchContainer: {
        backgroundColor: 'white',
    },
    searchInput: {
        backgroundColor: 'white'
    },
    searchRow: {
        backgroundColor: 'white',
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 40
    },
    searchBar: {
        flexGrow: 1
    },
    app: {
        flexGrow: 1
    },

    avatarBar: {
        width: 30,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
