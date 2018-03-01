class AddProposerNameToProposals < ActiveRecord::Migration[5.1]
  def change
    add_column :proposals, :proposer_name, :string
  end
end
