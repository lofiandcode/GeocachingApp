class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :bio, :photo, :caches, :histories
end
