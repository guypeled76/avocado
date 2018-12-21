import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Main from './components/Main';
import AuthService from './services/Auth';
import Avatar from './components/elements/Avatar';
import Login from './components/views/login/Login';

interface State {
  user: firebase.User | null;
}

export default class App extends React.Component<{}, State> {
  public state: State = { user: null };

  public componentDidMount() {
    AuthService.subscribeAuthChange(user => {
      AuthService.loggedUser = user;
      this.setState({ user });
    });
  }

  public render() {
    const { user } = this.state;

    if (user) {
      return (
        <View style={styles.container}>
          <Main/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
          <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
