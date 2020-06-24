import { Button } from "@material-ui/core";
import * as React from "react";

import Visitors from "../Visitors";

const App = () => {

  return (
    <div>
      Hello my starter App
      <Button variant="contained" color="primary">Click Me!</Button>
      <Visitors />
    </div>
  );
};

export default App;
