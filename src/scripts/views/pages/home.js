import RestaurantSource from "../../data/restaurant-source";
import { createRestaItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <section class='content'>
        <div class='explore'>
          <h2 class='resta__header'>Explore Restaurant</h2>
          <div class='resta' id='resta'>
          
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restas = await RestaurantSource.getRestaurantList();
    const restaList = document.querySelector("#resta");
    restas.restaurants.forEach((resta) => {
      restaList.innerHTML += createRestaItemTemplate(resta);
    });
  },
};

export default Home;
