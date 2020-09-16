import React from "react";
import "./styles.css";
import Cards from "./components/cards/cards";
import Chart from "./components/chart/chart";
import CountryPicker from "./components/countryPicker/countryPicker";
import Styles from "./app.module.css";
import { fetchData } from "./api";
import image from "./image/image.png";

export default class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={Styles.container}>
        <img className={Styles.image} src="/image.png" alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountry={this.handleCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
