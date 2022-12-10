import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestaIdb from '../src/scripts/data/favorite-resta-idb'

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
        id: 'rqdv5juczeskfw1e867',
      },
    });

    expect(
      document.querySelector('[aria-label="like this resto"]'))
        .toBeTruthy();
  });
  
  it('should not show the unlike button when the resta has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resta: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    expect(document.querySelector('[aria-label="unlike this resto"]'))
        .toBeFalsy();
  });
  
  it('should be able to like the resta', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resta: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resta = await FavoriteRestaIdb.getResta('rqdv5juczeskfw1e867');
    expect(resta).toEqual({ id: 'rqdv5juczeskfw1e867' });
    
    FavoriteRestaIdb.deleteResta('rqdv5juczeskfw1e867')
  });
  
  await FavoriteRestaIdb.putResta({id: 'rqdv5juczeskfw1e867'})
});
