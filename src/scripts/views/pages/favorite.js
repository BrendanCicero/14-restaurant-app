import RestaurantSource from "../../data/restaurant-source";

const Favorite = {
  async render() {
    return `
      <h2>Favorite page</h2>
    `;
  },

  async afterRender() {
    const cafe = await RestaurantSource.getRestaurantList();
    console.log(cafe);
  },
};

export default Favorite;
