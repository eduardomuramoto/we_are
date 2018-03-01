class AddAttachmentPhotoToPictures < ActiveRecord::Migration[5.1]
  def self.up
    change_table :pictures do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :pictures, :photo
  end
end
