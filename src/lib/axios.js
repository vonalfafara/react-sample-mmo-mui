import axios from "axios"

const http = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
})

export default http