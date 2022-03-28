import axios from "axios"
import decode from 'jwt-decode'

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token
    } else {
        delete axios.defaults.headers.common["Authorization"]
    }
}

export const checkTokenValidity = (token) => {

    const { exp } = decode(token);

    if (exp < Date.now() / 1000) {

        localStorage.removeItem("door_token")
    }
    // console.log("works");
    setAuthToken(token)
    return token
}