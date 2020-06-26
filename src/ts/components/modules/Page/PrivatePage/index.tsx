import * as React from "react";

import { useStyles } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const privatePage = (props: IProps) => {
  const classes = useStyles();

  return (
    <main className={classes.privatePageWrapper}>
      This is a private page!
      <br />
      {props.children}
    </main>
  );
};

export default privatePage;
