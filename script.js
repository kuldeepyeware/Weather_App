const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16ce09a40fmshf9af56a1ebcfbd8p1369f6jsncceeab17f598",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var sunriseTime = new Date(response.sunrise).toLocaleTimeString("en-US");
      var sunsetTime = new Date(response.sunset).toLocaleTimeString("en-US");

      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = sunriseTime;
      sunset.innerHTML = sunsetTime;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Pune");

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16ce09a40fmshf9af56a1ebcfbd8p1369f6jsncceeab17f598",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    feels_like_b.innerHTML = response.feels_like;
    humidity_b.innerHTML = response.humidity;
    max_temp_b.innerHTML = response.max_temp;
    min_temp_b.innerHTML = response.min_temp;
    temp_b.innerHTML = response.temp;
    wind_degrees_b.innerHTML = response.wind_degrees;
    wind_speed_b.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

  const options3 = {
	method: "GET",
	headers: {
	  "X-RapidAPI-Key": "16ce09a40fmshf9af56a1ebcfbd8p1369f6jsncceeab17f598",
	  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
  };
  
  fetch(
	"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
	options
  )
	.then((response) => response.json())
	.then((response) => {
	  feels_like_k.innerHTML = response.feels_like;
	  humidity_k.innerHTML = response.humidity;
	  max_temp_k.innerHTML = response.max_temp;
	  min_temp_k.innerHTML = response.min_temp;
	  temp_k.innerHTML = response.temp;
	  wind_degrees_k.innerHTML = response.wind_degrees;
	  wind_speed_k.innerHTML = response.wind_speed;
	})
	.catch((err) => console.error(err));  

	const options4 = {
		method: "GET",
		headers: {
		  "X-RapidAPI-Key": "16ce09a40fmshf9af56a1ebcfbd8p1369f6jsncceeab17f598",
		  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	  };
	  
	  fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  feels_like_c.innerHTML = response.feels_like;
		  humidity_c.innerHTML = response.humidity;
		  max_temp_c.innerHTML = response.max_temp;
		  min_temp_c.innerHTML = response.min_temp;
		  temp_c.innerHTML = response.temp;
		  wind_degrees_c.innerHTML = response.wind_degrees;
		  wind_speed_c.innerHTML = response.wind_speed;
		})
		.catch((err) => console.error(err));	

		const options5 = {
			method: "GET",
			headers: {
			  "X-RapidAPI-Key": "16ce09a40fmshf9af56a1ebcfbd8p1369f6jsncceeab17f598",
			  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
			},
		  };
		  
		  fetch(
			"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad",
			options
		  )
			.then((response) => response.json())
			.then((response) => {
			  feels_like_h.innerHTML = response.feels_like;
			  humidity_h.innerHTML = response.humidity;
			  max_temp_h.innerHTML = response.max_temp;
			  min_temp_h.innerHTML = response.min_temp;
			  temp_h.innerHTML = response.temp;
			  wind_degrees_h.innerHTML = response.wind_degrees;
			  wind_speed_h.innerHTML = response.wind_speed;
			})
			.catch((err) => console.error(err));		

			const options6 = {
				method: "GET",
				headers: {
				  "X-RapidAPI-Key": "16ce09a40fmshf9af56a1ebcfbd8p1369f6jsncceeab17f598",
				  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
				},
			  };
			  
			  fetch(
				"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna",
				options
			  )
				.then((response) => response.json())
				.then((response) => {
				  feels_like_p.innerHTML = response.feels_like;
				  humidity_p.innerHTML = response.humidity;
				  max_temp_p.innerHTML = response.max_temp;
				  min_temp_p.innerHTML = response.min_temp;
				  temp_p.innerHTML = response.temp;
				  wind_degrees_p.innerHTML = response.wind_degrees;
				  wind_speed_p.innerHTML = response.wind_speed;
				})
				.catch((err) => console.error(err));			