window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
window.promises = [];

// Generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// Create an array of promises with random times
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${time / 1000} seconds`);
    }, time);
  });
  promises.push(promise);
}

// Use Promise.any() to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });
