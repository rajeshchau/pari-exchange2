import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export const getCryptoPrices = async (page = 1) => {
  const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10, // Number of cryptos per page
      page, // Dynamic page number
      sparkline: false,
    },
  });
  return response.data;
};
