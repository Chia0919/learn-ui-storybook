import Fab from "@material-ui/core/Fab";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);
export interface IProps {
  onClick?: () => void;
  color?: any;
  children: any;
}
export default function FloatingButton(props: IProps) {
  const classes = useStyles();
  const { onClick, color, children } = props;

  return (
    <div className={classes.root}>
      <Fab color={color} aria-label="add" onClick={onClick}>
        {children}
      </Fab>
    </div>
  );
}
