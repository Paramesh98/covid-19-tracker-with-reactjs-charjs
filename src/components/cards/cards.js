import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Styles from "./cards.module.css";
import CountUp from "react-countup";
import classname from "classnames";

export default function Cards({ data }) {
  const { confirmed, deaths, lastUpdate, recovered } = data;
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className={Styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={classname(Styles.card, Styles.infected)}
        >
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start="0"
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            No of active cases of covid-19
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={classname(Styles.card, Styles.recovered)}
        >
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start="0"
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            No of active cases of covid-19
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={classname(Styles.card, Styles.deaths)}
        >
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start="0"
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            No of active cases of covid-19
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
