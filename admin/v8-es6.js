// V8 Admin SDK with the updated ES6 Import syntax
import admin from "firebase-admin";

// Refer to this article to generate and securely store the JSON Firebase Admin Service Account.
// The reference is for Vercel, but works everywhere equally well.
// https://dev.to/vvo/how-to-add-firebase-service-account-json-files-to-vercel-ph5
const firebaseAdminConfig = process.env.FIREBASE_ADMIN_CONFIG;
const serviceAccount = JSON.parse(firebaseAdminConfig);

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	});
}

export default admin;

// Now with the exported admin module, just refer to admin.firestore(), admin.auth(), admin.storage() like you would with regular Firebase SDK
