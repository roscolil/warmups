# Say it in English
# Write a program that will take a number from 0 to 99 and spell out that number in English.
#
# In other words, if the input to the program is 22, then the output should be 'twenty-two'
#
# e.g.
#
# Say.new(22).in_english
# Say.new(-1).in_english
# # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
# The program must also report any values that are out of range.
#
# Some good test cases for this program are:
#
# 0
# 14
# 50
# 98
# -1
# 100
# Extensions
# Re-write the method for the Fixnum class.
require 'pry'

  number_hash = {
    90 => "ninety",   80 => "eighty",   70 => "seventy",
    60 => "sixty",    50 => "fifty",    40 => "forty",
    30 => "thirty",   20 => "twenty",   19 => "nineteen",
    18 => "eighteen", 17 => "seventeen",16 => "sixteen",
    15 => "fifteen",  14 => "fourteen", 13 => "thirteen",
    12 => "twelve",   11 => "eleven",   10 => "ten",
    9  => "nine",     8  => "eight",    7  => "seven",
    6  => "six",      5  => "five",     4  => "four",
    3  => "three",    2  => "two",      1  => "one",
  }

class Say
  def initialize(num)
    if num.between?(0, 99)
      return @number = num.to_i
    else
      puts "Number must be between 0 and 99, inclusive."
    end
  end

  binding.pry

  def in_english
    if
      
    else

    end
  end
end
