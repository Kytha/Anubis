import React from "react";
import { XAXIS_TYPES } from "./lib/constants";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "100%",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const getAxisType = (sample) => {
  if (isNaN(sample)) {
    const sampleDate = Date.parse(sample);
    if (isNaN(sampleDate)) return XAXIS_TYPES.CATEGORY;
    else return XAXIS_TYPES.DATETIME;
  } else return XAXIS_TYPES.NUMERIC;
};

const HorizontalAxisSelector = (props) => {
  const classes = useStyles();
  const { dataFields, data, setXAxisOptions, xAxisOptions } = props;

  const onChange = (e) => {
    const field = e.target.value;
    const type = getAxisType(data[0].data[field]);
    setXAxisOptions({ field: field, type: type });
  };

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Horizontal Axis Field
      </Typography>
      <Select
        onChange={onChange}
        labelId="data-field-select-label"
        disabled={!dataFields.length}
        className={classes.select}
        value={xAxisOptions.field}
      >
        {dataFields.map((field) => (
          <MenuItem value={field} key={field}>
            {field}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default HorizontalAxisSelector;
