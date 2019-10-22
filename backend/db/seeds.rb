require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = []
5.times do
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
5.times do

    randDifficulty = ''
    randNum1 = rand(1..3)
    case randNum1
    when 1 
        randDifficulty = 'easy'
    when 2
        randDifficulty = 'medium'
    else
        randDifficulty = 'hard'
    end

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
        randCoordinates = '47.611073, -122.325965'
    when 2
        randCoordinates = '47.6038321,-122.3300624'
    when 3
        randCoordinates = '47.610995, -122.334927'
    when 4
        randCoordinates = '47.608409, -122.343712'
    when 5
        randCoordinates = '47.615002, -122.345353'
    else
        randCoordinates = '47.615692, -122.334245'
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
            difficulty: randDifficulty,
            rating: rand(1..5),
            warnings: Faker::TvShows::GameOfThrones.quote,
            description: Faker::Lorem.paragraph
        )
    )
end

i = 0
while i < 5 do
    randUserSetDifficulty = ''
    randNum4 = rand(1..3)
    case randNum4
    when 1 
        randUserSetDifficulty = 'easy'
    when 2
        randUserSetDifficulty = 'medium'
    else
        randUserSetDifficulty = 'hard'
    end

    UserCache.create(
        user_id: users[i].id,
        cache_id: caches[i].id,
        created: Faker::Boolean.boolean,
        favorite: Faker::Boolean.boolean,
        to_do: Faker::Boolean.boolean,
        done: Faker::Boolean.boolean,
        difficulty: randUserSetDifficulty,
        rating: rand(1..5),
        comment: Faker::Games::WorldOfWarcraft.quote 
    )
    i += 1
end




puts "Data Seeded."
# caches = []
# for(i=0;i<10;i++) {
#     caches.push(Cache.create())
# }





