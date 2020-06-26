import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../../../reducers";
import PrivatePage from "./PrivatePage";
import PublicPage from "./PublicPage";

interface IProps {
  colorId: number;
  children: React.ReactNode;
  isAuthenticated: boolean;
}

class Page extends React.Component<IProps> {

  render() {
    const colorList = ["aqua", "gray", "burlywood", "orange", "yellow"];

    if (!this.props.isAuthenticated) {
      return (
        <PublicPage >
          {this.props.children}
        </PublicPage>
      );
    }

    return (
      <PrivatePage
        color={colorList[this.props.colorId]}
      >
        {this.props.children}
      </PrivatePage>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  colorId: state.visitors.colorId,
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mapStateToProps)(Page);
