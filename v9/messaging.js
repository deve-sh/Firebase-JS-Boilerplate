import { getMessaging, getToken } from "firebase/messaging";

let messaging;

try {
	// Some browsers might not support web push that's used by Firebase Cloud Messaging.
	messaging = getMessaging();
} catch (err) {}

export default messaging;

export const getMessagingToken = async (vapidKey, callback = () => null) => {
	if (messaging) {
		try {
			const token = await getToken(messaging, { vapidKey });
			return callback(null, token);
		} catch (err) {
			return callback(err.messaging, null);
		}
	}
};
