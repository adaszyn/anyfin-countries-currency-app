import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "../../../node_modules/react-select/dist/react-select.min.css";
import "./CountriesSelector.css";

export default class CountriesSelector extends Component {
  render() {
    const { countries, onChange, selectedCountriesIds } = this.props;
    const selectedCountries = countries.filter(country =>
      selectedCountriesIds.includes(country.id)
    );
    return (
      <div className="CountriesSelector">
        <Select
          names="countries"
          options={countries}
          multi={true}
          onChange={onChange}
          value={selectedCountries}
        />
      </div>
    );
  }
}

CountriesSelector.propTypes = {
  onChange: PropTypes.func,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ),
  selectedCountriesIds: PropTypes.arrayOf(PropTypes.string)
};
