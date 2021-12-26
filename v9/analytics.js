import {
	getAnalytics,
	logEvent as logEventToFirebase,
} from "firebase/analytics";

const analytics = getAnalytics();

export default analytics;

export const logEvent = (eventName, eventData) =>
	logEventToFirebase(analytics, eventName, eventData);
