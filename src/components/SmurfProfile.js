import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Smurf from './Smurf';

const SmurfProfile = ({ smurfs }) => {
  const { id } = useParams();
  const smurf = smurfs.find(smurf => smurf.id === id);
  console.log(smurf);
  return smurf ? (<Smurf smurf={smurf}/>) : (<h1>No Smurf by that id</h1>);
};

const stateToProps = ({ smurfs }) => ({ smurfs });
export default connect(stateToProps)(SmurfProfile);
