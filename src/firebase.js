import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDL-Ak915gEAVbTMLNP61x2yujqL6CoVyQ",
    authDomain: "to-do-task-app-45d44.firebaseapp.com",
    projectId: "to-do-task-app-45d44",
    storageBucket: "to-do-task-app-45d44.appspot.com",
    messagingSenderId: "122222273491",
    appId: "1:122222273491:web:48e0019cb362bd637f0526",
    measurementId: "G-9LB6MRF0KS"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
