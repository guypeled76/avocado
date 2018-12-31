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

import {
    constants,
    styles
} from 'resources';

import {
    WebDialog,
    DrawerDialog
} from 'dialogs';

import {
    SearchBox
} from 'elements';

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



