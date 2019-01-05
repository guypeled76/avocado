import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthService } from 'services';
import { Login } from 'screens';


import { UserInfo, RolesInfo } from 'avocado-common';
import { ConsultantNavigation, ClientNavigation } from './Navigation';

interface State {
  user: UserInfo | null;
  roles: RolesInfo | null;
}

export default class App extends React.Component<{}, State> {
  public state: State = { user: null, roles: null };

  public componentDidMount() {
    AuthService.subscribeAuthChange((user,roles) => {
      AuthService.loggedUser = user;
      this.setState({ user, roles });
    }); 

  }

  public render() {
    const { user, roles } = this.state;

    if (user) {
      if(roles != null && roles.consultant) {
        return (
          <SafeAreaView style={styles.container}>
            <ConsultantNavigation />
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.container}>
            <ClientNavigation />
          </SafeAreaView>
        );
      }
    }

    return (
      <SafeAreaView style={styles.container}>
          <Login />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
