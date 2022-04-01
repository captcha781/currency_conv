import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./Grapher.css";

function Grapher(props) {
  let dataer = [];
  if (props.currencyHistory.data.values) {
    dataer = props.currencyHistory.data.values;
  } else {
    dataer = [
      {
        datetime: "2022-04-01",
        open: "75.94190",
        high: "76.15680",
        low: "75.84950",
        close: "76.04430",
      },
      {
        datetime: "2022-03-01",
        open: "75.52000",
        high: "77.44875",
        low: "75.21320",
        close: "75.94140",
      },
      {
        datetime: "2022-02-01",
        open: "74.58835",
        high: "75.90400",
        low: "74.34850",
        close: "75.52000",
      },
      {
        datetime: "2022-01-01",
        open: "74.46300",
        high: "75.48000",
        low: "73.72720",
        close: "74.58835",
      },
      {
        datetime: "2021-12-01",
        open: "75.08000",
        high: "76.40250",
        low: "74.29600",
        close: "74.41500",
      },
      {
        datetime: "2021-11-01",
        open: "74.96000",
        high: "75.19800",
        low: "73.83400",
        close: "75.10000",
      },
      {
        datetime: "2021-10-01",
        open: "74.18500",
        high: "75.67750",
        low: "74.08125",
        close: "74.93500",
      },
      {
        datetime: "2021-09-01",
        open: "72.99150",
        high: "74.36850",
        low: "72.91350",
        close: "74.16400",
      },
      {
        datetime: "2021-08-01",
        open: "74.36750",
        high: "74.51400",
        low: "72.90650",
        close: "72.94700",
      },
      {
        datetime: "2021-07-01",
        open: "74.37400",
        high: "75.03100",
        low: "74.21800",
        close: "74.33700",
      },
      {
        datetime: "2021-06-01",
        open: "72.50800",
        high: "74.47100",
        low: "72.48300",
        close: "74.36000",
      },
      {
        datetime: "2021-05-01",
        open: "74.27900",
        high: "74.33250",
        low: "72.31500",
        close: "72.51100",
      },
      {
        datetime: "2021-04-01",
        open: "73.16900",
        high: "75.57000",
        low: "73.15500",
        close: "74.05000",
      },
      {
        datetime: "2021-03-01",
        open: "73.58500",
        high: "73.78250",
        low: "72.26800",
        close: "73.13700",
      },
      {
        datetime: "2021-02-01",
        open: "72.91800",
        high: "74.06000",
        low: "72.26300",
        close: "73.92000",
      },
      {
        datetime: "2021-01-01",
        open: "73.10000",
        high: "73.60010",
        low: "72.78500",
        close: "72.87700",
      },
      {
        datetime: "2020-12-01",
        open: "74.02500",
        high: "74.10450",
        low: "72.95150",
        close: "73.03620",
      },
      {
        datetime: "2020-11-01",
        open: "74.56700",
        high: "75.01500",
        low: "73.63665",
        close: "73.99000",
      },
      {
        datetime: "2020-10-01",
        open: "73.59500",
        high: "74.71150",
        low: "72.96950",
        close: "74.55400",
      },
      {
        datetime: "2020-09-01",
        open: "73.21500",
        high: "74.05540",
        low: "72.75300",
        close: "73.56000",
      },
      {
        datetime: "2020-08-01",
        open: "74.91800",
        high: "75.31405",
        low: "73.05000",
        close: "73.25400",
      },
      {
        datetime: "2020-07-01",
        open: "75.52500",
        high: "75.62525",
        low: "74.48750",
        close: "74.91600",
      },
      {
        datetime: "2020-06-01",
        open: "75.47000",
        high: "76.40000",
        low: "74.97275",
        close: "75.54000",
      },
      {
        datetime: "2020-05-01",
        open: "75.31900",
        high: "76.14500",
        low: "75.03805",
        close: "75.59000",
      },
      {
        datetime: "2020-04-01",
        open: "75.32000",
        high: "77.01000",
        low: "74.90900",
        close: "75.07700",
      },
      {
        datetime: "2020-03-01",
        open: "72.52750",
        high: "76.38550",
        low: "72.02650",
        close: "75.33300",
      },
      {
        datetime: "2020-02-01",
        open: "71.52500",
        high: "72.57350",
        low: "71.08750",
        close: "72.53400",
      },
      {
        datetime: "2020-01-01",
        open: "71.36500",
        high: "72.12500",
        low: "70.67830",
        close: "71.54000",
      },
      {
        datetime: "2019-12-01",
        open: "71.78500",
        high: "71.82500",
        low: "70.51000",
        close: "71.35000",
      },
      {
        datetime: "2019-11-01",
        open: "70.97500",
        high: "72.24500",
        low: "70.55500",
        close: "71.74600",
      },
    ];
  }

  let dateArr = [];
  let priceArr = [];

  dataer.map((val, i) => {
    let temp = val["datetime"].slice(0, 7);
    let tempprice = val["high"];
    dateArr.push(temp);
    priceArr.push(tempprice);
  });

  dateArr.reverse();
  priceArr.reverse();

  console.log(dateArr);

  let state = {
    labels: dateArr,

    datasets: [
      {
        label: "Currency History -1",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,100,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: priceArr,
      },
      {
        label: "Currency History -2",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,100,212,1)",
        borderColor: "rgba(55,194,200,1)",
        borderWidth: 2,
        data: [15.2, 40, 15, 30, 50, 67, 35, 83, 99, 67, 73, 85, 37, 74],
      },
    ],
  };

  return (
    <div className="w-75 mt-4 mx-auto">
      <Line
        data={state}
        options={{
          scales: {
            xAxis: {
              display: false,
            },
          },
          title: {
            display: true,
            text: "Currency History for USD",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default Grapher;
