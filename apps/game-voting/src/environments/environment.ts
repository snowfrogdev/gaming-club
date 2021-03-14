// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5001/gaming-club-a11b7/us-central1/api',
  firebase: {
    apiKey: 'AIzaSyCEcIAtFJut3vZUVb6d2NT_Eh62rpRPTEY',
    authDomain: 'gaming-club-a11b7.firebaseapp.com',
    databaseURL: 'https://gaming-club-a11b7-default-rtdb.firebaseio.com',
    projectId: 'gaming-club-a11b7',
    storageBucket: 'gaming-club-a11b7.appspot.com',
    messagingSenderId: '23583224096',
    appId: '1:23583224096:web:67ff442dbf16b09e842745',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
