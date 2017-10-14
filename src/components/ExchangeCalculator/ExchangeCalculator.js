import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExchangeCalculator.css";

export default class ExchangeCalculator extends Component {
  onChange({ target: { value } }) {
    this.props.onChange(Number(value));
  }
  render() {
    return (
      <div className="ExchangeCalculator">
        <label htmlFor="exchangeCalculator">SEK for exchange:</label>
        <input
          id="exchangeCalculator"
          type="number"
          min={0}
          step={0.1}
          defaultValue={0}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

ExchangeCalculator.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};
