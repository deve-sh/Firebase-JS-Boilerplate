import {
	getAuth,
	signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup as firebaseSignInWithPopup,
	onAuthStateChanged as firebaseOnAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export default auth;

// Email Sign In
export const signInWithEmailAndPassword = (email, password) =>
	firebaseSignInWithEmailAndPassword(auth, email, password);

// Popup Sign In
export const signInWithPopup = (provider) =>
	firebaseSignInWithPopup(auth, provider);

// Google Sign In
export const signInWithGoogle = () =>
	firebaseSignInWithPopup(auth, GoogleAuthProvider);

// More functions for other sign ins to be added here.

export const onAuthStateChanged = (callback) =>
	firebaseOnAuthStateChanged(auth, callback);

export const getCurrentUser = () => auth.currentUser;

export const updateProfile = (updates) =>
	firebaseUpdateProfile(getCurrentUser(), updates);

// Other utility functions that abstract the need for passing 'auth' every time can be added here.
// As per docs at: https://firebase.google.com/docs/auth/web/manage-users
