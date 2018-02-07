class CreatePersonProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :person_profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.text :education
      t.text :experience
      t.text :skills
      t.text :address
      t.string :city
      t.string :state
      t.string :country
      t.string :job_title
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
