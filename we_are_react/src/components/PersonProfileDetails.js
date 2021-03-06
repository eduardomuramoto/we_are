import React,{Component} from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Badge , Collapse, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';


// import {Field} from './Field';

class PersonProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render(){
    return (
      <div className="CompanyProfileDetails" style={{marginTop:"20px"}}>
        <Card>
          <CardBody>
            <CardTitle>
              {this.props.first_name} {this.props.last_name}<strong> </strong>
              <Badge color="secondary">{this.props.job_title}</Badge>
            </CardTitle>
            <CardSubtitle className="text-muted" >{this.props.city} - {this.props.state}/{this.props.country}</CardSubtitle>
            <span><strong>Links: </strong>
            <a target="_blank" href={this.props.linkedin}>
              <FontAwesome
                name='linkedin'
                border='true'
                inverse='true'
                style={{backgroundColor:'#6D757C',borderRadius:'5px', marginBottom:'5px'}}
              />
            </a>
              <a target="_blank" href={this.props.portfolio}>
              <FontAwesome
                name='link'
                border='true'
                inverse='true'
                style={{backgroundColor:'#6D757C',borderRadius:'5px', marginBottom:'5px', marginLeft:'10px'}}
              />
            </a>
            </span>
            <CardText style={{marginTop:"10px"}}><strong>Experience:</strong><p>{this.props.experience}</p></CardText>
            <Button color="secondary" size="sm" onClick={this.toggle} style={{ marginBottom: '10px', marginTop:'10px' }}>Details</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody style={{padding:"10px",backgroundColor:"whitesmoke"}}>
                  <strong>Education:</strong><p>{this.props.education}</p>
                  <strong>Skills:</strong><p>{this.props.skills}</p>
                </CardBody>
              </Card>
            </Collapse>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export {PersonProfileDetails};
