import axios from "axios";

export const getWeather = async (city) => {
    const API_KEY = '317147e078c54d6c882102156230710'
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    return response
}