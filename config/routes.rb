Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "products#index"
  resources :products do 
    collection do
      get 'mypage' #マイページ(製作者のみ入れるページ)
      get 'profile' #プロフィール 
      get 'skill' #プロフィール 
             
    end
  end
end
