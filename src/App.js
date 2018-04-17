import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, IndexRoute, withRouter } from "react-router-dom";
import { closeSidebar, openSidebar } from "./actions/appActions";
import Sidebar from "./containers/SideBar";
import AppBar from "./containers/AppBar";
import HomePage from "./views/HomePage";
import { bindActionCreators } from "../../../Library/Caches/typescript/2.7/node_modules/redux";

class App extends Component {
  render() {
    const { showWizard, closeSidebar, openSidebar, windowSize } = this.props;
    return !showWizard ? (
      <div>
        <AppBar />
        <div
          style={{
            display: "flex",
            height: "calc(100vh - 56px)"
          }}
        >
          <Sidebar />
          <main
            style={{
              background: "#F2F2F2",
              flexGrow: 1,
              width: 0,
              overflowX: "scroll",
            }}
          >
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={HomePage}
            />
          </main>
        </div>
      </div>
    ) : null;
  }
}

function mapStateToProps(store) {
  return {
    windowSize: store.browser.mediaType,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeSidebar,
      openSidebar
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
