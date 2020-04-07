const World = require('../support/world');
const { By } = require('selenium-webdriver');
const wait = require('./waitUtils.js');
const Assert = require('../utils/AssertionUtils');
let size=0;
class driverUtils {


    /**
     * Pass the locator as String and the func will return the webElement
     * @param {*} locatorVal 
     */
     byLocator(locatorVal){
         var webElement =null;
         var locatorValue = locatorVal;
         var locator;
            if(locatorValue !== 'undefined'){
                if(locatorValue.startsWith("xpath=")){
                locator = locatorValue.substring(6);
                webElement = World.driver.findElement(By.xpath(locator));
            }
            else if(locatorValue.startsWith("id=")){
                locator = locatorValue.substring(3);
                webElement = World.driver.findElement(By.id(locator));
            } 
            else if(locatorValue.startsWith("name=")){
                locator = locatorValue.substring(5);
                webElement = World.driver.findElement(By.name(locator));
            } 
            else if(locatorValue.startsWith("css=")){
                locator = locatorValue.substring(4);
                webElement = World.driver.findElement(By.css(locator));
            }
         }
         return webElement;
     }
      /**
       * Click On The WebElement
       * @param {*} element 
       */
     clickOn(element) {
         element.isDisplayed().then((bool)=>{
             if(bool) element.click();
         });
     };

     /**
      * If element is displayed Then clear the TextField and Send the keys passed as parameter
      * @param {*} element 
      * @param {*} keysToSend 
      */
     sendKeys(element,keysToSend){
          element.isDisplayed().then(()=>{
            element.clear();
            element.sendKeys(keysToSend);
         });
     }

     /**
      * verify the text of element passed in parameter
      * @param {*} element 
      */
     verifyTextOfElement(element,ExpectedText){
         element.getText().then((Actualtext)=>{
                Assert.verifyAssertEqual(ExpectedText,Actualtext);
         });
     }
     /**
      * pass the xpath and get the length of webElement
      * @param {*} element 
      */
     verifyTheElementIsDisplayed(element){
        element.isDisplayed().then((Boolean)=>{
           Assert.verifyAssertTrue(Boolean);
        });
    }
    
    /**
     * pass the webElement as xpath and the list arguments to be matched
     * @param {xpath} element :- The locator whose text are need to be verified
     * @param ExpectedText :- the text to be matched
     */
    verifyTheListOfElementsExists(element,ExpectedText){
        World.driver.findElements(By.xpath(element))
        .then((te) => {
                te.map((text) => {
                   text.getText().then((actualText) => {
                       console.log(actualText+'...........'+actualText)
                       Assert.verifyAssertEqual(actualText,ExpectedText[size++]);
                  });
             });
        });   
    }
    
    /**
     * Verify the user navigate to correct page by  checking the expected url
     */
    async verifyTheCurrentUrl(expectedUrl){
        World.driver.getCurrentUrl().then((url)=>{
           console.log('the value of url is :-  '+url)
        })
    }

    
     /**
      * Scroll the webPage upto the element passed in param
      * @param {*} element 
      */
    scrollToTheView(element){
        this.ExecuteJSCode("arguments[0].scrollIntoView()",element);
    }

    /**
     * Pass the JS code and webElement to execute using Javascript Executor
     * @param {*} JSCode 
     * @param {*} webElement 
     */
    ExecuteJSCode(JSCode,webElement){
        World.driver.executeScript(JSCode,webElement);
        return this;
    }

    /**
     * Execute the JS Code passed
     */
    // ExecuteJS(JSCode){
    //     World.driver.executeScript(JSCode);
    //     return this;
    // }

};
module.exports = new driverUtils();