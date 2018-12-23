import React from 'react';
import { Image, View, StyleProp} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface State {}


export function Icon(props : {name : string, size : number, color : string}) {
    return <Ionicons name={props.name} size={props.size} color={props.color}/>
}

function TabIcon(name : string, focused : boolean) {
    return <Icon name={name} size={32} color={focused ? "blue" : "gray"} />
}

export function ChatIcon(tintColor : string, focused : boolean) {
    return TabIcon("md-chatboxes", focused);
}

export function NotificationsIcon(tintColor : string, focused : boolean) {
    return TabIcon("ios-notifications", focused);
}

export function PostsIcon(tintColor : string, focused : boolean) {
    return TabIcon("ios-filing", focused);
}

export function TimelineIcon(tintColor : string, focused : boolean) {
    return TabIcon("md-speedometer", focused);
}

export function SettinsIcon(tintColor : string, focused : boolean) {
    return TabIcon("ios-options", focused);
}

