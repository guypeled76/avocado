import React from 'react';
import { Card, List } from 'react-native-elements';
import { ImagePostInfo, PostInfoType, TextPostInfo, VideoPostInfo } from 'avocado-common';





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


export function PostsList(props : {posts : PostInfoType[]}) {

    console.log(`posts:${props.posts.length}`);
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