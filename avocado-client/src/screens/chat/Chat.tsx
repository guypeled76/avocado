import React from "react";
import { ChatBox, KeyboardAvoider } from "elements";
import { AuthService } from "services";
import { icons, styles } from "resources";
import { KeyboardAvoidingView } from "react-native";



export class Chat extends React.Component {


    render() {
        return <KeyboardAvoider><ChatBox chatId="main" userId={AuthService.loggedUser.uid} /></KeyboardAvoider>;
    }

    static navigationOptions = {
        tabBarIcon: icons.navigation.chat
    }
}