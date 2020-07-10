import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { frenchRose, brightTurquoise } from "./lib/theme";

const MARKER_DEFAULTS = {
  size: 5,
  colors: undefined,
  strokeWidth: 0.5,
  strokeColors: "#364f6b",
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  discrete: [],
  shape: "circle",
  radius: 5,
  offsetX: 0,
  offsetY: 0,
  onClick: undefined,
  onDblClick: undefined,
  hover: {
    size: 7,
    sizeOffset: 3,
  },
};

const THEME_DEFAULTS = {
  mode: "light",
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options: {
        chart: {
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: true,
          },
        },
        tooltip: {
          enabled: true,
          theme: "dark",
          style: {
            fontSize: "12px",
            color: "#000",
          },
        },
        markers: MARKER_DEFAULTS,
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        colors: [frenchRose.main, brightTurquoise.main, "#cabbe9", "#17b978"],
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
        fill: {
          opacity: 1,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#fff",
            },
          },
          title: {
            style: {
              colors: "#fff",
            },
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    const { config } = this.props;
    const { series, options } = config;
    if (
      series !== prevProps.config.series ||
      options !== prevProps.config.options
    ) {
      this.setState({
        options: {
          ...this.state.options,
          ...options,
        },
        series: series,
      });
    }
  }

  render() {
    const { options, series } = this.state;
    console.log({ options, series });
    return (
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        width="100%"
        height={500}
      />
    );
  }
}

Chart.defaultProps = {
  theme: THEME_DEFAULTS,
  options: {},
};
export default Chart;
