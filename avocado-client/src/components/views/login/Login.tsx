import React from 'react';

import { Text, View, Button, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import AuthService from '../../../services/Auth';

export default class Login extends React.Component<{}, {}> {

    
    public render() {

        return  <View>
                    <Text>Welcome!</Text>
                    <SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
  onPress={AuthService.loginWithFacebook} 
/>
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
  