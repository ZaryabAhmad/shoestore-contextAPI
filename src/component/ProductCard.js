import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { GlobalContext } from '../ContextProvider/context';

const ProductCard = (props) => {
    const { product, setProductId, setOpenModal } = props;
    const { addToCart } = useContext(GlobalContext);

    const handleClick = () => {
        setProductId(product.id);
        setOpenModal(true);
    }
    const addProduct = (productID) => {
        // console.log(productID, "productID")
        const productDetail = {
            productID: productID,
        }

        addToCart(productDetail);
    }

    return (
        <Card >
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                onClick={handleClick}
                image={product.images[0]}
            />

            <CardContent>
                <Box style={{ display: 'flex', alignContent: "flex-start", justifyContent: "space-between" }}>
                    <Typography gutterBottom variant="h6" component="div" style={{ lineHeight: "1.4", fontWeight: '700', paddingRight: "20px" }}>
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        ${product.price}
                    </Typography>
                </Box>

                <Box
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <Button size="medium" variant="contained" fullWidth={true} onClick={() => { addProduct(product.id) }}>Add to Cart</Button>
            </CardContent>
        </Card >
    )
}

export default ProductCard