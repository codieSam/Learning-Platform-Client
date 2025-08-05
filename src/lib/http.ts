import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
        "Content-Type":"application/json", // send vairako data ko format
        "Accept": "Application/json" // receive huda kasto type ko format ko receive garney
    }
})

export default API