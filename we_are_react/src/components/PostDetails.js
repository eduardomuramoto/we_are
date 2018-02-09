import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge} from 'reactstrap';
// import {Field} from './Field';

function PostDetails (props = {}) {
  // const {seller = {}} = props;
  const containerStyle = {
    paddingLeft: "10px"
  };

  return (
    <div className="PostDetails" style={{marginTop:"20px"}}>
      <Card>
        <CardBody>
          <CardTitle>
            <strong>Project: </strong>{props.title}
          </CardTitle>
          <CardSubtitle className="text-muted" >details???</CardSubtitle>
          <CardText><strong>About: </strong><p>{props.executive_summary}.</p></CardText>
          <CardText><strong>Product Details: </strong><p>{props.product_details}.</p></CardText>
          <CardText><strong>Project Description: </strong><p>{props.project_description}.</p></CardText>
          <CardText><strong>Market & Sales: </strong><p>{props.market_sales}.</p></CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export {PostDetails};
