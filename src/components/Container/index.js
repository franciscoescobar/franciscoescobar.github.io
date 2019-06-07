import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 100px 60px 100px"
  },
  first: {
    backgroundColor: "#fafafa",
    margin: "-100px 100px 0 100px",
    position: "relative",
    zIndex: 3
  }
}));

const Container = props => {
  const classes = useStyles();

  return (
    <Paper className={props.first ? classes.first : classes.root}>
      {props.children}
    </Paper>
  );
};
export default Container;
