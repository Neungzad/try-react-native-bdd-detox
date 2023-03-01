Feature: Select Room
    """
    As I am a logged user, after I search and book the room, I should see bookingId in success screen
    """
    Scenario: Validate booking information and booking successful
        Given I am on findRoom-screen with user "NEUNG"
        When I type "10" into "nbPeople-input" component
        And I type "20231010" into "date-input" component
        And I type "0800" into "startTime-input" component
        And I type "1000" into "endTime-input" component
        And I tap on the "findRoom-button" component
        And I tap on item list "roomItem-button" at index 1
        Then I should be on the "bookingSummary-screen"
        When I tap on the "confirm-button" component
        Then I should be on the "success-screen"
        When I tap on the "history-button" component
        Then I should be on the "history-screen"
        When I tap on the "logout-button" component

    Scenario: Cancel booking room
        Given I am on findRoom-screen with user "NEUNG"
        When I type "10" into "nbPeople-input" component
        And I type "20231010" into "date-input" component
        And I type "0800" into "startTime-input" component
        And I type "1000" into "endTime-input" component
        And I tap on the "findRoom-button" component
        And I tap on item list "roomItem-button" at index 1
        Then I should be on the "bookingSummary-screen"
        When I tap on the "cancel-button" component
        Then I should be on the "selectRoom-screen"
        When I tap on the "logout-button" component


