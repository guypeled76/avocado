import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import Icon from '../../elements/Icon';




interface State {
    items: any[];
}

interface Props { }

export default class Notifications extends React.Component<Props, State> {
    public state: State = {
        items: [{key: "i1", text: "test1" }, { key: "i2", text: "test2" }, { key: "i3", text: "test3" }, { key: "i4", text: "test4" }]
    };

    constructor(props: Props) {
        super(props);


    }

    public render() {

        return <FlatList data={this.state.items} renderItem={(itemInfo) => {

            return <View style={itemStyle}><Text>{itemInfo.item.text}</Text></View>
        }} />;
    }

    static navigationOptions = {
        title: 'Notifications',
        tabBarLabel: 'Notifications',
        tabBarIcon: () => (
            <Icon name="md-chatboxes" size={24} color="gray" />
        )
    }
}

const itemStyle = {
    backgroundColor: 'white',
    height: 100
};