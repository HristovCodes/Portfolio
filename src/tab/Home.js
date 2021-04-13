import React from "react";
import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Information></Information>
        <Hero></Hero>
        <div className="Grid">
          <Skills></Skills>
          <Projects></Projects>
        </div>
      </div>
    );
  }
}

class Information extends React.Component {
  render() {
    return (
      <div className="Information">
        <div className="Me">
          <h1 className="Name">Ivailo Hristov</h1>
          <h2 className="Title">Full-Stack Web Developer</h2>
        </div>
        <div className="Contacts">
          <p>
            <span>Phone:</span>
            +359 877 676 887
          </p>
          <p>
            <span>Mail:</span>
            ivailohristov1990@gmail.com
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/HristovCodes"
          >
            <span>Github:</span>
            github.com/HristovCodes/
          </a>
        </div>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <h2>Skills</h2>
        <div className="SkillsGrid">
          <ul className="Category">
            <li className="Header">Languages</li>
            <li>C#</li>
            <li>SQL</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ES6</li>
            <li>SCSS/SASS</li>
          </ul>
          <ul className="Category">
            <li className="Header">Frameworks</li>
            <li>Asp.Net</li>
            <li>Entity Framework</li>
            <li>React</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>React Testing Library</li>
          </ul>
          <ul className="Category">
            <li className="Header">Databases</li>
            <li>Firebase</li>
            <li>MSSQL</li>
          </ul>
          <ul className="Category">
            <li className="Header">Other</li>
            <li>Git</li>
            <li>WebPack</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <div className="Container">
          <Project
            name="Hotel Reservations"
            languages={["HTML", "CSS", "ES6", "ReactJS", "Firebase"]}
            description="This web app allows you to reserve rooms quickly and easily for you hotel, complex, villa or anything else really."
          ></Project>
          <Links
            code="https://github.com/HristovCodes/Hotel-Reservations/"
            visit="https://hristovcodes.github.io/Hotel-Reservations/"
          ></Links>
        </div>
        <div className="Container">
          <Project
            name="Tax Collector"
            languages={[
              "HTML",
              "CSS",
              "ES6",
              "ReactJS",
              "Firebase",
              "DiscordJS",
            ]}
            description="Discord bot made to automate the tedious proccess that is tax collection in the game Albion Online."
          ></Project>
          <Links
            code="https://github.com/HristovCodes/Tax-Collector/"
            visit=""
          ></Links>
        </div>
        {/* <div className="Container">
          <Project
            name="Pellio"
            languages={["C#", "EF", "HTML", "CSS", "ES6", "MSSQL"]}
            description="Asp.Net Core e-commerce web app developed using Asp.Net Core, EF Core and MSSQLServer for the database."
          ></Project>
          <Links
            code="https://github.com/HristovCodes/Pellio-Project/"
            visit=""
          ></Links>
        </div> */}
        <div className="Container">
          <Project
            name="Events Board"
            languages={["HTML", "CSS", "ES6", "ReactJS", "Firebase"]}
            description="A social media for events such as workshops, store openings, concerts and anything else in between."
          ></Project>
          <Links
            code="https://github.com/HristovCodes/Events-Board/"
            visit="https://hristovcodes.github.io/Events-Board/"
          ></Links>
        </div>
        <div className="Container">
          <Project
            name="Weather App"
            languages={["HTML", "CSS", "ES6", "ReactJS"]}
            description="View local weather or weather anywhere else in the world. Weather app made using Open Weather Map, Giphy and Here API."
          ></Project>
          <Links
            code="https://github.com/HristovCodes/Weather-App/"
            visit="https://hristovcodes.github.io/Weather-App/"
          ></Links>
        </div>
        <div className="Container">
          <Project
            name="Find Waldo"
            languages={["HTML", "CSS", "ES6", "ReactJS", "Firebase"]}
            description="Photo tagging game. Your goal is to find a certain character (e.g Waldo) in a big image with many more characters."
          ></Project>
          <Links
            code="https://github.com/HristovCodes/Find-Waldo/"
            visit="https://hristovcodes.github.io/Find-Waldo/"
          ></Links>
        </div>
      </div>
    );
  }
}

class Links extends React.Component {
  render() {
    if (this.props.visit === "") {
      return (
        <div className="Links">
          <a
            target="_blank"
            rel="noreferrer"
            href={this.props.code}
            className="Btn"
          >
            Code
          </a>
        </div>
      );
    } else {
      return (
        <div className="Links">
          <a
            target="_blank"
            rel="noreferrer"
            href={this.props.code}
            className="Btn"
          >
            Code
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={this.props.visit}
            className="Btn"
          >
            Visit
          </a>
        </div>
      );
    }
  }
}

class Project extends React.Component {
  render() {
    let langs = (
      <div className="Languages">
        {this.props.languages.map((lang) => (
          <p className="Lang">{lang}</p>
        ))}
      </div>
    );
    return (
      <div className="Project">
        <p className="PrjName">{this.props.name}</p>
        <p className="Description">{this.props.description}</p>
        {langs}
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return (
      <div className="About">
        <h2>About me</h2>
        <p className="Intro">Hello, I'm Ivailo</p>
        <p>
          I’m a developer with a keen interest in web development, sports and
          music.
        </p>
        <p>
          I also love learning and sharing my knowledge about technologies that
          I’m passionate about. I do this by doing code reviews for friends,
          reviewing community code, contrubuting to open-source projects and
          helping out people that are new to programming get started.
        </p>
        <p>
          I’m capable of learning new tools and stacks quickly and efficiently
          when needed. I enjoy a good challenge, am well-organized and able to
          deliver consistent results.
        </p>
      </div>
    );
  }
}
