Feature: History
    Scenario: See the booking history
        Given I am on findRoom-screen with user "NEUNG"
        When I tap on the "myBookings-button" component
        Then I should be on the "history-screen"
        Then I should see list of "historyItem-button"
