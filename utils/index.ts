import { CarProps, FilterProps } from "@/types";

const axios = require('axios');




export async function fetchCars(filters:FilterProps) {
    const {manufacturer, model, year, limit, fuel} = filters;

    const options = { 
        method: 'GET',
        url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        headers: {
          'x-rapidapi-key': 'cdb03d7d8cmsh7bad4cacd005ba5p12ffe3jsnb5d753a0b3c0',
          'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        console.log('responses',response.data)
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

export const generateCarImageUrl = (car:CarProps, angle?: string)=>{
    const url = new URL("https://cdn.imagin.studio/getimage");

    const {make, year, model} = car;

    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}

export const updateSearchParams = (type:string, value: string)=>{
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}