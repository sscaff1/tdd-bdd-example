Feature: Counter

  Scenario: Incrementing the Counter
    Given the counter has a current count of 1
    When the user clicks the add button
    Then the counter value should be 2

  Scenario: Decrementing the Counter
    Given the counter has a current count of 1
    When the user clicks the subtract button
    Then the counter value should be 0

  Scenario: Resetting the Counter
    Given the counter has a current count of 1
    When the user clicks the reset button
    Then the counter value should be 0