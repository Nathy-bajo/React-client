import React, { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { checkTokenValidity } from "./utils";

function Forgot() {
    const [authDetails, setAuthDetails] = useState({
      email: "",
    })

    const onChangeHandler = (e) => {
        setAuthDetails({
          ...authDetails,
          [e.target.name]: e.target.value
        });
        console.log(e.target.value);
      }

      const submitHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://192.168.100.204:8080/forgot', authDetails)
        alert("Check your mail")
      }

      return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

        <form className="space-y-6" onClick={submitHandler}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={authDetails.email} onChange={onChangeHandler}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>


<button
type="submit"
className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
Sign in
</button>

        </form>
        </div>
        </div>
</div>
</div>
      );
    }

    export default Forgot;