class Picture < ApplicationRecord
  # belongs_to :post, inverse_of: :pictures
  has_attached_file \
    :photo,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: '/images/default_:style_photo.png'

  validates_attachment_presence :photo
  validates_attachment_file_name :photo, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]
end
