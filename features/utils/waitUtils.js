const {assert,until,by} = require('selenium-webdriver');
const World = require('../support/world');
const utils = require('./driverUtils');
const timeOut =3000;

class waitUtils{

    /**
     * Wait for Javascript to be in complete state
     */
    waitForPageToLoad(){
        World.driver.wait(()=> {
            return utils.ExecuteJS('return document.readyState').then((readyState)=> {
              return readyState === 'complete';
            });
          });
    }

    /**
     * Wait for Element To Be Visible
     */
  waitForElementToBeVisible(element){
    World.driver.wait(until.elementIsVisible(element),timeOut);
    return this; 
  }

  /**
   * Wait for the element to be located in the dom and has height and width
   */
  waitForElementLocated(element){
      World.driver.wait(until.elementLocated(element),timeOut);
      return this;
  }

  /**
   * wait util the element is enabled in the Dom
   * @param {*} element 
   */
  waitForElementEnabled(element){
      World.driver.wait(until.elementIsEnabled(element),timeOut);
      return this;
  }

  /**
   * Wait for the element to become stale 
   * @param {*} element 
   */
  waitForElementToBeStale(element){
      World.driver.wait(until.stalenessOf(element),timeOut);
      return this;
  }


   waitForElementPresent(){
       World.driver.wait(function() {
        return World.driver.isElementPresent(by.id('elementdisappears')).then(function(present) {
        return !present;
        });
   }, 10000, 'The element was still present when it should have disappeared.');
   }


};
module.exports = new waitUtils();