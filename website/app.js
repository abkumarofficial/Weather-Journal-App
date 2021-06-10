// const { json } = require("body-parser");

/* Global Variables */
const apiKey = "cbd3f47cb61f72bbc59cf7f19ede7cb5";
const baseURL = "api.openweathermap.org/data/2.5/weather";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.querySelector('#generate').addEventListener('click', getDataByZipCode);

function getDataByZipCode(){
    const zipCode = document.querySelector('#zip').value;
    const countryCode = document.querySelector('#country').value;
    const content = document.querySelector('#feelings').value;
    if ( zipCode.length > 0 && countryCode.length > 0 && !isNaN(zipCode)) {
        // Calling Web API
        getDataFromWebAPI(zipCode, countryCode)
        .then((data) => postData(data));
    } else {
        alert('Please Verify Zipcode or Country Code that you have provided');
    }
    
    }

// This Function is to get the data from  WEB API
const getDataFromWebAPI = async (zipCode, countryCode)=>{
    const searchURL = `https://${baseURL}?zip=${zipCode},${countryCode}&appid=${apiKey}`
    const res = await fetch(searchURL);
    try {
        const data = await res.json();
        return data;
    }  catch(error) {
        console.log("error", error);
    }
}

const postData = async (data) => {
    const postData = {
        name: data.name !== undefined ? data.name : 'Name not Found',
        date: newDate,
        temp: data.main.temp !== undefined ? data.main.temp : 'Data not Found',
        content: content,
    }
    const response = fetch('/postdata', {
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    .then(() => {
        getData();
    });
}

const getData = async () => {
    const response =await fetch('/getdata')
    .then((response) => response.json())
    .then((responseJSON) => console.log('responseJson', responseJSON))
}