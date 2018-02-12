import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Badge} from 'reactstrap';
// import {Field} from './Field';

class PostDetails extends Component {
 render() {
  return (
    <div className="PostDetails" style={{marginTop:"20px"}}>
      <Card>
        <CardBody>
          <CardTitle>
            <strong>{this.props.title}</strong>
            {this.props.owner_is_company?
              <Link to={`/company_profiles/${this.props.owner_profile_id}`}>
              <Badge style={{marginLeft:'10px'}} size='sm' color="secondary" pill>by {this.props.owner_name}</Badge>
              </Link>
            :
              <Link to={`/person_profiles/${this.props.owner_profile_id}`}>
              <Badge style={{marginLeft:'10px'}} size='sm' color="secondary" pill>by {this.props.owner_name}</Badge>
              </Link>
          }
          </CardTitle>
          <CardSubtitle className="text-muted" ><strong>Product Details: </strong><p>{this.props.product_details}.</p></CardSubtitle>
          <CardText><strong>Executive Summary: </strong><p>{this.props.executive_summary}.</p></CardText>
          <CardText><strong>Project Description: </strong><p>{this.props.project_description}.</p></CardText>
          <CardText><strong>Market & Sales: </strong><p>{this.props.market_sales}.</p></CardText>
        </CardBody>
      </Card>
    </div>
  );
  }
}
export {PostDetails};
