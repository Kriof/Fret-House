import React from 'react';
import {
    Link
  } from 'react-router-dom';
class Navigation extends React.Component {
    render() {
      return (
        <div className="navbar">
          <ul>
            <li>
              <button>
                <Link className="navbar-link" to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/duties">Duties</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/addDuty">Add Duty</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/removeDuty">Remove duty</Link>
              </button>
            </li>
          </ul>
        </div>
      )
    }
  }
  
  export default Navigation