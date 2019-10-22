class User < ApplicationRecord
    has_many :usercaches
    has_many :caches, through: :usercaches
