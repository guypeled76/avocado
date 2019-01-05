import React from 'react';

import { WebView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { styles } from 'resources';

export function WebDialog(props: NavigationScreenProps) {
    return <WebView
        style={styles.fill}
        source={{ uri: props.navigation.getParam("url") }}
    />;
}