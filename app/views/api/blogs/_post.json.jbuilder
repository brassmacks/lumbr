json.extract! post, :id, :title, :user_id, :body, :content_type
json.extract! @user, :id, :username
json.photoUrl url_for(post.photo) if post.photo.attached?

if @user.profile_photo.attached?
  json.profileUrl url_for(@user.profile_photo)
else
    json.profileUrl [
    asset_path('queentree.jpg'), 
    asset_path('treedude.jpg'),
    asset_path('thowindownroots.png'),
    asset_path('gnarmushysbro.jpg')].sample()
end