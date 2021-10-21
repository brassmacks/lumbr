Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    # resources :blogs, only: [ :show ]
    resources :tags, only: [ :index, :show, :new, :create, :follow ]
    get 'tags/followers/:id/', to: 'tags#followers'

    resources :posts, only: [ :create, :index, :show, :update, :destroy ]
    get 'posts/followers/:id/', to: 'posts#followers'
    get 'posts/blog/:id', to: 'posts#of_blog'
    get 'posts/blogs/feed', to: 'blogs#build_feed'
    resources :users, only: [ :create, :new, :show ]
    get 'users/follows/:id', to: 'users#follows'
    get 'users/followers/:id', to: 'users#followers'
    post 'users/follow/:id', to: 'users#follow'
    delete 'users/unfollow/:id', to: 'users#unfollow'
    put 'users/avatar/:id', to: 'users#avatar'
    resources :blogs, only: [ :show, :index, :update ]
    get '/blogs/feed', to: 'blogs#feed'

    resource :session, only: [ :create, :destroy, :new ]
    

  end

end
