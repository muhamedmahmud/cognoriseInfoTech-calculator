// script.js
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const value = this.textContent;
  
        if (value === 'C') {
          currentInput = '';
          firstOperand = '';
          secondOperand = '';
          operator = '';
          display.textContent = '';
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
          if (currentInput) {
            firstOperand = currentInput;
            operator = value;
            currentInput = '';
          }
        } else if (value === '=') {
          if (currentInput && firstOperand && operator) {
            secondOperand = currentInput;
            display.textContent = calculate(firstOperand, operator, secondOperand);
            currentInput = display.textContent;
            operator = '';
            firstOperand = '';
            secondOperand = '';
          }
        } else {
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });
  
    function calculate(firstOperand, operator, secondOperand) {
      const a = parseFloat(firstOperand);
      const b = parseFloat(secondOperand);
  
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
        default:
          return '';
      }
    }
  });
  