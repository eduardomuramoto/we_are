class PostSerializer < ActiveModel::Serializer
attributes :id, :title, :executive_summary,:product_details, :project_description, :market_sales, :picture_photos

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
  end

  has_many :proposals
  class ProposalSerializer < ActiveModel::Serializer
  attributes :id, :project_owner_id, :proposer_id, :ice_breaker

  end
end
