import React from 'react';

import { NavigationScreenProps } from 'react-navigation';
import { styles } from 'resources';
import { ChatBox } from 'elements';

export function CommentsDialog(props: NavigationScreenProps) {
    const chatId=props.navigation.getParam("chatId");
    const userId=props.navigation.getParam("userId");
    return <ChatBox
        chatId={chatId} userId={userId}
    />;
}