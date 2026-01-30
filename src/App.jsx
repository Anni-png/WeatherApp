
import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { cloudyWeather, sunnyWeather } from './utils/data'
import { useState } from 'react'


export const App = () => {

const [weather, setWeather] = useState(cloudyWeather)

  return (
      < >   
        <h1>Weather App</h1> 
        { weather && <WeatherIcon weather={weather} /> }
      </>  
  )
}


