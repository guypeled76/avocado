import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
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
        <SafeAreaView style={styles.container}>
          <Main/>
        </SafeAreaView>
      );
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
