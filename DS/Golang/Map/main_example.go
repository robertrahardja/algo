package main

import "fmt"

func main() {
    // Create and initialize a map
    colors := map[string]string{
        "red":   "#ff0000",
        "green": "#00ff00",
        "blue":  "#0000ff",
    }
    
    // Add new key-value pair
    colors["yellow"] = "#ffff00"
    
    // Print all key-value pairs
    fmt.Println("All colors:")
    for key, value := range colors {
        fmt.Printf("%s: %s\n", key, value)
    }
    
    // Check if key exists
    if value, exists := colors["green"]; exists {
        fmt.Printf("\nGreen exists with value: %s\n", value)
    }
    
    // Delete a key
    delete(colors, "blue")
    
    fmt.Println("\nAfter deleting blue:")
    for key, value := range colors {
        fmt.Printf("%s: %s\n", key, value)
    }
    
    // Length of map
    fmt.Printf("\nNumber of colors: %d\n", len(colors))
}
