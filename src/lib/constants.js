export const XAXIS_TYPES = {
  NUMERIC: "numeric",
  DATETIME: "datetime",
  CATEGORY: "category",
};

const aggregatorTypes = {
  MEAN: {
    label: "Mean",
    type: "mean",
  },
  SUM: {
    label: "Sum",
    type: "sum",
  },
  MIN: {
    label: "Min",
    type: "min",
  },
  MAX: {
    label: "Max",
    type: "max",
  },
  STANDARD_DEVIATION: {
    label: "Standard Deviation",
    type: "standardDeviation",
  },
  COUNT: {
    label: "Count",
    type: "count",
  },
  NONE: {
    label: "None",
    type: "none",
  },
};

export const AGGREGATOR_TYPES = {
  ...aggregatorTypes,
  list: Object.keys(aggregatorTypes).map((key) => {
    return {
      label: aggregatorTypes[key].label,
      type: aggregatorTypes[key].type,
    };
  }),
};

const plotTypes = {
  LINE: {
    type: "line",
    label: "Line",
  },
  AREA: {
    type: "area",
    label: "Area",
  },
  BAR: {
    type: "bar",
    label: "Bar",
  },
  SCATTER: {
    type: "scatter",
    label: "Scatter",
  },
};

export const PLOT_TYPES = {
  ...plotTypes,
  list: Object.keys(plotTypes).map((key) => {
    return {
      label: plotTypes[key].label,
      type: plotTypes[key].type,
    };
  }),
};
