class Person
    attr_accessor :name
    def initialize(name)
        puts 'Hello, #{name}'
        @name = name
    end
end