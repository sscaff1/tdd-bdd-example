const { loadFeature, defineFeature } = require('jest-cucumber');
const { givenACountOfOne, whenUserClicks } = require('./commonSteps');

const feature = loadFeature('./src/features/reset.feature');

jest.setTimeout(30000); // 30 second timeout

defineFeature(feature, test => {
  beforeEach(async () => {
    await page.goto(
      'file:///Users/steven/Documents/Sites/bdd-tdd-demo/src/index.html'
    );
  });

  test('Showing the counter', ({ given, when, then }) => {
    givenACountOfOne(given);
    whenUserClicks(when, '.add');
    then('the reset button should be visible', async () => {
      const reset = await page.$('.reset');
      const boundingBox = await reset.boundingBox();

      expect(boundingBox).not.toBeNull();
    });
  });

  test('Hiding the counter', ({ given, when, then }) => {
    givenACountOfOne(given);
    whenUserClicks(when, '.subtract');
    then('the reset button should be invisible', async () => {
      const reset = await page.$('.reset');
      const boundingBox = await reset.boundingBox();

      expect(boundingBox).toBeNull();
    });
  });
});
