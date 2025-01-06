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
