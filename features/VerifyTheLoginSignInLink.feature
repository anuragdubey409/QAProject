Feature: Verify Both Sign in and Create account links go to their respective pages

Scenario: Sign In And Create Account Go To respective links
    Given I go to the jobs pages
    Then I should see SignIn link
    Then I should see Create Account link
    Then I click on SignIn link
    Then I should navigate to SignIn Page
    Then I should click On Create Account
    Then I should navigate to Create Account Page 
