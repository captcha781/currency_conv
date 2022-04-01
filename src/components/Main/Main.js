import React from "react";
import Exchanger from "./exchanger/exchanger";
import Grapher from "./Grapher/Grapher";

const main = (props) => {
  return (
    <div>
      <Exchanger
        data={props.data}
        changed={props.changed}
        currentCurrency={props.currentCurrency}
        amountleft={props.amountleft}
        currentCurrencyRight={props.currentCurrencyRight}
        changedRight={props.changedRight}
        currentAmountLeft = {props.currentAmountLeft}
        currentAmountRight = {props.currentAmountRight}
      />
      <Grapher currencyHistory = {props.currencyHistory} />
    </div>
  );
};

export default main;
