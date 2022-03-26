import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./exchanger.css";

const Exchanger = (props) => {
  let currelems = props.data.data;
  let keyer = Object.keys(currelems);

  let valuer = props.currentAmountRight.data.data.rates
  let valKeyer = Object.keys(valuer);





  return (
    <div className="w-75 mx-auto bg-light rounded rounded-3 shadow py-3 px-5 martop row">
      <div className="col-sm-12 col-lg-6 mx-auto p-3">
        <h4>Select Currency: {props.currentCurrency}</h4>
        <p>You want to check</p>

        <div className="w-s-100 w-lg-75 mb-3">
          <input
            className="form-control"
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

        <div className="w-75 mb-3">
          <input
            className="form-control"
            type="number"
            id="amounter"
            placeholder="1"
            onChange={props.amountleft}
          />
        </div>
      </div>

      {/* Currency Sub */}

      <div className="col-sm-12 col-lg-6 mx-auto p-3">
        <h4>Select Currency: {props.currentCurrencyRight}</h4>
        <p>You want to check</p>

        <div className="w-s-100 w-lg-75 mb-3">
          <input
            className="form-control"
            type="text"
            id="selecter"
            list="select"
            placeholder="INR"
            onChange={props.changedRight}
          />
          <datalist id="select">
            {keyer.map((val, index) => {
              return <option key={index} value={val}></option>;
            })}
          </datalist>
        </div>

        <h5>Amount : </h5>

        <div className="w-75 mb-3">
          <h5 className=""> {
            valKeyer.map((val,i) => {
              if (val === props.currentCurrencyRight){
                return (props.currentAmountLeft * Number(valuer[val])).toFixed(2)
              }
            })
          } </h5>
        </div>
      </div>
    </div>
  );
};

export default Exchanger;
