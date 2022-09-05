
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCImghehDkPOtZlDKsc6SPTop3DNuBsYMI",
  authDomain: "chat-app-d3dd7.firebaseapp.com",
  databaseURL: "https://chat-app-d3dd7-default-rtdb.firebaseio.com",
  projectId: "chat-app-d3dd7",
  storageBucket: "chat-app-d3dd7.appspot.com",
  messagingSenderId: "23843287369",
  appId: "1:23843287369:web:5268ecdb769f7cc821aa98",
  measurementId: "G-WPBHZD80E7"
})

export const auth = app.auth()
export default app
