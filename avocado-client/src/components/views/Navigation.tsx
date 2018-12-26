import React from 'react';

import { KeyboardAvoidingView, View, ViewStyle, StyleSheet } from 'react-native';
import { SearchBar, Text } from 'react-native-elements';

import { createAppContainer, createStackNavigator, NavigationScreenProps, createDrawerNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';


import { Firebase } from '../../integrations/firebase';
import AuthService from '../../services/Auth';
import Avatar from '../elements/Avatar';


import Chat from './chat/Chat';
import Notifications from './notifications/Notifications';
import Posts from './posts/Posts';
import Timeline from './timeline/Timeline';
import Settings from './settings/Settings';
import WebDialog from '../dialogs/WebDialog';
import DrawerDialog from '../dialogs/DrawerDialog';




const TabsNavigator = createMaterialTopTabNavigator({
    Posts: { screen: Posts },
    Timeline: { screen: Timeline },
    Notifications: { screen: Notifications },
    Chat: { screen: Chat },
    Settings: { screen: Settings }
}, {
        tabBarPosition: "top",
        tabBarOptions: {
            activeTintColor: "blue",
            inactiveTintColor: "black",
            showLabel: false,
            showIcon: true,
            style: {
                borderTopWidth: 0,
                backgroundColor: 'white'
            },
            indicatorStyle: {
                height: 0
            }
        }
    });

const TabsNavigatorContainer = createAppContainer(TabsNavigator);


const DrawerNavigator = createDrawerNavigator({
    Tabs:{
        screen: TabsNavigatorContainer
    }, 
    WebDD: {
        screen: WebDialog
    }
},{
    initialRouteName: 'Tabs',
    contentComponent: DrawerDialog,
    drawerWidth: 300,
});

const StackNavigator = createStackNavigator({
    App: { 
        screen: DrawerNavigator,
        navigationOptions: () => ({
        header: <View style={styles.searchRow}>
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
        
      }) },
    WebDialog: { screen: WebDialog,
        navigationOptions: () => ({
        title: `BBBBB`,
        headerTitle:'dd'
      }) },
}, {

});

const StackNavigatorContainer = createAppContainer(StackNavigator);

export default class Navigation extends React.Component<{}, {}> {


    public render() {


        return <KeyboardAvoidingView enabled behavior="padding" style={containerStyle}>
            <StackNavigatorContainer style={styles.app} />
        </KeyboardAvoidingView>;
    }
}


const containerStyle: ViewStyle = {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'lightgray',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
};

const styles = StyleSheet.create({
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
        flex: 1
    },

    avatarBar: {
        width: 30,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
