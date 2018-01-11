require 'pry'

# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.
#
# Scrabble.score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb.
#
# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

class Scrabble
  def self.score(word)
    score = 0
    arr = word.split('')
    upcase_arr = arr.map(&:upcase)

    upcase_arr.each do |elem|
      case elem
      when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'
        value = 1
      when 'D', 'G'
        value = 2
      when 'B', 'C', 'M', 'P'
        value = 3
      when 'F', 'H', 'V', 'W', 'Y'
        value = 4
      when 'K'
        value = 5
      when 'J', 'X'
        value = 8
      when 'Q', 'Z'
        value = 10
      end
      score += value
    end
    return score
  end
end

# binding.pry
