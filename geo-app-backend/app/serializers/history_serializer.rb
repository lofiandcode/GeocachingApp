class HistorySerializer < ActiveModel::Serializer
  attributes :id, :created, :favorite, :to_do, :done, :difficulty, :rating, :comment, :reviewer,
  has_one :user
  has_one :cache
end
