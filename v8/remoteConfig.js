import firebase from "./index";
import "firebase/remote-config";

const remoteConfig = firebase.remoteConfig();

export default remoteConfig;

// Reference: https://firebase.google.com/docs/remote-config/get-started?platform=web
