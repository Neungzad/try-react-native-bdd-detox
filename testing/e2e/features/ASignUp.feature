Feature: Sign Up
  Scenario: Visit sign up screen
    Given I am on sign up screen
    When I type "neung" into "firstName-input" component
    And I type "viriyadamrongkij" into "lastName-input" component
    And I type "nviriyadamrongkij@palo-it.com" into "email-input" component
    And I type "1q2w3e4r" into "password-input" component
    And I tap on the "signUp-button" component
    Then I should be on the "login-screen"