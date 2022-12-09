import CONFIG from "../../globals/config";

const createRestaDetailTemplate = (resta) => `
  <div class='wrapper'>
    <div class='center'>
      <h2 class="resta__header">${resta.name}</h2>
      <img class="resta__poster" src="${CONFIG.BASE_IMAGE_URL + resta.pictureId}" alt="${resta.name}" />
      <h3>Information</h3>
    </div>
    <div class="resta__info">
      <h4>Alamat</h4>
      <p>${resta.address}</p>
      <h4>Kota</h4>
      <p>${resta.city}</p>
      <h4>Rating</h4>
      <p>${resta.rating}</p>
    </div>
    <div class="resta__overview">
      <h3>Deskripsi</h3>
      <p>${resta.description}</p>
    </div>
  </div>
`;

const createRestaItemTemplate = (resta) => `
  <article tabindex='0' class='resta__list'>
        <img tabindex='0' class='resta__thumbnail' src='${CONFIG.BASE_IMAGE_URL + resta.pictureId}' alt='${resta.name}'/>
        <p tabindex='0' class='resta__city'>${resta.city}</p>
        <div class='resta__content'>
            <p tabindex='0' class='resta__rating'>Rating : ${resta.rating}</p>
            <h2 tabindex='0' class='resta__title'><a href="/#/detail/${resta.id}">${resta.name}</a></h2>
            <p tabindex='0' class='resta__description'>${resta.description} </p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaItemTemplate,
  createRestaDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
