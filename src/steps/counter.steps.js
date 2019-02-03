const { loadFeature, defineFeature } = require('jest-cucumber');
const {
  givenACountOfOne,
  whenUserClicks,
  thenTheCounterShouldBe,
} = require('./commonSteps');

const feature = loadFeature('./src/features/counter.feature');

jest.setTimeout(30000); // 30 second timeout

defineFeature(feature, test => {
  beforeEach(async () => {
    await page.goto(
      'file:///Users/steven/Documents/Sites/bdd-tdd-demo/src/index.html'
    );
  });

  test('Incrementing the Counter', ({ given, when, then }) => {
    givenACountOfOne(given);
    whenUserClicks(when, '.add');
    thenTheCounterShouldBe(then, '2');
  });

  test('Decrementing the Counter', ({ given, when, then }) => {
    givenACountOfOne(given);
    whenUserClicks(when, '.subtract');
    thenTheCounterShouldBe(then, '0');
  });

  test('Resetting the Counter', ({ given, when, then }) => {
    givenACountOfOne(given);
    whenUserClicks(when, '.reset');
    thenTheCounterShouldBe(then, '0');
  });
});
