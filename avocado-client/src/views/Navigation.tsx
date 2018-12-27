import React from 'react';

import { KeyboardAvoidingView, View, ViewStyle, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { 
    createAppContainer, 
    createStackNavigator, 
    createDrawerNavigator, 
    createMaterialTopTabNavigator 
} from 'react-navigation';

import {AuthService} from 'services';

import {
    Posts, 
    Timeline, 
    Notifications, 
    Chat, 
    Recipes, 
    Settings
} from 'views';

import { constants } from 'resources';
import { WebDialog, DrawerDialog } from 'dialogs';
import { Avatar } from 'elements';




const TabsNavigator = createMaterialTopTabNavigator({
    [constants.navigation.feed]: { screen: Posts },
    [constants.navigation.timeline]: { screen: Timeline },
    [constants.navigation.notifications]: { screen: Notifications },
    [constants.navigation.chat]: { screen: Chat },
    [constants.navigation.recipes]: { screen: Recipes }
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
    [constants.navigation.tabs]:{
        screen: TabsNavigatorContainer
    }
},{
    initialRouteName: constants.navigation.tabs,
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
    [constants.navigation.settings] : {
        screen: Settings
    },
}, {

});

const StackNavigatorContainer = createAppContainer(StackNavigator);

export class Navigation extends React.Component<{}, {}> {


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
