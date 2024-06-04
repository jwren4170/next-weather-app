import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { HTMLProps } from "react";

type Props = {};

const WeatherIcon = (
  props: HTMLProps<HTMLDivElement> & { iconname: string }
) => {
  return (
    <div {...props} className={cn("relative h-20 w-20")}>
      <Image
        src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}
        width={100}
        height={100}
        alt="weather icon"
        priority
        className="absolute w-full h-full"
      />
    </div>
  );
};

export default WeatherIcon;
