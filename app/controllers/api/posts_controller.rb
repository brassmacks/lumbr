# require 'open_uri'

class Api::PostsController < ApplicationController
  
  def show    
    @post = Post.find_by(params[:id])
    render :show
  end
  
  def index
    @posts = Post.last(10)
  end

  def create 
    
    saved = false
    media = post_params[:media] if post_params[:media_attached]
    puts media
    @post = Post.new({
      title: post_params[:title],
      content_type: post_params[:content_type],
      user_id: post_params[:user_id] })
    puts @post
    if post_params[:media_attached] === 'true'
      puts "meedddddiiiaiaaaa"
      @post[:title] = 'media'
      if @post.save
        case @post[:content_type]
        when 'Photo' 
          @post.photo.attach(io: post_params[:media], filename: media.tempfile)
          saved = true
        when 'Video'
          @post.video.attach(io: post_params[:media], filename: media.tempfile)
          saved = true
        when 'Url'
        else 
        end
      end

      else
        if @post.save
          saved = true
        end 

    end

    if saved
      puts saved
      post_params[:tags].split(',').each do |tag|
        @tag = Tag.find_by(tag_content: tag)
        unless @tag
          @tag=Tag.create({tag_content_id: @post[:id], tag_content: tag})  
        end 
        PostsTag.create({post_id: @post[:id], tag_id: @tag[:id]})
      end
      puts @post
      render 'api/posts/show'
    else
      puts saved
      err = @post.errors.full_messages
      @post.delete
      render json: {
        message: 'Post failed to save! Check content and try again.',
        error_messages: err, 
        status: 422
      }
    end

  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json:@post.errors.full_messages, status: 422
    end
  end

  def post_params
    params.require(:post).permit(:title, :body, :content_type, :media, :media_attached, :user_id, :url, :tags, :linked_content_type)
  end

end
