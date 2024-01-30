import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavorites } from "../../redux/slices/favorites.slice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface PokePreviewProps {
  id: number,
  name: string;
  img: string;
}

export const CardComponent: React.FC<PokePreviewProps> = ({id, name, img }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({id, name, img}))
  }

  const colorWithe = "white"

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          maxHeight: "210px",
          width: "100%",
        }}
        image={img}
        title=""
      />
      <CardContent>
        <Typography variant="h5" textAlign="center">
          {name}
        </Typography>
      </CardContent>
      <CardActions >
        <Stack direction="row" spacing={1.5} sx={{minWidth: "100%", px: 2}} >
        <Button
          fullWidth
          size="small"
          variant="outlined"
          onClick={() => {
            navigate(`pokemon/${name}`);
          }}
        >
          Detalles
        </Button>
        <Button fullWidth size="small" variant="outlined" onClick={handleAddToFavorites}>
          <Favorite sx={{color: `${colorWithe}`, fontSize: "20px"}}></Favorite>
        </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
