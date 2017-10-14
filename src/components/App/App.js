import React, { Component } from "react";
import CountriesList from "../CountriesList/CountriesList";
import CountriesSelector from "../CountriesSelector/CountriesSelector";
import ExchangeCalculator from "../ExchangeCalculator/ExchangeCalculator";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getAllCountries } from "../../logic/get-countries";
import { getExchangeRates } from "../../logic/get-exchange-rates";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountriesIds: [],
      exchangeRates: [],
      value: 0
    };
  }
  augmentCountriesWithLabelAndValue(countries) {
    for (let country of countries) {
      country.value = country.id;
      country.label = country.name;
    }
  }

  onValueChange(value) {
    this.setState({
      value
    });
  }

  async componentDidMount() {
    try {
      const countriesRequest = await getAllCountries();
      const exchangeRates = await getExchangeRates();
      const { countries } = countriesRequest.data;
      this.augmentCountriesWithLabelAndValue(countries);
      this.setState({
        countries,
        exchangeRates
      });
    } catch (e) {
      this.setState({
        countries: []
      });
    }
  }

  onSelectedCountriesChanged(selectedCountries) {
    if (!Array.isArray(selectedCountries)) {
      selectedCountries = [selectedCountries];
    }
    const selectedCountriesIds = selectedCountries.map(country => country.id);
    this.setState({
      selectedCountriesIds
    });
  }
  render() {
    return (
      <div className="App container">
        <Navbar />
        <div className="row">
          <CountriesSelector
            onChange={this.onSelectedCountriesChanged.bind(this)}
            selectedCountriesIds={this.state.selectedCountriesIds}
            countries={this.state.countries}
          />
        </div>
        <div className="row">
          <ExchangeCalculator
            onChange={this.onValueChange.bind(this)}
            value={this.state.value}
          />
        </div>
        <div className="row">
          <CountriesList
            value={this.state.value}
            exchangeRates={this.state.exchangeRates}
            selectedCountriesIds={this.state.selectedCountriesIds}
            countries={this.state.countries}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
