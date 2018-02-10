import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardImg,  CardBody,
  CardText,  Button } from 'reactstrap';

class ProposalIndexPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {user,post} = this.props
      return (
        <main
          className="PostIndexPage"
          style={{padding: '0  20px', width:'100%'}}
          >
            <h2>Proposals</h2>
            <div style={{width:'100%', paddingLeft: '0 20px',display: 'flex',justifyContent: 'space-between', flexWrap: 'wrap'}}>
              {
                post.proposals.map(proposal => (
                  <Card style={{ width:'33%', marginBottom: '1rem' }} key={proposal.id}>
                    <CardBody>
                      <CardText>{proposal.ice_breaker}</CardText>
                      <Button>Go somewhere</Button>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </main>
      );
    }
  }


  export {ProposalIndexPage};
