/*
	The main firebase configuration file.
*/

import { initializeApp } from "firebase/app";

const config = JSON.parse(process.env.FIREBASE_CONFIG);

const firebasePrimaryApp = initializeApp(config);

export default firebasePrimaryApp;
