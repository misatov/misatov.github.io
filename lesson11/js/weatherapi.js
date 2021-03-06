/* let cityID = 5604473;
let appid = '8bbd262e26fa22b9acfd7a7ad5b87217';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${appid}&units=imperial'; */
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial';

fetch (apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    document.getElementById('temperature').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc); 


});




