import React from 'react';
import { Jumbotron } from 'react-bootstrap';


function HomePage (props) {
  return (
    <main
      className='HomePage'
      style={{padding: '0 20px',marginTop:'20px'}}
    >
      <Jumbotron className="Jumbotron">
  <h1>This is WE ARE.</h1>
  <br/>
  <p>
    This is a simple app, that connects different people to make ideas happen.
  </p>
  <h4>let's collab.</h4>

</Jumbotron>
    </main>
  );
}

export {HomePage};
