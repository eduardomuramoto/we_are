class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
                 id: chat_message.id,
                 created_at: chat_message.created_at.strftime('%H:%M'), # Change date format
                 content: chat_message.content,
                 user_id: chat_message.user_id,
                 user_name: chat_message.user_name
               )
  end
end
