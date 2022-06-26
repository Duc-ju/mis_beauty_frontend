import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAz92PmVBU8O3243c_zweBw1RDONRYCo-8',
    authDomain: 'mis-beauty.firebaseapp.com',
    projectId: 'mis-beauty',
    storageBucket: 'mis-beauty.appspot.com',
    messagingSenderId: '1063312030595',
    appId: '1:1063312030595:web:3d5293f41146818edb54b6',
    measurementId: 'G-G2WNH8DJ5T'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// // Use emulators
// if (window.location.hostname === 'localhost') {
//     auth.useEmulator('http://localhost:9099');
//     db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;
