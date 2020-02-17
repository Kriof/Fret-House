import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Navbar from './pages/Navbar'
import TaskListPage from './pages/TaskListPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HashRouter>
          <div id="page-body">
            <Navbar />
            <Switch>
              <Route path='/duties' component={TaskListPage} />
              <Route path='/addDuty' component={TaskListPage} />
              <Route path='/removeDuty' component={TaskListPage} />
              <Route path='/' component={HomePage} />
            </Switch>
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
