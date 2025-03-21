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
