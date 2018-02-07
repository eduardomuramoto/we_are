Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # API routes
    namespace :api, defaults: {format: :json} do
      namespace :v1 do
        resources :users, only: [:index, :show,:create,:destroy]
        resources :person_profiles, only: [:index, :show,:create,:destroy,:update]
        resources :company_profiles, only: [:index, :show,:create,:destroy,:update]
        resources :tokens, only: [:create]
      end
    end
end
