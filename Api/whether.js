const getWeather = async()=>{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=patna&appid=8f87151aa8e3a496171fb38f0f4f45a7")

    console.log(response);
    const  res = await response.json();
    console.log(res.main);

}

getWeather()