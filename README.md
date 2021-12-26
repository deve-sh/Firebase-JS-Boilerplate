# Firebase JavaScript Boilerplate

Small Code Snippets useful for the two variants of the Firebase SDK for JavaScript and TypeScript.

### Index

#### v8 SDK

The v8 SDK is the side-effect based SDK, i.e: All the functionality you need will be bundled in one single export and will be imported.

A Pro of this SDK is that it's simpler to use and everything that's needed is simpler to find and replicate from the docs, but then the con is that it's bulkier since you're importing everything, even stuff you don't need.

- [Initializing SDK](/v8/index.js)
- [Authentication](/v8/authentication.js)
- [Firestore](/v8/firestore.js)
- [Cloud Storage](/v8/storage.js)
- [Realtime Database](/v8/database.js)
- [Cloud Functions](/v8/functions.js)
- [Firebase Analytics](/v8/analytics.js)
- [Cloud Messaging](/v8/messaging.js)
- [Performance Monitoring](/v8/performance.js)
- [Remote Config](/v8/remoteConfig.js)

#### v9 SDK

The v9 SDK is the application/functionality-based SDK, i.e: You import only the funtionality you need, everything that's needed can be abstracted to helper functions.

So the bundle sizes are much-much smaller than the v8 SDK, but in terms of splitting, I personally feel that Firebase has overcompensated for the v9 SDK since now the use of the SDK is just much much more difficult (I.E: The syntax to use v9 is just not very intuitive relative to JavaScript convention).

The v9 boilerplate also contains certain functions that can help you abstract the need for passing refs to v9 calls every single time you have to use the SDK.

- [Initializing SDK](/v9/index.js)
- [Authentication](/v9/authentication.js)
- [Firestore](/v9/firestore.js) - In Progress
- [Cloud Storage](/v9/storage.js)
- [Firebase Analytics](/v8/analytics.js)
- [Cloud Messaging](/v8/messaging.js)
- [Performance Monitoring](/v8/performance.js)
- [Remote Config](/v8/remoteConfig.js)
