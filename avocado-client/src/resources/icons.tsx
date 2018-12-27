import React from 'react';

import {Ionicons} from '@expo/vector-icons';


function navigationIconHandler(name : string) {
    return ({tintColor})=> {
        return <Ionicons name={name} size={28} color={tintColor} />;
    };
}

const navigationHandlers = {
    recipes : navigationIconHandler("ios-restaurant"),
    settings :navigationIconHandler("imd-options"),
    timeline : navigationIconHandler("md-speedometer"),
    feed : navigationIconHandler("ios-filing"),
    notifications : navigationIconHandler("ios-notifications"),
    chat : navigationIconHandler("md-chatboxes")
}

export const icons = {
    views: navigationHandlers
};

