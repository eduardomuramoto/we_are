class AddProposalIdToChatMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :chat_messages, :proposal_id, :integer
  end
end
