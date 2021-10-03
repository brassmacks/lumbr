json.extract! @user, :id, :username, :email

if @user.profile_photo.attached?
  json.profileUrl url_for(@user.profile_photo) 
else
  json.profileUrl [
    asset_path('queentree.jpg'), 
    asset_path('treedude.jpg'),
    asset_path('thowindownroots.png'),
    asset_path('gnarmushysbro.jpg')].sample()
end