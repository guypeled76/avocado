import React from 'react';


import { NavigationScreenProps } from 'react-navigation';
import { styles } from 'resources';
import { Video } from 'expo';

export function VideoDialog(props: NavigationScreenProps) {
    return <Video
        style={styles.fill}
        source={{ uri: props.navigation.getParam("url") }}
        resizeMode="cover"
        useNativeControls
        shouldPlay
        isLooping
    />;
}