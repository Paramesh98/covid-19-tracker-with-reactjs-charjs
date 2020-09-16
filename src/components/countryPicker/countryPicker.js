import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import Styles from "./countryPicker.module.css";
import { fetchCountries } from "../../api";

export default function CountryPicker({ handleCountry }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchCountries();
      setFetchedCountries(data);
    };
    fetchApi();
  }, [fetchedCountries]);
  return (
    <FormControl className={Styles.formcontrol}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="">global</option>
        {fetchedCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
