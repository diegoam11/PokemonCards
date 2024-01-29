export interface PokemonApi {
  name: string;
  url: string;
}

export interface MyPokemon {
  name: string;
  sprites: Sprites;
}

export type Sprites = {
  front_default: string;
};
