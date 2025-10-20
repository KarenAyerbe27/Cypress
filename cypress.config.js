const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

       
    },

    baseUrl: 'https://borrower-onboarding.sandbox.constlending.com',

    defaultCommandTimeout: 10000,
    retries: {
   
    

    },
    video: true,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/images'
  },
});

