import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import injectSheet, {withTheme} from "react-jss";
import classnames from "classnames";
import { zIndex } from "../styles/styles";
import HomeIcon from "material-ui/svg-icons/action/home";
import { ListItem } from "material-ui";
import SelectableList from "../components/SelectableList";

const style = {
  wrapper: {
    background: "#EAEAEA",
        width:"250px",
        paddingTop: "16px",
        overflowX: "scroll",
        position: "sticky",
        top: 0,
        zIndex: zIndex.SideBar,
        boxShadow: "1px 1px 3px 1px rgba(0,0,0,.3)",
        transition: "margin ease .2s",
        "@media (max-width: 950px)": {
          position: "fixed",
          height: "100vh",
          top: "56px",
          bottom: 0,
          zIndex: 9999
        }
  },
  wrapper__closed: {
    marginLeft: "-260px",
  },

}

const SideBar = ({
  classes,
  goHome,
  current,
  isOpen,
}) => {
  const wrapperClasses = classnames(
    classes.wrapper,
    {[classes.wrapper__closed]: !isOpen}
  )
  return (
    <nav className={wrapperClasses}>
      <SelectableList value={current || "home"}>
        <ListItem
          value={"home"}
          onClick={goHome}
          primaryText="Home"
          leftIcon={<HomeIcon />}
        />
       
      </SelectableList>
    </nav>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goHome: () => push(`${process.env.PUBLIC_URL}/`),
    },
    dispatch
  );

const mapStateToProps = state => ({
  isOpen: state.appState.sidebarOpen,
  current: state.routing.location.pathname
    .split("/")
    .filter(i => !!i && i !== "tropo-beta-prototype")[0]
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(style)(SideBar));
