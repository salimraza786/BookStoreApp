/* eslint-disable no-unused-vars */
import React from "react";
import { Link ,useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box  dark:bg-slate-900 dark:text-slate-900">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:text-white"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg  dark:text-white">Signup</h3>
            {/* name */}
            <div className="mt-4 space-y-3">
              <span className=" dark:text-white">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullName "
                className="w-80 px-3 py-2 border rounded-md  "
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* email */}
            <div className="mt-4 space-y-3">
              <span className=" dark:text-white">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email "
                className="w-80 px-3 py-2 border rounded-md  "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-3">
              <span className=" dark:text-white">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password "
                className="w-80 px-3 py-2 border rounded-md  "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700 duration-300">
                Signup
              </button>
              <p className=" dark:text-white">
                Have account ?{" "}
                <button
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
