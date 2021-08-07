json.extract! post, :id, :title, :user_id
json.photoUrl url_for(post.photo) if post.photo.attached?