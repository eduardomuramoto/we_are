class AddUserToChatMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :chat_messages, :user_id, :integer
    add_column :chat_messages, :user_name, :string
  end
end
