import React, {Component} from 'react';
import {ChatPage} from './ChatPage';
import {Proposal} from '../requests/proposals';

class ProposalShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      proposal: {},
    };

  }

  async componentDidMount () {
    const {params} = this.props.match;
    const proposal = await Proposal.get(params.id);
    // console.log(proposal)
    this.setState({proposal, loading: false});
  }

  render () {
    const {loading, proposal} = this.state;
    const { user } = this.props;

    if (loading) {
      return (
        <main
          className="ProposalShowPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading proposal...</h3>
        </main>
      )
    }
    return (
      <main
        className="ProposalShowPage"
        style={{
          padding: '0 20px'
        }}
      >
        <ChatPage proposal={proposal} user={user} />

      </main>
    );
  }
}

export {ProposalShowPage};
