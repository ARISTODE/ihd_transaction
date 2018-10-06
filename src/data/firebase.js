import Firebase from 'firebase';
import { config } from './config';

// Initialize Firebase
export const firebaseApp = Firebase.initializeApp(config);
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
