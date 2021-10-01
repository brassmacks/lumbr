json.set! @user.id do
  json.blog @blog 
  json.posts @post_ids
  json.profileUrl @user.profile_photo.attached? ? url_for(@user.profile_photo) :
      'https://lumbr-seeds.s3.us-west-1.amazonaws.com/watercolor.jpg'

    #TEST ENSURE FUNCTIONALITY POST REFACTOR
    # if post.photo.attached?
    #   json.extract! post, :id, :title, :body, :content_type
    #   json.photoUrl url_for(post.photo) 
    # end
end

