import React from 'react';
import { Image, View, StyleProp} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface State {}


export function Icon(props : {name : string, size : number, color : string}) {
    return <Ionicons name={props.name} size={props.size} color={props.color}/>
}

function TabIcon(name : string, tintColor : string) {
    return <Icon name={name} size={28} color={tintColor} />
}

export function ChatIcon({tintColor}) {
    return TabIcon("md-chatboxes", tintColor);
}

export function NotificationsIcon({tintColor}) {
    return TabIcon("ios-notifications", tintColor);
}

export function PostsIcon({tintColor}) {
    return TabIcon("ios-filing", tintColor);
}

export function TimelineIcon({tintColor}) {
    return TabIcon("md-speedometer", tintColor);
}

export function SettingsIcon({tintColor}) {
    return TabIcon("md-options", tintColor);
}

export function RecipesIcon({tintColor}) {
    return TabIcon("ios-restaurant", tintColor);
}

