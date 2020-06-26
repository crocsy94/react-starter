import { Button } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { Action, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as visitorActions from "../../../actions/visitors";
import { IState } from "../../../reducers";

interface IProps {
  decreaseVisitors: () => Action;
  increaseVisitors: () => Action;
  visitorNumber: number;
}

class Visitors extends React.Component<IProps> {

  render() {

    return (
      <div>
        Number of visitors today
        <br />
        <Button onClick={this.props.increaseVisitors}>+ 1</Button>
        {this.props.visitorNumber}
        <Button onClick={this.props.decreaseVisitors}>- 1</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  visitorNumber: state.visitors.visitorNumber,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
    decreaseVisitors: () => dispatch(visitorActions.decreaseVisitor()),
    increaseVisitors: () => dispatch(visitorActions.increaseVisitor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visitors);
