class PostSerializer < ActiveModel::Serializer
attributes :id, :title, :executive_summary,:product_details, :project_description, :market_sales

  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :created_at, :updated_at, :full_name
  end
end
