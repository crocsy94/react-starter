import { Button } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as sessionActions from "../../../actions/session";
import * as visitorsActions from "../../../actions/visitors";
import { IState } from "../../../reducers";
import Page from "../../modules/Page";
import CenterLayout from "../../modules/UI/CenterLayout";
import Visitors from "../../modules/Visitors";

interface IProps {
  logout: () => void;
  changeColor: () => void;
}

class LandingPage extends React.Component<IProps> {

  render() {

    return (
      <Page>
        <CenterLayout>
        You're now logged in!
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.changeColor}
        >
          Yayy!!
        </Button>
        <br />
        <Visitors />
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.props.logout}
        >
          Logout
        </Button>
        </CenterLayout>
      </Page>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
    changeColor: () => dispatch(visitorsActions.changeColor()),
    logout: () => dispatch(sessionActions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
