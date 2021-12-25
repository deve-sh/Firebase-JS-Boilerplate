import {
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
	uploadString,
	getDownloadURL as getStorageDownloadURL,
	deleteObject,
} from "firebase/storage";
import firebaseApp from "./index";

const storage = getStorage(firebaseApp);

export default storage;

// Other helpful functions
export const createStorageRef = (path) => {
	if (path) return ref(storage, path);
	else return ref(storage); // Core storage service ref
};

export const uploadFile = (
	path,
	file,
	metadata = undefined,
	resumable = false
) => {
	const ref = createStorageRef(path);
	return resumable
		? uploadBytesResumable(ref, file, metadata)
		: uploadBytes(ref, file, metadata);
};

export const uploadFromString = (
	path,
	string,
	type = undefined, // undefined | 'base64' | 'base64url' | 'data_url'
	metadata = undefined
) => {
	const ref = createStorageRef(path);
	return uploadString(ref, string, type, metadata);
};

export const getDownloadURL = (path) =>
	getStorageDownloadURL(createStorageRef(path));

export const deleteFile = (path) => deleteObject(createStorageRef(path));

// For all other functions and refs, refer to: https://firebase.google.com/docs/storage/web
