import React, { ReactElement, useState } from 'react';
// Children
import { AppTitle, WeatherWrapper } from './styles/AppStyles';
import SearchCity from '../SearchCity/SearchCity';
import NotFound from '../NotFound/NotFound';

function App(): ReactElement {
  const [value, setValue] = useState<string>('');
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const handleFormSubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Hey there", value);
  };

  return (
    <>
      <AppTitle showLabel={(weatherInfo || error) && true}> AB Weathers</AppTitle>
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
        {error && <NotFound />}
      </WeatherWrapper>
    </>
  );
}

export default App;
