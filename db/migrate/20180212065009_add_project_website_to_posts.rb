class AddProjectWebsiteToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :product_website, :string
  end
end
