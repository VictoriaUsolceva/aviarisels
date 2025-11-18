const searchInput = document.querySelector(".korotko__input");
const cards = document.querySelectorAll(".ciies_list-item");

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();

  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    if (cardText.includes(searchTerm)) {
      card.style.display = ""; // Показываем карточку
    } else {
      card.style.display = "none"; // Скрываем карточку
    }
  });

  checkAllItemsHidden(".cities_list", ".ciies_list-item", "Ничего не найдено");
});


function checkAllItemsHidden(containerSelector, itemSelector, messageText) {
  // 1. Находим родительский элемент
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error("Родительский контейнер не найден:", containerSelector);
    return;
  }

  // 2. Находим все дочерние элементы внутри контейнера с указанным классом
  // querySelectorAll возвращает NodeList, который похож на массив
  const items = container.querySelectorAll(itemSelector);

  // Если элементов с указанным классом вообще нет, то считаем, что проверять нечего
  if (items.length === 0) {
    console.log(
      `Элементы с классом "${itemSelector}" не найдены в контейнере.`
    );
    return;
  }

  let allHidden = true;

  // 3. Проходимся по всем найденным элементам
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Получаем текущие вычисленные стили элемента
    const style = window.getComputedStyle(item);

    if (style.display !== "none") {
      // Найден видимый элемент. Меняем флаг и прерываем цикл.
      allHidden = false;
      break;
    }
  }

  if (allHidden) {
    const messageDiv = document.querySelector('.empty-message');
    messageDiv.style.display = "block";
    messageDiv.textContent = messageText;

    container.appendChild(messageDiv);
  } else {
    const messageDiv = document.querySelector('.empty-message');
    messageDiv.style.display = "none"; // Скрываем карточку
  }
}
