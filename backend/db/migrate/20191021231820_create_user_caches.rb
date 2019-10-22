class CreateUserCaches < ActiveRecord::Migration[6.0]
  def change
    create_table :user_caches do |t|
      t.integer :user_id
      t.integer :cache_id
      t.boolean :created
      t.boolean :favorite
      t.boolean :to_do
      t.boolean :done
      t.integer :difficulty
      t.integer :rating
      t.text :comment

      t.timestamps
    end
  end
end
