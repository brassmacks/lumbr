
json.set! blog[0].user_id do
  json.blog blog[0]
  json.profileUrl blog[0].backsplash.attached? ? url_for(blog[0].backsplash) :
  'https://lumbr-seeds.s3.us-west-1.amazonaws.com/watercolor.jpg'
  json.posts blog[1]
end


