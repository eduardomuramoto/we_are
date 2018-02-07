class CreateCompanyProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :company_profiles do |t|
      t.string :name
      t.string :email
      t.text :about
      t.string :sector
      t.text :address
      t.string :city
      t.string :state
      t.string :country
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
