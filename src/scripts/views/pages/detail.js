import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `
      <div id="resta__detail" class="resta__detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resta = await RestaurantSource.getRestaurantDetail(url.id);
    console.log(resta);
  },
};

export default Detail;
