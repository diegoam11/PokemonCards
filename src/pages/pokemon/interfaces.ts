export interface PokemonDetailItf {
  name: string;
  heigh: number;
  abilities: ability[];
  sprites: { front_default: string; back_default: string };
}

export type ability = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};
