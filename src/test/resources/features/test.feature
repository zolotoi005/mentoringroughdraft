Feature: google search
@google
  Scenario: Google search verification
    When user goes to google application
    Then user searches for cats
    And user should see cats