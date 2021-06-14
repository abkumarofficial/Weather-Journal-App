# Weather Journal App Project

#### What I used: HTML, CSS, Javascript (Vanilla)

## Description

This is the third project for [Udacity's Front End Web Developer Nanodegree program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011).
The aim of this project is to create an asynchronous web app that uses Weather API ([OpenWeatherMap](https://openweathermap.org/)) and user data to dynamically update the UI.

## Demo
![Weather Journal App demo](https://github.com/emiribegic/weather-journal-app/blob/master/demo/weather-journal-app-demo.gif)

## Setup

To run this web app, follow the steps below:

1. Make sure that Node and packages (Express, Body-Parser, and Cors) are installed on your local machine.

2. Acquire API credentials from [OpenWeatherMap](https://openweathermap.org/) website. 
Delete the existing credentials in the `app.js (apiKey)` and use your own credentials.

3. Run the command  `npm i` followed by `node server.js` in your terminal to start the server.

4. You can access it by going to http://localhost:8000/

5. Provide the zipcode and country code to get the result.

## Example
```
zipcode: 560037
country code: IN
feeling (optional): cold