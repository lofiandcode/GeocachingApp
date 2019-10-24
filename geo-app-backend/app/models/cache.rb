class Cache < ApplicationRecord
    has_many :histories
    has_many :users, through: :histories
    serialize :coordinates

    def average_rating
        ratings = histories.map {|history| history.rating}
        ratings.inject{ |sum, el| sum + el }.to_f / ratings.length
    end

    def average_difficulty
        difficulties = histories.map {|history| history.difficulty}
        difficulties.inject{ |sum, el| sum + el }.to_f / difficulties.length
    end

    def creator
        histories.map do |history|
            if history.created == true
                history.user.username
            end
        end
    end
end