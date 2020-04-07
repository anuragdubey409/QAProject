Feature: Verify  The Component In Jobs page

  Scenario: Navigation bar renders
    Given I go to the job page
    Then I should see the navigation bar
    Then I should see the search fields
    Then I should see Sector lists
    Then I should see jobs blog
    Then I should see featured jobs
    Then I should also see footer  