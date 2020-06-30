import React from "react";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.changeTabToHome = this.changeTabToHome.bind(this);
    this.changeTabToDesigner = this.changeTabToDesigner.bind(this);
    this.changeTabToAbout = this.changeTabToAbout.bind(this);
    this.state = {
      tab: Home,
    };
  }

  changeTabToHome() {
    this.setState({ tab: Home });
  }

  changeTabToDesigner() {
    this.setState({ tab: Designer });
  }

  changeTabToAbout() {
    this.setState({ tab: About });
  }

  render() {
    return (
      <div className="Tab">
        <div className="Buttons">
          <Button onBtnPress={this.changeTabToHome} name="Home"></Button>
          <Button
            onBtnPress={this.changeTabToDesigner}
            name="Designer"
          ></Button>
          <Button onBtnPress={this.changeTabToAbout} name="About"></Button>
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

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Path Of Exile Harvest Garden Builder</h1>
        <h2>
          This website's purpose is to help you in designing a garden layout for
          the Harvest expansion of the popular arpg Path Of Exile
        </h2>
      </div>
    );
  }
}

class Designer extends React.Component {
  render() {
    return (
      <div className="Designer">
        <h1>WIP</h1>
        <h2>Page for the actual garden builder.</h2>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <h1>WIP</h1>
        <h2>Page for well about.</h2>
      </div>
    );
  }
}

export default Tab;
