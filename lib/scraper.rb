class Scraper
  include Scrapify::Base
  html "http://updateox.com/india/district-wise-population-india-as-of-2011-census/"

  attribute :state_code, css: "table tr td.column-1"
  attribute :district_code, css: "table tr td.column-2"
  attribute :state_name, css: "table tr td.column-3"
  attribute :district_name, css: "table tr td.column-4"
  attribute :total_population, css: "table tr td.column-5"
  key :district_code

  def self.scrap_all
  	(1..count).to_a.each_with_index do |index|
  		population_data = find_by_index index
  		next if population_data.state_code.to_i == 0 || population_data.district_code.to_i == 0
  		create_state population_data
  		create_district population_data
  		create_population_data population_data
  	end
  end

  private

  def self.create_state population_data
  	::State.where(id: population_data.state_code.to_i, name: population_data.state_name).first_or_create
  end

  def self.create_district population_data
  	::District.where(district_id: population_data.district_code.to_i, name: population_data.district_name, state_id: population_data.state_code.to_i).first_or_create
  end
 
  def self.create_population_data population_data
  	::Population.where(state_code: population_data.state_code, district_code: population_data.district_code, 
  		              population: population_data.total_population).first_or_create
  end
  
end