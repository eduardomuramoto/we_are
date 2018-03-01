import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody,
  CardText,  Button, Badge} from 'reactstrap';

class ProposalDetails extends Component {
 render() {
   const {proposal} = this.props;
  return (
      <Card style={{ width:'33%', marginBottom: '1rem' ,marginRight:'1rem'}} key={proposal.id}>
        <CardBody>
          <CardText>
            {proposal.ice_breaker}
            {proposal.proposer_is_company?
              <Link to={`/company_profiles/${proposal.proposer_profile_id}`}>
              <Badge style={{marginLeft:'10px'}} size='sm' color="secondary" pill>by {proposal.proposer_name}</Badge>
              </Link>
            :
              <Link to={`/person_profiles/${proposal.proposer_profile_id}`}>
              <Badge style={{marginLeft:'10px'}} size='sm' color="secondary" pill>by {proposal.proposer_name}</Badge>
              </Link>
          }
          </CardText>
          <Link to={`/proposals/${proposal.id}`}><Button size="sm"color="secondary">Go Discussion Board</Button></Link>
      </CardBody>
    </Card>
  );
  }
}
export {ProposalDetails};
