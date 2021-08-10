@posts.each do |post|
  json.set! post.id do
    # json.author post.user_id
    # build author association between post and
    json.partial! 'post', post: post
    

  end
end

