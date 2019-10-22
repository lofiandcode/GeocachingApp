class CreateCaches < ActiveRecord::Migration[6.0]
  def change
    create_table :caches do |t|
      t.string :name
      t.string :photo
      t.string :size
      t.text :mystery
      t.string :hint
      t.string :coordinates
      t.string :difficulty
      t.integer :rating
      t.text :warnings
      t.text :description

      t.timestamps
    end
  end
end
