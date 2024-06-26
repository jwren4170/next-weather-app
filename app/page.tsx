"use client";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherIcon from "@/components/WeatherIcon";
import { WeatherData } from "@/types";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=New Haven,MO,US&units=imperial&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`,
        { next: { revalidate: 60 } }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data as WeatherData;
        })
        .catch((err) => err),
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  const firstData = data?.list[0];
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
        <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
          {/* todays weather */}
          <section className="space-y-4">
            <div>
              <h2 className="flex gap-1 text-2xl items-end"></h2>
              {/* Date */}
              <p className="text-lg flex gap-1 items-end">
                {new Date(firstData?.dt * 1000).toLocaleDateString("en-US", {
                  year: "numeric",
                  day: "numeric",
                  month: "short",
                  weekday: "long",
                })}
              </p>
              <Container className="gap-10 px-6 items-center">
                <div className="w-[150px] flex flex-col px-4">
                  {/* Temperature */}
                  <span className="text-4xl self-center">
                    {Math.round(firstData?.main.temp) ?? ""}°
                  </span>
                  {/* Feels like and high/low temp */}
                  <span className="text-xs text-gray-600">
                    Feels like {Math.round(firstData?.main.feels_like) ?? ""}°
                  </span>
                  {/* High/low */}
                  <span className="text-xs text-gray-600 flex flex-row">
                    {Math.round(firstData?.main.temp_min) ?? ""}° &darr; &nbsp;
                    {Math.round(firstData?.main.temp_max) ?? ""}° &uarr;
                  </span>
                </div>
                {/* time and weather icon */}
                <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                  {data?.list.map((d, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-between gap-2 text-xs font-semibold"
                    >
                      <p className="whitespace-nowrap">
                        {new Date(d?.dt_txt).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </p>
                      <WeatherIcon iconname={d?.weather[0].icon} />
                      {/* <WeatherIcon
                        iconname={getDayOrNight(d?.weather[0].icon, d?.dt_txt)}
                      /> */}
                      <p>{Math.round(d?.main.temp ?? 0)}°</p>
                    </div>
                  ))}
                </div>
              </Container>
            </div>
            <div className="flex gap-4">
              {/* left */}
              <Container className="w-min flex justify-center flex-col px-4 items-center">
                <p className="capitalize text-center">
                  {firstData.weather[0].description}
                </p>
                <WeatherIcon iconname={firstData.weather[0].icon} />
              </Container>
              {/* right */}
              <Container className="bg-yellow-300/80 px-6 gap-4 justify-between overflow-x-auto">
                <WeatherDetails
                  airPressure={firstData.main.pressure}
                  humidity={firstData.main.humidity}
                  sunset={new Date(data.city.sunset * 1000).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "numeric",
                    }
                  )}
                  sunrise={new Date(
                    data.city.sunrise * 1000
                  ).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                  visibility={firstData.visibility / 1000}
                  windSpeed={firstData.wind.speed}
                />
              </Container>
            </div>
          </section>

          {/* 5 day forecast */}
          <section className="space-y-4 flex flex-col gap-4 w-full">
            <p className="text-2xl">5 Day Forecast</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
