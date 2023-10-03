import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImgUrl from '../../assets/img/control.jpeg';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180px"
        image={ImgUrl}
        title="control games"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Juegos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Comparte ideas, algo que te gustaria ver en un juego
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small">Escribir</Button>
      </CardActions>
    </Card>
  );
}
