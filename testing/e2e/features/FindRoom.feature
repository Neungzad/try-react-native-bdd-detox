Feature: Find Room

  @find-room-success
  Scenario: Find Room Success
    Given I am on findRoom-screen with user "NEUNG"
    When I type "10" into "nbPeople-input" component
    And I type "20231010" into "date-input" component
    And I type "0800" into "startTime-input" component
    And I type "1000" into "endTime-input" component
    And I tap on the "findRoom-button" component
    Then I see the "selectRoom-screen" component
    And I see the "date-container" component
    And I see the "time-container" component
    And I should see list of "roomItem-button"


