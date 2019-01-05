import React from 'react';


import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createMaterialTopTabNavigator,
    NavigationRouteConfigMap,
    DrawerItemsProps
} from 'react-navigation';


import {
    constants,
    styles
} from 'resources';


import {
    SearchBox
} from 'elements';
import { SafeAreaView } from 'react-native';


export function createNavigation(tabs: NavigationRouteConfigMap, dialogs: NavigationRouteConfigMap, drawer: React.ComponentType<DrawerItemsProps>) {

    const TabsNavigator = createMaterialTopTabNavigator(
        tabs,
        {
            lazy: true,
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
        }
    );


    const StackNavigator = createStackNavigator(Object.assign({
        '__app__': {
            screen: TabsNavigator,
            navigationOptions: () => ({
                header: <SearchBox />
            })
        }
    }, dialogs));


    const DrawerNavigator = createDrawerNavigator({
        '__tabs__': {
            screen: StackNavigator
        }
    }, {
            initialRouteName: '__tabs__',
            contentComponent: drawer,
            drawerWidth: 300,
        }); 

    const DrawerNavigatorContainer = createAppContainer(DrawerNavigator);


    return <SafeAreaView style={styles.fillSafeArea}>
        <DrawerNavigatorContainer style={styles.fill} />
    </SafeAreaView>;

}