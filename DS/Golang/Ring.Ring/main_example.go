package main

import (
    "container/ring"
    "fmt"
)

func main() {
    // Create a ring of size 5
    r := ring.New(5)
    
    // Initialize the ring with some values
    for i := 0; i < r.Len(); i++ {
        r.Value = i
        r = r.Next()
    }
    
    // Function to print ring
    printRing := func(r *ring.Ring) {
        r.Do(func(x interface{}) {
            fmt.Printf("%d ", x)
        })
        fmt.Println()
    }
    
    fmt.Println("Initial ring:")
    printRing(r)
    
    // Move forward
    r = r.Move(2)
    fmt.Println("After moving 2 positions forward:")
    printRing(r)
    
    // Create another ring
    r2 := ring.New(3)
    for i := 5; i < 8; i++ {
        r2.Value = i
        r2 = r2.Next()
    }
    
    // Link rings
    r.Link(r2)
    
    fmt.Println("After linking with second ring:")
    printRing(r)
}
