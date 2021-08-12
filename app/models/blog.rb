class Blog < ApplicationRecord
  validates :url, :user_id, presence: true 
  
  belongs_to :author, foreign_key: :user_id, class_name: 'User'
  has_one_attached :profile_photo 
  has_one_attached :backsplash 
  has_many :posts

  before_validation :ensure_profile_photo

  def ensure_profile_photo 
    self.profile_photo_id ||= 22
  end




end
