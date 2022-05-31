/*
\1.Напишите с помощью изученной конструкции try/catch простую валидацию инпута для числового значения. Если поле пустое, текстовое содержимое не является числом, или значение меньше 5 или больше 10 — пробросьте ошибку с соответствующим текстом. Чтобы пользователю было понятен текст ошибки, выводите текст ошибки в абзац под инпутом.
2.Переписать пример лотереи на async/await. ( https://codesandbox.io/s/quirky-brown-suemou?file=/src/index.js )
*/

// 1

function validateInput (value) {
  try {
      if (value === '') {
          throw new Error ('Вы не ввели число!');
      } else if (!isFinite(value)) {
          throw new Error ('Значение должно быть числом!');
      } else if (Number(value) < 5 && Number(value) > 10) {
        throw new Error ('значение должно не быть меньше 5 и не больше 10')
      } 
      return value;
  } catch (e) {
      console.log(e.message);   
  }
}

// if (result != undefined) {
//   console.log(result);   
// }


let input = document.querySelector('#input');
let blockForMassage = document.querySelector('#errorMessage');
let btn = document.querySelector('#btn');

btn.addEventListener('click', (e)=> {
  console.log(input.value);
  validateInput(input.value);
});