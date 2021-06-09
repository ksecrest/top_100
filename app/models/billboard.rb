class Billboard < ApplicationRecord
    has_many :artists, dependent: :destroy
    validates :theme, presence: true

end

