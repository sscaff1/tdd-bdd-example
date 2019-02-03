// Grab our count
const getCount = async () => {
  return await page.$eval('.count', count => count.textContent);
};

// Our test suite for Count
describe('Count', async () => {
  beforeEach(async () => {
    await page.goto(
      'file:///Users/steven/Documents/Sites/bdd-tdd-demo/src/index.html'
    );
  });

  // test the add button
  it('should increment when add is clicked', async () => {
    await page.click('.add');
    const count = await getCount();

    expect(count).toBe('1');
  });

  // test the subtract button
  it('should decrement when subtract is clicked', async () => {
    await page.click('.subtract');
    const count = await getCount();

    expect(count).toBe('-1');
  });

  // test the reset button
  it('should reset to 0 when reset is clicked', async () => {
    await page.click('.add');
    await page.click('.reset');
    const count = await getCount();

    expect(count).toBe('0');
  });
});

// Our test suite for Reset
describe('Reset', () => {
  it('should be hidden when count is 0', async () => {
    const reset = await page.$('.reset');
    const boundingBox = await reset.boundingBox();

    expect(boundingBox).toBeNull();
  });

  it('should be visible when count is not 0', async () => {
    await page.click('.add');
    const reset = await page.$('.reset');
    const boundingBox = await reset.boundingBox();

    expect(boundingBox).not.toBeNull();
  });
});
