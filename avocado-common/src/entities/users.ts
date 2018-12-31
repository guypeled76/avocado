export interface UserInfo {
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    uid: string;
}


export interface RolesInfo {
    admin:boolean;
    editor:boolean;
    consultant:boolean;
}  