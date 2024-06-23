// context/FirebaseContext.js

import React, {createContext, useContext, useEffect, useState} from 'react';
import {getFirestore, collection, onSnapshot} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';

// Add your Firebase configuration here
const firebaseConfig = {
  apiKey: 'AIzaSyDvHssPomUDzqti8XNXP_8IjUgKzn1vbuk',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'sociafly-832a5',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:966546105034:android:c8bb9d6209543935a1ca33',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FirebaseContext = createContext();

export const FirebaseProvider = ({children}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={users}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useAllUsersFirebase = () => {
  return useContext(FirebaseContext);
};
