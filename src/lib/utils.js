const DEFAULT_AXIS_PROPS = {
  labels: {
    style: {
      colors: "#fff",
    },
  },
  title: {
    style: {
      color: "#fff",
    },
  },
};

export const generateYAxis = (series) => {
  let yAxis = [];
  series.forEach((element, i) => {
    yAxis.push({
      ...DEFAULT_AXIS_PROPS,
      seriesName: element.name,
      title: {
        text: element.name,
        style: {
          color: "#fff",
        },
      },
      axisBorder: {
        show: true,
      },
      opposite: i !== 0 ? true : false,
    });
  });
  return yAxis;
};

export const generateXAxis = (xAxisOptions) => {
  let xAxis = {
    ...DEFAULT_AXIS_PROPS,
    //type: xAxisOptions.type,
    title: {
      text: xAxisOptions.field,
      style: {
        color: "#fff",
      },
    },
  };
  switch (xAxisOptions.type) {
    case "numeric":
      xAxis.tickAmount = 10;
    case "category":
    case "datetime":
  }
  return xAxis;
};
