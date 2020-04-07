const { Given, Then } = require('cucumber');
const World = require('../support/world');
const JobsPage = require('../pages/JobsPage');


  Given(/^I go to the job page$/, () => {
      World.goToJobsPage()
  });

  Then(/^I should see the navigation bar$/, () => {
      JobsPage.verifyTheNavigationBarIsDisplayed(); 
  });

  Then(/^I should see the search fields$/,()=>{
      JobsPage.verifyTheSearchFieldIsDisplayed();
  });

  Then(/^I should see Sector lists$/,()=>{
      JobsPage.verifySectorListIsDisplayed();
  });
  
  Then(/^I should see jobs blog$/,()=>{
      JobsPage.verifyUserIsAbleToSeeJobsBlog();
  });
  
  Then(/^I should see featured jobs$/,()=>{
      JobsPage.verifyUserSeeFeaturedJobs();
  });

  Then(/^I should also see footer$/,()=>{
      JobsPage.verifyUserShouldSeeFooterPage();
 });

