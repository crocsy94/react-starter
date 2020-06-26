import { Button } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { Action, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as sessionActions from "../../../actions/session";
import { IState } from "../../../reducers";
import Page from "../../modules/Page";

interface IProps {
  login: () => Promise<Action>;
}

class Homepage extends React.Component<IProps> {

  render() {
    return (
      <Page>
        <>
          Hello dear visitor. Please log in to view further content!
          <br />
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.props.login}
          >
            Login
          </Button>
        </>
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
