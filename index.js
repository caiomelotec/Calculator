let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(number) {

  if (calculation === '0') {
    calculation = number.toString();
  } else {
    calculation += number.toString();
  }
  renderCalculation();

  localStorage.setItem('calculation', calculation);
}

function renderCalculation() {
  document.querySelector('.render-input').innerHTML = calculation;
}

function calculateSqrt() {
  let result = Math.sqrt(Number(calculation));
  calculation = result.toString();
  renderCalculation();

  localStorage.setItem('calculation', calculation);
}