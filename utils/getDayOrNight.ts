const getDayOrNight = (icon: string, time: string): string => {
  const hours = new Date(time).getHours();

  const isDay = hours >= 6 && hours < 18;

  return isDay ? icon.replace(/.$/, "d") : icon.replace(/.$/, "n");
};
export default getDayOrNight;
