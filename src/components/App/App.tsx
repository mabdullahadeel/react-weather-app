import { ReactElement, useState } from 'react';
// Children
import { AppTitle, WeatherWrapper } from './styles/AppStyles';
import SearchCity from '../SearchCity/SearchCity';

function App(): ReactElement {
  const [value, setValue] = useState<String>('');
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const [error, setError] = useState<Boolean>(false);

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
          />
      </WeatherWrapper>
    </>
  );
}

export default App;
