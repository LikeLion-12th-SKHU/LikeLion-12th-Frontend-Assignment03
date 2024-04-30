function buttonClick(event) {
  const display = document.querySelector('#display');
  const button = event.target;
  const buttonValue = button.getAttribute('data-value');

  if (buttonValue === 'AC') {
    display.value = '';
  } else if (buttonValue === '=') {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    display.value += button.innerHTML;
  }
}