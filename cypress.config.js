const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false, // Disable Chrome's web security
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});