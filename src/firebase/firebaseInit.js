import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzOxOiMSGn81iVrEGZZzYcdEg_QwES0qU",
    authDomain: "fireblog-d2a3a.firebaseapp.com",
    projectId: "fireblog-d2a3a",
    storageBucket: "fireblog-d2a3a.appspot.com",
    messagingSenderId: "182433037831",
    appId: "1:182433037831:web:c7117e18c0fa419c3d74a2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();