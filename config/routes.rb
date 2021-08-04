Rails.application.routes.draw do

  root to: 'static_pages#root'
  end
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:create, :index]
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :destroy, :new]
  end

end
