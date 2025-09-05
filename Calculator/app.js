let current = '';
      let operator = '';
      let firstOperand = null;

      function appendNumber(num) {
        current += num;
        document.getElementById('display').value = current;
      }

      function setOperation(op) {
        if (current === '') return;
        if (firstOperand === null) {
          firstOperand = parseFloat(current);
        } else {
          firstOperand = operate(firstOperand, parseFloat(current), operator);
        }
        operator = op;
        current = '';
        document.getElementById('display').value = '';
      }

      function calculateResult() {
        if (operator && current !== '') {
          const result = operate(firstOperand, parseFloat(current), operator);
          document.getElementById('display').value = result;
          current = '';
          operator = '';
          firstOperand = null;
        }
      }

      function clearDisplay() {
        current = '';
        operator = '';
        firstOperand = null;
        document.getElementById('display').value = '';
      }

      function operate(a, b, op) {
        switch (op) {
          case '+': return a + b;
          case '-': return a - b;
          case '*': return a * b;
          case '/': return b !== 0 ? a / b : 'Error';
          default: return b;
        }
      }