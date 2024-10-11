export const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit", hour12: false });

export let time = getCurrentTime();

export const generateTime = () => {
  const time = new Date();
  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString();
  const seconds = time.getSeconds().toString();
  return {
    hours: hours.length === 1 ? `0${hours}` : hours,
    minutes: minutes.length === 1 ? `0${minutes}` : minutes,
    seconds: seconds.length === 1 ? `0${seconds}` : seconds
  }
}

export const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const date = new Date().getDate();
export const day = weekday[new Date().getDay()];
export const dayNumber = new Date().getDay();
export const month = months[new Date().getMonth()];
export const monthNumber = new Date().getMonth() + 1;
export const year = new Date().getFullYear();

export const getTimeDifference = (startTime, endTime) => {
  if (endTime === null) return null;
  const difference = Number(endTime) - Number(startTime);
  const differenceInMinutes = difference / 1000 / 60;
  let hours = Math.floor(differenceInMinutes / 60);
  if (hours < 0) {
    hours = 24 + hours;
  }
  let minutes = Math.floor(differenceInMinutes % 60);
  if (minutes < 0) {
    minutes = 60 + minutes;
  }
  const hoursAndMinutes = hours + ":" + (minutes < 10 ? '0' : '') + minutes;
  return hoursAndMinutes;
}