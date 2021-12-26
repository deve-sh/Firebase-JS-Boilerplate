// Firestore in Firebase v9 is one of those things I wish never happened.

import {
	getFirestore,
	collection as firestoreCollection,
	getDoc as getFirestoreDoc,
	getDocs as getCollectionDocs,
} from "firebase/firestore";

const firestore = getFirestore();

export default firestore;

export const collection = (collectionName) =>
	firestoreCollection(collectionName);

export const getDocs = (collectionName) =>
	getCollectionDocs(collection(collectionName));

// Other functions are slightly difficult to abstract since they are fairly new and difficult to operate.
