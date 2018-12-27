import React from 'react';
import { ScrollView } from 'react-native';
import {PostInfoType, dummyPosts} from '../../../entities';
import { PostsList } from './PostList';
import { strings, icons } from 'resources';
import { createIconSet } from '@expo/vector-icons';




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
        title: strings.views.feed,
        tabBarLabel: strings.views.feed,
        tabBarIcon: icons.views.feed
    }

}