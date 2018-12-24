import React from 'react';
import { Text, Button, View, ScrollView } from 'react-native';
import Avatar from '../../elements/Avatar';
import AuthService from '../../../services/Auth';
import { PostsIcon } from '../../elements';
import {PostInfo, ImagePostInfo, VideoPostInfo, TextPostInfo} from '../../../entities';
import { PostsList } from './PostList';




interface State {
    posts: (ImagePostInfo | VideoPostInfo | TextPostInfo)[];
}

interface Props { }

export default class Posts extends React.Component<Props, State> {
    public state: State = {
        posts: [ {
            key: "ddd2",
            type: "text",
            description: "ddd"
        }, {
            key: "ddd1",
            type: "image",
            description: "This is a test",
            image: {uri:"https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg"}
        }, {
            key: "ddd3",
            type: "image",
            description: "This is a test",
            image: {uri:"https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg"}
        }, {
            key: "ddd4",
            type: "image",
            description: "This is a test",
            image: {uri:"https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg"}
        }]
    };

    constructor(props: Props) {
        super(props);
    }




    public render() {

        return <ScrollView>
            <PostsList posts={this.state.posts}/>
        </ScrollView>;
    }


    static navigationOptions = {
        title: 'Posts',
        tabBarLabel: 'Posts',
        tabBarIcon: PostsIcon
    }

}