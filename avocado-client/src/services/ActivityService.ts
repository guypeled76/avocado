import { db, field } from 'services';
import { UserInfo } from 'avocado-common';

export class ActivityService {

    public static registerLogin(user:UserInfo) {
        db.collection("profiles").doc(user.uid).set({
            displayName:user.displayName,
            email: user.email,
            uid: user.uid,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            lastLogin:  field.serverTimestamp()
        });        
    }

}