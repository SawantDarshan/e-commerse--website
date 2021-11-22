import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Chip} from "@material-ui/core"
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product, onAddToCart}) => {
    let classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia  className={classes.media} image={product.image.url} title={product.name}></CardMedia>
            <Chip label="PREMIUM"  className = {classes.label}/>
            <CardContent>
                <div className={classes.cardContent}>
                     <Typography gutterBottom  component="h6">
                        {product.name}
                    </Typography>
                    
                     <Typography gutterBottom  component="h6">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}} style={{fontSize: "0.8rem"}}  color="textSecondary"></Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)} >
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
