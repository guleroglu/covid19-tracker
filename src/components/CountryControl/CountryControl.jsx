import React, { useState } from "react";
import "./CountryControl.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../../features/covid/covidSlice";

const CountryControl = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("UK");
  const countries = useSelector((state) => state.covid.items);
  const status = useSelector((state) => state.covid.status);

  const handleCountry = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    dispatch(selectCountry(newCountry));
  };

  return (
    <div className="control-container">
      {status === "success" && (
        <select onChange={handleCountry} value={selectedCountry}>
          {countries.result.map((country, index) => (
            <option key={index} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountryControl;
