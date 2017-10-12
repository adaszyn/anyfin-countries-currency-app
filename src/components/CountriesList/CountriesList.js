import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountriesList extends Component {
    constructor () {
        super()
        this.rates = new Map()
    }
    componentWillReceiveProps(props) {
        const ratesTuples = props.exchangeRates.map(({id, rate}) => [id, rate])
        this.rates = new Map(ratesTuples)
    }
    renderCountryRows () {
        const { countries, onChange } = this.props;
        const selectedCountries = this.props.countries.filter(country => this.props.selectedCountriesIds.includes(country.id))
        if (selectedCountries.length === 0) {
            return <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
        }
        return selectedCountries.map(country => {
            const rate = this.rates.get(country.currency.id)            
            const amount = rate
                ? Math.round(rate * this.props.value * 100) / 100
                : "-"
            return <tr key={country.id}>
                <td>{country.id}</td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.currency.id}</td>
                <td>{amount}</td>
            </tr>
        })
    }
    render() {
        return (
            <table class="u-full-width">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Currency</th>
                    <th>Ammount in SEK</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCountryRows()}
                </tbody>
                </table>
        );
    }
}


CountriesList.propTypes = {
    onChange: PropTypes.func,
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        })
    ),
    selectedCountriesIds: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.number
}