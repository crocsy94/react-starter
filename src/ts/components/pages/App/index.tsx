import { Button } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { IState } from "../../../reducers";
import Visitors from "../../modules/Visitors";
import Homepage from "../Homepage";
import LandingPage from "../Landingpage";

interface IProps {
  isAuthenticated: boolean;
}

class App extends React.Component<IProps> {

  render() {

    let routes = (
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/private" component={LandingPage} exact={true} />
          <Redirect to="/private" />
        </Switch>
      );
    }

    return (
      <>
        {routes}
      </>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mapStateToProps)(App);
