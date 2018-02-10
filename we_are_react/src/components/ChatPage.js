import React, { Component } from 'react';
import Cable from 'actioncable';

class ChatPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    currentChatMessage: '',
    chatLogs: []
  };
}

componentWillMount() {
  this.createSocket();
}

handleSendEvent(event) {
  const {user} = this.props
  event.preventDefault();
  this.chats.create(this.state.currentChatMessage, user.id, user.full_name);
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
    create: function(chatContent, chatUserId, chatUserName) {
      this.perform('create', {
        content: chatContent,
        user_id: chatUserId,
        user_name: chatUserName
      });
    }
  });
}

renderChatLog() {
  return this.state.chatLogs.map((el) => {
    return (
      <li key={`chat_${el.id}`}>
        <span className='chat-created-at'>{ el.created_at } - </span>
        <span className='chat-user-name'>{ el.user_name } said: </span>
        <span className='chat-message'>{ el.content }</span>
      </li>
    );
  });
}

  render() {
    return (
      <div className='ChatPage'>
        <div className='stage'>
          <h1>Chat</h1>
          <ul className='chat-logs'>
            { this.renderChatLog() }
          </ul>
          <input
            onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
            value={ this.state.currentChatMessage }
            onChange={ (e) => this.updateCurrentChatMessage(e) }
            type='text'
            placeholder='Enter your message...'
            className='chat-input' />
            <button
                onClick={ (e) => this.handleSendEvent(e) }
                className='send'>
                Send
              </button>
        </div>
      </div>
    );
  }
}

export {ChatPage};
