import { Component } from "react";
import "./NavbarStyles.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
