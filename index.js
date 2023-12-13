const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    let data = e.target.getAttribute('data');

    switch (data) {
      case 'C':
        result.innerText = '';
        break;

      case '=':
        try {
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = 'Error';
        }
        break;

      case 'back':
        if (result.innerText) {
          result.innerText = result.innerText.slice(0, -1);
        }
        break;

      case '+/-':
        result.innerText = -parseFloat(result.innerText);
        break;

      case '%':
        if (result.innerText) {
          result.innerText = parseFloat(result.innerText) / 100;
        }
        break;

      case '(':
      case ')':
        result.innerText += data;
        break;

      default:
        result.innerText += data;
    }
  });
}
