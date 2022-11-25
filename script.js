async function getWeatherData(){

    var cityNames = document.getElementById('cityNames').value;

    let weatherReport = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7`)

    let res = await weatherReport.json()

    console.log(res);

    var weatherCard = document.getElementById('weatherCard');

    weatherCard.innerHTML=`<div class="card" style="width:33rem box-sizing:border">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAC5rizdKQgZ_G-WVo9uAVaxcv40JUZAY9A&usqp=CAU.jpg" 
    width:40px class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Temperature : ${res.main.temp}</p>
      <p class="card-text">Windspeed: ${res.wind.speed}</p>
      <p class="card-text">Humidity : ${res.main.humidity}</p>
      
    </div>
  </div>`
}