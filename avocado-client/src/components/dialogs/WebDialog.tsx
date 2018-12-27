import React from 'react';

import {WebView} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class WebDialog extends React.Component<NavigationScreenProps, {}> {
  
    public render() {
        return <WebView
        source={{uri: this.props.navigation.getParam("url")}}
        style={{flex: 1}}
      />
    }
}