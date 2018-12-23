import React from 'react';
import { Image, View, StyleProp} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface State {}

interface Props {
    name : string
    size : number
    color : string
}

export default class Icon extends React.Component<Props, State> {

    render() {
        return <Ionicons
          name={this.props.name} size={this.props.size} color={this.props.color}
            
          />
    }
}