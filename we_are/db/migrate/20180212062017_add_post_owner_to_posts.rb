class AddPostOwnerToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :owner_is_company, :boolean
    add_column :posts, :owner_profile_id, :integer
    add_column :posts, :owner_name, :string
  end
end
