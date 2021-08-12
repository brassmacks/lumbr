json.extract! @blog, :id, :url, :profile_photo_id, :backsplach_id
@blog.author.posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
  end
end
# @blog.author.posts

