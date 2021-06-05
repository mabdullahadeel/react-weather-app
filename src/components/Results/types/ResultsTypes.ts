interface Location {
    name: string,
    region: string,
    country: string,
    tz_id: string,
    localtime: string
}

interface CurrentCondition {
    text: string,
    icon: string,
    code: number
}

export interface ForecastDay {
    avgtemp_c: number,
    mintemp_c: number,
    maxtemp_c: string,
    maxwind_kph: number,
    avghumidity: string,
    avgvis_km: number,
    daily_chance_of_rain: string,
    condition: CurrentCondition
}

interface Astro {
    sunrise: string,
    sunset: string
}

export interface Hour {
    time: string,
    temp_c: number,
    condition: CurrentCondition,
    humidity: string,
}

export interface ForeCast {
    date_epoch: number,
    date: string,
    day: ForecastDay,
    astro: Astro,
    hour:  Hour[]
}

export interface Forecasts {
    forecastday: ForeCast[]
}

export interface Props {
    location: Location,
    forcasts: Forecasts
}