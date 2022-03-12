// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://localhost:8081/api/producto',
  firebase: {
    apiKey: "AIzaSyCvOeiEJjDSNxDDKhL7dnDeRTQldw2K0MA",
    authDomain: "optivision-213cd.firebaseapp.com",
    projectId: "optivision-213cd",
    storageBucket: "optivision-213cd.appspot.com",
    messagingSenderId: "233780293086",
    appId: "1:233780293086:web:95988de6c9aef2ece8014f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
