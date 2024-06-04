import { cn } from "@/utils/cn";
import React, { HTMLProps } from "react";

const Container = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-white border rounded-xl flex py-4 shadow-sm",
        props.className!
      )}
    />
  );
};

export default Container;
