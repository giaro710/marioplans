import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">NewProject</NavLink>
      </li>

      <li>
        <NavLink to="/">Log out</NavLink>
      </li>

      <li>
        <NavLink to="/" className="btn btn-floating cyan">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
