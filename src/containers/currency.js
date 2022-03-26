import axios from "axios";
import React, { Component } from "react";

import Side from "../components/Side/Side";
import Main from "../components/Main/Main";
import Aux from "../hoc/Aux";
import DataContext from "../context/dataContext";

class Currency extends Component {
  constructor(props) {
    super(props);

    // Custom Functions Binding
    this.fetchCurrencyList.bind(this);
    // this.fetchCurrencyRates.bind(this);
    this.handleCurrencyInput = this.handleCurrencyInput.bind(this);
    this.amountLeft = this.amountLeft.bind(this);
    this.changedRight = this.changedRight.bind(this);
    this.state = {
      isLoading: true,
      isRatesLoading: true,
      currencyRates: {},
      currencyList: {},
      userVal: "USD",
      amountLeft: 1,
      currentCurrencyRight: "INR",
      amountRight: 1,
    };
  }

  static contextType = DataContext;

  async componentDidMount() {
    await this.fetchCurrencyList();
    await this.fetchCurrencyRates();
  }

  async fetchCurrencyRates() {
    let url = `https://api.coinbase.com/v2/exchange-rates?currency=${this.state.userVal}`;

    let currencyrates = await axios.get(url);

    await this.setState({
      isRatesLoading: false,
      currencyRates: currencyrates,
    });
  }

  async fetchCurrencyList() {
    let currencylist = await axios.get(
      "https://openexchangerates.org/api/currencies.json"
    );

    this.setState({
      currencyList: currencylist,
      isLoading: false,
    });
  }

  async handleCurrencyInput(e) {
    let value = e.target.value;

    if (value.length >= 3) {
      await this.setState({ userVal: value });

      await this.fetchCurrencyRates();
    }
  }

  async changedRight(e) {
    let value = e.target.value;
    await this.setState({ currentCurrencyRight: value });
  }

  amountLeft(e) {
    let value = e.target.value;
    this.setState({ amountLeft: value });
  }

  componentDidUpdate() {}

  async shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    if (this.state.isLoading || this.state.isRatesLoading) {
      return null;
    }

    return (
      <Aux>
        <Side />
        <Main
          data={this.state.currencyList}
          changed={this.handleCurrencyInput}
          currentCurrency={this.state.userVal}
          amountleft={this.amountLeft}
          currentCurrencyRight={this.state.currentCurrencyRight}
          currentAmountRight={this.state.currencyRates}
          changedRight={this.changedRight}
          currentAmountLeft={this.state.amountLeft}
        />
      </Aux>
    );
  }
}

export default Currency;
