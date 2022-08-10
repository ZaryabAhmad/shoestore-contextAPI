import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProductCard from "../component/ProductCard";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ResponsiveAppBar from "../component/ResponsiveAppBar"
import CardMedia from '@mui/material/CardMedia';


import { GlobalContext } from '../ContextProvider/context';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
    boxSizing: "border-box",
    display: "flex"
};
const Home = () => {
    const [productId, setProductId] = useState();
    const [openModal, setOpenModal] = useState(false);

    const { Products, addToCart } = useContext(GlobalContext);
    // console.log(Products, "Products");
    // console.log(CartItems, "CartItems");

    const clickHandler = (productId) => {
        addProduct(productId);
        setOpenModal(false)
    }

    const addProduct = (productID) => {
        // console.log(productID, "productID")
        const productDetail = {
            productID: productID,
        }
        addToCart(productDetail);
    }

    const modalData = Products.find(item => item.id === productId);
    console.log(modalData, "modalData");

    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ width: '100%', padding: "50px 0" }}>
                <Container fixed>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {Products.map(product =>
                            <Grid item lg={4} md={6} xs={12} sx={{ paddingBottom: "10px" }} key={product.id}>
                                <ProductCard product={product} setProductId={setProductId} setOpenModal={setOpenModal} />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>

            {modalData && <Modal
                open={openModal}
                onClose={() => { setOpenModal(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", flexWrap: "Wrap", alignItems: "flex-start" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image={modalData.images[0]}

                            sx={{ width: "42%" }}
                        />

                        <Box sx={{ paddingLeft: "20px", width: "58%", boxSizing: "border-box" }}>
                            <Box style={{ display: 'flex', alignContent: "flex-start", justifyContent: "space-between" }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ lineHeight: "1.4", fontWeight: '700', paddingRight: "20px" }}>
                                    {modalData.name}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {modalData.price}
                                </Typography>
                            </Box>

                            <Box
                                dangerouslySetInnerHTML={{ __html: modalData.description }}
                            />
                            <Button size="medium" variant="contained" onClick={() => { clickHandler(modalData.id) }}>Add to Cart</Button>
                        </Box>
                    </Box >
                </Box>
            </Modal>}
        </>
    )
}

export default Home