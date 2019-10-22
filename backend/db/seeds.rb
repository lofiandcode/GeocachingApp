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
            bio: Faker::Games::WorldOfWarcraft.quote
        )
    )
end

puts "Data Seeded."
# caches = []
# for(i=0;i<10;i++) {
#     caches.push(Cache.create())
# }





