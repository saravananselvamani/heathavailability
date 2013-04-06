class State < ActiveRecord::Base
  has_many :doctors
  has_many :nurses

  def population
    Population.select("sum(population) as population").where(state_code: id).first.population
  end

  def number_of_doctors_per_lakh_population
    population_in_lakhs = (population / 100000.0)
    (doctor_count || 0) / population_in_lakhs
  end

  def number_of_nurses_per_lakh_population
    population_in_lakhs = (population / 100000.0)
    (nurse_count || 0) / population_in_lakhs
  end

  def map_data
    [self.name, self.number_of_doctors_per_lakh_population,
     "Population - #{population}, Number of doctors - #{number_of_doctors}, Number of doctors per lakh population - #{number_of_doctors_per_lakh_population}"]
  end
end
