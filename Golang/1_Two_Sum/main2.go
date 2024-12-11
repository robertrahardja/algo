package main
import "fmt"
func mFunc (nums []int, target int) string {
  fmt.Println("mFunc")
  return "hello"
  
}

func main() {
  nums := []int{2, 7, 11, 15}
  target := 9

  result := mFunc(nums, target)
  fmt.Println(result)

}
