import React from 'react';
import { Text } from 'react-native';


interface PostItem {

}

interface State {
    items : PostItem[];
}

interface Props {}

export default class Posts extends React.Component<Props, State> {
    public state: State = { 
        items : []
    };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        return <Text>Posts</Text>;
    }

}