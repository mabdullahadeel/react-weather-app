import React, { ReactElement, useState } from 'react';
// Children
import { AppTitle, WeatherWrapper } from './styles/AppStyles';
import SearchCity from '../SearchCity/SearchCity';
import NotFound from '../NotFound/NotFound';
import Result from '../Results/Result';

function App(): ReactElement {
  const [value, setValue] = useState<string>('');
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const handleFormSubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const apikey = process.env.REACT_APP_API_KEY;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${value}&days=10&aqi=no&alerts=no`

    if (value) {
          fetch(url).then((response) => {
            if (response.ok){
              response.json().then((jsonres) => {
                setError(false);
                setWeatherInfo(jsonres)
              })
            }else throw Error("Invalid City Added")
          })
          .catch((error) => {
            console.log(error);
            setError(true);
            setWeatherInfo(null);
          })
    }
  };

  return (
    <>
      <AppTitle showLabel={(weatherInfo || error) && true}>AB Weathers</AppTitle>
      <WeatherWrapper>
          <AppTitle secondary showResult={(weatherInfo || error) && true}>
            AB Weathers
          </AppTitle>
          <SearchCity 
            setValue={setValue}
            showResult={(weatherInfo || error) && true}
            submit={handleFormSubmission}
            value={value}
          />
        {weatherInfo && <Result location={weatherInfo.location} 
          forcasts={weatherInfo.forecast} 
        />}
        {error && <NotFound />}
      </WeatherWrapper>
    </>
  );
}

export default App;
