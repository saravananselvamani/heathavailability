class CreateDoctorsStatistics < ActiveRecord::Migration
  def change
    create_table :doctor_statistics do |t|
      t.references :state
      t.integer :total_count
    end
  end
end
