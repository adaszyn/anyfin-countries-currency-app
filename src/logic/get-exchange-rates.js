import axios from 'axios';
import config from '../constants/config'

const query = `
{
    exchangeRates {
        id,
        rate
      }
}
`
export async function getExchangeRates() {
    const response = await axios.post(config.API_URL, {
        query
    })
    return response.data.data.exchangeRates
}
