import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/skip-link.css";
import restaurant from "../DATA.json";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

const mains = () => {
  let restaList = "";
  let restaurants = restaurant.restaurants;

  restaurants.forEach((item) => {
    restaList += `
        <article tabindex='0' class='resta__list'>
            <img tabindex='0' class='resta__thumbnail' src='${item.pictureId}' alt='${item.name}'/>
            <p tabindex='0' class='resta__city'>${item.city}</p>
            <div class='resta__content'> 
              <p tabindex='0' class='resta__rating'>Rating : ${item.rating}</p>
              <h2 tabindex='0' class='resta__title'>${item.name}</h2>
              <p tabindex='0' class='resta__description'>${item.description} </p>
            </div>
        </article>
      `;
  });

  document.getElementById("resta").innerHTML = restaList;
};

document.addEventListener("DOMContentLoaded", mains);
