class AddProposerIsCompanyToProposals < ActiveRecord::Migration[5.1]
  def change
    add_column :proposals, :proposer_is_company, :boolean
    add_column :proposals, :proposer_profile_id, :integer
  end
end
