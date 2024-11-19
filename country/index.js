// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

let countries = [];
const card = document.querySelector(".countries-container");

async function fetchccountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data[10]));

  console.log(countries);
  console.log(countries.name.common);

  card.innerHTML = `
    <img src="${countries.flags.png}" alt="description"/>
  <h2>${countries.name.common}</h2>
  <p>${countries.capital}</p>
  <p>population ${countries.population}</p>
  `;
}

function countrieDisplay() {
  card.innerHTML = countries.map(() => {
    return `

    <div class=".range-container" >
     <img src="${countries.flags.png}" alt="description"/>
     <h2>${countries.name.common}</h2>
     <p>${countries.capital}</p>
     <p>population ${countries.population}</p>
     </div>
     `;
  });
}

countrieDisplay();
fetchccountries();

// <li class="range-container ">
//         <h2>${"test"}</h2>

//         </li>
// function mealsDisplay() {
//   if (meals === null) {
//     result.innerHTML = "<h2>Aucun resultat</h2>";
//   } else {
//     meals.length = 12;
//     result.innerHTML = meals
//       .map((meal) => {
//         let ingrediants = [];
//         for (i = 1; i < 21; i++) {
//           if (meal[`strIngredient${i}`]) {
//             let ingrediant = meal[`strIngredient${i}`];
//             let mesure = meal[`strMeasure${i}`];
//             ingrediants.push(`<li>${ingrediant}  - ${mesure}`);
//           }
//         }
//         console.log(ingrediants);

//         return `
//
//           <h2>${meal.strMeal}</h2>
//           <p>${meal.strArea}</p>
//           <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
//           <ul>${ingrediants.join("")}</ul>
//           </li>
//           `;
//       })
//       .join("");
//   }

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
