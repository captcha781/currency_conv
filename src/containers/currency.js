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
      isUrlLoading: true,
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
    // await this.fetchHistoryDataLeft();
    await this.fetchHistoryDataRight();
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


  async fetchHistoryDataRight() {
    let url = "";
    if (this.state.userVal === "USD") {
      url = `https://api.twelvedata.com/time_series?symbol=USD/INR&interval=1month&apikey=9aadae9496ec4b33809266ada2f82435`;
    } else {
      url = `https://api.twelvedata.com/time_series?symbol=${this.state.userVal}/USD&interval=1month&apikey=9aadae9496ec4b33809266ada2f82435`;
    }

    // let url2 = `https://api.twelvedata.com/time_series?symbol=${this.state.currentCurrencyRight}&interval=1month&apikey=9aadae9496ec4b33809266ada2f82435`
    let currencyHistory = await axios.get(url);
    // let currencyHistoryRight = await axios.get(
    //   url2
    // );

    // this.setState({currencyHistory : currencyHistory, currencyHistoryRight: currencyHistoryRight})
    this.setState({ currencyHistory: currencyHistory, isUrlLoading: false });
  }

  async handleCurrencyInput(e) {
    let value = e.target.value;

    if (value.length >= 3) {
      await this.setState({ userVal: value });

      await this.fetchCurrencyRates();
      await this.fetchHistoryDataRight();
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
    if (
      this.state.isLoading ||
      this.state.isRatesLoading ||
      this.state.isUrlLoading
    ) {
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
          currencyHistory={this.state.currencyHistory}
        />
      </Aux>
    );
  }
}

export default Currency;
