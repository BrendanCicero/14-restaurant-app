import RestaurantSource from "../../data/restaurant-source";

const Favorite = {
  async render() {
    return `
    <div class='explore'>
      <h2 class='resta__header'>Favorite page</h2>
    </div>
    `;
  },

  async afterRender() {
    const restas = await RestaurantSource.getRestaurantList();
    console.log(restas);
  },
};

export default Favorite;
