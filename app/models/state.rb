class State < ActiveRecord::Base
	has_many :doctors
	has_many :nurses

	def population
		Population.select("sum(population) as population").where(state_code: id).first.population
	end
end
