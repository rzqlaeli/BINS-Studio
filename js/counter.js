// Select all counter number elements
const counterNumbers = document.querySelectorAll('.counter-number');

function animateCounters() {
  counterNumbers.forEach((counterNumber, index) => {
    const targetNumber = parseInt(counterNumber.textContent.replace('+', ''));  // Extract target number
    let currentNumber = 0;
    const animationDuration = 2000;  // Adjust duration as desired (in milliseconds)
    const increment = Math.ceil(targetNumber / (animationDuration / 16));  // Optimized increment

    const animationFrame = () => {
      currentNumber += increment;

      if (currentNumber > targetNumber) {
        currentNumber = targetNumber; // Ensure we don't overshoot
      }

      counterNumber.textContent = currentNumber + (index === 0 ? '+' : ''); // Add '+' for first counter

      if (currentNumber < targetNumber) {
        requestAnimationFrame(animationFrame);
      }
    };

    requestAnimationFrame(animationFrame);
  });
}

animateCounters();
