Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    # resources :blogs, only: [ :show ]
    resources :tags, only: [ :index, :show, :new, :create, :follow ]
    put 'tags/followers/:id/', to: 'tags#followers'
    resources :posts, only: [ :create, :index, :show, :update, :destroy ]
    put 'posts/followers/:id/', to: 'posts#followers'
    resources :users, only: [ :create, :new, :show ]
    put 'users/follows/:id', to: 'users#follows'
    put 'users/followers/:id', to: 'users#followers'
    put 'users/follow/:id/:content/:content_id', to: 'users#new_follow'
    put 'users/unfollow/:user_id/:content/:content_id', to: 'users#unfollow'
    resources :blogs, only: [ :show, :index, :update ]
    resource :session, only: [ :create, :destroy, :new ]
    

  end

end
