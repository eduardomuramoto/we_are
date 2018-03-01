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
          <strong>collaboration</strong> - /kəˌlæbəˈreɪʃn/ - <i>noun</i>
        </p>
        <p>
           <strong>1.</strong> the act of working with another person or group of people to create or produce something;
        </p>
        <p>
           <strong>2.</strong>  a piece of work produced by two or more people or groups working together.
        </p>
        <h4 style={{textAlign:'right'}}>. . . collab.</h4>
      </div>
      <img src={Home} alt="WEARE" style={{width:'100%',filter:'brightness(0.5)'}}/>


    </main>
  );
}

export {HomePage};
