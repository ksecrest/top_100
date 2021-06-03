Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#root = homepage
root 'static_pages#home'

get '/home', to: 'static_pages#home'
get '/about', to: 'static_pages#about'

  resources :billboards do
    resources :artists
  end

  resources :artists do
    resources :songs
  end

end
