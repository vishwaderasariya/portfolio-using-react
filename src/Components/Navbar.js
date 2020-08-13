import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import Layout from "../Layout";

export class Navbar extends Component {
  render() {
    return (
      <Layout bg="#E0EBE8">
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            color: "#3E9C87",
          }}
        >
          <div>
            <h2>Vishwa Derasariya</h2>
          </div>
          <div style={{ margin: "auto" }} />
          <div>
            <NavLink to="/" className="navlink">
              About
            </NavLink>

            <NavLink to="/projects" className="navlink">
              Projects
            </NavLink>
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Navbar;
