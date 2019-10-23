class UserCacheSerializer < ActiveModel::Serializer
  attributes :id, :created, :favorite, :to_do, :done, :difficulty, :rating
  has_one :user
  has_one :cache
end