import React from "react";
import classes from "./Nav.module.css";
import { Fragment } from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = ({ active, setActive }) => {
  return (
    <Fragment>
      <div
        className="card p-5"
        style={{ background: "#424f95", height: "50px" }}
      >
        <Navbar className="justify-content-around h-100 navbar">
          <Link to="/">
            Upload Movie
          </Link>
          <Link to="/video-library">
            Movies
          </Link>
          <Link to="/merged-videos">
            Merged Video
          </Link>
        </Navbar>
      </div>
    </Fragment>
  );
};
export default React.memo(NavBar);
