import React, { Component } from "react";
import { connect } from 'react-redux';

// components
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// actions
import { fetchSmurfs } from './actions';

class App extends Component {
  componentDidMount () {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default connect(undefined, { fetchSmurfs })(App);
//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
