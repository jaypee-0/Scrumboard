import React from 'react';
import '../styles/signup.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import inputs from '../data/signup.json'
import { Link } from 'react-router-dom';

const schema = yup.object().shape(
    {
        fullname: yup.string().required().min(6),
        email: yup.string().required("please enter a valid email"),
        password: yup.string().required("please enter password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Minimum eight characters, at least one letter, one number and one special character"
        ),
    }
);
function Signup() {
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        console.log(data)
        console.log('sign up successful')
    }
  return (
    <div className=''>
      <div>
        <div className='text-center'>
          <h3>CHATSCRUM</h3>
          <h3>Sign up here</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column col-md-6 col-lg-5 mx-auto'>
            {inputs.map(({label, name}) => {
                return(
                    <div className='d-flex w-100 flex-column' key={label}>
                    <label>{label}</label>
                    <input  className='py-3 border border-3 mb-4' {...register(name)} />
                    <span className='text-danger mt-1'>{errors[name]?.message}</span>                    
                    </div>
                )
            })}
          <label>User type</label>
          <select {...register("user")} className='border py-3 border-3 mb-4'>
            <option>Developer</option>
            <option>Owner</option>
          </select>
          <button className='border-0 bg-primary rounded ms-auto text-light py-3 px-4'>
            Sign up
          </button>
          <h4>Have an account?<span className='fs-6 ms-4'><Link to={'/sign-in'}>Sign in here</Link></span></h4>
          <p><span><Link to={'/'}>Back to home </Link></span>
            </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;