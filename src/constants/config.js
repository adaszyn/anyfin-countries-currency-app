console.log(process.env.NODE_ENV)
const API_BASE = process.env.NODE_ENV === "production"
    ? "https://anyfin-currency-exchange-api.now.sh"
    : "http://localhost:3000"
export default {
    API_URL: `${API_BASE}/graphql`
}