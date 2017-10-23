#--Challenge 1 --
a = true
b = false
puts a == b
puts a != b

#--Challenge 2 --
my_choosing = nil
p my_choosing
puts "#{my_choosing} was here"
print my_choosing
puts my_choosing.class

#--Challenge 3--
d = 9
puts d
e = 3.3
puts e
d = e
puts d


#--Challenge 4--
christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda."
puts christine + " and I like " + likesTo
g = "2"
g_to_number = g.to_i
puts g.to_i + g_to_number

#--Challenge 5 --
puts "Input an Integer"
number = gets.chomp.to_i
puts number * 2

puts "What is your name?"
name = gets.chomp
puts "What do you like to do?"
favorite = gets.chomp

puts "#{name} like to #{favorite}"

#--Challenge 6 --
myFirstArray = []
myFirstArray = ["one", "Two", "Three", "Four", "Five", 1, 2, 3, 4]
puts myFirstArray.last
myFirstArray[1] = "Joe"
myFirstArray[2] = 3
myFirstArray.push(true)
puts myFirstArray[3].class

#--Challenge 7 --
myFavoriteAnimals = {
    "Edgar" => "Donkey",
    "Chris" => "Turtle",
    "James" => "Cat",
    "Aaron" => "Dog",
    "Ericka" => "Peacock"
}

myFavoriteAnimals["Edgar"] = "Bear"

favoriteMovie = {}
favoriteMovie[:movie] = "Back to the future"

puts myFavoriteAnimals
puts favoriteMovie

#--Challenge 8 --
firstRange = (1..10)
firstRange = firstRange.to_a

secondRange = (1..1000)
secondRange = secondRange.to_a

for number in firstRange
    number = number.to_s
    p number
end

x = 0
while x < 50 do
    puts secondRange[x]
    x += 1
end
new_arr = []
firstRange.each do |number|
    if number.odd?
        new_arr.push(number * 2)
    end
end
puts new_arr

another_arr = firstRange.map do |num|
    if num.even?
        num.to_s
    else
        num
    end
end
p another_arr

#--Challenge 9--
a = (1..1000).to_a
sum_arr = []
a.each do |num|
    if num % 3 == 0 || num % 5 == 0
        sum_arr.push(num)
    end
end
total = sum_arr.sum
puts total

#--Final Challenge--
def check_prime?(number)
    (2..Math.sqrt(number).ceil).map do |num|
         if number % num == 0
             return false
         end
     end
     return true
end

def get_primes(number)
    return (1..number).select{|n| check_prime? n}
end