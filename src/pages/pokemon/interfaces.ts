export interface PokemonDetailItf {
  name: string;
  height: number;
  weight: number;
  abilities: ability[];
  sprites: { front_default: string; back_default: string, back_shiny: string, front_shiny: string };
  types: [{slot: number, type: {name: string, url: string}}]
  base_experience: number
}

export type ability = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};
