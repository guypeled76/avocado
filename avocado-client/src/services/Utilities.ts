import { messaging } from "firebase";

export const log = (message:string, rejection?: (reason)=>void) => {
    console.log(message);
    if(rejection) {
        rejection(message);
    }
}