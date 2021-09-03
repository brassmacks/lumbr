json.set! @user.id do
  json.blog( @blog )

  json.posts @user.posts[0...4] do |post|
    if post
      json.extract! post, :id, :title, :body, :content_type
    end
  end
  if (@user.profile_photo.attached?)
    json.profileUrl url_for(@user.profile_photo)
  else
    json.profileUrl 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/watercolor.jpg'
  end
end

