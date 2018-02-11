import React from 'react';
import Home from '../images/home.jpg'


function HomePage (props) {
  return (
    <main
      className='HomePage'
      style={{position:'relative'}}
    >

      <div className='HomeDiv'>
        <h1 style={{margin:'0'}}>WE ARE . . .</h1>
        <br/>
        <p>
          This is a collaboration portal, that connects awesome people that want to make ideas happen.
        </p>
        <h4>. . . collab.</h4>
      </div>
      <img src={Home} alt="WEARE" style={{width:'100%',filter:'brightness(0.5)'}}/>


    </main>
  );
}

export {HomePage};
