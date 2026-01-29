import './WeatherIcon.css'

export const WeatherIcon = ({ weather }) => {

  return (
      <>
        <img 
        className='weather-icon'
        src={weather.imageSrc}
        alt={weather.imageAlt}
      />
      <p>{weather.weatherType}</p>
      </>
  )
}