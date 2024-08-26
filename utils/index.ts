const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'x-rapidapi-key': 'cdb03d7d8cmsh7bad4cacd005ba5p12ffe3jsnb5d753a0b3c0',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};



export async function fetchCars() {
    try {
        const response = await axios.request(options);
        console.log(response.data)
        const result = response.data;
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const calculateCarRent = (city_mpg:number, year:number)=>{
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;


    const mileageRate = city_mpg *  mileageFactor;
    const ageRate = (new Date().getFullYear()-year) * ageFactor;

    const rentalRatePerDay =basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}