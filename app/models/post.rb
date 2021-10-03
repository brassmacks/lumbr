class Post < ApplicationRecord

  validates :title, :content_type, :user_id, presence: true
  
  
  # change following association to include, video, quote, or text

  has_one_attached :photo
  has_one_attached :video
  
  belongs_to :author, foreign_key: :user_id, class_name: 'User'

  # has_many :PostsTags 
  # has_many :tags, through: :PostsTags

  has_many :receive_follows, foreign_key: :post, class_name: 'Follow'

  has_many :followers, :through => :receive_follows, :source => :follower
  # before_validation :set_content,
  
  # add blog validation 
  

  def _render_errors
    render json: { errors: self.errors.full_messages }, status: 400
  end

  def Post::new_from_params(id, media)
    @post = Post.find(id)
    case @post[:content_type]
    when 'Photo' 
      @post.photo.attach(io: media, filename: media.tempfile)
    when 'Video'
      @post.video.attach(io: media, filename: media.tempfile)
    when 'Url'
      #TEST ADD URL MEDIA FUNCTIONALITY
    end
    
  end




  # def set_content
  #   if self.photo.attached? 
  #     self.content_type = 'photo'
  #   elsif self.video.attached?
  #     self.content_type = 'video'
  #   else
  #     self.content_type ||= 'text'
  #   end
  # end

  

end
