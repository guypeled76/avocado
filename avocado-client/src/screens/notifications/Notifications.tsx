import React from 'react';
import { Text, FlatList, View, StyleSheet, Button } from 'react-native';
import { NavigationScreenProps, DrawerActions } from 'react-navigation';
import { colors, strings, icons, constants } from 'resources';


interface State {
    items: any[];
}



export class Notifications extends React.Component<NavigationScreenProps, State> {
    public state: State = {
        items: [{ key: "i1", text: "test1" }, { key: "i2", text: "test2" }, { key: "i3", text: "test3" }, { key: "i4", text: "test4" }]
    };

    constructor(props: NavigationScreenProps) {
        super(props);


    }

    public render() {

        const { navigate } = this.props.navigation;

        return <FlatList data={this.state.items} renderItem={(itemInfo) => {

            return <View style={itemStyle}><Text>{itemInfo.item.text}</Text>
                <Button title="ddd" color={colors.background} onPress={() => navigate(constants.navigation.webbrowser, { url: 'http://www.google.com', title:"google" })}></Button>
                <Button title="ggg" onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}></Button>
            </View>
        }} />;
    }

    static navigationOptions = {
        title: strings.views.notifications,
        tabBarLabel: strings.views.notifications,
        tabBarIcon: icons.navigation.notifications
    }
}

const itemStyle = {
    backgroundColor: 'white',
    height: 100
};