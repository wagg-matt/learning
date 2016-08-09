/*

- Sign up for openweathermap.org and generate an API key. DONE
- User either $.ajax or $.get to pull weather current data for London DONE
- Print the temperature in console. DONE
- Possible next steps
- 1: Display the temperature in the UI rather than the console DONE
- 2: Display an icon or image depending on the current weather
- 3: add a form prompting user for the city.
- 4: add a toggle for switching between farenheit and celcius DONE

*/

var app = {};

// param updates weather based on city
app.getWeather = function(param) {
	var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var apiKey = 'd40fabdcf5c4ec3051462a54c6d0cb79';
	var city = param || 'london'; // before I get geolocation sorted
	$.ajax({
		url: weatherUrl + city + '&appid=' + apiKey,
		success: function(response) {
			console.log(response);
			app.localWeather(response);
		}
	});
};

app.localWeather = function(response) {
	var temp = response.main.temp;
	var tempCelsius = Math.round(temp - 273.15);
	var humidity = response.main.humidity;
	var sunriseTimestamp = response.sys.sunrise;
	var sunsetTimestamp = response.sys.sunset;
	var sunrise = app.getTime(sunriseTimestamp);
	var sunset = app.getTime(sunsetTimestamp);

	var clouds = response.clouds.all;
	var windSpeed = response.wind.speed;
	var windDirection = response.wind.deg;
	var desc = response.weather[0].description;
	
	$("#temp .value").text(tempCelsius);
	$("#description").prepend(desc);
	$(".weather-data__sunrise").prepend(sunrise + 'am');
	$(".weather-data__sunset").prepend(sunset + 'pm');
	$(".weather-data__humidity").prepend(humidity);
	$(".weather-data__clouds").prepend(clouds);
	$(".weather-data__wind-speed").prepend(windSpeed);
	$(".weather-data__wind-direction i").addClass('towards-' + windDirection + '-deg');
	
	$("#temp-toggle").on('click', function() {
		app.tempToggle(tempCelsius);
	});
};

app.tempToggle = function(tempCelsius) {
	var button = $("#temp-toggle");

	if(button.attr('data-click-state') === '0') {
		// convert to farenheit
		button.attr('data-click-state', 1);
		button.text('in Celsius');
		tempFahrenheit = (tempCelsius * (9 / 5)) + 32;
		tempFahrenheit = tempFahrenheit.toFixed(2);
		$("#temp .value").text(tempFahrenheit);
		$("#temp i").removeClass('wi-celsius');
		$("#temp i").addClass('wi-fahrenheit');
	}else if(button.attr('data-click-state') === '1') {
		// convert back to celsius
		button.attr('data-click-state', 0);
		button.text('in Fahrenheit');
		$("#temp .value").text(tempCelsius);
		$("#temp i").addClass('wi-celsius');
		$("#temp i").removeClass('wi-fahrenheit');
	};
};

app.getTime = function(time) {
	var date = new Date(time * 1000);
	hours = date.getHours();
	minutes = date.getMinutes();
	time = hours + ':' + minutes;
	return time;
};

app.init = function() {
	app.getWeather();
};

$(document).ready(app.init);
