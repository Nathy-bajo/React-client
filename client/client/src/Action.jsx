import React, { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { checkTokenValidity } from "./utils";
// import { checkTokenValidity } from "./utils";

function Action() {
    const token = localStorage.getItem("door_token")
    const [action, setAction] = useState({
        action: "",

    })

    const onClickHandler = (e) => {
        setAction({
            ...action,
            action: e.target.value
        });
        submitHandler(e, action)
    }

    const submitHandler = async (e, action) => {
        e.preventDefault()
        const response = await axios.post('http://192.168.100.204:8080/door', action, {
            headers: {
                'Authorization': `Bearer: ${checkTokenValidity(token)}`
            }
        })
        console.log(response);

    }

    return (
        <><h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Click the buttons below to open or close the door(0_0)</h2><form>

            <button name="open" value="open" onClick={onClickHandler}>Open</button>
            <br></br><br></br>


            <button name="close" value="close" onClick={onClickHandler}>Close</button>

            <br/><br/>

            <div className="flex items-center justify-between">

<Link to="/reset" className="font-medium text-indigo-600 hover:text-indigo-500">
     <div className="text-sm"/>
  {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> */}
    Change your password here
  {/* </a> */}
  </Link>
</div>
{/* <div> */}



        </form>


        </>


    );
}

export default Action
