import React from 'react';
import { ScrollView } from 'react-native';
import {PostInfoType} from 'avocado-common';
import { strings, icons } from 'resources';

import { PostsList } from './PostList';
import { FeedSource } from 'data';
import { AuthService } from 'services';




interface State {
    posts: PostInfoType[];
}

interface Props { }

export class Posts extends React.Component<Props, State> {
    public state: State = {
        posts: []
    };

    private feedSource : FeedSource;

    constructor(props: Props) {
        super(props);
    }  

    componentDidMount() {

        this.feedSource = new FeedSource(AuthService.loggedUser.uid);
        this.feedSource.next().then((items)=> {
            this.setState({
                posts: [...this.state.posts,...items.map(item=>item.value)],
            });
        });
    } 

    public render() {

        return <ScrollView>
            <PostsList posts={this.state.posts}/>
        </ScrollView>;
    }


    static navigationOptions = {
        title: strings.views.feed,
        tabBarLabel: strings.views.feed,
        tabBarIcon: icons.navigation.feed
    }

}