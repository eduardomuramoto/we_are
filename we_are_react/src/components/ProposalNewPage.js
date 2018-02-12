import React, {Component} from 'react';
import {Proposal} from '../requests/proposals';
import { Redirect } from 'react-router-dom'
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
                proposer_id:user.id,
                proposer_is_company:user.company_profile? true : false,
                proposer_profile_id: user.company_profile? user.company_profile.id : user.person_profile.id,
                proposer_name: user.company_profile? `${user.company_profile.name}` : `${user.person_profile.first_name} ${user.person_profile.last_name}`
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
