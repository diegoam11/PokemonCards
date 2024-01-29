import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface PokePreviewProps {
  name: string;
  img: string;
}

export const CardComponent: React.FC<PokePreviewProps> = ({ name, img }) => {
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
      <CardActions>
        <Button fullWidth variant="outlined" size="small">
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
};
