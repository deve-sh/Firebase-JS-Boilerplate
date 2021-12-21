import * as mainFirebase from "firebase/app";
import firebase from "./index";
import "firebase/firestore";

const db = firebase.firestore();

export default db;
export const firestore = mainFirebase.firestore;
// import db, { firestore } from '.....firestore';
// Use db for utility like db.collection and db.doc and constructing queries
// Use firestore variable for getting FieldValue and FieldPath
