
json.blogs do
@blogs.each do |blg|
    json.set! blg[0][:user_id] do 
      json.partial! 'blog', blog: blg
    end
  end
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'posts_feed', post: post
    end
  end
end

