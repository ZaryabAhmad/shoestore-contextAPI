import React from 'react'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from "../component/ResponsiveAppBar"
import YourCart from "../component/YourCart"
import ShippingForm from "../component/ShippingForm"

const Checkout = () => {


    return (
        <>
            <ResponsiveAppBar />

            <Box sx={{ width: '100%', padding: "50px 0" }}>
                <Container fixed>
                    <Grid container spacing={2}>
                        <Grid item sx={12} sm={12} md={7} lg={8}>
                            <ShippingForm />
                        </Grid>
                        <Grid item sx={12} sm={12} md={5} lg={4}>
                            <YourCart />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Checkout