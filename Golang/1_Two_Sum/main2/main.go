package main

import "fmt"

func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)

	for i, num := range nums {
		complement := target - num
		if j, exists := numMap[complement]; exists {
			return []int{j, i}
		}
		numMap[num] = i
	}
	return nil
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	result := twoSum(nums, target)
	fmt.Println(result) // Will print [0 1]
}
