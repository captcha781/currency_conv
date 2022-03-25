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
    this.fetchCurrencyRates.bind(this);
    this.handleCurrencyInput = this.handleCurrencyInput.bind(this);
    this.amountLeft = this.amountLeft.bind(this);
  }

  state = {
    isLoading: true,
    isRatesLoading: true,
    currencyRates: {},
    currencyList: {},
    userVal: "USD",
    amountLeft : 1
  };

  static contextType = DataContext

  componentDidMount() {
    this.fetchCurrencyList();
    this.fetchCurrencyRates();
    
  }

  async fetchCurrencyRates() {
    let currencyrates = await axios.get(
      "https://api.coinbase.com/v2/currencies"
    );

    
    this.setState({
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

  handleCurrencyInput (e) {
    let value = e.target.value;
    this.setState({userVal : value});
  }

  amountLeft (e) {
    let value = e.target.value;
    this.setState({amountLeft : value})
  }

  


  componentDidUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log( nextState.amountLeft);
    return true;
  }

  render() {

    

    if (this.state.isLoading || this.state.isRatesLoading) {
      return null;
    }
    return (
      <Aux>
        <Side />
        <Main data={this.state.currencyList} changed = {this.handleCurrencyInput} currentCurrency = {this.state.userVal} amountleft = {this.amountLeft} />
      </Aux>
    );
  }
}

export default Currency;
