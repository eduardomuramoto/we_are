class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
                 id: chat_message.id,
                 created_at: chat_message.created_at.strftime('%F at %R'), # Change date format
                 content: chat_message.content,
                 proposal_id: chat_message.proposal_id,
                 user_id: chat_message.user_id,
                 user_name: chat_message.user_name
               )
  end
end
