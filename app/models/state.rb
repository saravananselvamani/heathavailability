class State < ActiveRecord::Base
	def population
		Population.select("sum(population) as population").where(state_code: id).first.population
	end
end
