import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = ({products}) => {

    return(
        <div className="products-list">
        <Typography></Typography>
        {products.map((product) => (
            <Card className="product-preview" sx={{ maxWidth: 345 }} key={product.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.imageURL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $ {product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
            ))}
        </div>
    );
}

export default ProductCard;

