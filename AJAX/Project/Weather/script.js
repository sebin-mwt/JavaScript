    let input=document.querySelector("#search");
    let weatherImg=document.getElementById("weather-img");
    let temp=document.querySelector(".temperature");
    let city=document.querySelector(".city");
    let wind=document.getElementById("wind");
    let humidity=document.getElementById("humidity");
    let btn=document.getElementById("buton");

    const apiKey=CONFIG.apiKey;
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

    btn.addEventListener('click',()=>displayWeather(input.value))

    window.onload=()=>{
        displayWeather("Delhi");
    }

    async function displayWeather(cname){


        let data;
        if(!cname){
            alert("Enter the city name..")
            return;
        }

        try{
            
        let url=apiUrl+`&q=${cname}`+`&appid=${apiKey}`;

        let res=await fetch(url);

        data= await res.json();

        }

        catch(err){
            alert("Error occured" +"  " + err)
            return;
        }

        if (data.cod!=200   ){

            alert("City not found");
            return;

        }

        console.log(data);
        

        temp.innerHTML=Math.round(data.main.temp) + "°c" + ` , ${data.weather[0].main}`;
        
        city.innerHTML=`<i class="fa-solid fa-location-dot fa-sm" style="color: #cfecf2;"></i>` +data.name;

        wind.innerHTML=(data.wind.speed) + "m/s";

        humidity.innerHTML=data.main.humidity +"%";
        

        if (data.weather[0].main=="Clouds"){

            weatherImg.src="./Images/cloudy.png";
                
        }

        else if(data.weather[0].main=="Clear"){

            weatherImg.src="./Images/sunny-day.png";
        }

        else if(data.weather[0].main=="Rain"){

            weatherImg.src="./Images/rain.png";

        }
        
        else if(data.weather[0].main=="Snow"){

            weatherImg.src="./Images/snow.png";

        }

    }