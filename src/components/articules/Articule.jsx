   import "./articule.css"
   import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

    const Articule = ({articule}) => {
    return <>   
       <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={articule.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            USD {articule.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {articule.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
} 

export default Articule