import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { Firebase } from '../integrations/firebase';

interface State {
    text: string | null;
}

interface Props {
    RRR:string
}

export default class Main extends React.Component<Props, State> {
    public state: State = { text: 'test123' };

    constructor(props : Props) {
        super(props);

        // Bind handlers
        this.onClick = this.onClick.bind(this);
      }

    public componentDidMount() {

    }


    private onClick() {
        this.setState({text:this.state.text + "1"});


        Firebase.database().ref("profiles/" + this.props.RRR +"/gerby").set(true).then((a) => {

        }).catch(b => {

        });
    }

    public render() {
        const { text } = this.state;

        return <View style={styles.container}>
                <Text>{text}</Text>
                <Button onPress={this.onClick} title="click me" />
            </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
