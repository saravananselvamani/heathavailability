class AddVacinationsToStates < ActiveRecord::Migration
  def change
    change_table :states do |t|
      t.integer :vaccinations_count
    end
  end
end
