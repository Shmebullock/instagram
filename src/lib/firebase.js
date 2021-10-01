import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here is where I want to import the seed file (once)

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (once)
// seedDataBase

export { firebase, FieldValue };