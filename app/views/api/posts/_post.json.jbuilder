json.extract! post, :id, :title, :user_id, :body, :content_type, :author
json.photoUrl url_for(post.photo) if post.photo.attached?
json.authorName post.author.username
json.profileUrl url_for(post.author.profile_photo) if post.author.profile_photo.attached?
