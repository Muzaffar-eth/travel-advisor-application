import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api';
import { Header, List, Map } from './components';

const App = () => {
  // State to manage places data and childClicked state
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [autocomplete, setAutocomplete] = useState(null);
  const [coords, setCoords] = useState({ lat: -23.6, lng: -46.5 });

  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [bounds, setBounds] = useState({});
  const [weatherData, setWeatherData] = useState([]);

   // Get user's current location on initial render
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      () => {
        console.log("Unable to retrieve user's location");
      }
    );
  }, []);

   // Fetch places data when bounds or type changes
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

       // Filter places with valid names and reviews
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  useEffect(() => {
    const filteredPlaces = places.filter(
      (place) => Number(place.rating) > rating
    );

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  // Handle place changed event in the Google Maps Autocomplete
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
