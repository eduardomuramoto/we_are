import React, {Component} from 'react';
import {PostDetails} from './PostDetails';
import {ProposalNewPage} from './ProposalNewPage';
import {ProposalIndexPage} from './ProposalIndexPage';
import {Post} from '../requests/posts';
import { Button, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';

class PostShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      post: {},
      loading: true,
      popoverOpen: false
    };
this.toggle = this.toggle.bind(this);
  }

  async componentDidMount () {
    const {params} = this.props.match;
    const post = await Post.get(params.id);
    // console.log(post)
    this.setState({
      post,
      loading: false,
      popoverOpen: false
    });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }


  render () {
    const {user} = this.props;
    const {loading, post} = this.state;

    if (loading) {
      return (
        <main
          className="PostShowPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading Post...</h3>
        </main>
      )
    }

    return (
      <main
        className="PostShowPage"
        style={{
          padding: '0 15%'
        }}
      >
        <PostDetails {...post} />

        { user.id === post.user.id?
          <ProposalIndexPage user={user} post={post} />
          :
           (
             post.proposals.filter(proposal => (proposal.proposer_id === user.id)).length > 0?
            <ProposalIndexPage user={user} post={{proposals:post.proposals.filter(proposal => (proposal.proposer_id === user.id))}} />
            :
            <div className="ProposeCollab" style={{display:"flex",marginTop:"10px"}}>
              <ProposalNewPage user={user} post={post} />
              <div>
                <Button id="Popover1" color="info" onClick={this.toggle}>
                ?
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                  <PopoverHeader>Start a Collab</PopoverHeader>
                  <PopoverBody>Get in touch with the project owner. Present yourself and how you would collab.</PopoverBody>
                </Popover>
              </div>
            </div>
          )
        }
      </main>
    );
  }
}

export {PostShowPage};
