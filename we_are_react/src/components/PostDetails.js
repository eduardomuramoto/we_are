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
            <strong>{props.title}</strong>
          </CardTitle>
          <CardSubtitle className="text-muted" ><strong>Product Details: </strong><p>{props.product_details}.</p></CardSubtitle>
          <CardText><strong>Executive Summary: </strong><p>{props.executive_summary}.</p></CardText>
          <CardText><strong>Project Description: </strong><p>{props.project_description}.</p></CardText>
          <CardText><strong>Market & Sales: </strong><p>{props.market_sales}.</p></CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export {PostDetails};
