require "pry"

# Dice
# Write a program using classes to generate a standard dice roll.
#
# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem
#
# It should give you a different result each time.
#
# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice
#
# Dice.roll(3)
# # => [2,5,1]
# Extension
# Add another method named pretty_roll that display die faces instead of a number after rolling.
# Dice.pretty_roll
# ________
# | *  * |
# | *  * |
# ________

class Dice

  def self.roll(rolls)
    rolls_arr = [*(1..6)].sample(rolls)
    return rolls_arr
    # rolls_total = rolls
    #rolls_arr = Array.new()

    # while rolls_count < rolls_total
    #   rolls_arr.push(number)
    #   rolls_count +=
    #   return [*(1..6)].sample(rolls_count)
    # end
    # return rand(1..6)
  end

end


# binding.pry

# Instance methods you have to create a new class object i.e. dice = Dice.new to use the method

# Class methods can be called directly and are exclusive to the class not instances of that class

# Class variables use @@
def self.roll
  @@name

end
