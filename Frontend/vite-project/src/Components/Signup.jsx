/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit  = (data) => console.log(data)
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box ">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
          {/* name */}
          <div className="mt-4 space-y-3">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullName "
              className="w-80 px-3 py-2 border rounded-md  "
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* email */}
          <div className="mt-4 space-y-3">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email "
              className="w-80 px-3 py-2 border rounded-md  "
              {...register("email", { required: true })}
            />
             <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* password */}
          <div className="mt-4 space-y-3">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password "
              className="w-80 px-3 py-2 border rounded-md  "
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* button */}
          <div className="flex justify-around mt-5">
            <button className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700 duration-300">
              Signup
            </button>
            <p>
              Have account ?
              <button
                to="/"
                className="underline text-blue-500 cursor-pointer"
                onClick={()=> 
                  document.getElementById("my_modal_3").showModal()
                }
              >
               Login
              </button>
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
