import React from "react";
import { PLOT_TYPES, AGGREGATOR_TYPES, XAXIS_TYPES } from "./lib/constants";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DeleteIcon from "@material-ui/icons/Delete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  formControl: {
    margin: theme.spacing(0, 5, 0, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 0, 0, 0),
      "&:not(:first-child)": {
        margin: theme.spacing(5, 0, 0, 0),
      },
    },
  },
  select: {
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  actions: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2, 0, 0),
    },
  },
  cardContent: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default function InteractiveList(props) {
  const {
    fields,
    handleRemove,
    field,
    aggregator,
    type,
    handleChange,
    id,
    xAxisType,
  } = props;
  const classes = useStyles();

  const onChange = (e) => {
    const entry = { [e.target.name]: e.target.value };
    handleChange(id, entry);
  };
  const AggregatorSelect = (props) => {
    const classes = useStyles();
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="aggregator-select-label">Aggregator</InputLabel>
        <Select
          className={classes.select}
          value={aggregator}
          name="aggregator"
          onChange={onChange}
        >
          {AGGREGATOR_TYPES.list.map((aggregator) => {
            if (
              aggregator.type === AGGREGATOR_TYPES.NONE.type &&
              xAxisType === XAXIS_TYPES.CATEGORY
            )
              return;
            else
              return (
                <MenuItem value={aggregator.type} key={aggregator.type}>
                  {aggregator.label}
                </MenuItem>
              );
          })}
        </Select>
      </FormControl>
    );
  };

  const PlotTypeSelect = (props) => {
    const classes = useStyles();
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="type-select-label">Plot Type</InputLabel>
        <Select
          className={classes.select}
          value={type}
          name="type"
          onChange={onChange}
        >
          {PLOT_TYPES.list.map((plot) => (
            <MenuItem value={plot.type} key={plot.type}>
              {plot.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const FieldSelect = (props) => {
    const { fields } = props;
    const classes = useStyles();
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="field-select-label">Field</InputLabel>
        <Select
          labelId="field-select-label"
          disabled={!fields.length}
          className={classes.select}
          value={field}
          name="field"
          onChange={onChange}
        >
          {fields.map((field, i) => (
            <MenuItem value={field} key={i}>
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <Card className={classes.root}>
      <CardContent variant="outlined" className={classes.cardContent}>
        <FieldSelect fields={fields} />
        <AggregatorSelect />
        <PlotTypeSelect />

        <div className={classes.actions}>
          <IconButton edge="end" aria-label="remove" onClick={handleRemove(id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
