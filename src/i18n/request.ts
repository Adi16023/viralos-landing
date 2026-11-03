import { getRequestConfig } from "next-intl/server";
import en from "./messages/en";

export default getRequestConfig(() => ({
  locale: "en",
  messages: en,
  timeZone: "Asia/Kolkata",
}));
