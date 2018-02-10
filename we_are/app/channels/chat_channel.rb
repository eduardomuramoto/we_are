class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed; end

  def create(opts)
    ChatMessage.create(
      content: opts.fetch('content'),
      proposal_id: opts.fetch('proposal_id'),
      user_id: opts.fetch('user_id'),
      user_name: opts.fetch('user_name')
    )
  end
end
