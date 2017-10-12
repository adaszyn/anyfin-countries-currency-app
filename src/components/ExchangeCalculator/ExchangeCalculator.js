import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExchangeCalculator extends Component {
    state = {  }
    onChange ({target: {value}}) {
        this.props.onChange(Number(value))
    }
    render() {
        return (
            <div class="ExchangeCalculator">
                <label for="exchangeCalculator">Amount of SEK for exchange</label>
                <input id="exchangeCalculator" type="number" min={0} step={0.1} defaultValue={0} onChange={this.onChange.bind(this)} />
            </div>  
        );
    }
}

ExchangeCalculator.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.function
}