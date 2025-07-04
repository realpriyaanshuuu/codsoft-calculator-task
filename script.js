const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operatorUsed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    // Prevent duplicate operators
    if (['+', '-', '*', '/'].includes(value)) {
      if (operatorUsed) return;
      operatorUsed = true;
    } else if (value !== '.') {
      operatorUsed = false;
    }

    // Avoid multiple decimals
    if (value === '.' && currentInput.endsWith('.')) return;

    currentInput += value;
    display.textContent = currentInput;
  });
});
