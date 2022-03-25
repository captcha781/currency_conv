import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./exchanger.css";

const Exchanger = (props) => {
  let currelems = props.data.data;
  let keyer = Object.keys(currelems);

  return (
    <div className="w-75 mx-auto bg-light rounded rounded-3 shadow py-3 px-5 martop row">
      <div className="col-sm-12 col-lg-6 mx-auto p-3">
        <h4>Select Currency: {props.currentCurrency}</h4>
        <p>You want to check</p>

        <div>
          <input
            className=""
            type="text"
            id="selecter"
            list="select"
            placeholder="USD"
            onChange={props.changed}
          />
          <datalist id="select">
            {keyer.map((val, index) => {
              return <option key={index} value={val}></option>;
            })}
          </datalist>
        </div>

        <h5>Amount : </h5>
        <input
          className=""
          type="number"
          id="amounter"
          placeholder="100"
          onChange={props.amountleft}
        />
      </div>
      <div className="col-sm-12 col-lg-6 mx-auto p-3 text-center">
        currency Sub
      </div>
    </div>
  );
};

export default Exchanger;
