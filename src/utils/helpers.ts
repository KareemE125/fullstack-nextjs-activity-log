import { MONTHS } from "./constants";

export const createArrayOfSize = (size: number) => Array.from(Array(size).keys());

export const formatDate = (dateString: Date | string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const month = MONTHS[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedDate = `${month} ${day}, ${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;

  return formattedDate;
}

export function generateRandomCode(length: number = 12) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}