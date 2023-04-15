// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    baseUrl: 'http://localhost:4000/api',
    firebase : {
      apiKey: "AIzaSyCX3mBl0BtMWa43nVgcwNGNbuH-AHc2gko",
      authDomain: "angular-8af14.firebaseapp.com",
      projectId: "angular-8af14",
      storageBucket: "angular-8af14.appspot.com",
      messagingSenderId: "636223663232",
      appId: "1:636223663232:web:39afef51de5d9874930a65",
      measurementId: "G-JF4MDWVTHH"
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