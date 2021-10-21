
json.blog do 
json.set! @user.id do
  json.blog @blog 
  json.posts @post_ids
  json.profileUrl @blog.backsplash.attached? ? url_for(@blog.backsplash) :
      'https://lumbr-seeds.s3.us-west-1.amazonaws.com/watercolor.jpg'
    #TEST ENSURE FUNCTIONALITY POST REFACTOR
    # if post.photo.attached?
    #   json.extract! post, :id, :title, :body, :content_type
    #   json.photoUrl url_for(post.photo) 
    end
end
json.posts do 
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
    end
  end
end

