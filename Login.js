import React from 'react';
import {Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


function Login(){
    const {
        register,
        handleSubmit,
        formState:{errors},
    } =useForm();
    const navigate=useNavigate()
    
    const onFormSubmit=(userCredentialObject)=>{
        console.log(userCredentialObject);
        navigate("./Admin")
    };
    return(

        <div>
            <div className='display-5 text-center text-secondary'>Login</div>

            <Form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group className="mb-3" >
                    {errors.username && <p className='text-danger'>*Username is required</p>}
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" {...register("username",{required:true})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    {errors.password && <p className='text-danger'>Password is required</p>}
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password",{required:true})} />    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
        </div>
    )
}

export default Login;