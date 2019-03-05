  Feature: amazon title

    Scenario: Amazon title verification
      When user goes to amazon Website
      Then user should see proper title

    @amazon
    Scenario: Amazon url verification
      When user goes to amazon Website
      Then user should validate url