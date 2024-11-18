// const --- = document.querySelector("---");
// const --- = document.getElementById("---");
// window.addEventListener("---", () => {----});

// test
// window.addEventListener("click", (e) => {
//   console.log(e.target);
// });
// partie a supprimée
// www.themealdb.com/api/json/v1/1/search.php?s=tomato
const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];
//----------------------variables
console.log(input);

async function fetchMeals(search) {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
  console.log(meals);
}

function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun resultat</h2>";
  } else {
    meals.length = 12;
    result.innerHTML = meals
      .map((meal) => {
        let ingrediants = [];
        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingrediant = meal[`strIngredient${i}`];
            let mesure = meal[`strMeasure${i}`];
            ingrediants.push(`<li>${ingrediant}  - ${mesure}`);
          }
        }
        console.log(ingrediants);

        return `
          <li class="card">
          <h2>${meal.strMeal}</h2>
          <p>${meal.strArea}</p>
          <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
          <ul>${ingrediants.join("")}</ul>
          </li>
          `;
      })
      .join("");
  }
}
input.addEventListener("input", (e) => {
  fetchMeals(e.target.value).then(() => mealsDisplay());
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetchMeals();
});
