export const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" ,hour12: false });

export let time = getCurrentTime();

export const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const date = new Date().getDate();
export const day = weekday[new Date().getDay()];
export const dayNumber = new Date().getDay();
export const month = months[new Date().getMonth()];
export const monthNumber = new Date().getMonth() + 1;
export const year = new Date().getFullYear();