// const { json } = require("body-parser");

/* Global Variables */
const apiKey = "cbd3f47cb61f72bbc59cf7f19ede7cb5";
const baseURL = "api.openweathermap.org/data/2.5/weather";


// Filling UI with dummy entries
document.querySelector('#date').innerHTML = `<div>Date: 5.11.2021</div>`;
document.querySelector('#temp').innerHTML = `<div>Temperature: 294.13</div>`;
document.querySelector('#content').innerHTML = `<div>Content: Feeling Cold</div>`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.querySelector('#generate').addEventListener('click', getDataByZipCode);
let feeling = ''

function getDataByZipCode(){
    const zipCode = document.querySelector('#zip').value;
    const countryCode = document.querySelector('#country').value;
    if ( zipCode.length > 0 && countryCode.length > 0 && !isNaN(zipCode)) {
        // Calling Web API
        getDataFromWebAPI(zipCode, countryCode)
        .then((data) => postData(data));
    } else {
        alert('Invalid Zipcode or Country Code Provided, Please Verify!');
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
        content: document.querySelector("#feelings").value,
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
    .then((responseJSON) => {
        console.log(responseJSON);
        document.querySelector('#date').innerHTML = `<div>Date: ${responseJSON.date}</div>`;
        document.querySelector('#temp').innerHTML = `<div>Temperature: ${responseJSON.temp}</div>`;
        document.querySelector('#content').innerHTML = `<div>Content: ${responseJSON.content}</div>`;
    })
}