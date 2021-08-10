json.extract! post, :id, :title, :user_id, :body, :content_type
json.photoUrl url_for(post.photo) if post.photo.attached?