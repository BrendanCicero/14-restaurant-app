import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await RestaurantSource.getRestaurantDetail(url.id);
    console.log(cafe);
  },
};

export default Detail;
