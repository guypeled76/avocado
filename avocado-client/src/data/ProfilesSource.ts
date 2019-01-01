
import { ListSource, ListSourceConfig } from "./ListSource";
import { UserInfo } from "avocado-common";
import { db } from "services";


export class ProfilesSource extends ListSource {

    constructor(config?: ListSourceConfig) {
        super(db.collection("profiles"), config)
    }
}