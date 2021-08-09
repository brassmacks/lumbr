json.extract! post, :id, :title, :user_id, :body
json.photoUrl url_for(post.photo) if post.photo.attached?