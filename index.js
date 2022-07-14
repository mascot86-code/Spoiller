// Выбираем все элементы на страницы (на выходе получаем NodeList, псевдомассив, а не массив)

const spoiller = document.querySelectorAll(".spoiller-content");

// Первый вариант решения через for, более грамозкий вариант

// let len = spoiller.length;

// for (let i = 0; i < len; i++) {
//   spoiller[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

// Второй вариант решения в одну строчку с помощью метода перебора foreach, который работает с коллекциями

spoiller.forEach((item) =>
  item.addEventListener("click", () => item.classList.toggle("active")),
);
