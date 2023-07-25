import axios from 'axios';

/* const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'; */
export const getPlacesData = async (type, sw, ne) => {
  try {
    // Making a GET request to the RapidAPI to fetch places data
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-key': '344c04eademshdead6b40ed998fcp1eb7adjsn6cffd5db7de8',  // RapidAPI Key for authentication
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`,
        {
          params: { lat, lon: lng },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
