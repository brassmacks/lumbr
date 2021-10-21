json.blogs do 
  @blogs.each do |blog|
    json.partial! 'blog', blog: blog
  end
end
json.posts do
  @posts.each do |post|
    json.partial! 'posts_feed', post: post
  end
end

