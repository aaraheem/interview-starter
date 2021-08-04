exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: ['./test/specs/signup/signup.spec.js'],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true
  }],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://notarize.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 60000
  }
}
