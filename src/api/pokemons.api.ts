import { instance } from "./base.api";

const endpoint = "pokemon/";
const limit = 20;

export const pokemonsApi = {
  getAll: function (page: number) {
    return instance.get(endpoint, { params: { offset: page*20, limit: limit } });
  },
  getOne: function (name: string | number) {
    return instance.get(endpoint + name)
  }
};
