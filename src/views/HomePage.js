import React from "react";
import injectSheet, { withTheme } from "react-jss";
import { connect } from "react-redux";
import { isMobile } from "../selectors/browser";
import { zIndex } from "../styles/styles";
import ReactMarkdown from "react-markdown";
import { Tabs, Tab } from "material-ui";
import legos from "../images/lego.png";
import summary from "../content/summary.md";
import components from "../content/components.md"

const styles = theme => ({
  banner: {
    height: "300px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    color: "white",
    textAlign: "center",
    backgroundImage: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)"
  },
  content: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: "36px 100px",
    maxWidth: "1100px",
    margin: "auto",
    "& p": {
      maxWidth: "500px",
      lineHeight: "1.5",
      marginBottom: "34px"
    },
    "@media (max-width: 600px)": {
      padding: "24px 10px"
    }
  },
  text: {
    marginRight: "50px"
  },
  legoImg: {
    maxWidth: "200px",
    width: "100%",
    height: "auto",
    padding: "20px"
  }
});

const HomePage = ({ classes, isMobile }) => (
  <React.Fragment>
    <div className={classes.banner}>
      CSS in a Componentized World; <br />Approaching Sanity
    </div>
    <section className={classes.content}>
      <div>
        <img className={classes.legoImg} src={legos} />
      </div>
      <div className={classes.text}>
        <ReactMarkdown
          source={summary}
        />
        <ReactMarkdown
          source={components}
        />
      </div>
    </section>
  </React.Fragment>
);

const mapStateToProps = state => ({
  isMobile: isMobile(state)
});
export default connect(mapStateToProps, null)(
  injectSheet(styles)(withTheme(HomePage))
);
