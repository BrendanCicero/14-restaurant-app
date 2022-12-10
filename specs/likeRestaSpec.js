/* eslint-disable no-undef */
import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestaIdb from "../src/scripts/data/favorite-resta-idb";

describe("Liking A Resta", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resta has not been liked before", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resta: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the resta has not been liked before", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resta: {
        id: 1,
      },
    });
    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeFalsy();
  });

  it("should be able to like the resta", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resta: {
        id: 1,
      },
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resta = await FavoriteRestaIdb.getResta(1);

    expect(resta).toEqual({ id: 1 });
    FavoriteRestaIdb.deleteResta(1);
  });

  it("should not add a resta again when its already liked", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resta: {
        id: 1,
      },
    });

    await FavoriteRestaIdb.putResta({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([{ id: 1 }]);
    FavoriteRestaIdb.deleteResta(1);
  });

  xit("should not add a resta when it has no id", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resta: {},
    });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaIdb.getAllRestas()).toEqual([]);
  });
});
