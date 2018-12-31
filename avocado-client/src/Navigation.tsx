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
    Settings,
    Users
} from 'screens';

import {
    constants,
    styles
} from 'resources';

import {
    WebDialog,
    DrawerDialog
} from 'dialogs';

import { createNavigation } from 'services/NavigationService';

export function ClientNavigation() {
        return createNavigation({
                [constants.navigation.feed]: { screen: Posts },
                [constants.navigation.timeline]: { screen: Timeline },
                [constants.navigation.notifications]: { screen: Notifications },
                [constants.navigation.chat]: { screen: Chat, },
                [constants.navigation.recipes]: { screen: Recipes }
            }, {
                [constants.navigation.webbrowser]: {
                    screen: WebDialog,
                    navigationOptions: ({ navigation }) => ({
                        title: navigation.state.params.title
                    })
                },
                [constants.navigation.settings]: {
                    screen: Settings
                }
        },
        DrawerDialog
    );
}

export function ConsultantNavigation() {
    return createNavigation({
            [constants.navigation.users]: { screen: Users },
            [constants.navigation.notifications]: { screen: Notifications },
            [constants.navigation.chat]: { screen: Chat, }
        }, {
            [constants.navigation.webbrowser]: {
                screen: WebDialog,
                navigationOptions: ({ navigation }) => ({
                    title: navigation.state.params.title
                })
            },
            [constants.navigation.settings]: {
                screen: Settings
            }
    },
    DrawerDialog
);
}



