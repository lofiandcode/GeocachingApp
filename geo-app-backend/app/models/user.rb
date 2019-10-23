class User < ApplicationRecord
    has_many :histories
    has_many :caches, through: :histories
end
