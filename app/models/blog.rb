class Blog < ApplicationRecord
  validates :url, :blogger_id, presence: true 
  
  # belongs_to :blogger, foreign_key: :blogger_id, class_name: 'User'
  # change to :user_id in migration
  has_one_attached :profile_photo 
  has_one_attached :backsplash 
  has_many :posts

  before_validation :ensure_profile_photo

  def ensure_profile_photo 
    self.profile_photo_id ||= 22
  end


end
