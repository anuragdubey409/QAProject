const { Given, Then } = require('cucumber');
const World = require('../support/world');
const JobsPage = require('../pages/JobsPage');
const SignInPage = require('../pages/SignInPage');

  Given(/^I go to the jobs pages$/, () => {
      World.goToJobsPage()
   });

  Then(/^I should see SignIn link$/, () =>{
    JobsPage.verifyTheSignInLinkAvailable('Sign in');
    });

  Then(/^I should see Create Account link$/,()=>{
    JobsPage.verifyTheCreateAccountLinkIsAvailable('Create account');
  });

  Then(/^I click on SignIn link$/,()=>{
      JobsPage.clickOnSignInLink();

  });
  
  Then(/^I should navigate to SignIn Page$/,() =>{
        SignInPage.verifySignInPage();
  });

  Then(/^I should click On Create Account$/,() =>{
        JobsPage.clickOnCreateAccountLink();
  });

  Then(/^I should navigate to Create Account Page$/,()=>{
        SignInPage.verifyCreateAccountPage();
  });