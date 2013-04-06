class AddStateFieldToDistrict < ActiveRecord::Migration
  def change
  	change_table :districts do |t|
  		t.references :state
  		t.integer :district_id
  	end
  end
end
