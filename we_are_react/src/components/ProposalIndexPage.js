import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ChatPage} from './ChatPage';
import { Card, CardImg,  CardBody,
  CardText,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProposalIndexPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
                      <Button color="secondary" onClick={this.toggle}>Open Discussion Board</Button>
                      <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Discussion Board</ModalHeader>
                        <ModalBody>
                          <ChatPage user={user} />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                      </Modal>
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
