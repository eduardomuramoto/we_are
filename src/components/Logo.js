import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import welogo from '../images/welogo.png'
import {NavbarBrand} from 'reactstrap';


class Logo extends Component {
render() {
  return (
    <div>
          <Link to="/"><NavbarBrand className="NavLogo" style={{marginTop:"10px",marginLeft:"20px", position:"absolute",zIndex:"1"}}>
           <img src={welogo} alt="WEARE" style={{width:"100px"}}/>
         </NavbarBrand></Link>
      </div>
    )
  }
}

export {Logo};
