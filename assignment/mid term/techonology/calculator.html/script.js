function calculate(operator) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');

    if (num1 === '' || num2 === '') {
      resultDiv.textContent = 'Both inputs are required!';
      resultDiv.style.color = 'red';
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operator === '/' && n2 === 0) {
      resultDiv.textContent = 'Cannot divide by 0!';
      resultDiv.style.color = 'red';
      return;
    }

    let result;
    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }

    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.color = 'green';
  }