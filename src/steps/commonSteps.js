const givenACountOfOne = given => {
  given('the counter has a current count of 1', async () => {
    await page.$eval('.count', count => {
      count.textContent = 1;
    });
    await page.$eval('.reset', reset => {
      reset.style.display = 'inline-block';
    });
  });
};

const whenUserClicks = (when, selector) => {
  const buttonLabel = selector.replace('.', '');
  when(`the user clicks the ${buttonLabel} button`, async () => {
    await page.click(selector);
  });
};

const thenTheCounterShouldBe = then => {
  then(/the counter value should be (\d+)/, async counterValue => {
    const count = await page.$eval('.count', count => count.textContent);
    expect(count).toBe(counterValue);
  });
};

module.exports = {
  givenACountOfOne,
  whenUserClicks,
  thenTheCounterShouldBe,
};
