class CreatePopulations < ActiveRecord::Migration
  def change
    create_table :populations do |t|
      t.integer :state_code
      t.integer :district_code
      t.integer :population
      t.timestamps
    end
  end
end
