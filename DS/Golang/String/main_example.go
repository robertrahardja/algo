package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "Hello, 世界"
    
    // Basic string operations
    fmt.Println("String:", str)
    fmt.Println("Length:", len(str))
    fmt.Println("First character:", string(str[0]))
    
    // String manipulation
    fmt.Println("\nSubstring:", str[0:5])
    fmt.Println("Upper case:", strings.ToUpper(str))
    fmt.Println("Lower case:", strings.ToLower(str))
    
    // String concatenation
    str2 := " Golang!"
    combined := str + str2
    fmt.Println("Concatenated:", combined)
    
    // String functions
    fmt.Println("\nContains 'Hello':", strings.Contains(str, "Hello"))
    fmt.Println("Replace:", strings.Replace(str, "Hello", "Hi", 1))
    fmt.Println("Split:", strings.Split("a,b,c", ","))
    
    // Rune handling
    runes := []rune(str)
    fmt.Printf("Runes: %v\n", runes)
    for i, r := range str {
        fmt.Printf("Character %d: %c\n", i, r)
    }
}
