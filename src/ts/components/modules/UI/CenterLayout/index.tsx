import * as React from "react";

import { useStyles } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const centerLayout = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      {props.children}
    </div>
  );
};

export default centerLayout;
