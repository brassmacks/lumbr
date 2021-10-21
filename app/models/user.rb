class User < ApplicationRecord
  attr_reader :password, :blog_id
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_one_attached :profile_photo
  before_validation :ensure_session_token
  
  

  after_create :create_blog, :ensure_profile_photo
  has_one :blog, foreign_key: :user_id, class_name: "Blog" 
  has_many :posts

  has_many :follows, foreign_key: :user_id, class_name: "Follow"
  has_many :followed_posts, through: :follows, source: :followed_post
  has_many :receive_follows, foreign_key: :user, class_name: "Follow"
  has_many :followers, through: :receive_follows, source: :follower

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
  
  
  def profile_photo=(file)
    self.profile_photo.attach(io: file, filename: file.tempfile)
    if self.save
      return true
    else
      return self.messages
    end
  end

  def ensure_profile_photo
    return true if self.profile_photo.attached? 
    random_photo = [ 
      'queentree.jpg', 
      'treedude.jpg',
      'thowindownroots.png',
      'gnarmushysbro.jpg'].sample()
    path = Rails.root.join('app', 'assets','images', random_photo)
    self.profile_photo.attach( io: File.open(path), filename: random_photo )
    if self.save
      return true
    else 
      return self.messages
    end
  end


  def follow_list
    followers_hash = Hash.new { |h, v| h[v] = 0}
    follows_hash = Hash.new { |h, v| h[v] = 0}
    self.receive_follows.each do |follow|
       followers_hash[follow.user_id] += 1 
    end
    self.follows.each do |follow|
       follows_hash[follow.user] += 1 
    end
    
    followed_by = followers_hash.keys 
    users_followed = follows_hash.keys
    return { followers: followed_by, following: users_followed }
  end

  def self.find_by_missing_params(params)
    user_dup = User.new(user_params)

    case user_dup
      when user_dup.id
        return @user = User.find(user_dup.id)
      when user_dup.username
        return @user = User.find_by(username: user_dup.username)
      when user_dup.email
        return @user = User.find_by(email: user_dup.email)
      else
        nil
    end

  end

  def create_blog()
    unless self.blog_id 
      self.blog = Blog.create(
        url: (self.username),
        author: self, user_id: self.id)
      self.save
      return self.errors.full_messages if self.errors
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
