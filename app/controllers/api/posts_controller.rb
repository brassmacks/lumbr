class Api::PostsController < ApplicationController
  def show 
    # works for rendering photo directly
    # refactor to send json object containing url
    # @post = Post.find(params[:id])
    # render :show
  end
end
