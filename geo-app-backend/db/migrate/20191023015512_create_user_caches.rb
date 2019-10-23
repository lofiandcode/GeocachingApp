class CreateUserCaches < ActiveRecord::Migration[6.0]
  def change
    create_table :user_caches do |t|
      t.boolean :created
      t.boolean :favorite
      t.boolean :to_do
      t.boolean :done
      t.integer :difficulty
      t.integer :rating
      t.text :comment
      t.references :user, null: false, foreign_key: true
      t.references :cache, null: false, foreign_key: true

      t.timestamps
    end
  end
end
