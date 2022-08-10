import React, { useReduce, useContext } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { GlobalContext } from "../ContextProvider/context";

const YourCart = () => {
    const { Products, addToCart, minusQuantity } = useContext(GlobalContext);
    const cartProduct = Products.filter(cartItem => {
        if (cartItem.count > 0) {
            return cartItem
        }
    });
    const subtotal = cartProduct.reduce((sum, currentVal) => sum + (currentVal.price * currentVal.count), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const tax = subtotal > 0 ? 0 : 0;
    const total = subtotal + shipping + tax;

    const plusProductQuantity = (addQuantityItemId) => {
        const addQty = {
            productID: addQuantityItemId
        }
        addToCart(addQty)
    }

    const minusProductQuantity = (minusQuantityItemId) => {
        const minusQty = {
            productID: minusQuantityItemId
        }
        minusQuantity(minusQty)
    }

    return (
        <>
            <Box sx={{
                background: "rgb(203, 203, 203)",
                padding: "12px 15px",
                marginBottom: "20px"
            }}>
                <Typography variant="h6" color="text.secondary" sx={{
                    fontWeight: "700"
                }}>
                    In Your Cart
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: "700" }}>Your Items</Typography>
                {cartProduct.map((item) =>
                    < Card sx={{ maxWidth: "100%", display: "flex", alignItems: "flex-start", padding: "15px 10px", marginBottom: "16px" }} key={item.id}>
                        <CardMedia
                            component="img"
                            image={item.images[0]}
                            alt=""
                            sx={{
                                height: "110px",
                                width: "110px"
                            }}
                        />
                        <CardContent sx={{
                            width: "calc(100% - 110px)",
                            padding: "0 0 0 15px !important"
                        }}>
                            <Typography variant="body1" color="text.secondary" sx={{
                                marginBottom: "5px",
                                fontWeight: "700"
                            }}>
                                {item.name}
                            </Typography>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => { minusProductQuantity(item.id) }}
                                    style={{ minWidth: "36px", height: "36px", fontSize: "24px", padding: "0" }}
                                >-</Button>
                                <Typography variant="body2" style={{ width: "calc(100% - 72px)", fontSize: "18px", lineHeight: "2", color: "#000", textAlign: "center" }}>{item.count}</Typography>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => { plusProductQuantity(item.id) }}
                                    style={{ minWidth: "36px", height: "36px", fontSize: "24px", padding: "0" }}
                                >+</Button>
                            </div>
                            <Typography variant="body2" color="text.secondary" sx={{
                                margin: "5px 0"
                            }}>
                                Price: ${item.price} * {item.count}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                margin: "5px 0"
                            }}>
                                Total Price: ${item.price * item.count}
                            </Typography>
                        </CardContent>
                    </Card>

                    // {setSubtotal(item.price * item.count)}
                )}
                <Grid container style={{ margin: "20px 0 5px" }}>
                    <Grid item xs={8}>
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>Subtotal</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" style={{ textAlign: "right", fontWeight: "700" }}>$ {subtotal}</Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: "5px" }}>
                    <Grid item xs={8}>
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>Shipping</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" style={{ textAlign: "right", fontWeight: "700" }}>$ {shipping}</Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: "5px" }}>
                    <Grid item xs={8}>
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>Tax</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" style={{ textAlign: "right", fontWeight: "700" }}>$ {tax}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>Total</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" style={{ textAlign: "right", fontWeight: "700" }}>$ {total}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default YourCart