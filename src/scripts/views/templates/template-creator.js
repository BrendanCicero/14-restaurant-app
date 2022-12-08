import CONFIG from "../../globals/config";

const createRestaDetailTemplate = (resta) => `
  <h2 class="resta__title">${resta.title}</h2>
  <img class="resta__poster" src="${
    CONFIG.BASE_IMAGE_URL + resta.poster_path
  }" alt="${resta.title}" />
  <div class="resta__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resta.tagline}</p>
    <h4>Release Date</h4>
    <p>${resta.release_date}</p>
    <h4>Duration</h4>
    <p>${resta.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${resta.vote_average}</p>
  </div>
  <div class="resta__overview">
    <h3>Overview</h3>
    <p>${resta.overview}</p>
  </div>
`;

const createRestaItemTemplate = (resta) => `
  <article tabindex='0' class='resta__list'>
        <img tabindex='0' class='resta__thumbnail' src='${
          CONFIG.BASE_IMAGE_URL + resta.pictureId
        }' alt='${resta.name}'/>
        <p tabindex='0' class='resta__city'>${resta.city}</p>
        <div class='resta__content'>
            <p tabindex='0' class='resta__rating'>Rating : ${resta.rating}</p>
            <h2 tabindex='0' class='resta__title'>${resta.name}</h2>
            <p tabindex='0' class='resta__description'>${resta.description} </p>
        </div>
    </article>
`;

export { createRestaItemTemplate, createRestaDetailTemplate };
