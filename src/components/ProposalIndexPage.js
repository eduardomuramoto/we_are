import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProposalDetails} from './ProposalDetails';
import { Card, CardBody,
  CardText,  Button} from 'reactstrap';

class ProposalIndexPage extends Component {

  render () {
    const {post} = this.props
      return (
        <main
          className="PostIndexPage"
          style={{ width:'100%', marginTop:'10px'}}
          >
            <h3>Proposals</h3>
            <div style={{width:'100%',display: 'flex', flexWrap: 'wrap'}}>
              {
                post.proposals.map(proposal => (
                  <ProposalDetails proposal={proposal} />
              ))
            }
          </div>
        </main>
      );
    }
  }


  export {ProposalIndexPage};
