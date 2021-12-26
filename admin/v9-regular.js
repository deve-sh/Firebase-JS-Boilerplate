const {
	initializeApp,
	credential,
	getAuth,
	getFirestore,
	getMessaging,
} = require("firebase-admin");

// Refer to this article to generate and securely store the JSON Firebase Admin Service Account.
// The reference is for Vercel, but works everywhere equally well.
// https://dev.to/vvo/how-to-add-firebase-service-account-json-files-to-vercel-ph5
const firebaseAdminConfig = process.env.FIREBASE_ADMIN_CONFIG;
const serviceAccount = JSON.parse(firebaseAdminConfig);

initializeApp({
	credential: credential.cert(serviceAccount),
});

// No Default export since Firebase Admin v9 will initialize app and share its context across its functions.

export const auth = getAuth(); // Use as import { auth } from './admin' and auth.updateUser(...)...
export const firestore = getFirestore(); // Use as import { firestore } from './admin' and firestore.collection(...)...
export const messaging = getMessaging();

// Add more exports as you need
