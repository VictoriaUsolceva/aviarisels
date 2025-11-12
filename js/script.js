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
