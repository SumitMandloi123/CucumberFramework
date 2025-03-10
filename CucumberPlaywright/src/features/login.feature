Feature: Login to SauceDemo

  Scenario: Successful login with valid credentials
    Given I open the login page
    When I enter valid credentials
    And I click on the login button
    Then I should see the homepage
