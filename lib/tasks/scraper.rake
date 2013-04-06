require 'scraper.rb'
desc "scrap the data"
task :scrap => :environment do
 Scraper.scrap_all
end