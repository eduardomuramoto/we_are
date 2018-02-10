import React, {Component} from 'react';
import {Proposal} from '../requests/proposals';
import { FormControl, Button } from 'react-bootstrap';

class ProposalNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ice_breaker: ""
    };

    this.createProposal = this.createProposal.bind(this);
  }



  handleChange (name) {
    return event => {
      const {currentTarget} = event;
      this.setState({[name]: currentTarget.value});
    };
  }

  createProposal (event) {
    event.preventDefault();
    const {user,post} = this.props
    const {ice_breaker} = this.state;
    Proposal
      .create({ ice_breaker:ice_breaker,
                post_id:post.id,
                project_owner_id:post.user.id,
                proposer_id:user.id
              })
      .then(data => {

    })
  }

  render () {
    const {ice_breaker} = this.state;
    return (
        <form onSubmit={this.createProposal} style={{display:"flex"}}>
          <div>
            <FormControl
                type="ice_breaker"
                value={ice_breaker}
                placeholder="Enter an ice breaker"
                onChange={this.handleChange("ice_breaker")}
              />
          </div>
          <div>
            <Button type="submit" bsStyle="secondary" value="Sign In">Send Propose</Button>
          </div>
        </form>
    )
  }
}

export {ProposalNewPage};
