import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _QPLJ8--PXmXE_knyIY7P65KH756d6i8qi-4Sr9ihpTkuWocfCo1Pt7IfCo-PmMN5rxI8RUb-llxK0oIPo0fprD9sk8V4BNSpKznDGUeZXThGoa8KRHsVqJwmAFsZHYx",
  },
});

