class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :executive_summary
      t.text :product_details
      t.text :project_description
      t.text :market_sales
      t.references :user, foreign_key: true, index:true

      t.timestamps
    end
  end
end
