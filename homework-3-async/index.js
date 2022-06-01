// 1.Напишите с помощью изученной конструкции try/catch простую валидацию инпута для числового значения. Если поле пустое, текстовое содержимое не является числом, или значение меньше 5 или больше 10 — пробросьте ошибку с соответствующим текстом. Чтобы пользователю было понятен текст ошибки, выводите текст ошибки в абзац под инпутом.

// function validateInput(value) {
//   try {
//       if (value === '') {
//           throw new Error ('Вы не ввели значение!');
//       } else if (!isFinite(value)) {
//           throw new Error ('Значение должно быть числом!');
//       } else if (Number(value) < 5 || Number(value) > 10) {
//         throw new Error ('значение должно не быть меньше 5 и не больше 10')
//       } 
//       blockForMassage.innerText = '';  
//   } catch (e) {
//       blockForMassage.innerText = e.message;   
//   }
// }

// let input = document.querySelector('#input');
// let blockForMassage = document.querySelector('#errorMessage');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', (e)=> {
//   validateInput(input.value);
//   input.value = '';
// });

// 2.Переписать пример лотереи на async/await. ( https://codesandbox.io/s/quirky-brown-suemou?file=/src/index.js )

function lottery() {
  console.log("Вы начали игру");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    }, 1000);
  });
  return promise;
}

// с помощью .then

// lottery()
//   .then(() => console.log("Вы выиграли"))
//   .then(() => console.log("Вам заплатили"))
//   .catch(() => console.log("Вы проиграли"))
//   .finally(() => console.log("Игра закончена"));

// с помощью async/await

const startGame = async () => {
  try {
    await lottery();
    console.log("Вы выиграли");
    console.log("Вам заплатили");
  } catch (e) {
    console.log("Вы проиграли")
  }
  console.log("Игра закончена")
};

startGame();