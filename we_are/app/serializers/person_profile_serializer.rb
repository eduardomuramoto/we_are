class PersonProfileSerializer < ActiveModel::Serializer
attributes :first_name, :last_name, :email, :education, :experience,:portfolio, :linkedin, :skills, :address,
  :city, :state, :country, :job_title

end
