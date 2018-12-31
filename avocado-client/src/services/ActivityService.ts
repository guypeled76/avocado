import { Firebase } from 'services';
import { UserInfo } from 'avocado-common';
import { Alert } from 'react-native';

export class ActivityService {

    public static registerLogin(user:UserInfo) {
        Firebase.database().ref("profiles").child(user.uid).set({
            displayName:user.displayName,
            email: user.email,
            uid: user.uid,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            lastLogin: ActivityService.timestamp
        }).catch(reason => {
            Alert.alert(reason);
        });
           
        
    }

    public static get timestamp() {
        return Firebase.database.ServerValue.TIMESTAMP;
    }
}