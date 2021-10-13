require 'open-uri'
require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



  users = 20.times do 
    User.create(username: Faker::Name.last_name + Faker::Movies::LordOfTheRings.character, email: Faker::Internet.email, password: Faker::Internet.password(min_length:7))
  end
  


  post_photo_links = [
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/diss.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/eclipseforest.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/field.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/houseabout.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/loadedlog.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/me-house.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/moss.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/splitdiagram.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/VID-wedgedemo.gif',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/watercherrysplash.gif',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/watercolor.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/willowbabe.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/willownice.jpg'
  ]

  post_photo_links.each_with_index do |link, i|
    pst = Post.create(
      content_type: 'photo',
      user_id: i/3.ceil,
      title: Faker::JapaneseMedia::StudioGhibli.movie,
      body: Faker::Quote.matz,
      source: User.find(start).username
    )

  end
  

  profile_links = [
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/cartooncarver.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/crooked.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/classy.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/funny.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/hugolog.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/skinny.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/willowbabe.jpg',
    'https://lumbr-seeds.s3.us-west-1.amazonaws.com/trio.jpg'
  ]

  profile_links.each_with_index do |lnk, i| 

    usr = User.create(username: Faker::Name.last_name + Faker::Movies::LordOfTheRings.character, email: Faker::Internet.email, password: Faker::Internet.password(min_length:7))

    file = URI.open(lnk)
    usr.profile_photo.attach(io: file, filename: lnk.split("/").last)
  end
  
  cnt = 18
    post_photo_links.each do |link|
      pst = Post.create(
        content_type: 'photo',
        user_id:
        title: Faker::JapaneseMedia::StudioGhibli.movie,
        body: Faker::Quote.matz,
        source: User.find((cnt).ceil).username
      )
      cnt+=1
      file = URI.open(link)
      pst.photo.attach(io: file, filename: link.split("/").last)
    
  end



tag_list = "fashion, photooftheday, beautiful, art, photography, happy, picoftheday, cute, follow, tbt, followme, nature, like4like, travel, style, repost, summer, selfie, me, friends, fitness, girl, food, fun, beauty, instalike, smile, family, photo, life, likeforlike, music, ootd, follow4follow, makeup, amazing, igers, nofilter, dog, model, sunset, beach, foodporn, motivation, followforfollow, design, lifestyle, sky, cat, handmade, hair, bestoftheday, vsco, funny, drawing, artist, gym, flowers, baby, wedding, girls, pretty, likeforlikes, photographer, party, inspiration, lol, cool, workout, likeforfollow, swag, fit, healthy, yummy, blackandwhite, foodie, moda, home, christmas, black, memes, holiday, pink, sea, landscape, blue, london, winter, night, puppy, nails, tattoo, happiness, work, illustration, architecture, japan, weekend, daily, explore, nyc, coffee, look, 데일리, blessed, spring, italy, portrait, trip, shopping, paris, dress, tflers, vacation, wanderlust, health, goodmorning, fashionblogger, anime, red, vintage, travelphotography, green, sweet, meme, birthday, luxury, throwback, amor, followback, sketch, fitfam, delicious, bts, dogs, new, clouds, relax, outfit, naturephotography, photoshoot, likes, shoes, sunday, bodybuilding, artwork, cats, indonesia, training, adventure, quotes, dance, followforfollowback, fashionista, dinner, usa, newyork, nike, painting, canon, picture, morning, blogger, iphoneonly, москва, awesome, dubai, boy, istanbul, vegan, mood, breakfast, nice, interiordesign, color, white, pet, snow, like4likes, tweegram, live, eyes, 좋아요, kids, igdaily, الكويت, pic, goals, my, instago, kpop, flower, lfl, webstagram, goodvibes, happybirthday, autumn, memories, halloween, yum, makeupartist, lunch, dogstagram, cake, fitnessmotivation, city, california, hiphop, peace, 선팔, instagramers, yoga, colorful, 셀카, sport, gay, chocolate, streetstyle, instadog, nikon, 셀스타그램, view, latepost, france, streetphotography, jewelry, fff, tb, healthyfood, homemade, loveit, brasil, 1, water, day, india, mountains, good, traveling, 먹스타그램, friday, light, tumblr, sale, draw, تصويري, ink, creative, babygirl, nailart, best, all_shots, disney, miami, fitspo, video, sunshine, regrann, animals, followers, car, colors, foodstagram, saturday, beer, dankmemes, instasize, mexico, thailand, adorable, السعودية, likesforlikes, familia, football, like4follow, jakarta, hairstyle, ocean, sunrise, lovely, quote, natural, chanel, stylish, top, goodnight, losangeles, homedecor, mylove, instaart, mua, naturelovers, street, weightloss, youtube, running, adidas, diet, arte, travelling, business, holidays, gucci, instagramhub, entrepreneur, goodtimes, pets, catstagram, blonde, красота, 팔로우, healthylifestyle, الرياض, australia, 셀피, bali, animal, cafe, wcw, world, russia, hijab, venezuela, bomdia, bestfriend, aesthetic, bestfriends, fresh, bff, designer, onlineshop, eatclean, tattoos, spain, decor, 2018, success, fall, film, canada, الامارات, uae, 2019, onedirection, germany, bride, strong, tree, perfect, 20likes, gold, babyboy, digitalart, colombia, outdoors, couple, muscle, foodphotography, explorepage, travelblogger, passion, tiktok, body, gymlife, bored, fotografia, loveyourself, barcelona, crossfit, البحرين, instamoment, wine, cars, enjoy, friendship, bajumurah, interior, skincare, diy, dessert, turkey, hiking, lmao, garden, polishgirl, moscow, roadtrip, قطر, streetart, florida, petstagram, italia, woman, kitty, foodgasm, friend, instafit, outfitoftheday, la, europe, accessories, rap, boanoite, 2017, truth, forever, trees, shoutout, loveyou, dank, uk, familytime, sundayfunday, mensfashion, rock, exercise, tokyo, mylife, kuwait, photos, money, throwbackthursday, 데일리룩, sisters, foto, momlife, potd, women, latergram, loveher, gift, likeback, nail, gorgeous, funnymemes, россия, doglover, instastyle, sunny, dior, bhfyp, positivevibes, puppylove, bandung, shop, bmw, viral, دبي, singer, abs, crazy, korea, jimin, sister, run, fitnessmodel, nutrition, monday, comment, tasty, sketchbook, mcm, book, instacat, cleaneating, chicago, artistsoninstagram, 2, jungkook, i, chile, pizza, blog, dj, summertime, onlineshopping, dogoftheday, pictureoftheday, cardio, eat, yellow, gopro, handsome, mom, kitten, comedy, trend, manga, любовь, men, malaysia, bookstagram, poetry, beautifuldestinations, lake, school, merrychristmas, kawaii, amigos, humor, god, graffiti, heart, books, man, sunnyday, 얼스타그램, memesdaily, toronto, berlin, sad, organic, time, boys, cosplay, today, اكسبلور, focus, dream, beard, prada, foodblogger, маникюр, hermes, movie, 2016, exo, drinks, selflove, лето, instagay, likes4likes, clothes, a, haircut, fortnite, chill, ankara, quoteoftheday, izmir, freedom, cold, marketing, happynewyear, iloveyou, 맛스타그램, army, jj, lovehim, portraitphotography, harrystyles, traveler, bike, foodlover, graphicdesign, house, gaming, suga, forest, homesweethome, queen, v, people, fitnessaddict, streetwear, fashionstyle, urban, the, jin, 인친, bag, thankful, classic, boyfriend, kiss, train, grateful, cooking, argentina, feliz, jhope, america, picstitch, vida, instachile, catlover, 420, icecream, follow4followback, rain, madrid, ilovemydog, strength, watercolor, texas, guitar, soccer, paint, brazil, louisvuitton, doodle, free, moment, lights, cutie, justinbieber, rose, paradise, starwars, follower, 오오티디, realestate, orange, face, concert, 럽스타그램, princess, singapore, sneakers, lasvegas, followher, newyear, contemporaryart, mountain, landscapephotography, qatar, goodday, longhair, thankyou, trending, olshop, tourism, meow, sports, ❤️, lookoftheday, tgif, wellness, foodpics, السعوديه, zara, marvel, 2020, artofvisuals, edit, styleblogger, song, traveller, bluesky, puppiesofinstagram, styles, inlove, starbucks, weightlossjourney, صور, haha, trendy, 좋아요반사, game, toptags, weddingday, lips, hongkong, modafeminina, bahrain, inked, gamer, you, lookbook, arianagrande, gamis, restaurant, pictures, sol, honda, greece, lashes, vegas, retro, мода, jesus, portugal, artoftheday, festival, stayhome, following, fashionable, wow, puppies, fendi, adoptdontshop, gains, لايك, power, tshirt, 写真好きな人と繋がりたい, hairstyles, faith, modeling, 猫, laugh, musica, tasmurah, 2015, تصميمي, weddingdress, 선팔하면맞팔, actor, hawaii, inspire, fitlife, sunglasses, photoshop, shoplocal, decoration, lgbt, cali, surabaya, studio, weather, brother, hollywood, عمان, shooting, liker, dark, 육아, getfit, healthyeating, china, jeans, foodpic, petsofinstagram, ksa, 일상스타그램, river, стиль, history, tourist, bar, purple, moodygrams, pencil, etsy, niallhoran, bnw, estilo, coach, hope, instacollage, menswear, 인스타그램, magic, rainbow, cousins, follows, glam, meditation, tea, hungry, haircolor, brunette, отдых, moon, likeme, fish, riodejaneiro, clothing, followhim, дети, fitgirl, fishing, fire, team, lovethem, семья" 


count = 0
tag_list.split.each do |tag|
  Tag.create(tag_content_id: count, tag_content: tag)
  count += 1
end