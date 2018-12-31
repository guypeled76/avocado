import React from 'react';


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

import { constants, styles } from 'resources';

import { 
    WebDialog, 
    DrawerDialog 
} from 'dialogs';

import { 
    SearchBox 
} from 'elements';

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
        navigationOptions: () => ({ header: <SearchBox/> })
    },
    [constants.navigation.webbrowser]: { screen: WebDialog },
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


export function ClientNavigation() {
    return <DrawerNavigatorContainer style={styles.fill} />;
}



