import React from "react";
import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Information">
          <div>
            <h1 className="Name">Ivailo Hristov</h1>
            <h2 className="Title">Full-Stack Web Developer</h2>
          </div>
          <div className="Contacts">
            <p>
              <span>Phone:</span> +359 877 676 887
            </p>
            <p>
              <span>E-mail:</span> ivailohristov1990@gmail.com
            </p>
            <a target="_blank" href="https://github.com/HristovCodes">
              <span>Github:</span> github.com/HristovCodes/
            </a>
          </div>
        </div>
        <ul className="Skills">
          <li className="Category">Languages</li>
          <li>C#</li>
          <li>SQL</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>ES6</li>
          <li>SCSS/SASS</li>
          <li className="Category">Frameworks</li>
          <li>Asp.Net</li>
          <li>Entity Framework</li>
          <li>React</li>
          <li>Tailwind</li>
          <li className="Category">Other</li>
          <li>Git</li>
          <li>WebPack</li>
          <li>Figma</li>
        </ul>
        <div className="Projects"></div>
        <div className="Links"></div>
      </div>
    );
  }
}
