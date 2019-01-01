import { db, field } from 'services';
import { UserInfo, ActivityInfo } from 'avocado-common';

export class ActivityService {

    public static registerLogin(user:UserInfo) {
        const timestamp = field.serverTimestamp();

        db.collection("profiles").doc(user.uid).set({
            displayName:user.displayName,
            email: user.email,
            uid: user.uid,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            lastLogin:  timestamp,
            lastActivity: timestamp
        });        
    }

    public static registerActivity(user:UserInfo, activity:ActivityInfo) {
        const batch = db.batch();
        const timestamp = field.serverTimestamp();
        batch.update(db.collection("profiles").doc(user.uid), {lastActivity: timestamp});
        batch.set(db.collection("profiles").doc(user.uid).collection("activities").doc(), {
            ...activity,
            timestamp:timestamp
        });
        batch.commit();
    }

}