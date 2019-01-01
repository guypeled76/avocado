import * as firebase from 'firebase';
import 'firebase/firestore';

import { config } from '../config';

firebase.initializeApp(config.firebase);

export const Firebase = firebase;

function createDB() {
    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots:true
    });
    return db;
}

export const db = createDB();

export const field = firebase.firestore.FieldValue;




