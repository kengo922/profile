Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "products#index"
  resources :products do 
    collection do
      get 'mypage' #マイページ
      get 'profile' #プロフィール       
    end
  end
end
