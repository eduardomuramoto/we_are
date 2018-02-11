import React, { Component } from 'react';
import {ChatMessage} from '../requests/chat_messages';
import { Card, Input,Button } from 'reactstrap';
import Cable from 'actioncable';

class ChatPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    currentChatMessage: '',
    chatLogs: [],
    loading:true
  };
}

componentWillMount() {
  this.createSocket();
}

async componentDidMount () {
  const chatLogs = await ChatMessage.all();
  this.setState({
    chatLogs,
    loading: false,
  });
}

handleSendEvent(event) {
  const {user, proposal} = this.props
  event.preventDefault();
  this.chats.create(this.state.currentChatMessage,proposal.id, user.id, user.full_name);
  this.setState({
    currentChatMessage: ''
  });
}

handleChatInputKeyPress(event) {
  if(event.key === 'Enter') {
    this.handleSendEvent(event);
  }
}

updateCurrentChatMessage(event) {
  this.setState({
    currentChatMessage: event.target.value
  });
}

createSocket() {
  let cable = Cable.createConsumer('ws://localhost:3000/cable');
  this.chats = cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {},
    received: (data) => {
      let chatLogs = this.state.chatLogs;
      chatLogs.push(data);
      this.setState({ chatLogs: chatLogs });
    },
    create: function(chatContent, chatProposalId, chatUserId, chatUserName) {
      this.perform('create', {
        content: chatContent,
        proposal_id: chatProposalId,
        user_id: chatUserId,
        user_name: chatUserName
      });
    }
  });
}

renderChatLog() {
  const {proposal,user} = this.props
  return this.state.chatLogs.map((el) => {
      if(el.proposal_id == proposal.id) {
        if(user.id == el.user_id) {
          return (
            <p style={{listStyleType: 'none'}} key={`chat_${el.id}`}>
              <p className='chat-message-owner'>{ el.content }
              <span className='chat-message-info' style={{fontSize:'12px',color:'grey'}}> - { el.user_name } -  { el.created_at }</span>
              </p>
            </p>
          );
        } else{
          return (
            <p style={{listStyleType: 'none'}} key={`chat_${el.id}`}>
              <p className='chat-message'>{ el.content }
              <span className='chat-message-info' style={{fontSize:'12px',color:'grey'}}> - { el.user_name } -  { el.created_at }</span>
              </p>
            </p>
          );
        }
      }
  });
}

  render() {
    const {proposal} = this.props
    const {loading} = this.state
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
      <div className='ChatPage'>
        <div className='stage'>
          <h1>{proposal.ice_breaker}'s Discussion Board</h1>
          <div className='chat-logs'>
            { this.renderChatLog() }
          </div>
          <div className='ChatForm' style={{display:'flex', marginTop:'10px'}}>
          <Input
            onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
            value={ this.state.currentChatMessage }
            onChange={ (e) => this.updateCurrentChatMessage(e) }
            type='text'
            placeholder='Enter your message...'
            className='chat-input' />
            <Button
                color='secondary'
                onClick={ (e) => this.handleSendEvent(e) }
                className='send'>
                Send
              </Button>
          </div>
        </div>
      </div>
    );
  }
}

export {ChatPage};
