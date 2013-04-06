class AddDoctorNurseCountToState < ActiveRecord::Migration
  def change
    change_table :states do |t|
     t.integer :doctor_count
     t.integer :nurse_count
    end
  end
end
