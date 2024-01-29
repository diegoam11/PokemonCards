import {
  Box,
  Container,
  Grid,
  Pagination,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeaderComponent, CardComponent } from "../../components";
import { pokemonsApi } from "../../api/pokemons.api";
import { MyPokemon, PokemonApi } from "./interfaces";

const INIT_MY_POKEMON = { name: "", sprites: { front_default: "" } };

export const Home: React.FC = () => {
  const [myPokemons, setMyPokemons] = useState<MyPokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await pokemonsApi.getAll(page - 1);
        let countApi: number = response.data.count;
        countApi = Math.ceil(countApi / 20);
        setCount(countApi);
        const pokemonDetails = await Promise.all(
          response.data.results.map((pokemon: PokemonApi) =>
            fetchMyPokemons(pokemon.name)
          )
        );

        setMyPokemons(pokemonDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, [page]);

  const fetchMyPokemons = async (name: string): Promise<MyPokemon> => {
    try {
      const response = await pokemonsApi.getOne(name);
      const myPokemon: MyPokemon = {
        name: response.data.name,
        sprites: { front_default: response.data.sprites.front_default },
      };
      return myPokemon;
    } catch (error) {
      console.error(error);
      return INIT_MY_POKEMON;
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Pokemon World"
        description="Can you see all about your favorite pokemons!"
      ></HeaderComponent>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={2}>
            {myPokemons.map((pokemon, index) => (
              <>
                <Grid item xs={3}>
                  <CardComponent
                    key={index}
                    name={pokemon.name}
                    img={pokemon.sprites.front_default}
                  />
                </Grid>
              </>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Box>
        </>
      )}
    </Container>
  );
};
