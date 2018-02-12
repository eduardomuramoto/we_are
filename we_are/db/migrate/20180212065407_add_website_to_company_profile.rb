class AddWebsiteToCompanyProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :company_profiles, :website, :string
    add_column :company_profiles, :linkedin, :string
  end
end
