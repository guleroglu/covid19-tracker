import React from "react";
import "./Cards.css";
import { useSelector } from "react-redux";

const Cards = () => {
  const countries = useSelector((state) => state.covid.items);
  const status = useSelector((state) => state.covid.status);
  const selectedCountry = useSelector((state) => state.covid.country);

  let selectedCountryData = null;

  if (status === "success") {
    selectedCountryData = countries.result.find(
      (country) => country.country === selectedCountry
    );
  }

  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        {status === "success" && selectedCountryData && (
          <>
            <div className="cases-card card">
              <h4 className="card-title">Total Cases</h4>
              <div className="card-info">
                <span className="card-info-result">
                  {selectedCountryData.totalCases}
                </span>
                <span className="card-country">{selectedCountry}</span>
              </div>
            </div>
            <div className="recovered-card card">
              <h4 className="card-title">Total Recovered</h4>
              <div className="card-info">
                <span className="card-info-result">
                  {selectedCountryData.totalRecovered}
                </span>
                <span className="card-country">{selectedCountry}</span>
              </div>
            </div>
            <div className="deaths-card card">
              <h4 className="card-title">Total Deaths</h4>
              <div className="card-info">
                <span className="card-info-result">
                  {selectedCountryData.totalDeaths}
                </span>
                <span className="card-country">{selectedCountry}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
