import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKlDpUT_HiIWOdeHJgXJIzO4ZOH2GwiYo',
  authDomain: 'enis-firegram.firebaseapp.com',
  projectId: 'enis-firegram',
  storageBucket: 'enis-firegram.appspot.com',
  messagingSenderId: '1045178341319',
  appId: '1:1045178341319:web:139a6e56551c3dacf9ebe2',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
