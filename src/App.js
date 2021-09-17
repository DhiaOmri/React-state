import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
class App extends React.Component {
  state = {
    fullName: "Dhia Omri",
    bio: "",
    imgSrc: Logo,
    profession: "",
    shows: false,
  };
  handleClick = () => this.setState({ shows: "true" });

  componentDidMount() {
  alert('component Did Mount')
  }

  componentWillUnmount() {
   alert('component Will Unmount')
  }
  componentDidUpdate(){
    alert('component Did Update')
  }
  render() { 
    
    return (  
      <div className="App">
        <div className="content">
        <img className="logo" src={this.state.shows?this.state.imgSrc:""} alt="" />
        <h1>{this.state.shows?this.state.fullName:""}</h1>
        <p>{this.state.shows?this.state.bio:""}</p>
        <p>{this.state.shows?this.state.profession:""}</p>
      {this.state.shows? ( <ul className="social-link">
          <a href="https://github.com/DhiaOmri" className="social">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px" }} />
          </a>
          <a href="https://github.com/DhiaOmri">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "30px" }} />
          </a>
        </ul>):""}
        <button onClick={this.handleClick} className="app-button"> ClickMe</button>
       

        </div>
    
      </div>
    );
  }
}

export default App;
