import React from "react";
import Chart from "./Chart";
import HorizontalAxisSelector from "./HorizontalAxisSelector";
import { XAXIS_TYPES } from "./lib/constants";
import SeriesMixer from "./SeriesMixer";
import { generateYAxis, generateXAxis } from "./lib/utils";
import { aggregatorReducer } from "./lib/aggregatorReducer";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "20px 0",
  },
}));

const ChartFactory = (props) => {
  const { fields, data } = props;
  const [chartConfig, setChartConfig] = React.useState({});
  const [xAxisOptions, setXAxisOptions] = React.useState({
    field: "",
    type: XAXIS_TYPES.NUMERIC,
  });
  const classes = useStyles();

  const handleChartUpdate = (seriesEntries) => () => {
    let series = [];
    seriesEntries.forEach((entry) => {
      series.push(
        aggregatorReducer(
          entry.aggregator,
          data,
          xAxisOptions.field,
          entry.field,
          entry.type
        )
      );
    });

    const newAxisOptions = {
      yaxis: generateYAxis(series),
      xaxis: generateXAxis(xAxisOptions),
    };
    setChartConfig({
      options: newAxisOptions,
      series: series,
    });
  };

  return (
    <>
      <Grid item xs={12} className={classes.grid}>
        <Chart config={chartConfig} />
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <HorizontalAxisSelector
          dataFields={fields}
          data={data}
          setXAxisOptions={setXAxisOptions}
          xAxisOptions={xAxisOptions}
        />
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <SeriesMixer
          fields={fields}
          xAxisType={xAxisOptions.type}
          handleUpdate={handleChartUpdate}
        />
      </Grid>
    </>
  );
};

export default ChartFactory;
