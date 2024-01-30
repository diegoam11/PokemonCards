export interface PokemonApi {
  name: string;
  url: string;
}

export interface MyPokemon {
  id:number
  name: string;
  sprites: Sprites;
}

export type Sprites = {
  front_default: string;
};
