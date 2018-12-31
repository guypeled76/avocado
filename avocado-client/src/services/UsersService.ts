import { ListService, Firebase } from "services";
import { UserInfo } from "avocado-common";
import { InteractionManager } from "react-native";


export class UsersService extends ListService<UserInfo> {

    constructor(pageSize: number) {
        super(`/profiles`, pageSize)
    }

    

    protected toServerValue(item: UserInfo) {
    
        return {
            key: item.uid, 
            value: item
        };
    }



    protected fromServerValue(key: string, value: UserInfo) {
        return value;
    }
}
