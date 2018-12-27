import React from 'react';
import { Image, View, StyleProp} from 'react-native';


interface State {
    
}

interface User {
    photoURL : string | null
}

interface Props {
    user : User | null,
    size: number
}

export class Avatar extends React.Component<Props, State> {
    public state: State = { };

    constructor(props : Props) {
        super(props);

        
    }

    public render() {

        const style = {
            width:this.props.size,
            height:this.props.size,
            borderRadius:this.props.size / 2,
            backgroundColor:'black',
            shadowOffset: { width: 0, height: 20 },
            borderWidth:2,
            borderColor:'black', 
            shadowRadius:100,
            shadowColor:'black',
            shadowOpacity:0.5
        }

        const {user} = this.props;
        if(user != null && user.photoURL != null) {
            return <Image style={style} source={{ uri: user.photoURL }} />;
        } else {
            return <View style={style}/>
        }
    }

}