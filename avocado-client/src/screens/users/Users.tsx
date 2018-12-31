import React from 'react';
import { Text, FlatList, Alert, View } from 'react-native';
import { strings, icons, styles } from 'resources';
import { UserInfo } from 'avocado-common';
import { UsersService } from 'services';
import { Avatar } from 'elements';
import { ListItem } from 'react-native-elements';


interface State {
    users : UserInfo[];
}


export class Users extends React.Component<{}, State> {

    
    public state = { 
       users : []
    };

    private usersService : UsersService;

    constructor(props: {}) {
        super(props);

        this.usersService = new UsersService(400);

        this.renderUser = this.renderUser.bind(this);
    }

    componentDidMount() {
        
        this.usersService.onChildAdded(user =>{
            
            const newState = {
                users: [...this.state.users, user]
            };
            this.setState(newState);
        }); 
    }


    componentWillUnmount() {
        this.usersService.off();
    }

    renderUser(info: any) {
        const userInfo : UserInfo = info.item;
        return <ListItem
        roundAvatar
        title={userInfo.displayName}
        subtitle={userInfo.email}
        avatar={{ uri: userInfo.photoURL }}
      />
    }

    public render() {
        return <FlatList data={this.state.users} keyExtractor={(item)=>item.uid} renderItem={this.renderUser} style={styles.fill} />

    }

    static navigationOptions = {
        title: strings.views.users,
        tabBarLabel: strings.views.users,
        tabBarIcon: icons.navigation.users
    }
}