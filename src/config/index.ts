// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKC8pPRNVEoJxsZo42pkDUqJNy2uojhKU',
  authDomain: 'expense-7b4a2.firebaseapp.com',
  projectId: 'expense-7b4a2',
  storageBucket: 'expense-7b4a2.appspot.com',
  messagingSenderId: '1089981809202',
  appId: '1:1089981809202:web:f846a5558de91f7e75b22b',
}

let Firebase

if (firebase.app.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig)
}

export default Firebase
