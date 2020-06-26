import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../../../reducers";
import PrivatePage from "./PrivatePage";
import PublicPage from "./PublicPage";

interface IProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

class Page extends React.Component<IProps> {

  render() {

    if (!this.props.isAuthenticated) {
      return (
        <PublicPage >
          {this.props.children}
        </PublicPage>
      );
    }

    return (
      <PrivatePage >
        {this.props.children}
      </PrivatePage>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mapStateToProps)(Page);
