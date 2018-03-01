class AddWebsiteToPersonProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :person_profiles, :portfolio, :string
    add_column :person_profiles, :linkedin, :string
  end
end
