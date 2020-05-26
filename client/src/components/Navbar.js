import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <button className='btn btn-add my-2 my-sm-0' type='submit'>
            Add Message
            <span style={{ paddingLeft: '5px' }}>
              <i className='fa fa-plus'></i>
            </span>
          </button>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/message'>
                Message
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
