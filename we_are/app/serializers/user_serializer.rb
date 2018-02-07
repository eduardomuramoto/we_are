class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :created_at, :updated_at, :full_name

end
