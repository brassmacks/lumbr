@posts.each do |post|
  json.set! post.id do
    #TEST RECONFIGURE AGAINST REDUCER ELIMINATE EXTRA LOGIC
    json.partial! 'post', post: post
  end
end

