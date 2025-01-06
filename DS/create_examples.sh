#!/bin/bash

# Array
mkdir -p Golang/Array
cat >Golang/Array/main_example.go <<'EOL'
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
EOL

# Channel
mkdir -p Golang/Channel
cat >Golang/Channel/main_example.go <<'EOL'
package main

import (
    "fmt"
    "time"
)

func worker(ch chan string, done chan bool) {
    for i := 0; i < 3; i++ {
        ch <- fmt.Sprintf("Message %d", i)
        time.Sleep(time.Millisecond * 100)
    }
    done <- true
}

func main() {
    // Create channels
    messages := make(chan string)
    done := make(chan bool)
    
    // Start worker goroutine
    go worker(messages, done)
    
    // Receive messages until worker is done
    for {
        select {
        case msg := <-messages:
            fmt.Println("Received:", msg)
        case <-done:
            fmt.Println("Worker finished")
            return
        }
    }
}
EOL

# Heap Interface
mkdir -p Golang/Heap.Interface
cat >Golang/Heap.Interface/main_example.go <<'EOL'
package main

import (
    "container/heap"
    "fmt"
)

// IntHeap is a min-heap of integers
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

func main() {
    h := &IntHeap{2, 1, 5, 6, 4, 3}
    heap.Init(h)
    
    fmt.Printf("Minimum: %d\n", (*h)[0])
    
    heap.Push(h, 0)
    fmt.Printf("After pushing 0, minimum: %d\n", (*h)[0])
    
    for h.Len() > 0 {
        fmt.Printf("%d ", heap.Pop(h))
    }
    fmt.Println()
}
EOL

# Interface
mkdir -p Golang/Interface
cat >Golang/Interface/main_example.go <<'EOL'
package main

import "fmt"

type Shape interface {
    Area() float64
    Perimeter() float64
}

type Rectangle struct {
    width  float64
    height float64
}

func (r Rectangle) Area() float64 {
    return r.width * r.height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.width + r.height)
}

type Circle struct {
    radius float64
}

func (c Circle) Area() float64 {
    return 3.14 * c.radius * c.radius
}

func (c Circle) Perimeter() float64 {
    return 2 * 3.14 * c.radius
}

func printShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f\n", s.Area())
    fmt.Printf("Perimeter: %.2f\n", s.Perimeter())
}

func main() {
    rect := Rectangle{width: 5, height: 3}
    circ := Circle{radius: 2}
    
    fmt.Println("Rectangle:")
    printShapeInfo(rect)
    
    fmt.Println("\nCircle:")
    printShapeInfo(circ)
}
EOL

# List.List
mkdir -p Golang/List.List
cat >Golang/List.List/main_example.go <<'EOL'
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
EOL

# Map
mkdir -p Golang/Map
cat >Golang/Map/main_example.go <<'EOL'
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
EOL

# Pointer
mkdir -p Golang/Pointer
cat >Golang/Pointer/main_example.go <<'EOL'
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
EOL

# Ring.Ring
mkdir -p Golang/Ring.Ring
cat >Golang/Ring.Ring/main_example.go <<'EOL'
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
EOL

# Slice
mkdir -p Golang/Slice
cat >Golang/Slice/main_example.go <<'EOL'
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
EOL

# String
mkdir -p Golang/String
cat >Golang/String/main_example.go <<'EOL'
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
EOL

# Struct
mkdir -p Golang/Struct
cat >Golang/Struct/main_example.go <<'EOL'
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
EOL

echo "All example files have been created in their respective directories."
