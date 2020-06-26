import * as React from "react";

import { useStyles } from "./styles";

export interface IProps {
  children: React.ReactNode;
  color: string;
}

const privatePage = (props: IProps) => {
  const classes = useStyles(props);

  return (
    <main className={classes.privatePageWrapper}>
      This is a private page!
      <br />
      {props.children}
    </main>
  );
};

export default privatePage;
