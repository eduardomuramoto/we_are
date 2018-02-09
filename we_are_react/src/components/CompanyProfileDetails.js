import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge} from 'reactstrap';
// import {Field} from './Field';

function CompanyProfileDetails (props = {}) {
  // const {seller = {}} = props;
  const containerStyle = {
    paddingLeft: "10px"
  };

  return (
    <div className="CompanyProfileDetails" style={{marginTop:"20px"}}>
      <Card>
        <CardBody>
          <CardTitle>
            <strong>Company: </strong>{props.name}<strong> </strong>
            <Badge color="secondary">{props.sector}</Badge>
          </CardTitle>
          <CardSubtitle className="text-muted" >{props.city} - {props.state}/{props.country}</CardSubtitle>
          <CardText><strong>About: </strong>{props.about}.</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export {CompanyProfileDetails};
