Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:show]
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :destroy, :new]
  end

end
