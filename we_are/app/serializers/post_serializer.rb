class PostSerializer < ActiveModel::Serializer
attributes :id, :title, :executive_summary,:product_details, :project_description, :market_sales,:owner_is_company,:owner_profile_id,:owner_name, :picture_photos

  def picture_photos
    object.pictures.map do |picture|
    {
      url: picture.photo.url.absolute_url,
      name: picture.photo_file_name,
      id: picture.id
    }
    end
  end

  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :created_at, :updated_at, :full_name

    has_one :company_profile
    class CompanyProfileSerializer < ActiveModel::Serializer
      attributes :id, :name, :email, :about, :sector, :address, :city, :state, :country

    end

    has_one :person_profile
    class PersonProfileSerializer < ActiveModel::Serializer
      attributes :id, :first_name, :last_name, :email, :education, :experience, :skills, :address,
      :city, :state, :country, :job_title

    end

  end

  has_many :proposals
  class ProposalSerializer < ActiveModel::Serializer
  attributes :id, :project_owner_id, :proposer_id , :ice_breaker, :proposer_is_company, :proposer_profile_id, :proposer_name

  end
end
