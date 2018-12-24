import React from 'react';
import { Text, Button, View, ScrollView } from 'react-native';
import Avatar from '../../elements/Avatar';
import AuthService from '../../../services/Auth';
import { PostsIcon } from '../../elements';
import {PostInfoType, dummyPosts} from '../../../entities';
import { PostsList } from './PostList';




interface State {
    posts: PostInfoType[];
}

interface Props { }

export default class Posts extends React.Component<Props, State> {
    public state: State = {
        posts: dummyPosts
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