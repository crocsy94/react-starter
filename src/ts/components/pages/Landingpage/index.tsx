import { Button } from "@material-ui/core";
import * as React from "react";

import Visitors from "../../modules/Visitors";

const LandingPage = () => {

  return (
    <>
      You're now logged in!
      <Button variant="contained" color="primary">Yayy!!</Button>
      <br />
      <Visitors />
    </>
  );
};

export default LandingPage;
