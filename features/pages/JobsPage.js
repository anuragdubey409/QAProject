const utils = require('../utils/driverUtils');
const World = require('../support/world');
const jobsPageLocator = require('../resources/JobsPageLocator.js');
const Assert = require('../utils/AssertionUtils.js');
let  sectorList =['Banking and finance','Government','Academia',
'International public sector','NGO','Development','Health','Other'];

class jobsPage {
       
    /**
     * Verify the Navigation bar is displayed 
     */
       verifyTheNavigationBarIsDisplayed(){
        let navigation=utils.byLocator(jobsPageLocator.jobsPage.navigationBarLink);
        utils.verifyTheElementIsDisplayed(navigation);
    };

    /**
     * verify search fields for jobs are displayed
     */
    verifyTheSearchFieldIsDisplayed(){
        let designationField=utils.byLocator(jobsPageLocator.jobsPage.designationSearchBox);
        let countrySearchBox =utils.byLocator(jobsPageLocator.jobsPage.countrySearchBox);
        let rangeDropDown =utils.byLocator(jobsPageLocator.jobsPage.rangeDropdown);
        utils.verifyTheElementIsDisplayed(designationField);
        utils.verifyTheElementIsDisplayed(countrySearchBox);
        utils.verifyTheElementIsDisplayed(rangeDropDown);
    }

    /**
     * Veridy the Sector List is displayed with the corresponding Text
     */
    verifySectorListIsDisplayed(){
       utils.verifyTheListOfElementsExists(jobsPageLocator.jobsPage.jobsSectorList,sectorList);
    }

    /**
     * Veridy the User Is Able To See Jobs Blog 
     */
    verifyUserIsAbleToSeeJobsBlog(){
        let jobsBlog = utils.byLocator(jobsPageLocator.jobsPage.jobsBlog);
        utils.verifyTheElementIsDisplayed(jobsBlog);
    }

    /**
     * Veridy The User is able to see the featured jobs
     */
    verifyUserSeeFeaturedJobs(){
        let featuredJobs = utils.byLocator(jobsPageLocator.jobsPage.featuredJobs);
        utils.verifyTheElementIsDisplayed(featuredJobs);
    }

    /**
     * Verify The footer page is displayed
     */
    verifyUserShouldSeeFooterPage(){
        let footerLocator =utils.byLocator(jobsPageLocator.jobsPage.footer);
        utils.scrollToTheView(footerLocator);
        utils.verifyTheElementIsDisplayed(footerLocator);
    }

    /**
     * Verify SignIn Link is Available
     */
    verifyTheSignInLinkAvailable(SignInlinkText){
        let SignInLinkLoc = utils.byLocator(jobsPageLocator.jobsPage.SignInLink);
        utils.verifyTextOfElement(SignInLinkLoc,SignInlinkText);
    }

    /**
     * Verify The Create Account Link Is Available
     */
    verifyTheCreateAccountLinkIsAvailable(CreateAccountLink){
        let CreateAccountLinkLoc=utils.byLocator(jobsPageLocator.jobsPage.CreateAccountLink);
        utils.verifyTextOfElement(CreateAccountLinkLoc,CreateAccountLink);
    }

    /**
     * Click On SignIn Link
     */
    clickOnSignInLink(){
        let signInLink = utils.byLocator(jobsPageLocator.jobsPage.SignInLink);
        utils.clickOn(signInLink);
    }

    /**
     * Click On Create Account In link
     */
    clickOnCreateAccountLink(){
        let createAccountLink = utils.byLocator(jobsPageLocator.jobsPage.CreateAccountLink);
        utils.clickOn(createAccountLink);
    }


}
module.exports = new jobsPage();