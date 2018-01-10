# Starbucks
# Write a program that holds on to coffee orders.
#
# c1 = Coffee.new('latte','2 sugars','medium','Darryl')
#
# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."
#
# Extension
# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.
# puts c1
# # => "Barrel's latte, medium, 2 sugars."
# When you make a new order, you have to wait for coffee. When you create the new order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling c1.ready? and have the program yell out the order and the misspelled name.
#
# You should be able to mark the coffee as collected with c1.collected = true.
#
# List all of the coffees not collected.
#
# Add options to the coffee order, eg shot of hazelnut, whipped cream, chocolate syrup.

require 'pry'

# Define class Coffee
class Coffee
  def initialize(coffee_type, sugars, size, name)
    @coffee_type = coffee_type
    @sugars = sugars
    @size = size
    @name = name
  end

  def to_s
    return "#{@coffee_type}, #{@sugars}, #{@size}, #{@name}"
  end

end

# order = Hash.new
#
# loop do
#   print("Type of coffee?")
#   coffee_type = gets.chomp
#   order[:coffee_type][coffee_type]
#
#   print("How many sugars?")
#   sugars = gets.chomp
#   order[:sugars][sugars]
#
#
#   print("What size?")
#   size = gets.chomp
#   order[:size][size]
#
#   print("What is your name?")
#   name = gets.chomp
#   order[:name][name]
# end


c1 = Coffee.new('latte','2 sugars','medium','Darryl')


binding.pry
puts 'end'
