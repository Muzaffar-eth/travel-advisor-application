import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Slider } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import moment from 'moment';

import useStyles from './styles.js';


const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');


  const [filterParams, setFilterParams] = useState({
    checkin: moment().format('YYYY-MM-DD'), 
    checkout: moment().add(1, 'days').format('YYYY-MM-DD'),
    nights: 1,
    guestsToggle: false, 
    rooms: 1, 
    adults: 1, 
  });

  // Handle change for check-in and check-out dates
  const handleChangeDate = (dateType, value) => {
    if (dateType === 'checkin') {
      setFilterParams((prevState) => ({
        ...prevState,
        checkin: value,
        nights: Number(moment(new Date(filterParams.checkout)).diff(moment(new Date(value)), 'days')),
      }));
    } else if (dateType === 'checkout') {
      setFilterParams((prevState) => ({
        ...prevState,
        checkout: value,
        nights: Number(moment(new Date(value)).diff(moment(new Date(filterParams.checkin)), 'days')),
      }));
    }
  };

  // Handle toggle for guests dropdown
  const handleGuestsToggle = () => {
    setFilterParams((prevState) => ({
      ...prevState,
      guestsToggle: !prevState.guestsToggle,
    }));
  };

  const handleChangeRoomsAndAdults = (type, value) => {
    setFilterParams((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const [zoom, setZoom] = useState(14);

  const handleZoomChange = (event, newZoom) => {
    setZoom(newZoom);
  };

  return (
    <div className={classes.mapContainer}>
      
      <Typography variant="subtitle1">Distance</Typography>
      <div style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Typography variant="body2">5KM</Typography>
        <Slider
          value={zoom}
          min={10}
          max={20}
          onChange={handleZoomChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => (value === 10 ? '5KM' : value === 20 ? '1KM' : '')}        
          aria-labelledby="continuous-slider"
        />
        <Typography variant="body2">1KM</Typography>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{
          key:
            'AIzaSyClzMIjImj1G_M5EF8Adl14ZnZFT-6pyIw', 
        }}
        defaultCenter={coords}
        center={coords}
        zoom={zoom}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: useStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper className={classes.paper} elevation={3}>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                    }
                    alt={place.name}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt=" "
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
