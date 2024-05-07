// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBYYmNotINRg8Xj6CTHTmw9tPRCQxuI_54',
  authDomain: 'megamed-416710.firebaseapp.com',
  projectId: 'megamed-416710',
  storageBucket: 'megamed-416710.appspot.com',
  messagingSenderId: '429480702867',
  appId: '1:429480702867:web:0b4aebc4de858301116e66',
  measurementId: 'G-82WG9S3FFB',
};

const app = initializeApp(firebaseConfig);
export const uploadImage = getStorage(app);
