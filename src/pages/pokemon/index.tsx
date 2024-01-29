import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemonsApi } from "../../api/pokemons.api";
import { Typography } from "@mui/material";
import { HeaderComponent } from "../../components";
import { PokemonDetailItf } from "./interfaces";

export const PokemonDetail: React.FC = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailItf | null>(null);

  useEffect(() => {
    fetchPokemon();
  }, [pokemonId]);

  const fetchPokemon = async () => {
    try {
      if (pokemonId !== undefined) {
        const response = await pokemonsApi.getOne(pokemonId);
        setPokemon(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderComponent
        title="alsdkfj"
        description="lasdfjladk"
      ></HeaderComponent>
      <h1> jjjjjjjjjjjjjj</h1>
      <Typography>{pokemon?.heigh}</Typography>
    </>
  );
};
