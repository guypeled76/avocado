import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AuthService } from 'services';
import { Login, Navigation } from 'screens';

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
          <Navigation />
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
