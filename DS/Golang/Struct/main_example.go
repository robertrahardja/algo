package main

import "fmt"

type Address struct {
    Street  string
    City    string
    Country string
}

type Person struct {
    Name    string
    Age     int
    Address Address
}

func (p Person) PrintInfo() {
    fmt.Printf("Name: %s\nAge: %d\nAddress: %s, %s, %s\n",
        p.Name, p.Age,
        p.Address.Street, p.Address.City, p.Address.Country)
}

func main() {
    // Create struct instance
    person := Person{
        Name: "Alice",
        Age:  30,
        Address: Address{
            Street:  "123 Main St",
            City:    "New York",
            Country: "USA",
        },
    }
    
    // Access struct fields
    fmt.Println("Person details:")
    person.PrintInfo()
    
    // Modify struct fields
    person.Age = 31
    person.Address.City = "Boston"
    
    fmt.Println("\nAfter modification:")
    person.PrintInfo()
    
    // Anonymous struct
    employee := struct {
        ID   int
        Role string
    }{
        ID:   1001,
        Role: "Developer",
    }
    
    fmt.Printf("\nEmployee: %+v\n", employee)
}
