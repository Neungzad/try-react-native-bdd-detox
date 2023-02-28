Feature: Landing page when first launch

Scenario: I launch the app, and I should be on the landing page
  Given I launched the app
  Then I should be on the "landing-page"
  Then I see the text "landing-page-title" with value "Meeting Room Booking"

Scenario: I see buttons on the landing page
  Given I am on the landing page
  Then I see the "login-button" component
  And I see the "signUp-button" component

