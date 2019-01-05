import React from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { strings, icons, styles, constants } from 'resources';
import { UserInfo } from 'avocado-common';
import { db } from 'services';
import { ListItem } from 'react-native-elements';
import { ProfilesSource } from 'data';
import { NavigationScreenProps } from 'react-navigation';


interface State {
    users : UserInfo[];
    loading : boolean;
}


export class Users extends React.Component<NavigationScreenProps, State> {

    private profilesSource : ProfilesSource;

    public state = { 
       users : [],
       loading: false
    };

    constructor(props: NavigationScreenProps) {
        super(props);


        this.renderUser = this.renderUser.bind(this);
        this.navigateItem = this.navigateItem.bind(this);
    }

    componentDidMount() {

        this.profilesSource = new ProfilesSource();

        this.profilesSource.next().then((items)=> {
            this.setState({
                users: [...this.state.users, ...items.map(item=>item.value)]
            });
        }).then(()=>{
            this.profilesSource.on("added", (item)=> {
                this.setState({
                    users: [...this.state.users, item.value]
                });
            });
        }); 
    }


    componentWillUnmount() {
        
    }

    navigateItem(userInfo: UserInfo) {
        this.props.navigation.navigate(constants.navigation.comments, {
            chatId:"main",
            userId:userInfo.uid
        })
    }

    renderUser(info: any) {
        const userInfo : UserInfo = info.item;
        return <TouchableOpacity onPress={()=> this.navigateItem(userInfo)}><ListItem
        roundAvatar
        title={userInfo.displayName}
        subtitle={userInfo.email}
        avatar={{ uri: userInfo.photoURL }}
        containerStyle={{ borderBottomWidth: 0 }}
        badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: 0 } }}
      /></TouchableOpacity>
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
                    ListFooterComponent={this.renderFooter} 
                    />

    }

    static navigationOptions = {
        title: strings.views.users,
        tabBarLabel: strings.views.users,
        tabBarIcon: icons.navigation.users
    }
}