# Firebase JavaScript Boilerplate - V8 and Below

This is just a collection of files that will be helpful for you to setup your projects with Firebase, each core functionality of Firebase has been split into a different file and initialized for you to use.

### Analytics

```javascript
import analytics from "../firebase/analytics";
...
analytics.logEvent(...);
analytics.setUserProperties(...);
```

For detailed documentation on Firebase Analytics: [Check Web v8 docs here](https://firebase.google.com/docs/analytics/get-started?platform=web).

### Authentication

```javascript
import auth, { googleProvider } from "../firebase/authentication";
...
auth.createUserWithEmailAndPassword(email, password);
auth.signInWithPopup(googleProvider);
```

For detailed documentation on Firebase Auth: [Check Web v8 docs here](https://firebase.google.com/docs/auth/web/).

### Firestore

```javascript
import db, { firestore } from "../firebase/firestore";
...
db.collection("users").doc(uid).update({
    updatedAt: firestore.FieldValue.serverTimestamp()
});
...
db.runTransaction(transaction => {
    ...
});
```

For detailed documentation on Firebase Analytics: [Check Web v8 docs here](https://firebase.google.com/docs/analytics/get-started?platform=web).

Other Features Available:

- Cloud Messaging
- Cloud Functions (Callable Functions)

Others to be added soon:

- Realtime Database
- Performance Monitoring
- Remote Config
