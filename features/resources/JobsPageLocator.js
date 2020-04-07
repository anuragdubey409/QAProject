module.exports = {
    jobsPage : {
     navigationBarLink : "xpath=//nav[@id='primary-nav']//li",
     designationSearchBox : "xpath=//input[contains(@placeholder,'Director')]",
     countrySearchBox : "xpath=//input[contains(@placeholder,'UK')]",
     rangeDropdown : "xpath=//select[@class='field__select-within']",
     jobsSectorList : "//section[@class='browse brick']//ul/li/a",
     jobsBlog : "xpath=//span[contains(text(),'Jobs blog')]",
     featuredJobs :"xpath=//span[contains(text(),'Featured jobs')]",
     footer : "xpath=//footer[@role='contentinfo']",
     SignInLink : "xpath=//ul[@class='jobseekers__items cf']/li[1]/a",
     CreateAccountLink : "xpath=//ul[@class='jobseekers__items cf']/li[2]/a" 
    }

};
