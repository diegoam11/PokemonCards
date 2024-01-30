import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemonsApi } from "../../api/pokemons.api";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { PokemonDetailItf } from "./interfaces";

export const PokemonDetail: React.FC = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailItf | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchPokemon();
  }, [pokemonName]);

  const fetchPokemon = async () => {
    try {
      if (pokemonName !== undefined) {
        const response = await pokemonsApi.getOne(pokemonName);
        setPokemon(response.data);
        setTimeout(() => setLoading(false), 400);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Container maxWidth="lg">
        {loading ? (
          <CircularProgress
            sx={{ display: "flex", justifyContent: "center", mt: 4 }}
          />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h2">{pokemon?.name}</Typography>
              <Divider sx={{ my: 2 }} />
              <Stack direction="row">
                <Typography variant="h6">Type: </Typography>
                <Box sx={{ ml: 2 }}>
                  {pokemon?.types.map((type) => (
                    <Chip
                      color="success"
                      variant="outlined"
                      label={type.type.name}
                      sx={{ mr: 2 }}
                    />
                  ))}
                </Box>
              </Stack>
              <Typography variant="h6" sx={{ my: 1.5 }}>
                Base experience: {pokemon?.base_experience}
              </Typography>
              <Typography variant="h6">
                Height: {pokemon?.height} inch
              </Typography>
              <Typography variant="h6" sx={{ my: 1.5 }}>
                weight: {pokemon?.weight}
              </Typography>
              <Stack direction="row">
                <Typography variant="h6">Main abilities: </Typography>
                <Box sx={{ ml: 2 }}>
                  {pokemon?.abilities.map((ability) => (
                    <Chip
                      color="primary"
                      variant="outlined"
                      label={ability.ability.name}
                      sx={{ mr: 2 }}
                    />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper>
                    <img
                      src={pokemon?.sprites.front_default}
                      style={{ width: "90%" }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <img
                      src={pokemon?.sprites.back_shiny}
                      style={{ width: "90%" }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <img
                      src={pokemon?.sprites.front_shiny}
                      style={{ width: "90%" }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <img
                      src={pokemon?.sprites.back_default}
                      style={{ width: "90%" }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
