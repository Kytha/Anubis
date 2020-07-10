import React, { useEffect } from "react";
import SeriesEntry from "./SeriesEntry";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import idgen from "./idgen";
import {
  XAXIS_TYPES,
  AGGREGATOR_TYPES,
  PLOT_TYPES,
  TEST,
} from "./lib/constants";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    margin: theme.spacing(0, 0, 2),
    flexGrow: 1,
  },
  toolbar: {
    padding: 0,
    margin: theme.spacing(3, 0),
  },
  entries: {
    marginBottom: theme.spacing(4),
  },
}));

const DEFAULT_ENTRY = {
  field: "",
  aggregator: AGGREGATOR_TYPES.NONE.type,
  type: PLOT_TYPES.BAR.type,
};

export default function SeriesMixer(props) {
  const classes = useStyles();
  const { fields, xAxisType, handleUpdate } = props;
  const [entries, setEntries] = React.useState([
    { id: idgen(), ...DEFAULT_ENTRY },
  ]);
  useEffect(() => {
    switch (xAxisType) {
      case XAXIS_TYPES.CATEGORY:
        setEntries(
          entries.map((entry) => {
            return { ...entry, aggregator: AGGREGATOR_TYPES.SUM.type };
          })
        );
        return;
      case XAXIS_TYPES.DATETIME:
      case XAXIS_TYPES.NUMERIC:
        setEntries(
          entries.map((entry) => {
            return { ...entry, aggregator: AGGREGATOR_TYPES.NONE.type };
          })
        );
        return;
    }
  }, [xAxisType]);
  const removeEntry = (id) => (e) => {
    setEntries(
      entries.filter((entry) => {
        return entry.id !== id;
      })
    );
  };
  const addEntry = (e) => {
    const entry = { id: idgen(), ...DEFAULT_ENTRY };
    setEntries([...entries, entry]);
  };

  const changeEntry = (id, update) => {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, ...update };
        else return entry;
      })
    );
  };
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.title}>
          Series Mixer
        </Typography>
        <IconButton edge="end" aria-label="delete" onClick={addEntry}>
          <AddIcon />
        </IconButton>
      </Toolbar>

      <div className={classes.entries}>
        <Grid container spacing={2}>
          {entries.map((entry) => (
            <Grid item xs={12} lg={9}>
              <SeriesEntry
                key={entry.id}
                fields={fields}
                field={entry.field}
                id={entry.id}
                type={entry.type}
                xAxisType={xAxisType}
                aggregator={entry.aggregator}
                handleRemove={removeEntry}
                handleChange={changeEntry}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate(entries)}
        size="large"
      >
        Update
      </Button>
    </div>
  );
}
