class CompanyProfileSerializer < ActiveModel::Serializer
attributes :id, :name, :email,:website, :linkedin, :about, :sector, :address, :city, :state, :country

end
