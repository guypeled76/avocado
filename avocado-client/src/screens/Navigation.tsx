import React from 'react';

import { KeyboardAvoidingView, View, ViewStyle, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { 
    createAppContainer, 
    createStackNavigator, 
    createDrawerNavigator, 
    createMaterialTopTabNavigator 
} from 'react-navigation';

import {
    Posts, 
    Timeline, 
    Notifications, 
    Chat, 
    Recipes, 
    Settings
} from 'screens';

import { constants } from 'resources';

import { 
    WebDialog, 
    DrawerDialog 
} from 'dialogs';

const TabsNavigator = createMaterialTopTabNavigator({
    [constants.navigation.feed]: { screen: Posts },
    [constants.navigation.timeline]: { screen: Timeline },
    [constants.navigation.notifications]: { screen: Notifications },
    [constants.navigation.chat]: { screen: Chat ,  },
    [constants.navigation.recipes]: { screen: Recipes }
}, {
        lazy:true,
        tabBarPosition: "top",
        tabBarOptions: {
            activeTintColor: "blue",
            inactiveTintColor: "black",
            showLabel: false,
            showIcon: true,
            style: {
                borderWidth: 0,
                backgroundColor: 'white'
            },
            indicatorStyle: {
                height: 0
            }
        }
    });


const StackNavigator = createStackNavigator({
    App: { 
        screen: TabsNavigator,
        navigationOptions: () => ({
        header: <View style={styles.searchRow}>
                    <SearchBar style={styles.searchBar}
                        lightTheme
                        icon={{ type: 'font-awesome', name: 'search' }}
                        placeholder='Search...' round
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


const DrawerNavigator = createDrawerNavigator({
    [constants.navigation.tabs]:{
        screen: StackNavigator
    }
},{
    initialRouteName: constants.navigation.tabs,
    contentComponent: DrawerDialog,
    drawerWidth: 300,
});

const DrawerNavigatorContainer = createAppContainer(DrawerNavigator);

export class Navigation extends React.Component<{}, {}> {


    public render() {


        return <DrawerNavigatorContainer style={styles.app} />;
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
        flex:1
    },
    searchInput: {
        backgroundColor: 'white',
        borderColor:'lightgray',
        borderWidth:1
    },
    searchRow: {
        backgroundColor: 'white',
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 45,
        flex:1,
        borderWidth:0
    },
    searchBar: {
        flex: 1
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
