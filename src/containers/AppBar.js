import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import injectSheet, { withTheme } from "react-jss";
import { openSidebar, closeSidebar } from "../actions/appActions";
import { withRouter } from "react-router-dom";
import { zIndex } from "../styles/styles";
import { isMobile } from "../selectors/browser";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import { IconButton } from "material-ui";

const style = theme => ({
  wrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 56,
    background: "white",
    zIndex: zIndex.AppBar,
    fontSize: "20px",
    color: theme.palette.textColor,
    padding: "0 16px 0 8px",
    boxShadow: "1px 1px 3px 1px rgba(0,0,0,.5)",
    textTransform: "capitalize"
  },
  toggleMenu: {
    marginRight: "16px"
  }
});

const AppBar = ({
  location,
  sidebarIsOpen,
  openSidebar,
  closeSidebar,
  isMobile,
  classes
}) => {
  const appName = location.pathname
    .split("/")
    .filter(i => !!i && i !== "tropo-beta-prototype")[0];
  const locationTitle = appName ? appName.replace(/-/g, " ") : "Home";
  return (
    <header className={classes.wrapper}>
      <div className={classes.toggleMenu}>
        <IconButton
          onClick={() => (sidebarIsOpen ? closeSidebar() : openSidebar())}
        >
          <MenuIcon />
        </IconButton>
      </div>
      {locationTitle}
    </header>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openSidebar,
      closeSidebar
    },
    dispatch
  );

const mapStateToProps = state => ({
  sidebarIsOpen: state.appState.sidebarOpen,
  isMobile: isMobile(state)
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    injectSheet(style)(withTheme(AppBar))
  )
);
