import { db, field } from './Firebase';
import { UserInfo, ActivityInfo, RolesInfo } from 'avocado-common';
import { log } from './Utilities';

export class SecurityService {

    public static readRoles(user: UserInfo) : Promise<RolesInfo> {
        return new Promise<RolesInfo>((resolved, rejected) => {
            if(resolved) {
                db.collection("roles").doc(user.uid).get().then((snapshot)=> {
                    resolved(snapshot.data() || {});
                }).catch((reason) => {
                    log(`Failed to read user roles for '${user.uid}': ${reason}`, rejected);
                });
            }
        })
        
    }
}