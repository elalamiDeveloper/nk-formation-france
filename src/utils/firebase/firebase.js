import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCr1sz_slDoC96pod-4V3jwkw1pK1aEkB8',
  authDomain: 'nk-formation-fca02.firebaseapp.com',
  projectId: 'nk-formation-fca02',
  storageBucket: 'nk-formation-fca02.appspot.com',
  messagingSenderId: '776707704987',
  appId: '1:776707704987:web:ecf046e9b8df5ea4665e3e',
};

initializeApp(firebaseConfig);
const db = getFirestore();

const addUser = async (contact) => {
  console.log(db);
  const userDocRef = doc(db, 'contacts', contact.id);
  try {
    await setDoc(userDocRef, contact);
  } catch (err) {
    console.log('EROR');
  }
};

export { addUser };
