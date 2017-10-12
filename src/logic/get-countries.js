import axios from 'axios';
import config from '../constants/config'

const query = `
query Countries($phrase: String) {
    countries(phrase: $phrase){
      id,
      name,
      capital,
      population,
      currency {
        id
      }
    }
}
`
export async function getAllCountries() {
    const response = await axios.post(config.API_URL, {
        query,
        variables: {
            phrase: ""
        }
    })
    return response.data
}

export async function searchCountries(phrase) {
    const response = await axios.post(config.API_URL, {
        query,
        variables: {
            phrase 
        }
    })
    return response.data
}