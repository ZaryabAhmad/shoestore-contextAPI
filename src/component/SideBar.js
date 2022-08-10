import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { GlobalContext } from '../ContextProvider/context';

const SideBar = (props) => {
    const { totalProductWithCount, totalCartProduct } = props;

    const { showSidebar, removeFromCart, addToCart, minusQuantity, toggleSidebar } = useContext(GlobalContext);


    const removeItem = (removeProductId) => {
        const ProductDetail = {
            productID: removeProductId,
        }

        removeFromCart(ProductDetail)
    };

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
    // console.log("showSideBar -->", showSidebar)
    return (

        <Drawer
            anchor="right"
            open={showSidebar}
            onClose={toggleSidebar}
            sx={{
                '& .MuiDrawer-paper': {
                    maxWidth: "320px",
                    width: "100%",
                    maxHeight: "100vh",
                    padding: "40px 15px 20px",
                    boxSizing: "border-box",
                    overflowY: "auto"
                },
            }}
        >
            <Box>
                {totalProductWithCount.map((item) =>
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
                                Price: ${item.price}
                            </Typography>
                            <Button variant="contained" onClick={() => { removeItem(item.id) }}>Remove</Button>
                        </CardContent>
                    </Card>
                )}
                {totalCartProduct > 0 ? <Button fullWidth type="button" variant="contained" component={Link} to="/checkout" onClick={toggleSidebar}>Go to CheckOut</Button> : <Typography variant="h6" color="text.secondary" style={{ textAlign: "center" }}>Empty Cart</Typography>}
                {/* <Link to="/checkout" type="button" variant="contained">Go to CheckOut</Link> */}
            </Box>
        </Drawer>
    )
}

export default SideBar