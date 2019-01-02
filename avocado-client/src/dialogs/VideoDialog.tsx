import React from 'react';

import { Video } from 'react-native-video';
import { NavigationScreenProps } from 'react-navigation';
import { styles } from 'resources';

export function VideoDialog(props: NavigationScreenProps) {
    return <Video
        style={styles.fill}
        source={{ uri: props.navigation.getParam("url") }}
    />;
}