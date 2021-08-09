class Api::PostsController < ApplicationController
  
  def show    
    # works for rendering photo directly
    # refactor to send json object containing url
    @post = Post.find(params[:id])
    # render :show
  end
  
  def index
    @posts = Post.all
  end

  def create 
    @post = Post.new(post_params)

    if @post.save
      # render :show
      render 'api/post/show'
    else
      render json: @post.errors.full_messages, status: 422
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
    
    params.require(:post).permit(:title, :body, :photo, :user_id)
  end

end
