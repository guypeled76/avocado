import React from "react";
import { ChatView } from "./ChatView";
import { AuthService } from "services";
import { icons } from "resources";


interface State {
}

interface Props {}

export class Chat extends React.Component<Props, State> {


    render() {
        return <ChatView chatId="main" userId={AuthService.loggedUser.uid} />
    }

    static navigationOptions = {
        tabBarIcon: icons.navigation.chat
    }
}