class CreateHistory < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
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
