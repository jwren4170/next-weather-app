import React, { ReactNode } from "react";
import { ImMeter } from "react-icons/im";
import { LuDroplet, LuEye, LuSunrise, LuSunset, LuWind } from "react-icons/lu";

export type WeatherDetailsProps = {
  humidity: number;
  windSpeed: number;
  visibility: number;
  airPressure: number;
  sunrise: string;
  sunset: string;
};

const WeatherDetails = (props: WeatherDetailsProps) => {
  return (
    <>
      <SingleWeatherDetail
        information={"Visibility"}
        icon={<LuEye />}
        value={props.visibility.toString() + " mi"}
      ></SingleWeatherDetail>

      <SingleWeatherDetail
        information={"Humidity"}
        icon={<LuDroplet />}
        value={props.humidity.toString() + "%"}
      ></SingleWeatherDetail>

      <SingleWeatherDetail
        information={"Wind Speed"}
        icon={<LuWind />}
        value={props.windSpeed.toString() + " mph"}
      ></SingleWeatherDetail>

      <SingleWeatherDetail
        information={"Air Pressure"}
        icon={<ImMeter />}
        value={props.airPressure.toString() + " hPa"}
      ></SingleWeatherDetail>

      <SingleWeatherDetail
        information={"Sunrise"}
        icon={<LuSunrise />}
        value={props.sunrise}
      ></SingleWeatherDetail>

      <SingleWeatherDetail
        information={"Sunset"}
        icon={<LuSunset />}
        value={props.sunset}
      ></SingleWeatherDetail>
    </>
  );
};

export type SingleWeatherDetailsProps = {
  information: string;
  icon: ReactNode;
  value: string;
};

const SingleWeatherDetail = (props: SingleWeatherDetailsProps) => {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
};

export default WeatherDetails;
