var utils = require('../utils/driverUtils');

class SignInPage{


    /**
     * Verify User has been navigated to the Sign In Page
     */
     verifySignInPage(){
     utils.verifyTheCurrentUrl('logon');
     }

     /**
      * Verify the user has been navigated to the Create account page
      */
     verifyCreateAccountPage(){
        utils.verifyTheCurrentUrl('register');
     }

};
return module.exports = new SignInPage();
