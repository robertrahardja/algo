package main

import "fmt"

func main() {
    // Fixed-size array declaration
    var arr [5]int = [5]int{1, 2, 3, 4, 5}
    
    // Array operations
    fmt.Println("Array:", arr)
    fmt.Println("Length:", len(arr))
    fmt.Println("First element:", arr[0])
    fmt.Println("Last element:", arr[len(arr)-1])
    
    // Modify array element
    arr[2] = 10
    fmt.Println("After modification:", arr)
    
    // Multi-dimensional array
    matrix := [2][3]int{
        {1, 2, 3},
        {4, 5, 6},
    }
    fmt.Println("2D Array:", matrix)
}
