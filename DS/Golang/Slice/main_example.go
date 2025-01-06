package main

import "fmt"

func main() {
    // Create slice
    slice := []int{1, 2, 3, 4, 5}
    fmt.Println("Initial slice:", slice)
    
    // Append elements
    slice = append(slice, 6, 7)
    fmt.Println("After append:", slice)
    
    // Slice operations
    fmt.Println("First three elements:", slice[:3])
    fmt.Println("Last three elements:", slice[len(slice)-3:])
    fmt.Println("Middle elements:", slice[2:5])
    
    // Create slice with make
    sliceWithCap := make([]int, 3, 5)
    fmt.Printf("\nLength: %d, Capacity: %d\n", len(sliceWithCap), cap(sliceWithCap))
    
    // Copy slices
    src := []int{1, 2, 3}
    dst := make([]int, len(src))
    copy(dst, src)
    fmt.Println("Copied slice:", dst)
}
