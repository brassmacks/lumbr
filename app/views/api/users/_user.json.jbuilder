json.extract! user, :id, :username
json.profileUrl url_for(user.profile_photo) if user.profile_photo.attached? 