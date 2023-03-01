Feature: Login
  Scenario: Login success
    Given I am on the login page
    When I type "nviriyadamrongkij@palo-it.com" into "email-input" component
    And I type "1q2w3e4r" into "password-input" component
    And I tap on the "login-button" component
    Then I should be on the "find-room-screen"
    When I tap on the "logout-button" component
