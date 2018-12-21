import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { Firebase } from '../integrations/firebase';
import AuthService from '../services/Auth';
import Avatar from './elements/Avatar';


interface State {
    text : string
}

interface Props { }

export default class Main extends React.Component<Props, State> {
    public state: State = { text : "test"};

    constructor(props: Props) {
        super(props);

        // Bind handlers
        this.onClick = this.onClick.bind(this);
    }

    public componentDidMount() {

    }


    private onClick() {

        this.setState({text:this.state.text + "!"});
        //Firebase.database().ref("profiles/" + this.props.RRR + "/gerby").set(true).then((a) => {

        //}).catch(b => {

        //});
    }

    public render() {
        const {text} = this.state;
        

        return <View style={styles.container}>
                <Text>You are logged in!!!!!</Text>
                <Avatar size={100} user={AuthService.loggedUser} />
                <Button onPress={AuthService.logout} title='Logout' />
                <Text>{text}</Text>
                <Button onPress={this.onClick} title="click me" />
            </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
