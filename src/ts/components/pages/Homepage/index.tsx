import { Button } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as sessionActions from "../../../actions/session";
import { IState } from "../../../reducers";
import Page from "../../modules/Page";
import CenterLayout from "../../modules/UI/CenterLayout";

interface IProps {
  login: () => void;
}

class Homepage extends React.Component<IProps> {

  render() {
    return (
      <Page>
        <CenterLayout>
          Hello dear visitor. Please log in to view further content!
          <br />
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.props.login}
          >
            Login
          </Button>
        </CenterLayout>
      </Page>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
    login: () => dispatch(sessionActions.login()),
  };
};

export default connect(null, mapDispatchToProps)(Homepage);
