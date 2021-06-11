import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import SmurfProfile from './components/SmurfProfile';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// actions
import { fetchSmurfs } from './actions';

import axios from 'axios';

class App extends Component {
  componentDidMount () {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <main>
            <Route exact path="/">
              {
                !!this.props.apiError.length ?
                  <h1>{this.props.apiError}</h1> :
                <>
                  <SmurfList/>
                  <AddForm/>
                </>
              }
            </Route>
            <Route path="/smurf/:id">
              <SmurfProfile/>
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

const stateToProps = ({apiError}) => ({apiError});

export default connect(stateToProps, { fetchSmurfs })(App);
//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
