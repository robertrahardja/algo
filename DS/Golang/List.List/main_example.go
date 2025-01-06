package main

import (
    "container/list"
    "fmt"
)

func main() {
    // Create a new list
    l := list.New()
    
    // Push elements to back
    l.PushBack("first")
    l.PushBack("second")
    l.PushBack("third")
    
    // Push elements to front
    l.PushFront("zero")
    
    // Iterate through list
    fmt.Println("Forward iteration:")
    for e := l.Front(); e != nil; e = e.Next() {
        fmt.Println(e.Value)
    }
    
    // Reverse iteration
    fmt.Println("\nReverse iteration:")
    for e := l.Back(); e != nil; e = e.Prev() {
        fmt.Println(e.Value)
    }
    
    // Remove element
    element := l.Front().Next()
    l.Remove(element)
    
    fmt.Println("\nAfter removing second element:")
    for e := l.Front(); e != nil; e = e.Next() {
        fmt.Println(e.Value)
    }
}
