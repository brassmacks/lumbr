json.set! @blog.id do
  json.author(@blog.author, :id, :username)
  json.posts @blog.author.posts[0...4] do |post|
    if post
      json.extract! post, :id, :title, :body, :content_type
    end
  end
  if (@blog.author.profile_photo.attached?)
    json.profileUrl url_for(@blog.author.profile_photo)
  end
end


