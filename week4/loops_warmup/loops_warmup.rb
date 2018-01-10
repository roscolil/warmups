require 'pry'

# Print out all the leap years in the last 100 years.
#
# For numbers between 0 and 200:
# a) print out multiples of 7.
# b) print out every second odd number.
# c) print out all prime numbers.

current_year = 2017
start_year =  current_year - 100
leap_years = []

(start_year..current_year).to_a.each do |year|
  if (year % 4 === 0) || (year % 100 === 0) && (year % 400 === 1)
    leap_years.push(year)
  end
end

puts leap_years


(0..200).each do |num|
  if num % 7 == 0
    puts num

  elsif num.step(2).odd?
    puts num
  end
end


binding.pry
puts 'end'
