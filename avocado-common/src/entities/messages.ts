import { UserInfo } from "./users";

export interface MessageInfo {
    message?: string;
    user: {
        displayName?: string;
        photoURL?: string;
        uid: string;
    };
    image?: string;
    createAt: any;
}