
import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { cloudyWeather, sunnyWeather } from './utils/data'


export const App = () => {
  return (
      < >   
        <h1>Weather App</h1>
        <WeatherIcon 
        weather={sunnyWeather}
        weather={cloudyWeather}
        />
      </>  
  )
}
