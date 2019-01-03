import { Facebook, Google } from 'expo';

import { config } from '../config';
import { Firebase } from './Firebase';
import { Alert } from 'react-native';
import { RolesInfo, UserInfo } from 'avocado-common';
import { ActivityService } from './ActivityService';
import { SecurityService } from './SecurityService';

export class AuthService {

  static loggedUser: UserInfo | null;

  public static async loginWithGoogle() {
    try {
      const result = await Google.logInAsync({
        androidClientId: '387060388445-7s2qfor21bvja6lh722kctc5denpo92a.apps.googleusercontent.com',
        iosClientId: '387060388445-o6jus1djlf3geblbrstchi5b0u20hsnj.apps.googleusercontent.com',
        webClientId: '387060388445-mlv4ivijphvaecqliq60dlbrhdpf8lsp.apps.googleusercontent.com',
        scopes: ['profile', 'email'],

        behavior: 'web'
      });
      if (result.type === 'success') {

        const credential = Firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);

        await Firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential);
      }
    } catch (e) {
      Alert.alert(e);
    }

  }

  public static async loginWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      config.facebook.appId, {
        permissions: ['public_profile', 'email']
      }
    );



    if (type === 'success' && token) {
      // Build Firebase credential with the Facebook access token.
      const credential = Firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      await Firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);
    }
  }

  /**
   * Register a subscription callback for changes of the currently authenticated user
   * 
   * @param callback Called with the current authenticated user as first argument
   */
  public static subscribeAuthChange(callback: (user: UserInfo | null, roles: RolesInfo | null) => void) {
    Firebase.auth().onAuthStateChanged((firebaseUser: firebase.User | null) => {
      if (firebaseUser != null) {
        SecurityService.readRoles(firebaseUser).then((roles)=>{

            ActivityService.registerLogin(firebaseUser);
             
            callback(firebaseUser, roles);
        })
      } else {
        callback(null, null);
      }
    });
  }

  public static async logout() {
    return Firebase.auth().signOut();
  }
}
