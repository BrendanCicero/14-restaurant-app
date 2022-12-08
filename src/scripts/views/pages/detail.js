import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div id="resta__detail" class="resta__detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resta = await RestaurantSource.getRestaurantDetail(url.id);
    const restaItem = resta.restaurant;
    console.log(restaItem)
    const restaDetail = document.querySelector("#resta__detail");
    restaDetail.innerHTML = createRestaDetailTemplate(restaItem);
  },
};

export default Detail;
