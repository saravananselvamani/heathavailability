require 'scraper.rb'
desc "scrap the data"
task :scrap => :environment do
 Scraper.scrap_all
end

desc "update the state names"
task :update_names => :environment do
  {"Jammu & Kashmir" => "Jammu and Kashmir",
   "Chandigarh #" => "Chandigarh",
   "NCT of Delhi #" => "Delhi",
   "Daman & Diu #" => "Daman and Diu",
   "Dadra & Nagar Haveli #" => "Dadra and Nagar Haveli",
   "Lakshadweep #" => "Lakshadweep",
   "Puducherry #" => "Puducherry",
   "Andaman & Nicobar Islands #" => "Andaman and Nicobar Islands",
  }.each do |o, n|
    state = State.where(name: o).first
    state.update_attributes!(name: n) if state
  end
end