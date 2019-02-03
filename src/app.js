'use strict';

// grab all of our HTML elements
const count = document.querySelector('.count');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');

// initialize the reset visibility
toggleResetVisibility();

// add the event listeners
add.addEventListener('click', () => {
  addOneToCount();
  toggleResetVisibility();
});

subtract.addEventListener('click', () => {
  subtractOneFromCount();
  toggleResetVisibility();
});

reset.addEventListener('click', () => {
  resetCount();
  reset.style.display = 'none';
});

// our function defining how to add
function addOneToCount() {
  const currentCount = count.textContent;
  count.textContent = parseInt(currentCount, 10) + 1;
}

// our function defining how to subtract
function subtractOneFromCount() {
  const currentCount = count.textContent;
  count.textContent = parseInt(currentCount, 10) - 1;
}

// our function defining how to reset
function resetCount() {
  count.textContent = 0;
}

// our function toggling the visibility of the reset button
function toggleResetVisibility() {
  const currentCount = count.textContent;

  if (currentCount === '0') {
    reset.style.display = 'none';
  } else {
    reset.style.display = 'inline-block';
  }
}
