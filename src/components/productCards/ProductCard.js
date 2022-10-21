import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {AddShoppingCart} from "@mui/icons-material";
import "./ProductCard.css";

const ProductCard = ({products}) => {

    return(
        <div className="products-list">
        {products.map((product) => (
            <Card className="product-preview" sx={{ maxWidth: 345 }} key={product.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image={product.imageURL}
                        alt="green iguana"
                        style={{borderRadius: "5px"}}
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
                        Add to cart <AddShoppingCart/>
                    </Button>
                </CardActions>
            </Card>
            ))}
        </div>
    );
}

export default ProductCard;

