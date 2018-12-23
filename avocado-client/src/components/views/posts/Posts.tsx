import React from 'react';
import { Text, Button, View } from 'react-native';
import Avatar from '../../elements/Avatar';
import AuthService from '../../../services/Auth';
import { PostsIcon } from '../../elements';



interface PostItem {

}

interface State {
    items: PostItem[];
    text: string;
}

interface Props { }

export default class Posts extends React.Component<Props, State> {
    public state: State = {
        items: [],
        text: 'test!!!!'
    };

    constructor(props: Props) {
        super(props);



        // Bind handlers
        this.onClick = this.onClick.bind(this);

    }



    private onClick() {

        this.setState({ text: this.state.text + "!" });
        //Firebase.database().ref("profiles/" + this.props.RRR + "/gerby").set(true).then((a) => {

        //}).catch(b => {

        //});
    }

    public render() {

        const { text } = this.state;
        return <View>

            <Button onPress={AuthService.logout} title='Logout' />
            <Text>{text}</Text>
            <Button onPress={this.onClick} title="click me" />
        </View>;
    }


    static navigationOptions = {
        title: 'Posts',
        tabBarLabel: 'Posts',
        tabBarIcon: PostsIcon
    }

}