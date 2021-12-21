import firebase from "./index";
import "firebase/messaging";

let messaging = {};

try {
	messaging = firebase.messaging(); // try-catch block since some browsers don't support Notifications
} catch (err) {}

export default messaging;
