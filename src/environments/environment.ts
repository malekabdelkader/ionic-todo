// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: "AIzaSyBy6dKJ9y55Lc4PI9t2ZYpch6q1n6cUlH0",
    authDomain: "my-app-349f0.firebaseapp.com",
    databaseURL: "https://my-app-349f0-default-rtdb.firebaseio.com",
    projectId: "my-app-349f0",
    storageBucket: "my-app-349f0.appspot.com",
    messagingSenderId: "460321058343",
    appId: "1:460321058343:web:5e83e3c14d2befec62e802",
    measurementId: "${config.measurementId}"
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
