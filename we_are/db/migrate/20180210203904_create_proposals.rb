class CreateProposals < ActiveRecord::Migration[5.1]
  def change
    create_table :proposals do |t|
      t.integer :project_owner_id
      t.integer :proposer_id
      t.references :post, foreign_key: true, index:true

      t.timestamps
    end
  end
end
