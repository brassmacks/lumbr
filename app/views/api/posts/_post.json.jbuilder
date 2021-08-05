json.extract! post, :id, :title
json.photoUrl url_for(post.photo) if post.photo.attached?