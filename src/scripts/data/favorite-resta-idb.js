import { openDB } from "idb";
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const FavoriteRestaIdb = {
  async getResta(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestas() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResta(resta) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resta.hasOwnProperty("id")) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, resta);
  },
  async deleteResta(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaIdb;
