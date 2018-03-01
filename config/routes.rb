Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Action Cable route
  mount ActionCable.server => '/cable'

  # API routes
    namespace :api, defaults: {format: :json} do
      namespace :v1 do
        resources :users, only: [:index, :show,:create,:destroy]
        resources :posts, only: [:index, :show,:create,:destroy,:update]
        resources :proposals, only: [:index, :show,:create,:destroy,:update]
        resources :chat_messages, only: [:index]
        resources :person_profiles, only: [:index, :show,:create,:destroy,:update]
        resources :company_profiles, only: [:index, :show,:create,:destroy,:update]
        resources :tokens, only: [:create]
      end
    end
end
