class Post < ApplicationRecord
# ActiveRecord Associations
  belongs_to :user

  has_many :pictures, dependent: :destroy
  accepts_nested_attributes_for :pictures, allow_destroy: true


  def as_json(_opts = {})
    {
      id: id,
      title: title,
      executive_summary: executive_summary,
      product_details: product_details,
      project_description: project_description,
      market_sales: market_sales,
      errors: errors,
      picture_photos: pictures.map do |picture|
        {
          url: picture.photo.url.absolute_url,
          name: picture.photo_file_name,
          id: picture.id
        }
      end
    }
  end
end
