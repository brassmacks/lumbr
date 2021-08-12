Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [ :show ]
    resources :tags, only: [ :index, :show, :new, :create ]
    resources :posts, only: [ :create, :index, :show, :update, :destroy ]
    resources :users, only: [ :create, :new, :show ]
    resources :blogs, only: [ :show, :index, :update ]
    resource :session, only: [ :create, :destroy, :new ]

  end

end
