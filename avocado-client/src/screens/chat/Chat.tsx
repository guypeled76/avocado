import React from "react";
import { ChatBox } from "elements";
import { AuthService } from "services";
import { icons } from "resources";



export class Chat extends React.Component {


    render() {
        return <ChatBox chatId="main" userId={AuthService.loggedUser.uid} />
    }

    static navigationOptions = {
        tabBarIcon: icons.navigation.chat
    }
}