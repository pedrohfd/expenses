import { getDatabase } from '@firebase/database'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAKC8pPRNVEoJxsZo42pkDUqJNy2uojhKU',
  authDomain: 'expense-7b4a2.firebaseapp.com',
  databaseURL: 'https://expense-7b4a2-default-rtdb.firebaseio.com',
  projectId: 'expense-7b4a2',
  storageBucket: 'expense-7b4a2.appspot.com',
  messagingSenderId: '1089981809202',
  appId: '1:1089981809202:web:f846a5558de91f7e75b22b',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default database
