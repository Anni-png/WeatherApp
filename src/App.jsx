
import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { cloudyWeather, sunnyWeather } from './utils/data'

export const App = () => {

  let sunny = false;

  return (
      < >   
        <h1>Weather App</h1> 

        <WeatherIcon weather={
        sunny
           ? sunnyWeather
            : cloudyWeather
          } />
      </>  
  )
}
