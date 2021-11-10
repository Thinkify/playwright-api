// @ts-check

const { devices } = require('@playwright/test');

const config = {
    use: {
      browserName: 'chromium',
      headless: false,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      video: 'on-first-retry',
      screenshot: 'on',
      trace: 'on',
      testDir: 'tests/scenarios',
      timeout: 30000,
    },
    reporter: [ ['json', { outputFile: 'results.json' }] ],
    // projects: [
    //     {
    //       name: 'Chromium',
    //       use: {
    //         // Configure the browser to use.
    //         browserName: 'chromium',
    
    //         // Any Chromium-specific options.
    //         viewport: { width: 600, height: 800 },
    //       },
    //     },
    
    //     {
    //       name: 'Firefox',
    //       use: { browserName: 'firefox' },
    //     },
    
    //     {
    //       name: 'WebKit',
    //       use: { browserName: 'webkit' },
    //     },
    //           // Test against mobile viewports.
    //     {
    //     name: 'Mobile Chrome',
    //     use: devices['Pixel 5'],
    //     },
    //     {
    //         name: 'Mobile Safari',
    //         use: devices['iPhone 12'],
    //       },
      
    //   ],
    // "scripts": {
    //     "test": "playwright test"
    // }
};
  module.exports = config;