import React from 'react';

import { Text, View, Button, StyleSheet } from 'react-native';

import AuthService from '../../../services/Auth';

export default class Login extends React.Component<{}, {}> {

    
    public render() {

        return  <View>
                    <Text>Welcome!</Text>
                    <Button onPress={AuthService.loginWithFacebook} title='Login with Facebook' />
                </View>;
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  