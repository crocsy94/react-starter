import * as React from "react";

import { useStyles } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const publicPage = (props: IProps) => {
  const classes = useStyles();

  return (
    <main className={classes.publicPageWrapper} >
      This is a public page!
      <br />
      {props.children}
    </main>
  );
};

export default publicPage;
