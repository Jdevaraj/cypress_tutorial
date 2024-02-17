const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   defaultCommandTimeout: 6000,
//   reporter: "cypress-mochawesome-reporter",
//   // screenshotOnRunFailure: true,
//   // video: false,
//   // retries: {
//   //   // Configure retry attempts for `cypress run`
//   //   // Default is 0
//   //   runMode: 2,
//   //   // Configure retry attempts for `cypress open`
//   //   // Default is 0
//   //   openMode: 1,
//   // },
//   retires: 1,
//   // screenshotsFolder: "cypress/screenshotnew",
//   // videosFolder: "cypress/videonewfolder", reporterOptions: {

//   reporterOptions: {
//     reportFilename: "[status]_[datetime]-report",
//     // timestamp: "longDate",
//     charts: true,
//     reportPageTitle: "Cypress Tutorial - Lets Kode It",
//     embeddedScreenshots: true,
//     inlineAssets: true,
//     saveAllAttempts: true,
//     // ignoreVideos: true,
//     videoOnFailOnly: true,
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       require("cypress-mochawesome-reporter/plugin")(on);
//       // implement node event listeners here
//     },
//   },
// });

// const { defineConfig } = require("cypress");

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: "aixo8e",
  defaultCommandTimeout: 6000,
  env: {
    username: "test@email.com",
    password: "abcabc",
    url: "https://www.letskodeit.com",
    qaURL: "",
    apiURL: "https://gorest.co.in/public/v2/users",
    accessToken:
      "Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969",
  },

  reporter: "cypress-mochawesome-reporter",
  // screenshotOnRunFailure: true,
  // video: true,
  // retries: 1,
  // retries: {
  //   runMode: 2,
  //   openMode: 1,
  // },
  reporterOptions: {
    // overwrite: false,
    reportFilename: "[status]_[datetime]-report",
    // timestamp: "longDate",
    charts: true,
    reportPageTitle: "Cypress Tutorial - Lets Kode It",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    // ignoreVideos: true,
    videoOnFailOnly: true,
  },

  e2e: {
    // baseUrl: 'https://www.letskodeit.com',
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      const username = process.env.APP_USERNAME;
      const password = process.env.PASSWORD;

      config.env = { username, password };
      return config;
      // return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
