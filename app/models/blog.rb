class Blog < ApplicationRecord
  attr_accessor :user_id, :author
  validates :url, presence: true 
  
  belongs_to :author, foreign_key: :user_id
  has_one_attached :backsplash 
  before_validation :ensure_profile_photo 
  # has_many :posts

  

  def ensure_backsplash
    self.profile_photo_id ||= 1
    # self.backsplach_id ||= 1
    # refactor to reference default bspach in aws 
  end
  



end
