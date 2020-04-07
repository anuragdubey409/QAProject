const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
var reporter = require('cucumber-html-reporter');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

var options = {
  theme: 'bootstrap',
  jsonFile: 'resources/report/cucumber_report.json',
  output: 'resources/report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
      "App Version":"0.3.2",
      "Test Environment": "Test",
      "Browser": "Chrome  80.0.3987",
      "Platform": "Windows 10",
      "Parallel": "Scenarios",
      "Executed": "Remote"
  }
};


class CustomWorld {
  goToJobsPage() {
    this.driver.manage().window().maximize();
    return this.driver.get(BASE_URL);
  }

  start() {
    this.driver = buildDriver();
  }

  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
