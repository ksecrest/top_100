class CreateBillboards < ActiveRecord::Migration[6.1]
  def change
    create_table :billboards do |t|
      t.string :theme

      t.timestamps
    end
  end
end
