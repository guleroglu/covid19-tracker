import React from "react";
import "./Chart.css";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from "victory";
import { useSelector } from "react-redux";


const Chart = () => {
  const countries = useSelector((state) => state.covid.items);
  const country = useSelector((state) => state.covid.country);
  const status = useSelector((state) => state.covid.status);

  let selectedCountryData = null;

  if (status === "success") {
    selectedCountryData = countries.result.find(
      (item) => item.country === country
    );
  }

 const data = [
   {
     quarter: 1,
     earnings: selectedCountryData
       ? (parseInt(selectedCountryData.totalCases, 10) || 0) 
       : 0,
   },
   {
     quarter: 2,
     earnings: selectedCountryData
       ? (parseInt(selectedCountryData.totalRecovered, 10) || 0) 
       : 0,
   },
   {
     quarter: 3,
     earnings: selectedCountryData
       ? (parseInt(selectedCountryData.totalDeaths, 10) || 0) / 10
       : 0,
   },
 ];


  return (
    <div className="chart-container">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        width={300}
        height={200}
      >
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={["Total Cases", "Total Recovered", "Total Deaths"]}
          style={{
            tickLabels: { fontSize: 4 },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x / 1000}M`}
          style={{
            tickLabels: { fontSize: 4 },
          }}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </div>
  );
};

export default Chart;
