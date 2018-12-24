import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { ImagePostInfo, PostInfo, TextPostInfo, VideoPostInfo } from '../../../entities';
import Posts from './Posts';




function ImagePost(props : {post:ImagePostInfo}) {
    return <Card
        title={props.post.description}
        image={props.post.image}>
    </Card>;
}

function VideoPost(props : {post:VideoPostInfo}) {
    return <Card
        title={props.post.description}
        image={props.post.image}>
    </Card>;
}

function TextPost(props : {post:TextPostInfo}) {
    return <Card
        title={props.post.description}>
    </Card>;
}


export function PostsList(props : {posts : PostInfo[]}) {
    return <List containerStyle={{marginBottom: 20}}>
    {
      props.posts.map((post) => {
        if(post.type === "image") {
            return <ImagePost key={post.key} post={post as ImagePostInfo}/>;
        } else if(post.type === "video") {
            return <VideoPost key={post.key} post={post as VideoPostInfo}/>;
        } else if(post.type === "text") {
            return <TextPost key={post.key} post={post as TextPostInfo}/>;
        }
      })
    }
  </List>;
}