/*
В приложенном архиве есть скрипт поиска информации по имени пользователя GitHub и ее 
отрисовка.
- Исправить ошибку, что страница перезагружается и данные не отрисовываются. 
- Решить проблему, что вместо данных выводится undefined.
• Написать скрипт с помощью axios для получения данных о пользователях 
https://jsonplaceholder.typicode.com/posts и отрисовать в ту же верстку. 

Архив с домашним заданием: https://disk.yandex.ru/d/AnDH_sRjZGMlNA
*/

const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

// Исправил ошибку с перезагрузкой (Добавил Event Prevent Default)
// Решил проблему возврата undefined, преобразовав в json формат:

/*
loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`).then((data) => data.json()).then(
    (data) =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
  );
}); 
*/

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  axios('https://jsonplaceholder.typicode.com/posts/').then(
    ({data}) => {
      const searchData = data.filter((elem)=> {
          return elem.userId === Number(searchValue);
        });
        searchData.forEach(element => {
          let li = document.createElement('li');
          resultsContainer.appendChild(li);
          li.innerHTML = `
            <h3> Заголовок поста: ${element.title}</h3>
            <p> Текст поста: ${element.body}</p>
          `
        });
      }
  );
});