/*


На различных сайтах можно встретить опцию переключения цветовой темы. Необходимо реализовать возможность выбрать и сохранить background-color блока, чтобы даже после закрытия и открытия вкладки, выбранный цвет сохранился.

#полезныессылки 
https://learn.javascript.ru/localstorage
LocalStorage, sessionStorage https://learn.javascript.ru/localstorage
Local Storage vs. Session Storage vs. Cookie
https://ru.hexlet.io/blog/posts/lokalnoe-hranilische-vs-sessionnoe-hranilische-vs-cookie
Использование Web Storage API
https://developer.mozilla.org/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

*/

let btn = document.getElementById('btn');
let wrapper = document.getElementById('wrapper');


// логика смены темы

btn.addEventListener('click', () => {
  wrapper.classList.toggle("dark-theme");
  if(wrapper.classList.contains('dark-theme')) {
    localStorage.setItem('dark-theme', 'true');
  } else {
    localStorage.setItem('dark-theme', 'false');
  }
})

// логика проверки выбранной ранее темы при загрузке страницы

window.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  if(localStorage.getItem('dark-theme') === 'true'){
    wrapper.classList.add("dark-theme");
  }
});