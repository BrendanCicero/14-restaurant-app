import RestaurantSource from "../../data/restaurant-source";

const Home = {
  async render() {
    return `
      <h2>Home Page</h2>
    `;
  },

  async afterRender() {
    const cafe = await RestaurantSource.getRestaurantList();
    console.log(cafe);
  },
};

export default Home;
