import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1><br />
    <NavLink exact activeClassName="is-active" to="/">Go home</NavLink><br />
    <NavLink activeClassName="is-active"  to="/create">Add Expense</NavLink><br />
    <NavLink activeClassName="is-active"  to="/edit">Edit Expense</NavLink><br />
    <NavLink activeClassName="is-active"  to="/help">Help</NavLink><br />
    <hr />
  </header>
);

export default Header;