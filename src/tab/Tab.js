import React from "react";
import Home from "./Home.js";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.changeTabToHome = this.changeTabToHome.bind(this);
    this.state = {
      tab: Home,
    };
  }

  changeTabToHome() {
    this.setState({ tab: Home });
  }

  render() {
    return (
      <div className="Tab">
        <div className="Nav">
          <Button onBtnPress={this.changeTabToHome} name="Home"></Button>
        </div>
        <Body tab={this.state.tab}></Body>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onBtnPress(e.target.value);
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.name}</button>;
  }
}

class Body extends React.Component {
  render() {
    return (
      <this.props.tab
        title={this.props.title}
        content={this.props.content}
      ></this.props.tab>
    );
  }
}

export default Tab;
