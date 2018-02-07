class CompanyProfileSerializer < ActiveModel::Serializer
attributes :id, :name, :email, :about, :sector, :address, :city, :state, :country

end
