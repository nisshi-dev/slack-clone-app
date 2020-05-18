import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBdDruA2xzzUtld45aaJoV5L0cz85ddrQ0',
    authDomain: 'slack-clone-app-6f8f4.firebaseapp.com',
    databaseURL: 'https://slack-clone-app-6f8f4.firebaseio.com',
    projectId: 'slack-clone-app-6f8f4',
    storageBucket: 'slack-clone-app-6f8f4.appspot.com',
    messagingSenderId: '785909189352',
    appId: '1:785909189352:web:b5d5c5f55781e49ac1575d',
    measurementId: 'G-GM18PGBY4S'
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}
