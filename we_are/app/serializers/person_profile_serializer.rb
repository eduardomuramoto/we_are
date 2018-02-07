class PersonProfileSerializer < ActiveModel::Serializer
attributes :first_name, :last_name, :email, :education, :experience, :skills, :address,
  :city, :state, :country, :job_title

end
