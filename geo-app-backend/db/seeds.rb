require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = []
3.times do
    users.push(
        User.create(
            username: Faker::Name.name, 
            password: Faker::Lorem.characters(number: 10), 
            bio: Faker::Games::WorldOfWarcraft.quote,
            photo: Faker::LoremFlickr.image
        )
    )
end

caches = []
9.times do

    randSize = ''
    randNum2 = rand(1..3)
    case randNum2
    when 1
        randSize = 'small'
    when 2
        randSize = 'medium'
    else 
        randSize = 'large'
    end

    randCoordinates = ''
    counter = 1
    case counter
    when 1
        randCoordinates = {lat: '47.611073', lng: '-122.325965'}
    when 2
        randCoordinates = {lat: '47.6038321', lng: '-122.3300624'}
    when 3
        randCoordinates = {lat: '47.610995', lng: '-122.334927'}
    when 4
        randCoordinates = {lat: '47.608409', lng: '-122.343712'}
    when 5
        randCoordinates = {lat: '47.615002', lng: '-122.345353'}
    when 6
        randCoordinates = {lat: '47.610358', lng: '-122.329581'}
    when 7
        randCoordinates = {lat: '47.611904', lng: '-122.325569'} 
    when 8
        randCoordinates = {lat: '47.613576', lng: '-122.337325'} 
    else
        randCoordinates = {lat: '47.615692', lng: '-122.334245'}
    end
    counter += 1

    caches.push(
        Cache.create(
            name: Faker::TvShows::GameOfThrones.house,
            photo: Faker::LoremFlickr.image,
            size: randSize,
            mystery: Faker::TvShows::GameOfThrones.quote,
            hint: Faker::TvShows::GameOfThrones.quote,
            coordinates: randCoordinates,
            warnings: Faker::TvShows::GameOfThrones.quote,
            description: Faker::Lorem.paragraph
        )
    )
end

i = 0
while i < 9 do
    randUserSetDifficulty = ''
    randNum4 = rand(1..3)
    case randNum4
    when 1 
        randUserSetDifficulty = 17
    when 2
        randUserSetDifficulty = 50
    else
        randUserSetDifficulty = 84
    end

    # if i < 3 
        History.create(
            user_id: users[0].id,
            cache_id: caches[i].id,
            created: Faker::Boolean.boolean,
            favorite: Faker::Boolean.boolean,
            to_do: Faker::Boolean.boolean,
            done: Faker::Boolean.boolean,
            difficulty: randUserSetDifficulty,
            rating: rand(1..5),
            comment: Faker::Games::WorldOfWarcraft.quote 
        )
    # elsif i >= 3 && i < 6
        History.create(
            user_id: users[1].id,
            cache_id: caches[i].id,
            created: Faker::Boolean.boolean,
            favorite: Faker::Boolean.boolean,
            to_do: Faker::Boolean.boolean,
            done: Faker::Boolean.boolean,
            difficulty: randUserSetDifficulty,
            rating: rand(1..5),
            comment: Faker::Games::WorldOfWarcraft.quote 
        )
    # else
        History.create(
            user_id: users[2].id,
            cache_id: caches[i].id,
            created: Faker::Boolean.boolean,
            favorite: Faker::Boolean.boolean,
            to_do: Faker::Boolean.boolean,
            done: Faker::Boolean.boolean,
            difficulty: randUserSetDifficulty,
            rating: rand(1..5),
            comment: Faker::Games::WorldOfWarcraft.quote 
        )
    # end
    i += 1
end




puts "Data Seeded."

