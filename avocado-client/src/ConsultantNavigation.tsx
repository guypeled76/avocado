import React from 'react';

import { constants } from "resources";;
import { Chat, Settings, Notifications, Users } from 'screens';
import { WebDialog, DrawerDialog } from 'dialogs';
import { createNavigation } from 'services/NavigationService';






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