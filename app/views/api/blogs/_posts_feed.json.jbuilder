json.extract! post, :id, :title, :user_id, :body, :content_type
json.created_at post.created_at.in_time_zone("Pacific Time (US & Canada)")
user = User.find(post.user_id)
json.extract! user, :id, :username
json.photoUrl url_for(post.photo) if post.photo.attached?
json.photoUrl url_for(post.video) if post.video.attached?
if user.profile_photo.attached?
  json.profileUrl url_for(user.profile_photo)
else
    json.profileUrl [
    asset_path('queentree.jpg'), 
    asset_path('treedude.jpg'),
    asset_path('thowindownroots.png'),
    asset_path('gnarmushysbro.jpg')].sample()
end