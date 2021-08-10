class User < ApplicationRecord
  attr_reader :password
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_one_attached :profile_photo
  before_validation :ensure_session_token
  after_validation :create_blog
  has_many :posts
  has_one :blog


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
  
  def create_blog()
    unless self.blog_id 
      blog = Blog.create(url: self.username, blogger_id: self.id)
      self.blog_id = blog.id
    end
  
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token()
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token()
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
