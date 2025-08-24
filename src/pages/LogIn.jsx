import React from 'react';
import Button from '../components/courseCMPNT/Button';
import { useForm } from 'react-hook-form';
import { email } from 'zod';
import { ValidationSchema } from '../schema/Validation';
import { zodResolver } from '@hookform/resolvers/zod';


function LogIn(props) {

    const {register,
         handleSubmit,
          formState: { errors }, 
          reset }
           =useForm({
            resolver: zodResolver(ValidationSchema),
            defaultValues: {
                name: '', email: '', password: '', text: ''}
           })

        //    console.log(errors);


           const onSend = (data)=>{
            console.log("submitted", data);
            alert("Form submitted successfully!");
            reset();
           }


    return (
        <div className='mb-20 mt-32'>
            <form onSubmit={handleSubmit(onSend)} >
                <div className=' w-[400px] sm:w-[450px] h-[700px] bg-blue-800 text-white rounded-lg shadow-lg mx-auto mt-20 p-10 overflow-hidden'>
                    <div className=' gap-4 items-center mt-10'>
                        <label className='text-2xl' htmlFor="name">Name:</label> <br />
                        <input className='w-60 h-10 pl-4 rounded-md ml- bg-transparent/45' type="text"  id="name" {...register("name")} placeholder='Enter your name' />
                {errors.name && (
                    <p className='text-red-500 mt-2 '>{errors.name.message} </p>
                )}
                    
                    </div>

                    <div className=' gap-4 items-center mt-6'>
                        <label className='text-2xl' htmlFor="email">Email:</label><br />
                        <input className='w-60 h-10 pl-4 rounded-md bg-transparent/45' type="email"  id="email" {...register("email")} placeholder='Enter your Email' />
                  {errors.email && (
                    <p className='text-red-500 mt-1'>{errors.email.message} </p>
                  ) }
                    </div>

                    <div className='gap-4 items-center mt-6'>
                        <label className='text-2xl text-gray-300' htmlFor="password">password:</label><br />
                        <input className='w-60 h-10 pl-4 rounded-md bg-transparent/45  ' type="password"  id="password" {...register("password")} placeholder='Enter your password' />
                   {errors.password && (
                    <p className='text-red-500 mt-1'>{errors.password.message} </p>

                   )}
                    </div>

                    <div className="mt-10 sm:ml-10">
                        <textarea className='w-80 h-32 bg-transparent/20 pl-5 pt-3 text-2xl ' placeholder='Text...' name="" id="text" {...register("text")} ></textarea>
                  {errors.text &&  (
                <p className='text-red-500'>{errors.text.message} </p>
                  )}
                  
                   <Button  title='Submit' px='bg-violet-700 px-10 hover:bg-violet-800 mt-4 ml-14' />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LogIn;