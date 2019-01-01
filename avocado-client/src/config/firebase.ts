import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_PROJECT_ID
} from 'react-native-dotenv';

const firebase = Object.freeze({
  apiKey: FIREBASE_API_KEY as string || '',
  authDomain: FIREBASE_AUTH_DOMAIN as string || '',
  databaseURL: FIREBASE_DATABASE_URL as string || '',
  storageBucket: FIREBASE_STORAGE_BUCKET as string || '',
  projectId: FIREBASE_PROJECT_ID as string || ''
});

export default firebase;
