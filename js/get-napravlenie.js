// работа кнопок в секции napravnelia

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
      const lastWord = buttonText.trim().split(/\s+/)[0] || "";
      targetInput.value = lastWord;
      window.scrollTo(0, 0);
    }
  }
});
