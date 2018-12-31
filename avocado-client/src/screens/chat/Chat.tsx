import React from "react";
import { ChatView } from "./ChatView";
import { AuthService } from "services";
import { icons } from "resources";



export class Chat extends React.Component {


    render() {
        return <ChatView chatId="main" userId={AuthService.loggedUser.uid} />
    }

    static navigationOptions = {
        tabBarIcon: icons.navigation.chat
    }
}