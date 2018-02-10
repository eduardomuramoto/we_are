class AddTitleToProposals < ActiveRecord::Migration[5.1]
  def change
    add_column :proposals, :ice_breaker, :string
  end
end
