Feature: Reset

  Scenario: Showing the counter
    Given the counter has a current count of 1
    When the user clicks the add button
    Then the reset button should be visible

  Scenario: Hiding the counter
    Given the counter has a current count of 1
    When the user clicks the subtract button
    Then the reset button should be invisible
