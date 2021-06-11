import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = ({ isLoading, smurfs }) => {
   // const testSmurf = {
   //   id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
   //   name:'Poppa Smurf',
   //   position:'Village Leader',
   //   nickname: 'Pops',
   //   description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
   // }

   if (isLoading) {
     return <h1>Loading...</h1>;
   }

  return(
    <div
      className="listContainer">
      {
        smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)
      }
    </div>
  );
};

const stateToProps = (state) => ({
  smurfs: state.smurfs,
  isLoading: state.isLoading
});

export default connect(stateToProps)(SmurfList);
