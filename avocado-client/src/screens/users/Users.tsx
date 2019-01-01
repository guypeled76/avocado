import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { strings, icons, styles } from 'resources';
import { UserInfo } from 'avocado-common';
import { db } from 'services';
import { ListItem } from 'react-native-elements';
import { ProfilesSource } from 'data';


interface State {
    users : UserInfo[];
    loading : boolean;
}


export class Users extends React.Component<{}, State> {

    private profilesSource : ProfilesSource;

    public state = { 
       users : [],
       loading: false
    };

    constructor(props: {}) {
        super(props);


        this.renderUser = this.renderUser.bind(this);
    }

    componentDidMount() {

        this.profilesSource = new ProfilesSource();

        this.profilesSource.loadNext((item)=> {
            const newState = {
                users: [...this.state.users, item.value]
            };
            this.setState(newState);
        });
        
    }


    componentWillUnmount() {
        
    }

    renderUser(info: any) {
        const userInfo : UserInfo = info.item;
        return <ListItem
        roundAvatar
        title={userInfo.displayName}
        subtitle={userInfo.email}
        avatar={{ uri: userInfo.photoURL }}
        containerStyle={{ borderBottomWidth: 0 }}
      />
    }

    renderFooter = () => {
        if (!this.state.loading) return null;

        return <ActivityIndicator animating size="large" />;
    }

    public render() {
        return <FlatList 
                    data={this.state.users} 
                    keyExtractor={(item)=>item.uid} 
                    renderItem={this.renderUser} 
                    style={styles.fill} 
                    ListFooterComponent={this.renderFooter}/>

    }

    static navigationOptions = {
        title: strings.views.users,
        tabBarLabel: strings.views.users,
        tabBarIcon: icons.navigation.users
    }
}