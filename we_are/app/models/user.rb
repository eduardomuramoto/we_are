class User < ApplicationRecord
# ActiveRecord Associations
  has_one :company_profile
  has_one :person_profile
  has_many :posts, dependent: :destroy

# User Validations
  has_secure_password
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
  validates :first_name, :last_name, presence: true

# Methods
  def full_name
    "#{first_name} #{last_name}"
  end
end
