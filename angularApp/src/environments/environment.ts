// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dialogflow: {
    angularChatBot: "AIzaSyChbAO1JfK95n-UCnMDaAhXnZ934lC68KM",
    baseUrl: "https://dialogflow.googleapis.com/v2/projects/angular-chat-bot-ohub/",
    sessionParam: "agent/sessions/",
    sessionValue: "123456789/",
    contextParam: "context/set-language-followup",
    projectId: "angular-chat-bot-ohub"
  },
  backend: {
    baseUrl: "http://localhost:3000/",
    apiUrl: "http://localhost:3000/api/",
    requestTextUrl: "http://localhost:3000/api/requestText/"
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