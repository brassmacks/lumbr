class Blog < ApplicationRecord
  validates :url, :user_id, presence: true 
  
  belongs_to :author, foreign_key: :user_id, class_name: 'User'
  has_one_attached :backsplash 
  # has_many :posts

  before_validation :ensure_profile_photo

  def ensure_profile_photo 
    self.profile_photo_id ||= self.author.profile_photo.id
    # self.backsplach_id ||= 1
    # refactor to reference default bspach in aws 
  end
  
  def post_list
    @posts = self.author.posts
    post_ids = []
    @posts.each { |post| post_ids.push(post.id) }
    post_ids
  end 


end
