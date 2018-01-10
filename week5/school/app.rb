require "pry"
require_relative "school"


puts school.db
puts school.add("James", 2)
puts school.db
puts school.add("Phil", 2)
puts school.add("Jennifer", 3)
puts school.add("Little Billy", 1)
puts school.db
puts school.grade(2)
puts school.sort
