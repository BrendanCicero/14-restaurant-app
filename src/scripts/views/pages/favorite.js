import RestaurantSource from "../../data/restaurant-source";

const Favorite = {
  async render() {
    return `
      <h2>Favorite page</h2>
    `;
  },

  async afterRender() {
    const restas = await RestaurantSource.getRestaurantList();
    console.log(restas);
  },
};

export default Favorite;
