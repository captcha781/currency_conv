import React from "react";
import Exchanger from "./exchanger/exchanger";

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
      <div>Currency History Graph</div>
    </div>
  );
};

export default main;
