// Foursquare API Info
const clientId = '0R0L4AWMAOU0YDTA5MCRX2T3W0ZXUUIFZHPTM1HGT5Z0LODX';
const clientSecret = 'QRVHNYDDWOMOMHR0YXJDUB44VBQ3FN1HBYRG5UZJNOAKEX4M';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'c3f5e6f5edf51bdced28c955b35dfec8';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url + city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200901`;


 try {
    const response = await fetch(urlToFetch);
    if(response.ok == true)
    {
        console.log(`${response}`);
    const jsonResponse =await JSON.stringify(response);
    console.log(`${jsonResponse}`);
    const venues = {jsonResponse: { response, groups: {}, groups: [0], items: {}}};
    console.log(`${venues}`);
    venues.map(venues => venues.valueToStore);
    }
    return venues;
}

catch {
    console.log(`error`);
    }
    return renderVenues(venues);
}

const getForecast = async() => {
    
    const urlToFetch = (`${weatherUrl}&q=${$input.val()}&APPID=${openWeatherKey}`);
    
    try {
        const response = await fetch(urlToFetch);
        if(response.ok == true)
        {
            const jsonResponse = await response.json();
            console.log(`${jsonResponse}`);
        }
        return jsonResponse;
    }

    catch {
        console.log(`error`);
    }
    return renderForecast(forecast);
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venue[index];
    const venueIcon = venue[0];
    const venueImgSrc = (`bg_64${venueIcon}bg_64`);
    let venueContent = createVenueHTML($venue, $input, urlToFetch);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues);
  getForecast().then(forecast);
  return false;
}

$submit.click(executeSearch)