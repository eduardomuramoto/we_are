import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, Button} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

// import {Field} from './Field';

function CompanyProfileDetails (props = {}) {

  return (
    <div className="CompanyProfileDetails" style={{marginTop:"20px"}}>
      <Card>
        <CardBody>
          <CardTitle>
            <strong>Company: </strong>{props.name}<strong> </strong>
            <Badge color="secondary">{props.sector}</Badge>
          </CardTitle>
          <CardSubtitle className="text-muted" >{props.city} - {props.state}/{props.country}</CardSubtitle>
          <span><strong>Links: </strong>
          <a target="_blank" href={props.linkedin}>
            <FontAwesome
              name='linkedin'
              border='true'
              inverse='true'
              style={{backgroundColor:'grey',borderRadius:'5px', marginBottom:'5px'}}
            />
          </a>
            <a target="_blank" href={props.website}>
            <FontAwesome
              name='link'
              border='true'
              inverse='true'
              style={{backgroundColor:'grey',borderRadius:'5px', marginBottom:'5px', marginLeft:'10px'}}
            />
          </a>
          </span>
          <CardText><strong>About: </strong>{props.about}.</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export {CompanyProfileDetails};
