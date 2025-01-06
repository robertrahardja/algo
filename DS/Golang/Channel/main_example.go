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
