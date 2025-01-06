package main

import "fmt"

type Person struct {
    name string
    age  int
}

func modifyAge(p *Person) {
    p.age += 1
}

func main() {
    // Basic pointer usage
    x := 42
    ptr := &x
    
    fmt.Printf("Value of x: %d\n", x)
    fmt.Printf("Address of x: %p\n", ptr)
    fmt.Printf("Value at pointer: %d\n", *ptr)
    
    // Modify value through pointer
    *ptr = 100
    fmt.Printf("Modified x: %d\n\n", x)
    
    // Pointer to struct
    person := Person{name: "Alice", age: 30}
    fmt.Printf("Before: %+v\n", person)
    
    modifyAge(&person)
    fmt.Printf("After: %+v\n", person)
    
    // Nil pointer
    var nilPtr *int
    fmt.Printf("\nNil pointer: %v\n", nilPtr)
}
