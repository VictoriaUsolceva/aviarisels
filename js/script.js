document.querySelector(".menu__button")?.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("menu_opened");
});

// Получаем элемент, у которого нужно удалить класс
const myElement = document.querySelector(".menu");
const classNameToRemove = "menu_opened";
// Создаем медиа-запрос для размера экрана
const mediaQuery = window.matchMedia("(min-width: 768px)"); // Укажите свой размер (например, 768px)
// Функция, которая будет удалять класс
function removeClassOnSizeChange(e) {
  if (e.matches) {
    // Если окно меньше или равно 768px, удаляем класс
    myElement.classList.remove(classNameToRemove);
  }
}
removeClassOnSizeChange(mediaQuery);
mediaQuery.addEventListener("change", removeClassOnSizeChange);

// функция чтобы узнать ширину html без прокрутки
const html = document.querySelector("html");
function updateWidth() {
  const offsetWidth = html.offsetWidth;
  html.style.setProperty("--window-width", `${offsetWidth}px`);
}
window.addEventListener("resize", updateWidth);
updateWidth();

// работа кнопок в секции napravnelia

// // Получаем ссылку на кнопку
// const toColombo = document.getElementById("toColombo");
// // Получаем ссылку на input
// const inputWhere = document.getElementById("where");

// // Добавляем обработчик события клика
// toColombo.addEventListener("click", function () {
//   // Подставляем новое значение в value input
//   inputWhere.value = "Шри-Ланка";
//   console.log(inputWhere, toColombo)
//   window.scrollTo(0, 0)
// });

// Получаем ссылку на контейнер списка
const itemList = document.querySelector(".napravlenia__list");
// Получаем ссылку на целевой input
const targetInput = document.getElementById("where");

// Добавляем обработчик события клика к родительскому элементу
itemList.addEventListener("click", function (event) {
  // Определяем, был ли клик на элементе с классом item
  let clickedItem = event.target.closest(".napravlenia__list-item");

  if (clickedItem) {
    // Находим кнопку внутри кликнутого элемента списка
    const button = clickedItem.querySelector(".napravlenia__button");

    if (button) {
      const buttonText = button.textContent || button.innerText;
      const lastWord = buttonText.trim().split(/\s+/)[0] || '';
      targetInput.value = lastWord;
      window.scrollTo(0, 0);
    }
  }
});
