import React, { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
// import decode from 'jwt-decode'
import { checkTokenValidity } from "./utils";

function Test() {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    pw: ""
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
    const response = await axios.post('http://192.168.100.204:8080/login', authDetails)
    console.debug(response.data.token) // save this to local storage
    localStorage.setItem("door_token", response.data.token)
    checkTokenValidity(response.data.token)
    console.log(response.data.token);
  }
  return (

    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>

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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="pw"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={authDetails.pw} onChange={onChangeHandler}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
<Link to="/forgot">
            <div className="flex items-center justify-between">


              <div className="font-medium text-indigo-600 hover:text-indigo-500">
                {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> */}
                  Forgot your password?
                {/* </a> */}
              </div>
            </div>
</Link>

            <div>
              {/* <Link to="/reset">Change Password Here</Link> */}
            

              <Link to="/action">

                <button

                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </Link>


            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Test;
