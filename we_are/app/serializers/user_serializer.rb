class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :created_at, :updated_at, :full_name

  has_one :company_profile
  class CompanyProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :about,:website, :linkedin, :sector, :address, :city, :state, :country

  end

  has_one :person_profile
  class PersonProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email,:portfolio, :linkedin, :education, :experience, :skills, :address,
    :city, :state, :country, :job_title

  end

end
