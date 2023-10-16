import axios from "axios";

export function useApiFetch(){
    return axios.create({
        baseURL: 'https://aboutorly-backend.vercel.app/',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}