import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';


const ShippingForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} sm={12} md={6}>
                    <input
                        {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                        type="text"
                        className='form-control'
                        placeholder='First Name'
                    />
                    <span className='error-msg'>{errors.firstName?.type === 'required' && "First name is required"}</span>
                    <span className='error-msg'>{errors.firstName?.type === 'maxLength' && "First name can't exceed 20 characters"}</span>
                    <span className='error-msg'>{errors.firstName?.type === 'pattern' && "Alphabetical characters only"}</span>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <input
                        {...register("lastName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                        type="text"
                        className='form-control'
                        placeholder="Last Name"
                    />
                    <span className='error-msg'>{errors.lastName?.type === 'required' && "Last name is required"}</span>
                    <span className='error-msg'>{errors.lastName?.type === 'maxLength' && "Last name can't exceed 20 characters"}</span>
                    <span className='error-msg'>{errors.lastName?.type === 'pattern' && "Alphabetical characters only"}</span>
                </Grid>
                <Grid item xs={12}>
                    <input {...register("address", { required: true })} type="text" className='form-control' placeholder="Address" />
                    <span className='error-msg'>{errors.address?.type === 'required' && "Address is required"}</span>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <input {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }
                    })} type="email" className='form-control' placeholder="Email" />
                    <span className='error-msg'>{errors.email?.type === 'required' && "Email Address is required"}</span>
                    <span className='error-msg'>{errors.email?.type === 'pattern' && "Enter valid Email Address"}</span>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <input {...register("number", {
                        required: true,
                        maxLength: 11,
                        valueAsNumber: true,
                    })} type="number" className='form-control' placeholder="Number" />
                    <span className='error-msg'>{errors.number?.type === 'required' && "Number is required"}</span>
                    <span className='error-msg'>{errors.number?.type === 'valueAsNumber' && "Number only"}</span>
                    <span className='error-msg'>{errors.number?.type === 'maxLength' && "Max 11 number only"}</span>
                </Grid>
            </Grid>
            <Button type='submit' variant="outlined">Shipping</Button>
        </form >
    )
}

export default ShippingForm