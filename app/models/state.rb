class State < ActiveRecord::Base
	has_many :doctors
	has_many :nurses

	def population
		Population.select("sum(population) as population").where(state_code: id).first.population
  end

  def number_of_doctors
    DoctorStatistic.where(state_id: id).first.try(:total_count).to_i
  end

  def number_of_doctors_per_lakh_population
    population_in_lakhs = (population / 100000.0)
    number_of_doctors / population_in_lakhs
  end
end
