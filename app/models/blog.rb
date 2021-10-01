class Blog < ApplicationRecord
  attr_accessor :user_id, :author
  validates :url, presence: true 
  
  belongs_to :author, foreign_key: :user_id
  has_one_attached :backsplash 
  # has_many :posts

  before_validation :ensure_profile_photo 
  
  # def add_user
  #   self.author.id = self.user_id
  # end

  def ensure_profile_photo 
    self.profile_photo_id ||= 1
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
