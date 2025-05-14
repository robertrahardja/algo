ing window of size k which is moving
        from the very left of the array to the very right. You can only see the k numbers
        in the window. Each time the sliding window moves right by one position. Return the max
        sliding window.

    Example:

    Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7]
Explanation:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

    Note: 
        You may assume k is always valid, 1 ≤ k ≤ input array's size for
        non-empty array.

    Follow up:
        Could you solve it in linear time?
-----------------

# 1025_Divisor_Game
# 1025. Divisor Game

Alice and Bob take turns playing a game, with Alice starting first.

    Initially, there is a number N on the chalkboard.  On each player's
        turn, that player makes a move consisting of:

    
        Choosing any x with 0 < x < N and N % x ==
            0.
        
        Replacing the number N on the chalkboard with N -
            x.
        
    

    Also, if a player cannot make a move, they lose the game.

    Return True if and only if Alice wins the game, assuming both players play
        optimally.
-----------------

# 542_01_Matrix
# 542. 01 Matrix

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

    The distance between two adjacent cells is 1.

     

    Example 1: 

    Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

    Example 2: 

    Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]

     

    Note:

    
        The number of elements of the given matrix will not exceed 10,000.
        There are at least one 0 in the given matrix.
        The cells are adjacent in only four directions: up, down, left and right.
-----------------

# 914_X_of_a_Kind_in_a_Deck_of_Cards
# 914. X of a Kind in a Deck of Cards

In a deck of cards, each card has an integer written on it.

    Return true if and only if you can choose X >= 2 such that it
        is possible to split the entire deck into 1 or more groups of cards, where:

    
        Each group has exactly X cards.
        All the cards in each group have the same integer.
    

     

    Example 1:

    Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
-----------------

# 1175_Prime_Arrangements
# 1175. Prime Arrangements

Return the number of permutations of 1 to n so that prime numbers are at prime
        indices (1-indexed.)

    (Recall that an integer is prime if and only if it is greater than 1, and cannot be
        written as a product of two positive integers both smaller than it.)

    Since the answer may be large, return the answer modulo 10^9 +
        7.

     
    Example 1:

    Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.

    Example 2:

    Input: n = 100
Output: 682289015

     
    Constraints:

    
        1 <= n <= 100
-----------------

# 621_Task_Scheduler
# 621. Task Scheduler

Given a char array representing tasks CPU need to do. It contains capital letters A to Z
        where different letters represent different tasks. Tasks could be done without original
        order. Each task could be done in one interval. For each interval, CPU could finish one task
        or just be idle.

    However, there is a non-negative cooling interval n that means between two same
        tasks, there must be at least n intervals that CPU are doing different tasks or just be
        idle.

    You need to return the least number of intervals the CPU will take to finish all the
        given tasks.

     

    Example:

    Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

     

    Note:

    
        The number of tasks is in the range [1, 10000].
        The integer n is in the range [0, 100].
-----------------

# 1428_Leftmost_Column_with_at_Least_a_One
# 1428. Leftmost Column with at Least a One


-----------------

# 1418_Display_Table_of_Food_Orders_in_a_Restaurant
# 1418. Display Table of Food Orders in a Restaurant


-----------------

# 826_Most_Profit_Assigning_Work
# 826. Most Profit Assigning Work

We have jobs: difficulty[i] is the difficulty of the ith
        job, and profit[i] is the profit of the ith job. 
    

    Now we have some workers. worker[i] is the ability of
        the ith worker, which means that this worker can only complete a job with
        difficulty at most worker[i]. 

    Every worker can be assigned at most one job, but one job can be completed multiple
        times.

    For example, if 3 people attempt the same job that pays $1, then the total profit will be $3. 
        If a worker cannot complete any job, his profit is $0.

    What is the most profit we can make?

    Example 1:

    Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get profit of [20,20,30,30] seperately.

    Notes:

    
        1 <= difficulty.length = profit.length <= 10000
        1 <= worker.length <= 10000
        difficulty[i], profit[i], worker[i]  are in range [1,
            10^5]
-----------------

# 1238_Circular_Permutation_in_Binary_Representation
# 1238. Circular Permutation in Binary Representation

Given 2 integers n and start. Your task is return
        any permutation p of (0,1,2.....,2^n -1) such
        that :

    
        p[0] = start
        p[i] and p[i+1] differ by only one bit in their binary
            representation.
        
        p[0] and p[2^n -1] must also differ by only one bit in
            their binary representation.
        
    

     
    Example 1:

    Input: n = 2, start = 3
Output: [3,2,0,1]
Explanation: The binary representation of the permutation is (11,10,00,01).
All the adjacent element differ by one bit. Another valid permutation is [3,1,0,2]

    Example 2:

    Input: n = 3, start = 2
Output: [2,6,7,5,4,0,1,3]
Explanation: The binary representation of the permutation is (010,110,111,101,100,000,001,011).

     
    Constraints:

    
        1 <= n <= 16
        0 <= start < 2 ^ n
-----------------

# 1628_Design_an_Expression_Tree_With_Evaluate_Function
# 1628. Design an Expression Tree With Evaluate Function


-----------------

# 864_Shortest_Path_to_Get_All_Keys
# 864. Shortest Path to Get All Keys

We are given a 2-dimensional grid. "." is an
        empty cell, "#" is a wall, "@" is the
        starting point, ("a", "b", ...) are keys, and
        ("A", "B", ...) are locks.

    We start at the starting point, and one move consists of walking one space in one of the 4
        cardinal directions.  We cannot walk outside the grid, or walk into a wall.  If we
        walk over a key, we pick it up.  We can't walk over a lock unless we have the
        corresponding key.

    For some 1 <= K <= 6, there is exactly one lowercase and
        one uppercase letter of the first K letters of the English alphabet in the
        grid.  This means that there is exactly one key for each lock, and one lock for each
        key; and also that the letters used to represent the keys and locks were chosen in the
        same order as the English alphabet.

    Return the lowest number of moves to acquire all keys.  If it's impossible,
        return -1.
-----------------

# 100_Same_Tree
# 100. Same Tree

Given two binary trees, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical and the nodes
        have the same value.

    Example 1:

    Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

    Example 2:

    Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

    Example 3:

    Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
-----------------

# 892_Surface_Area_of_3D_Shapes
# 892. Surface Area of 3D Shapes

On a N * N grid, we place some 1 * 1 *
        1 cubes.

    Each value v = grid[i][j] represents a tower of v cubes
        placed on top of grid cell (i, j).

    Return the total surface area of the resulting shapes.
-----------------

# 575_Distribute_Candies
# 575. Distribute Candies

Given an integer array with even length, where different numbers in this array represent
    different kinds of candies. Each number means one candy of the corresponding kind. You
    need to distribute these candies equally in number to brother and sister. Return the
    maximum number of kinds of candies the sister could gain.

    Example 1:
    Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
The sister has three different kinds of candies.

    

    Example 2:
    Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of candies.

    

    Note:
    
        The length of the given array is in range [2, 10,000], and will be even.
        The number in given array is in range [-100,000, 100,000].
-----------------

# 1253_Reconstruct_a_2-Row_Binary_Matrix
# 1253. Reconstruct a 2-Row Binary Matrix

Given the following details of a matrix with n columns and 2 rows :
    

    
        The matrix is a binary matrix, which means each element in the matrix can be
            0 or 1.
        
        The sum of elements of the 0-th(upper) row is given as upper.
        The sum of elements of the 1-st(lower) row is given as lower.
        The sum of elements in the i-th column(0-indexed) is colsum[i], where
            colsum is given as an integer array with length n.
        
    

    Your task is to reconstruct the matrix with upper, lower and colsum.
    

    Return it as a 2-D integer array.

    If there are more than one valid solution, any of them will be accepted.

    If no valid solution exists, return an empty 2-D array.

     
    Example 1:

    Input: upper = 2, lower = 1, colsum = [1,1,1]
Output: [[1,1,0],[0,0,1]]
Explanation: [[1,0,1],[0,1,0]], and [[0,1,1],[1,0,0]] are also correct answers.

    Example 2:

    Input: upper = 2, lower = 3, colsum = [2,2,1,1]
Output: []

    Example 3:

    Input: upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1]
Output: [[1,1,1,0,1,0,0,1,0,0],[1,0,1,0,0,0,1,1,0,1]]

     
    Constraints:

    
        1 <= colsum.length <= 10^5
        0 <= upper, lower <= colsum.length
        0 <= colsum[i] <= 2
-----------------

# 490_The_Maze
# 490. The Maze

There is a ball in a maze with empty spaces and walls. The ball can go through empty
        spaces by rolling up, down, left or right, but it won't stop
        rolling until hitting a wall. When the ball stops, it could choose the next direction.

    Given the ball's start position, the destination and the maze,
        determine whether the ball could stop at the destination.

    The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
        You may assume that the borders of the maze are all walls. The start and destination
        coordinates are represented by row and column indexes.

     

    Example 1:

    Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: true

Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.

    Example 2:

    Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (3, 2)

Output: false

Explanation: There is no way for the ball to stop at the destination.

     

    Note:

    
        There is only one ball and one destination in the maze.
        Both the ball and the destination exist on an empty space, and they will not be at the
            same position initially.
        
        The given maze does not contain border (like the red rectangle in the example pictures),
            but you could assume the border of the maze are all walls.
        
        The maze contains at least 2 empty spaces, and both the width and height of the maze won't
            exceed 100.
-----------------

# 1595_Minimum_Cost_to_Connect_Two_Groups_of_Points
# 1595. Minimum Cost to Connect Two Groups of Points


-----------------

# 1594_Maximum_Non_Negative_Product_in_a_Matrix
# 1594. Maximum Non Negative Product in a Matrix


-----------------

# 1383_Maximum_Performance_of_a_Team
# 1383. Maximum Performance of a Team


-----------------

# 1564_Put_Boxes_Into_the_Warehouse_I
# 1564. Put Boxes Into the Warehouse I


-----------------

# 491_Increasing_Subsequences
# 491. Increasing Subsequences

Given an integer array, your task is to find all the different possible increasing
        subsequences of the given array, and the length of an increasing subsequence should be at
        least 2.

     

    Example:

    Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

     

    Note:

    
        The length of the given array will not exceed 15.
        The range of integer in the given array is [-100,100].
        The given array may contain duplicates, and two equal integers should also be considered
            as a special case of increasing sequence.
-----------------

# 588_Design_In-Memory_File_System
# 588. Design In-Memory File System

Design an in-memory file system to simulate the following functions:

    ls: Given a path in string format. If it is a file path, return a list that only
        contains this file's name. If it is a directory path, return the list of file and
        directory names in this directory. Your output (file and directory names together)
        should in lexicographic order.

    mkdir: Given a directory path that does not exist, you should make a new
        directory according to the path. If the middle directories in the path don't exist
        either, you should create them as well. This function has void return type.

    addContentToFile: Given a file path and file content in string
        format. If the file doesn't exist, you need to create that file containing given
        content. If the file already exists, you need to append given content to original
        content. This function has void return type.

    readContentFromFile: Given a file path, return its content in
        string format.

     

    Example:

    Input:
["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

Output:
[null,[],null,null,["a"],"hello"]

Explanation:

     

    Note:

    
        You can assume all file or directory paths are absolute paths which begin with
            / and do not end with / except that the path is just "/".
        
        You can assume that all operations will be passed valid parameters and users will not
            attempt to retrieve file content or list a directory or file that does not exist.
        
        You can assume that all directory names and file names only contain lower-case letters,
            and same names won't exist in the same directory.
-----------------

# 727_Minimum_Window_Subsequence
# 727. Minimum Window Subsequence

Given strings S and T, find the minimum (contiguous)
        substring W of S, so that T is a subsequence
        of W.

    If there is no such window in S that covers all characters in T,
        return the empty string "". If there are multiple such minimum-length
        windows, return the one with the left-most starting index.

    Example 1:

    Input:
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation:
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.

     

    Note:

    
        All the strings in the input will only contain lowercase letters.
        The length of S will be in the range [1, 20000].
        The length of T will be in the range [1, 100].
-----------------

# 733_Flood_Fill
# 733. Flood Fill

An image is represented by a 2-D array of integers, each integer representing
        the pixel value of the image (from 0 to 65535).
    
    
        Given a coordinate (sr, sc) representing the starting pixel (row and column) of
        the flood fill, and a pixel value newColor, "flood fill" the image.
    
    
        To perform a "flood fill", consider the starting pixel, plus any pixels connected
        4-directionally to the starting pixel of the same color as the starting pixel, plus any
        pixels connected 4-directionally to those pixels (also with the same color as the starting
        pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
    
    
        At the end, return the modified image.
    
    Example 1:
    Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.

    

    Note:
    The length of image and image[0] will be in the range [1,
        50].
    
    The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc
        < image[0].length.
    
    The value of each color in image[i][j] and newColor will be an
        integer in [0, 65535].
-----------------

# 441_Arranging_Coins
# 441. Arranging Coins

You have a total of n coins that you want to form in a staircase shape, where every
        k-th row must have exactly k coins.

    Given n, find the total number of full staircase rows that can be formed.

    n is a non-negative integer and fits within the range of a 32-bit signed integer.

    Example 1:
    n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.

    

    Example 2:
    n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
-----------------

# 1012_Numbers_With_Repeated_Digits
# 1012. Numbers With Repeated Digits

Given a positive integer N, return the number of positive integers less than or
        equal to N that have at least 1 repeated digit.
-----------------

# 143_Reorder_List
# 143. Reorder List

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
        reorder it to:
        L0→Ln→L1→Ln-1→L2→Ln-2→…
    

    You may not modify the values in the list's nodes, only nodes itself may
        be changed.

    Example 1:

    Given 1->2->3->4, reorder it to 1->4->2->3.

    Example 2:

    Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
-----------------

# 1140_Stone_Game_II
# 1140. Stone Game II

Alex and Lee continue their games with piles of stones.  There are a number of piles arranged
        in a row, and each pile has a positive integer number of
        stones piles[i].  The objective of the game is to end with the most stones. 
    

    Alex and Lee take turns, with Alex starting first.  Initially, M = 1.

    On each player's turn, that player can take all the stones in the
        first X remaining piles, where 1 <= X <= 2M. 
        Then, we set M = max(M, X).

    The game continues until all the stones have been taken.

    Assuming Alex and Lee play optimally, return the maximum number of stones Alex can get.

     
    Example 1:

    Input: piles = [2,7,9,4,4]
Output: 10
Explanation:  If Alex takes one pile at the beginning, Lee takes two piles, then Alex takes 2 piles again. Alex can get 2 + 4 + 4 = 10 piles in total. If Alex takes two piles at the beginning, then Lee can take all three piles left. In this case, Alex get 2 + 7 = 9 piles in total. So we return 10 since it's larger.

     
    Constraints:

    
        1 <= piles.length <= 100
        1 <= piles[i] <= 10 ^ 4
-----------------

# 483_Smallest_Good_Base
# 483. Smallest Good Base

For an integer n, we call k>=2 a good base of n, if all digits of n base k
        are 1.

    Now given a string representing n, you should return the smallest good base of n in string
        format.

    Example 1:

    Input: "13"
Output: "3"
Explanation: 13 base 3 is 111.

     

    Example 2:

    Input: "4681"
Output: "8"
Explanation: 4681 base 8 is 11111.

     

    Example 3:

    Input: "1000000000000000000"
Output: "999999999999999999"
Explanation: 1000000000000000000 base 999999999999999999 is 11.

     

    Note:

    
        The range of n is [3, 10^18].
        The string representing n is always valid and will not have leading zeros.
-----------------

# 1385_Find_the_Distance_Value_Between_Two_Arrays
# 1385. Find the Distance Value Between Two Arrays


-----------------

# 890_Find_and_Replace_Pattern
# 890. Find and Replace Pattern

You have a list of words and a pattern, and you want to know
        which words in words matches the pattern.

    A word matches the pattern if there exists a permutation of letters p so that
        after replacing every letter x in the pattern with p(x), we get
        the desired word.

    (Recall that a permutation of letters is a bijection from letters to letters: every
        letter maps to another letter, and no two letters map to the same letter.)

    Return a list of the words in words that match the given pattern. 

    You may return the answer in any order.
-----------------

# 518_Coin_Change_2
# 518. Coin Change 2

You are given coins of different denominations and a total amount of money. Write a function
        to compute the number of combinations that make up that amount. You may assume that you have
        infinite number of each kind of coin.

    
    

     

    Example 1:

    Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

    Example 2:

    Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

    Example 3:

    Input: amount = 10, coins = [10]
Output: 1

     

    Note:

    You can assume that

    
        0 <= amount <= 5000
        1 <= coin <= 5000
        the number of coins is less than 500
        the answer is guaranteed to fit into signed 32-bit integer
-----------------

# 1786_Number_of_Restricted_Paths_From_First_to_Last_Node
# 1786. Number of Restricted Paths From First to Last Node


-----------------

# 341_Flatten_Nested_List_Iterator
# 341. Flatten Nested List Iterator

Given a nested list of integers, implement an iterator to flatten it.

    Each element is either an integer, or a list -- whose elements may also be integers or other
        lists.

    Example 1:
-----------------

# 1017_Convert_to_Base_-2
# 1017. Convert to Base -2

Given a number N, return a string consisting of "0"s and
        "1"s that represents its value in base -2 (negative
        two).

    The returned string must have no leading zeroes, unless the string is
        "0".
-----------------

# 1641_Count_Sorted_Vowel_Strings
# 1641. Count Sorted Vowel Strings


-----------------

# 1494_Parallel_Courses_II
# 1494. Parallel Courses II


-----------------

# 197_Rising_Temperature
# 197. Rising Temperature

Given a Weather table, write a SQL query to find all dates' Ids with higher
        temperature compared to its previous (yesterday's) dates.

    +---------+------------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------------+------------------+
|       1 |       2015-01-01 |               10 |
|       2 |       2015-01-02 |               25 |
|       3 |       2015-01-03 |               20 |
|       4 |       2015-01-04 |               30 |
+---------+------------------+------------------+

    For example, return the following Ids for the above Weather table:

    +----+
| Id |
+----+
|  2 |
|  4 |
+----+
-----------------

# 517_Super_Washing_Machines
# 517. Super Washing Machines

You have n super washing machines on a line. Initially, each washing machine has some
        dresses or is empty.
    

    For each move, you could choose any m (1 ≤ m ≤ n) washing machines, and
        pass one dress of each washing machine to one of its adjacent washing machines  at
            the same time . 

    Given an integer array representing the number of dresses in each washing machine from left
        to right on the line, you should find the minimum number of moves to make all the
        washing machines have the same number of dresses. If it is not possible to do it, return -1.
    

    Example1
    Input: [1,0,5]

Output: 3

Explanation:
1st move:    1     0 <-- 5    =>    1     1     4
2nd move:    1 <-- 1 <-- 4    =>    2     1     3
3rd move:    2     1 <-- 3    =>    2     2     2

    Example2
    Input: [0,3,0]

Output: 2

Explanation:
1st move:    0 <-- 3     0    =>    1     2     0
2nd move:    1     2 --> 0    =>    1     1     1

    Example3
    Input: [0,2,0]

Output: -1

Explanation:
It's impossible to make all the three washing machines have the same number of dresses.

    

    Note:
    
        The range of n is [1, 10000].
        The range of dresses number in a super washing machine is [0, 1e5].
-----------------

# 1780_Check_if_Number_is_a_Sum_of_Powers_of_Three
# 1780. Check if Number is a Sum of Powers of Three


-----------------

# 1196_How_Many_Apples_Can_You_Put_into_the_Basket
# 1196. How Many Apples Can You Put into the Basket

You have some apples, where arr[i] is the weight of the i-th apple. 
        You also have a basket that can carry up to 5000 units of weight.

    Return the maximum number of apples you can put in the basket.

     
    Example 1:

    Input: arr = [100,200,150,1000]
Output: 4
Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.

    Example 2:

    Input: arr = [900,950,800,1000,700,800]
Output: 5
Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.

     
    Constraints:

    
        1 <= arr.length <= 10^3
        1 <= arr[i] <= 10^3
-----------------

# 291_Word_Pattern_II
# 291. Word Pattern II

Given a pattern and a string str, find if str follows
        the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in
        pattern and a non-empty substring in str.

    Example 1:

    Input: pattern = "abab", str = "redblueredblue"
Output: true

    Example 2:

    Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
Output: true

    Example 3:

    Input: pattern = "aabb", str = "xyzabcxzyabc"
Output: false

    Notes:
        You may assume both pattern and str contains only lowercase
        letters.
-----------------

# 620_Not_Boring_Movies
# 620. Not Boring Movies

X city opened a new cinema, many people would like to go to this cinema. The cinema also gives
    out a poster indicating the movies’ ratings and descriptions.
    Please write a SQL query to output movies with an odd numbered ID and a description that is
        not 'boring'. Order the result by rating.

     

    For example, table cinema:

    +---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   1     | War       |   great 3D   |   8.9     |
|   2     | Science   |   fiction    |   8.5     |
|   3     | irish     |   boring     |   6.2     |
|   4     | Ice song  |   Fantacy    |   8.6     |
|   5     | House card|   Interesting|   9.1     |
+---------+-----------+--------------+-----------+

    For the example above, the output should be:

    +---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   5     | House card|   Interesting|   9.1     |
|   1     | War       |   great 3D   |   8.9     |
+---------+-----------+--------------+-----------+
-----------------

# 1131_Maximum_of_Absolute_Value_Expression
# 1131. Maximum of Absolute Value Expression

Given two arrays of integers with equal lengths, return the maximum value of:

    |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

    where the maximum is taken over all 0 <= i, j < arr1.length.

     
    Example 1:

    Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
Output: 13

    Example 2:

    Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
Output: 20

     
    Constraints:

    
        2 <= arr1.length == arr2.length <= 40000
        -10^6 <= arr1[i], arr2[i] <= 10^6
-----------------

# 1738_Find_Kth_Largest_XOR_Coordinate_Value
# 1738. Find Kth Largest XOR Coordinate Value


-----------------

# 1582_Special_Positions_in_a_Binary_Matrix
# 1582. Special Positions in a Binary Matrix


-----------------

# 356_Line_Reflection
# 356. Line Reflection

Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect
        the given points.

    Example 1:

    Input: [[1,1],[-1,1]]
Output: true
-----------------

# 96_Unique_Binary_Search_Trees
# 96. Unique Binary Search Trees

Given n, how many structurally unique BST's (binary search
        trees) that store values 1 ... n?

    Example:

    Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
-----------------

# 543_Diameter_of_Binary_Tree
# 543. Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The
        diameter of a binary tree is the length of the longest path between any two nodes in
        a tree. This path may or may not pass through the root.
    

    
        Example:
        Given a binary tree 
              1
         / \
        2   3
       / \
      4   5

    
    
        Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
    

    Note:
        The length of path between two nodes is represented by the number of edges between them.
-----------------

# 1090_Largest_Values_From_Labels
# 1090. Largest Values From Labels

We have a set of items: the i-th item has value values[i] and label
        labels[i].

    Then, we choose a subset S of these items, such that:

    
        |S| <= num_wanted
        For every label L, the number of items in S with label
            L is <= use_limit.
        
    

    Return the largest possible sum of the subset S.
-----------------

# 776_Split_BST
# 776. Split BST

Given a Binary Search Tree (BST) with root node root, and a target value
        V, split the tree into two subtrees where one subtree has nodes that are
        all smaller or equal to the target value, while the other subtree has all nodes that are
        greater than the target value.  It's not necessarily the case that the tree
        contains a node with value V.

    Additionally, most of the structure of the original tree should remain.  Formally, for
        any child C with parent P in the original tree, if they are both in the same subtree after
        the split, then node C should still have the parent P.

    You should output the root TreeNode of both subtrees after splitting, in any order.

    Example 1:

    Input: root = [4,2,6,1,3,5,7], V = 2
Output: [[2,1],[4,3,6,null,null,5,7]]
Explanation:
Note that root, output[0], and output[1] are TreeNode objects, not arrays.

The given tree [4,2,6,1,3,5,7] is represented by the following diagram:

          4
        /   \
      2      6
     / \    / \
    1   3  5   7

while the diagrams for the outputs are:

          4
        /   \
      3      6      and    2
            / \           /
           5   7         1

    Note:

    
        The size of the BST will not exceed 50.
        The BST is always valid and each node's value is different.
-----------------

# 1361_Validate_Binary_Tree_Nodes
# 1361. Validate Binary Tree Nodes


-----------------

# 973_K_Closest_Points_to_Origin
# 973. K Closest Points to Origin

We have a list of points on the plane.  Find the K
        closest points to the origin (0, 0).

    (Here, the distance between two points on a plane is the Euclidean distance.)

    You may return the answer in any order.  The answer is guaranteed to be unique
        (except for the order that it is in.)
-----------------

# 1256_Encode_Number
# 1256. Encode Number


-----------------

# 1497_Check_If_Array_Pairs_Are_Divisible_by_k
# 1497. Check If Array Pairs Are Divisible by k


-----------------

# 1344_Angle_Between_Hands_of_a_Clock
# 1344. Angle Between Hands of a Clock


-----------------

# 725_Split_Linked_List_in_Parts
# 725. Split Linked List in Parts

Given a (singly) linked list with head node root, write a function to split the
        linked list into k consecutive linked list "parts".
    
    
        The length of each part should be as equal as possible: no two parts should have a size
        differing by more than 1. This may lead to some parts being null.
    
    
        The parts should be in order of occurrence in the input list, and parts occurring earlier
        should always have a size greater than or equal parts occurring later.
    
    
        Return a List of ListNode's representing the linked list parts that are formed.
    

    Examples
    1->2->3->4, k = 5 // 5 equal parts
    [ [1],
    [2],
    [3],
    [4],
    null ]

    Example 1:
    Input:
root = [1, 2, 3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The input and each element of the output are ListNodes, not arrays.
For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3, and root.next.next.next = null.
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but it's string representation as a ListNode is [].

    

    Example 2:
    Input:
root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.

    

    Note:
    The length of root will be in the range [0, 1000].
    Each value of a node in the input will be an integer in the range [0, 999].
    
    k will be an integer in the range [1, 50].
-----------------

# 1352_Product_of_the_Last_K_Numbers
# 1352. Product of the Last K Numbers


-----------------

# 1579_Remove_Max_Number_of_Edges_to_Keep_Graph_Fully_Traversable
# 1579. Remove Max Number of Edges to Keep Graph Fully Traversable


-----------------

# 1118_Number_of_Days_in_a_Month
# 1118. Number of Days in a Month

Given a year Y and a month M, return how many days there are in
        that month.

     

    Example 1:

    Input: Y = 1992, M = 7
Output: 31

    Example 2:

    Input: Y = 2000, M = 2
Output: 29

    Example 3:

    Input: Y = 1900, M = 2
Output: 28

     

    Note:

    
        1583 <= Y <= 2100
        1 <= M <= 12
-----------------

# 1725_Number_Of_Rectangles_That_Can_Form_The_Largest_Square
# 1725. Number Of Rectangles That Can Form The Largest Square


-----------------

# 221_Maximal_Square
# 221. Maximal Square

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing
        only 1's and return its area.

    Example:

    Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
-----------------

# 196_Delete_Duplicate_Emails
# 196. Delete Duplicate Emails

Write a SQL query to delete all duplicate email entries in a table named
        Person, keeping only unique emails based on its smallest Id.

    +----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.

    For example, after running your query, the above Person table should have the
        following rows:

    +----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+

    Note:

    Your output is the whole Person table after executing your sql. Use delete
        statement.
-----------------

# 805_Split_Array_With_Same_Average
# 805. Split Array With Same Average

In a given integer array A, we must move every element of A to either list B or list C. (B
        and C initially start empty.)

    Return true if and only if after such a move, it is possible that the average value of B is
        equal to the average value of C, and B and C are both non-empty.

    Example :
Input:
[1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.

    Note:

    
        The length of A will be in the range [1, 30].
        A[i] will be in the range of [0, 10000].
-----------------

# 185_Department_Top_Three_Salaries
# 185. Department Top Three Salaries

The Employee table holds all employees. Every employee has an Id, and there is
        also a column for the department Id.

    +----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 85000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
| 7  | Will  | 70000  | 1            |
+----+-------+--------+--------------+

    The Department table holds all departments of the company.

    +----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+

    Write a SQL query to find employees who earn the top three salaries in each of the
        department. For the above tables, your SQL query should return the following rows (order of
        rows does not matter).

    +------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Randy    | 85000  |
| IT         | Joe      | 85000  |
| IT         | Will     | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+

    Explanation:

    In IT department, Max earns the highest salary, both Randy and Joe earn the second highest
        salary, and Will earns the third highest salary. There are only two employees in the Sales
        department, Henry earns the highest salary while Sam earns the second highest salary.
-----------------

# 400_Nth_Digit
# 400. Nth Digit

Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, ... 

    Note:
        n is positive and will fit within the range of a 32-bit signed integer (n <
        231).
    

    Example 1:
    Input:
3

Output:
3

    

    Example 2:
    Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
-----------------

# 1480_Running_Sum_of_1d_Array
# 1480. Running Sum of 1d Array


-----------------

# 213_House_Robber_II
# 213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain
        amount of money stashed. All houses at this place are arranged in a circle.
        That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have
        security system connected and it will automatically contact the police if two
            adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money of each house,
        determine the maximum amount of money you can rob tonight without alerting the
            police.

    Example 1:

    Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.

    Example 2:

    Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
-----------------

# 781_Rabbits_in_Forest
# 781. Rabbits in Forest

In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell
        you how many other rabbits have the same color as them. Those answers are
        placed in an array.

    Return the minimum number of rabbits that could be in the forest.

    Examples:
Input: answers = [1, 1, 2]
Output: 5
Explanation:
The two rabbits that answered "1" could both be the same color, say red.
The rabbit than answered "2" can't be red or the answers would be inconsistent.
Say the rabbit that answered "2" was blue.
Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

Input: answers = [10, 10, 10]
Output: 11

Input: answers = []
Output: 0

    Note:

    
        answers will have length at most 1000.
        Each answers[i] will be an integer in the range [0, 999].
-----------------

# 1214_Two_Sum_BSTs
# 1214. Two Sum BSTs

Given two binary search trees, return True if and only if there is a node
        in the first tree and a node in the second tree whose values sum up to a given integer target.
    

     
    Example 1:

    
    

    Input: root1 = [2,1,4], root2 = [1,0,3], target = 5
Output: true
Explanation: 2 and 3 sum up to 5.

    Example 2:

    
    

    Input: root1 = [0,-10,10], root2 = [5,1,7,0,2], target = 18
Output: false

     
    Constraints:

    
        Each tree has at most 5000 nodes.
        -10^9 <= target, node.val <= 10^9
-----------------

# 612_Shortest_Distance_in_a_Plane
# 612. Shortest Distance in a Plane

Table point_2d holds the coordinates (x,y) of some unique points (more than two) in
    a plane.
     
    Write a query to find the shortest distance between these points rounded to 2 decimals.

     

    | x  | y  |
|----|----|
| -1 | -1 |
| 0  | 0  |
| -1 | -2 |

     
    The shortest distance is 1.00 from point (-1,-1) to (-1,2). So the output should be:

     

    | shortest |
|----------|
| 1.00     |

     
    Note: The longest distance among all the points are less than 10000.
-----------------

# 585_Investments_in_2016
# 585. Investments in 2016

Write a query to print the sum of all total investment values in 2016 (TIV_2016), to a
        scale of 2 decimal places, for all policy holders who meet the following criteria:

    
        Have the same TIV_2015 value as one or more other policyholders.
        Are not located in the same city as any other policyholder (i.e.: the (latitude,
            longitude) attribute pairs must be unique).
        
    

    Input Format:
        The insurance table is described as follows:

    | Column Name | Type          |
|-------------|---------------|
| PID         | INTEGER(11)   |
| TIV_2015    | NUMERIC(15,2) |
| TIV_2016    | NUMERIC(15,2) |
| LAT         | NUMERIC(5,2)  |
| LON         | NUMERIC(5,2)  |

    where PID is the policyholder's policy ID, TIV_2015 is the total investment
        value in 2015, TIV_2016 is the total investment value in 2016, LAT is the
        latitude of the policy holder's city, and LON is the longitude of the policy
        holder's city.

    Sample Input

    | PID | TIV_2015 | TIV_2016 | LAT | LON |
|-----|----------|----------|-----|-----|
| 1   | 10       | 5        | 10  | 10  |
| 2   | 20       | 20       | 20  | 20  |
| 3   | 10       | 30       | 20  | 20  |
| 4   | 10       | 40       | 40  | 40  |

    Sample Output

    | TIV_2016 |
|----------|
| 45.00    |

    Explanation

    The first record in the table, like the last record, meets both of the two criteria.
The TIV_2015 value '10' is as the same as the third and forth record, and its location unique.

The second record does not meet any of the two criteria. Its TIV_2015 is not like any other policyholders.

And its location is the same with the third record, which makes the third record fail, too.

So, the result is the sum of TIV_2016 of the first and last record, which is 45.
-----------------

# 401_Binary_Watch
# 401. Binary Watch

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the
        6 LEDs on the bottom represent the minutes (0-59).
    Each LED represents a zero or one, with the least significant bit on the right.
    
    For example, the above binary watch reads "3:25".

    Given a non-negative integer n which represents the number of LEDs that are currently
        on, return all possible times the watch could represent.

    Example:
    Input: n = 1Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
    

    Note:
    
        The order of output does not matter.
        The hour must not contain a leading zero, for example "01:00" is not valid, it should be
            "1:00".
        
        The minute must be consist of two digits and may contain a leading zero, for example
            "10:2" is not valid, it should be "10:02".
-----------------

# 349_Intersection_of_Two_Arrays
# 349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

    Example 1:

    Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
-----------------

# 18_4Sum
# 18. 4Sum

Given an array nums of n integers and an integer target,
        are there elements a, b, c, and d in nums
        such that a + b + c + d = target? Find all
        unique quadruplets in the array which gives the sum of target.

    Note:

    The solution set must not contain duplicate quadruplets.

    Example:

    Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
-----------------

# 1419_Minimum_Number_of_Frogs_Croaking
# 1419. Minimum Number of Frogs Croaking


-----------------

# 1368_Minimum_Cost_to_Make_at_Least_One_Valid_Path_in_a_Grid
# 1368. Minimum Cost to Make at Least One Valid Path in a Grid


-----------------

# 1255_Maximum_Score_Words_Formed_by_Letters
# 1255. Maximum Score Words Formed by Letters

Given a list of words, list of  single letters (might be
        repeating) and score of every character.

    Return the maximum score of any valid set of words formed by using the given
        letters (words[i] cannot be used two or more times).

    It is not necessary to use all characters in letters and each letter can only be
        used once. Score of letters 'a', 'b', 'c',
        ... ,'z' is given by score[0], score[1],
        ... , score[25] respectively.

     
    Example 1:

    Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.

    Example 2:

    Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
Output: 27
Explanation:
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25.

    Example 3:

    Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation:
Letter "e" can only be used once.

     
    Constraints:

    
        1 <= words.length <= 14
        1 <= words[i].length <= 15
        1 <= letters.length <= 100
        letters[i].length == 1
        score.length == 26
        0 <= score[i] <= 10
        words[i], letters[i] contains only lower case English
            letters.
-----------------

# 1274_Number_of_Ships_in_a_Rectangle
# 1274. Number of Ships in a Rectangle


-----------------

# 70_Climbing_Stairs
# 70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the
        top?

    Note: Given n will be a positive integer.

    Example 1:

    Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

    Example 2:

    Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
-----------------

# 405_Convert_a_Number_to_Hexadecimal
# 405. Convert a Number to Hexadecimal

Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s
        complement method is used.
    

    Note:
    
        All letters in hexadecimal (a-f) must be in lowercase.
        The hexadecimal string must not contain extra leading 0s. If the number is
            zero, it is represented by a single zero character '0'; otherwise, the
            first character in the hexadecimal string will not be the zero character.
        
        The given number is guaranteed to fit within the range of a 32-bit signed integer.
        You must not use any method provided by the library which converts/formats
            the number to hex directly.
        
    
    

    Example 1:
    Input:
26

Output:
"1a"

    

    Example 2:
    Input:
-1

Output:
"ffffffff"
-----------------

# 1239_Maximum_Length_of_a_Concatenated_String_with_Unique_Characters
# 1239. Maximum Length of a Concatenated String with Unique Characters

Given an array of strings arr. String s is a concatenation of a
        sub-sequence of arr which have unique characters.

    Return the maximum possible length of s.

     
    Example 1:

    Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.

    Example 2:

    Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".

    Example 3:

    Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26

     
    Constraints:

    
        1 <= arr.length <= 16
        1 <= arr[i].length <= 26
        arr[i] contains only lower case English letters.
-----------------

# 1752_Check_if_Array_Is_Sorted_and_Rotated
# 1752. Check if Array Is Sorted and Rotated


-----------------

# 1057_Campus_Bikes
# 1057. Campus Bikes

On a campus represented as a 2D grid, there are N workers and M
        bikes, with N <= M. Each worker and bike is a 2D coordinate on this grid.
    

    Our goal is to assign a bike to each worker. Among the available bikes and workers, we choose
        the (worker, bike) pair with the shortest Manhattan distance between each other, and assign
        the bike to that worker. (If there are multiple (worker, bike) pairs with the same shortest
        Manhattan distance, we choose the pair with the smallest worker index; if there are multiple
        ways to do that, we choose the pair with the smallest bike index). We repeat this process
        until there are no available workers.

    The Manhattan distance between two points p1 and p2 is Manhattan(p1,
        p2) = |p1.x - p2.x| + |p1.y - p2.y|.

    Return a vector ans of length N, where ans[i] is the
        index (0-indexed) of the bike that the i-th worker is assigned to.

     

    Example 1:

    

    Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
Output: [1,0]
Explanation: 
Worker 1 grabs Bike 0 as they are closest (without ties), and Worker 0 is assigned Bike 1. So the output is [1, 0].

    Example 2:

    

    Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
Output: [0,2,1]
Explanation: 
Worker 0 grabs Bike 0 at first. Worker 1 and Worker 2 share the same distance to Bike 2, thus Worker 1 is assigned to Bike 2, and Worker 2 will take Bike 1. So the output is [0,2,1].

     

    Note:

    
        0 <= workers[i][j], bikes[i][j] < 1000
        All worker and bike locations are distinct.
        1 <= workers.length <= bikes.length <= 1000
-----------------

# 1847_Closest_Room
# 1847. Closest Room


-----------------

# 1760_Minimum_Limit_of_Balls_in_a_Bag
# 1760. Minimum Limit of Balls in a Bag


-----------------

# 966_Vowel_Spellchecker
# 966. Vowel Spellchecker

Given a wordlist, we want to implement a spellchecker that converts a query
        word into a correct word.

    For a given query word, the spell checker handles two categories of spelling
        mistakes:

    
        Capitalization: If the query matches a word in the wordlist
            (case-insensitive), then the query word is returned with the same case
            as the case in the wordlist.

            
                Example: wordlist = ["yellow"], query = "YellOw":
                    correct = "yellow"
                Example: wordlist = ["Yellow"], query = "yellow":
                    correct = "Yellow"
                Example: wordlist = ["yellow"], query = "yellow":
                    correct = "yellow"
            
        
        Vowel Errors: If after replacing the vowels ('a', 'e', 'i',
            'o', 'u') of the query word with any vowel individually, it matches a
            word in the wordlist (case-insensitive), then the query word is
            returned with the same case as the match in the wordlist.
            
                Example: wordlist = ["YellOw"], query = "yollow":
                    correct = "YellOw"
                Example: wordlist = ["YellOw"], query = "yeellow":
                    correct = "" (no match)
                
                Example: wordlist = ["YellOw"], query = "yllw":
                    correct = "" (no match)
                
            
        
    

    In addition, the spell checker operates under the following precedence rules:

    
        When the query exactly matches a word in the wordlist (case-sensitive),
            you should return the same word back.
        
        When the query matches a word up to capitlization, you should return the first such
            match in the wordlist.
        
        When the query matches a word up to vowel errors, you should return the first such match
            in the wordlist.
        
        If the query has no matches in the wordlist, you should return the empty string.
    

    Given some queries, return a list of words answer, where
        answer[i] is the correct word for query = queries[i].
    

     

    Example 1:

    Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]

     

    Note:

    
        1 <= wordlist.length <= 5000
        1 <= queries.length <= 5000
        1 <= wordlist[i].length <= 7
        1 <= queries[i].length <= 7
        All strings in wordlist and queries consist only of english letters.
-----------------

# 741_Cherry_Pickup
# 741. Cherry Pickup

In a N x N grid representing a field of cherries, each cell is one of three
        possible integers.

     

    
        0 means the cell is empty, so you can pass through;
        1 means the cell contains a cherry, that you can pick up and pass through;
        -1 means the cell contains a thorn that blocks your way.
    

     

    Your task is to collect maximum number of cherries possible by following the rules below:

     

    
        Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through
            valid path cells (cells with value 0 or 1);
        
        After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path
            cells;
        
        When passing through a path cell containing a cherry, you pick it up and the cell
            becomes an empty cell (0);
        
        If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be
            collected.
        
    

     

     

    Example 1:

    Input: grid =
[[0, 1, -1],
 [1, 0, -1],
 [1, 1,  1]]
Output: 5
Explanation:
The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.

     

    Note:

    
        grid is an N by N 2D array, with 1 <= N
            <= 50.
        
        Each grid[i][j] is an integer in the set {-1, 0, 1}.
        It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.
-----------------

# 628_Maximum_Product_of_Three_Numbers
# 628. Maximum Product of Three Numbers

Given an integer array, find three numbers whose product is maximum and output the maximum
        product.

    Example 1:

    Input: [1,2,3]
Output: 6

     

    Example 2:

    Input: [1,2,3,4]
Output: 24

     

    Note:

    
        The length of the given array will be in range [3,104] and all elements are
            in the range [-1000, 1000].
        
        Multiplication of any three numbers in the input won't exceed the range of 32-bit
            signed integer.
-----------------

# 1416_Restore_The_Array
# 1416. Restore The Array


-----------------

# 1048_Longest_String_Chain
# 1048. Longest String Chain

Given a list of words, each word consists of English lowercase letters.

    Let's say word1 is a predecessor of word2 if and only if
        we can add exactly one letter anywhere in word1 to make it equal to
        word2.  For example, "abc" is a
        predecessor of "abac".

    A word chain is a sequence of words [word_1, word_2, ..., word_k] with
        k >= 1, where word_1 is a predecessor of
        word_2, word_2 is a predecessor of word_3, and so on.
    

    Return the longest possible length of a word chain with words chosen from the given list of
        words.

     

    Example 1:

    Input: ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: one of the longest word chain is "a","ba","bda","bdca".

     

    Note:

    
        1 <= words.length <= 1000
        1 <= words[i].length <= 16
        words[i] only consists of English lowercase letters.
-----------------

# 766_Toeplitz_Matrix
# 766. Toeplitz Matrix

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same
        element.

    Now given an M x N matrix, return True if and only if the
        matrix is Toeplitz.
         

    Example 1:

    Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

    Example 2:

    Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.

    
        Note:

    
        matrix will be a 2D array of integers.
        matrix will have a number of rows and columns in range [1, 20].
        
        matrix[i][j] will be integers in range [0, 99].
    

    
        Follow up:

    
        What if the matrix is stored on disk, and the memory is limited such that you can only
            load at most one row of the matrix into the memory at once?
        
        What if the matrix is so large that you can only load up a partial row into the memory
            at once?
-----------------

# 504_Base_7
# 504. Base 7

Given an integer, return its base 7 string representation.

    Example 1:
    Input: 100
Output: "202"

    

    Example 2:
    Input: -7
Output: "-10"

    

    Note:
        The input will be in range of [-1e7, 1e7].
-----------------

# 769_Max_Chunks_To_Make_Sorted
# 769. Max Chunks To Make Sorted

Given an array arr that is a permutation of [0, 1, ..., arr.length -
        1], we split the array into some number of "chunks" (partitions), and
        individually sort each chunk.  After concatenating them, the result equals the
        sorted array.

    What is the most number of chunks we could have made?

    Example 1:

    Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.

    Example 2:

    Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.

    Note:

    
        arr will have length in range [1, 10].
        arr[i] will be a permutation of [0, 1, ..., arr.length - 1].
-----------------

# 946_Validate_Stack_Sequences
# 946. Validate Stack Sequences

Given two sequences pushed and popped with distinct
        values, return true if and only if this could have been the
        result of a sequence of push and pop operations on an initially empty stack.
-----------------

# 1832_Check_if_the_Sentence_Is_Pangram
# 1832. Check if the Sentence Is Pangram


-----------------

# 996_Number_of_Squareful_Arrays
# 996. Number of Squareful Arrays

Given an array A of non-negative integers, the array is squareful if
        for every pair of adjacent elements, their sum is a perfect square.

    Return the number of permutations of A that are squareful.  Two permutations
        A1 and A2 differ if and only if there is some index i
        such that A1[i] != A2[i].

     

    Example 1:

    Input: [1,17,8]
Output: 2
Explanation: 
[1,8,17] and [17,8,1] are the valid permutations.

    Example 2:

    Input: [2,2,2]
Output: 1

     

    Note:

    
        1 <= A.length <= 12
        0 <= A[i] <= 1e9
-----------------

# 1100_Find_K-Length_Substrings_With_No_Repeated_Characters
# 1100. Find K-Length Substrings With No Repeated Characters

Given a string S, return the number of substrings of length K with
        no repeated characters.

     

    Example 1:

    Input: S = "havefunonleetcode", K = 5
Output: 6
Explanation: 
There are 6 substrings they are : 'havef','avefu','vefun','efuno','etcod','tcode'.

    Example 2:

    Input: S = "home", K = 5
Output: 0
Explanation: 
Notice K can be larger than the length of S. In this case is not possible to find any substring.

     

    Note:

    
        1 <= S.length <= 10^4
        All characters of S are lowercase English letters.
        1 <= K <= 10^4
-----------------

# 618_Students_Report_By_Geography
# 618. Students Report By Geography

A U.S graduate school has students from Asia, Europe and America. The students' location
    information are stored in table student as below.
     

    | name   | continent |
|--------|-----------|
| Jack   | America   |
| Pascal | Europe    |
| Xi     | Asia      |
| Jane   | America   |

     
     Pivot the continent column in this
    table so that each name is sorted alphabetically and displayed underneath its corresponding
    continent. The output headers should be America, Asia and Europe respectively. It is guaranteed
    that the student number from America is no less than either Asia or Europe.

     
    For the sample input, the output is:

     

    | America | Asia | Europe |
|---------|------|--------|
| Jack    | Xi   | Pascal |
| Jane    |      |        |

     
    Follow-up: If it is unknown which continent has the most students, can you write a query
    to generate the student report?
-----------------

# 486_Predict_the_Winner
# 486. Predict the Winner

Given an array of scores that are non-negative integers. Player 1 picks one of the numbers
        from either end of the array followed by the player 2 and then player 1 and so on. Each time
        a player picks a number, that number will not be available for the next player. This
        continues until all the scores have been chosen. The player with the maximum score
        wins. 

    Given an array of scores, predict whether player 1 is the winner. You can assume each player
        plays to maximize his score. 

    Example 1:
    Input: [1, 5, 2]
Output: False
Explanation: Initially, player 1 can choose between 1 and 2. If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. Hence, player 1 will never be the winner and you need to return False.

    

    Example 2:
    Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

    

    Note:
    
        1 <= length of the array <= 20.
        Any scores in the given array are non-negative integers and will not exceed
            10,000,000.
        
        If the scores of both players are equal, then player 1 is still the winner.
-----------------

# 1475_Final_Prices_With_a_Special_Discount_in_a_Shop
# 1475. Final Prices With a Special Discount in a Shop


-----------------

# 1834_Single-Threaded_CPU
# 1834. Single-Threaded CPU


-----------------

# 1030_Matrix_Cells_in_Distance_Order
# 1030. Matrix Cells in Distance Order

We are given a matrix with R rows and C columns has cells with
        integer coordinates (r, c), where 0 <= r < R and 0
            <= c < C.

    Additionally, we are given a cell in that matrix with coordinates (r0, c0).
    

    Return the coordinates of all cells in the matrix, sorted by their distance from (r0,
        c0) from smallest distance to largest distance.  Here, the distance
        between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1
            - r2| + |c1 - c2|.  (You may return the answer in any order that satisfies
        this condition.)
-----------------

# 9_Palindrome_Number
# 9. Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when
        it reads the same backward as forward.

    Example 1:

    Input: 121
Output: true

    Example 2:

    Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

    Example 3:

    Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

    Follow up:

    Coud you solve it without converting the integer to a string?
-----------------

# 93_Restore_IP_Addresses
# 93. Restore IP Addresses

Given a string containing only digits, restore it by returning all possible valid IP address
        combinations.

    Example:

    Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
-----------------

# 730_Count_Different_Palindromic_Subsequences
# 730. Count Different Palindromic Subsequences

Given a string S, find the number of different non-empty palindromic subsequences in S, and
        return that number modulo 10^9 + 7.
    
    
        A subsequence of a string S is obtained by deleting 0 or more characters from S.
    
    
        A sequence is palindromic if it is equal to the sequence reversed.
    
    
        Two sequences A_1, A_2, ... and B_1, B_2, ... are different if
        there is some i for which A_i != B_i.
    

    Example 1:
    Input:
S = 'bccb'
Output: 6
Explanation:
The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.

    

    Example 2:
    Input:
S = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
Output: 104860361
Explanation:
There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 10^9 + 7.

    

    Note:
    The length of S will be in the range [1, 1000].
    Each character S[i] will be in the set {'a', 'b', 'c', 'd'}.
-----------------

# 938_Range_Sum_of_BST
# 938. Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all
        nodes with value between L and R (inclusive).

    The binary search tree is guaranteed to have unique values.
-----------------

# 381_Insert_Delete_GetRandom_O(1)_-_Duplicates_allowed
# 381. Insert Delete GetRandom O(1) - Duplicates allowed

Design a data structure that supports all following operations in average O(1)
        time.
    Note: Duplicate elements are allowed.
    
    
        insert(val): Inserts an item val to the collection.
        remove(val): Removes an item val from the collection if present.
        getRandom: Returns a random element from current collection of elements.
            The probability of each element being returned is linearly related to the number
            of same value the collection contains.
        
    
    

    Example:
    // Init an empty collection.
RandomizedCollection collection = new RandomizedCollection();

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
collection.insert(1);

// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
collection.insert(1);

// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
collection.insert(2);

// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
collection.getRandom();

// Removes 1 from the collection, returns true. Collection now contains [1,2].
collection.remove(1);

// getRandom should return 1 and 2 both equally likely.
collection.getRandom();
-----------------

# 630_Course_Schedule_III
# 630. Course Schedule III

There are n different online courses numbered from 1 to
        n. Each course has some duration(course length) t and closed on
        dth day. A course should be taken continuously for
        t days and must be finished before or on the dth day.
        You will start at the 1st day.

    Given n online courses represented by pairs (t,d), your task is to
        find the maximal number of courses that can be taken.

    Example:

    Input: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
Output: 3
Explanation:
There're totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.

     

    Note:

    
        The integer 1 <= d, t, n <= 10,000.
        You can't take two courses simultaneously.
-----------------

# 1156_Swap_For_Longest_Repeated_Character_Substring
# 1156. Swap For Longest Repeated Character Substring

Given a string text, we are allowed to swap two of the characters in the string.
        Find the length of the longest substring with repeated characters.

     
    Example 1:

    Input: text = "ababa"
Output: 3
Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa", which its length is 3.

    Example 2:

    Input: text = "aaabaaa"
Output: 6
Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get longest repeated character substring "aaaaaa", which its length is 6.

    Example 3:

    Input: text = "aaabbaaa"
Output: 4

    Example 4:

    Input: text = "aaaaa"
Output: 5
Explanation: No need to swap, longest repeated character substring is "aaaaa", length is 5.

    Example 5:

    Input: text = "abcdef"
Output: 1

     
    Constraints:

    
        1 <= text.length <= 20000
        text consist of lowercase English characters only.
-----------------

# 686_Repeated_String_Match
# 686. Repeated String Match

Given two strings A and B, find the minimum number of times A has to be repeated such that B
        is a substring of it. If no such solution, return -1.

    For example, with A = "abcd" and B = "cdabcdab".

    Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring
        of it; and B is not a substring of A repeated two times ("abcdabcd").

    Note:
        The length of A and B will be between 1 and 10000.
-----------------

# 161_One_Edit_Distance
# 161. One Edit Distance

Given two strings s and t, determine if they are both one
        edit distance apart.

    Note: 

    There are 3 possiblities to satisify one edit distance apart:

    
        Insert a character into s to
            get t
        Delete a character from s to
            get t
        Replace a character of s to
            get t
    

    Example 1:

    Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.

    Example 2:

    Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.

    Example 3:

    Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.
-----------------

# 460_LFU_Cache
# 460. LFU Cache

Design and implement a data structure for Least
        Frequently Used (LFU) cache. It should support the following operations:
        get and put.

    get(key) - Get the value (will always be positive) of the key if the key exists
        in the cache, otherwise return -1.
        put(key, value) - Set or insert the value if the key is not already present.
        When the cache reaches its capacity, it should invalidate the least frequently used item
        before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two
        or more keys that have the same frequency), the least recently used key would be
        evicted.

    Note that the number of times an item is used is the number of calls to
        the get and put functions for that item since
        it was inserted. This number is set to zero when the item is removed.

     

    Follow up:
        Could you do both operations in O(1) time complexity?

     

    Example:

    LFUCache cache = new LFUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
-----------------

# 1323_1323._Maximum_69_Number
# 1323. 1323. Maximum 69 Number


-----------------

# 1103_Distribute_Candies_to_People
# 1103. Distribute Candies to People

We distribute some number of candies, to a row of n = num_people people
        in the following way:

    We then give 1 candy to the first person, 2 candies to the second person, and so on until we
        give n candies to the last person.

    Then, we go back to the start of the row, giving n + 1 candies to the first
        person, n + 2 candies to the second person, and so on until we give 2
            * n candies to the last person.

    This process repeats (with us giving one more candy each time, and moving to the start of the
        row after we reach the end) until we run out of candies.  The last person will receive
        all of our remaining candies (not necessarily one more than the previous gift).

    Return an array (of length num_people and sum candies) that
        represents the final distribution of candies.

     
    Example 1:

    Input: candies = 7, num_people = 4
Output: [1,2,3,1]
Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].

    Example 2:

    Input: candies = 10, num_people = 3
Output: [5,2,3]
Explanation: 
On the first turn, ans[0] += 1, and the array is [1,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0].
On the third turn, ans[2] += 3, and the array is [1,2,3].
On the fourth turn, ans[0] += 4, and the final array is [5,2,3].

     
    Constraints:

    
        1 <= candies <= 10^9
        1 <= num_people <= 1000
-----------------

# 947_Most_Stones_Removed_with_Same_Row_or_Column
# 947. Most Stones Removed with Same Row or Column

On a 2D plane, we place stones at some integer coordinate points.  Each coordinate point
        may have at most one stone.

    Now, a move consists of removing a stone that shares a column or row with
        another stone on the grid.

    What is the largest possible number of moves we can make?
-----------------

# 1534_Count_Good_Triplets
# 1534. Count Good Triplets


-----------------

# 95_Unique_Binary_Search_Trees_II
# 95. Unique Binary Search Trees II

Given an integer n, generate all structurally unique BST's
        (binary search trees) that store values 1 ... n.

    Example:

    Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
-----------------

# 1479_Sales_by_Day_of_the_Week
# 1479. Sales by Day of the Week


-----------------

# 215_Kth_Largest_Element_in_an_Array
# 215. Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth
        largest element in the sorted order, not the kth distinct element.

    Example 1:

    Input: [3,2,1,5,6,4] and k = 2
Output: 5

    Example 2:

    Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

    Note: 
        You may assume k is always valid, 1 ≤ k ≤ array's length.
-----------------

# 1044_Longest_Duplicate_Substring
# 1044. Longest Duplicate Substring

Given a string S, consider all duplicated substrings: (contiguous)
        substrings of S that occur 2 or more times.  (The occurrences may overlap.)

    Return any duplicated substring that has the longest possible length. 
        (If S does not have a duplicated substring, the answer is
        "".)

     

    Example 1:

    Input: "banana"
Output: "ana"

    Example 2:

    Input: "abcd"
Output: ""

     

    Note:

    
        2 <= S.length <= 10^5
        S consists of lowercase English letters.
-----------------

# 386_Lexicographical_Numbers
# 386. Lexicographical Numbers

Given an integer n, return 1 - n in lexicographical order.

    For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

    Please optimize your algorithm to use less time and space. The input size may be as large as
        5,000,000.
-----------------

# 1188_Design_Bounded_Blocking_Queue
# 1188. Design Bounded Blocking Queue

Implement a thread safe bounded blocking queue that has the
        following methods:

    
        BoundedBlockingQueue(int capacity) The constructor initializes the queue
            with a maximum capacity.
        
        void enqueue(int element) Adds an element to the front of the
            queue. If the queue is full, the calling thread is blocked until the queue is no longer
            full.
        
        int dequeue() Returns the element at the rear of the queue and removes it.
            If the queue is empty, the calling thread is blocked until the queue is no longer empty.
        
        int size() Returns the number of elements currently in the queue.
    

    Your implementation will be tested using multiple threads at the same time. Each thread will
        either be a producer thread that only makes calls to the enqueue method
        or a consumer thread that only makes calls to the dequeue method. The size method
        will be called after every test case.

    Please do not use built-in implementations of bounded blocking queue as this will not be
        accepted in an interview.

     

    Example 1:

    Input:
1
1
["BoundedBlockingQueue","enqueue","dequeue","dequeue","enqueue","enqueue","enqueue","enqueue","dequeue"]
[[2],[1],[],[],[0],[2],[3],[4],[]]

Output:
[1,0,2,2]

Explanation:
Number of producer threads = 1
Number of consumer threads = 1

BoundedBlockingQueue queue = new BoundedBlockingQueue(2);   // initialize the queue with capacity = 2.

queue.enqueue(1);   // The producer thread enqueues 1 to the queue.
queue.dequeue();    // The consumer thread calls dequeue and returns 1 from the queue.
queue.dequeue();    // Since the queue is empty, the consumer thread is blocked.
queue.enqueue(0);   // The producer thread enqueues 0 to the queue. The consumer thread is unblocked and returns 0 from the queue.
queue.enqueue(2);   // The producer thread enqueues 2 to the queue.
queue.enqueue(3);   // The producer thread enqueues 3 to the queue.
queue.enqueue(4);   // The producer thread is blocked because the queue's capacity (2) is reached.
queue.dequeue();    // The consumer thread returns 2 from the queue. The producer thread is unblocked and enqueues 4 to the queue.
queue.size();       // 2 elements remaining in the queue. size() is always called at the end of each test case.

     

    Example 2:

    Input:
3
4
["BoundedBlockingQueue","enqueue","enqueue","enqueue","dequeue","dequeue","dequeue","enqueue"]
[[3],[1],[0],[2],[],[],[],[3]]

Output:
[1,0,2,1]

Explanation:
Number of producer threads = 3
Number of consumer threads = 4

BoundedBlockingQueue queue = new BoundedBlockingQueue(3);   // initialize the queue with capacity = 3.

queue.enqueue(1);   // Producer thread P1 enqueues 1 to the queue.
queue.enqueue(0);   // Producer thread P2 enqueues 0 to the queue.
queue.enqueue(2);   // Producer thread P3 enqueues 2 to the queue.
queue.dequeue();    // Consumer thread C1 calls dequeue.
queue.dequeue();    // Consumer thread C2 calls dequeue.
queue.dequeue();    // Consumer thread C3 calls dequeue.
queue.enqueue(3);   // One of the producer threads enqueues 3 to the queue.
queue.size();       // 1 element remaining in the queue.

Since the number of threads for producer/consumer is greater than 1, we do not know how the threads will be scheduled in the operating system, even though the input seems to imply the ordering. Therefore, any of the output [1,0,2] or [1,2,0] or [0,1,2] or [0,2,1] or [2,0,1] or [2,1,0] will be accepted.
-----------------

# 1192_Critical_Connections_in_a_Network
# 1192. Critical Connections in a Network

There are n servers numbered from 0 to n-1
        connected by undirected server-to-server connections forming a network
        where connections[i] = [a, b] represents a connection between servers
        a and b. Any server can reach any other server directly or
        indirectly through the network.

    A critical connection is a connection that, if removed, will make some server
        unable to reach some other server.

    Return all critical connections in the network in any order.

     
    Example 1:

    

    Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.

     
    Constraints:

    
        1 <= n <= 10^5
        n-1 <= connections.length <= 10^5
        connections[i][0] != connections[i][1]
        There are no repeated connections.
-----------------

# 1568_Minimum_Number_of_Days_to_Disconnect_Island
# 1568. Minimum Number of Days to Disconnect Island


-----------------

# 1806_Minimum_Number_of_Operations_to_Reinitialize_a_Permutation
# 1806. Minimum Number of Operations to Reinitialize a Permutation


-----------------

# 1003_Check_If_Word_Is_Valid_After_Substitutions
# 1003. Check If Word Is Valid After Substitutions

We are given that the string "abc" is valid.

    From any valid string V, we may split V into two pieces X
        and Y such that X + Y (X concatenated with
        Y) is equal to V.  (X or Y may be
        empty.)  Then, X + "abc" + Y is also valid.

    If for example S = "abc", then examples of valid strings are: "abc",
        "aabcbc", "abcabc", "abcabcababcc".  Examples of
        invalid strings are: "abccba", "ab",
        "cababc", "bac".

    Return true if and only if the given string S is valid.
    

     

    Example 1:

    Input: "aabcbc"
Output: true
Explanation: 
We start with the valid string "abc".
Then we can insert another "abc" between "a" and "bc", resulting in "a" + "abc" + "bc" which is "aabcbc".
-----------------

# 644_Maximum_Average_Subarray_II
# 644. Maximum Average Subarray II

Given an array consisting of n integers, find the contiguous subarray whose length
        is greater than or equal to k that has the maximum average value. And you
        need to output the maximum average value.
    

    Example 1:
    Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation:
when length is 5, maximum average value is 10.8,
when length is 6, maximum average value is 9.16667.
Thus return 12.75.

    

    Note:
    
        1 <= k <= n <= 10,000.
        Elements of the given array will be in range [-10,000, 10,000].
        The answer with the calculation error less than 10-5 will be accepted.
-----------------

# 1592_Rearrange_Spaces_Between_Words
# 1592. Rearrange Spaces Between Words


-----------------

# 446_Arithmetic_Slices_II_-_Subsequence
# 446. Arithmetic Slices II - Subsequence

A sequence of numbers is called arithmetic if it consists of at least three elements and if
        the difference between any two consecutive elements is the same.

    For example, these are arithmetic sequences:

    1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

    The following sequence is not arithmetic.

    1, 1, 2, 5, 7
     

    A zero-indexed array A consisting of N numbers is given. A subsequence slice of that
        array is any sequence of integers (P0, P1, ..., Pk) such
        that 0 ≤ P0 < P1 < ... < Pk < N.

    A subsequence slice (P0, P1, ..., Pk) of array A is
        called arithmetic if the sequence A[P0], A[P1], ..., A[Pk-1],
        A[Pk] is arithmetic. In particular, this means that k ≥ 2.

    The function should return the number of arithmetic subsequence slices in the array A.

    The input contains N integers. Every integer is in the range of -231 and
        231-1 and 0 ≤ N ≤ 1000. The output is guaranteed to be less than
        231-1.
     

    Example:

    Input: [2, 4, 6, 8, 10]

Output: 7

Explanation:
All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
-----------------

# 1729_Find_Followers_Count
# 1729. Find Followers Count


-----------------

# 847_Shortest_Path_Visiting_All_Nodes
# 847. Shortest Path Visiting All Nodes

An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is
        given as graph.

    graph.length = N, and j != i is in the list graph[i] exactly
        once, if and only if nodes i and j are connected.

    Return the length of the shortest path that visits every node. You may start and stop at any
        node, you may revisit nodes multiple times, and you may reuse edges.

     

    
    

    Example 1:

    Input: [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]

    Example 2:

    Input: [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]

     

    Note:

    
        1 <= graph.length <= 12
        0 <= graph[i].length < graph.length
-----------------

# 1811_Find_Interview_Candidates
# 1811. Find Interview Candidates


-----------------

# 1075_Project_Employees_I
# 1075. Project Employees I

Table: Project

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| project_id  | int     |
| employee_id | int     |
+-------------+---------+
(project_id, employee_id) is the primary key of this table.
employee_id is a foreign key to Employee table.

    Table: Employee

    +------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| employee_id      | int     |
| name             | varchar |
| experience_years | int     |
+------------------+---------+
employee_id is the primary key of this table.

     

    Write an SQL query that reports the average experience years of all the
        employees for each project, rounded to 2 digits.

    The query result format is in the following example:

    Project table:
+-------------+-------------+
| project_id  | employee_id |
+-------------+-------------+
| 1           | 1           |
| 1           | 2           |
| 1           | 3           |
| 2           | 1           |
| 2           | 4           |
+-------------+-------------+

Employee table:
+-------------+--------+------------------+
| employee_id | name   | experience_years |
+-------------+--------+------------------+
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 1                |
| 4           | Doe    | 2                |
+-------------+--------+------------------+

Result table:
+-------------+---------------+
| project_id  | average_years |
+-------------+---------------+
| 1           | 2.00          |
| 2           | 2.50          |
+-------------+---------------+
The average experience years for the first project is (3 + 2 + 1) / 3 = 2.00 and for the second project is (3 + 2) / 2 = 2.50
-----------------

# 1761_Minimum_Degree_of_a_Connected_Trio_in_a_Graph
# 1761. Minimum Degree of a Connected Trio in a Graph


-----------------

# 1296_Divide_Array_in_Sets_of_K_Consecutive_Numbers
# 1296. Divide Array in Sets of K Consecutive Numbers


-----------------

# 1366_Rank_Teams_by_Votes
# 1366. Rank Teams by Votes


-----------------

# 484_Find_Permutation
# 484. Find Permutation

By now, you are given a secret signature consisting of character 'D' and 'I'. 'D'
        represents a decreasing relationship between two numbers, 'I' represents an increasing
        relationship between two numbers. And our secret signature was constructed by a
        special integer array, which contains uniquely all the different number from 1 to n (n is
        the length of the secret signature plus 1). For example, the secret signature "DI" can be
        constructed by array [2,1,3] or [3,1,2], but won't be constructed by array [3,2,4] or
        [2,1,3,4], which are both illegal constructing special string that can't represent the "DI"
        secret signature.
    

    
        On the other hand, now your job is to find the lexicographically smallest permutation of [1,
        2, ... n] could refer to the given secret signature in the input.
    

    Example 1:
    Input: "I"
Output: [1,2]
Explanation: [1,2] is the only legal initial spectial string can construct secret signature "I", where the number 1 and 2 construct an increasing relationship.

    

    Example 2:
    Input: "DI"
Output: [2,1,3]
Explanation: Both [2,1,3] and [3,1,2] can construct the secret signature "DI", but since we want to find the one with the smallest lexicographical permutation, you need to output [2,1,3]

    

    Note:
    The input string will only contain the character 'D' and 'I'.
    The length of input string is a positive integer and will not exceed 10,000
-----------------

# 593_Valid_Square
# 593. Valid Square

Given the coordinates of four points in 2D space, return whether the four points could
        construct a square.

    The coordinate (x,y) of a point is represented by an integer array with two integers.

    Example:

    Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True

     

    Note:

    
        All the input integers are in the range [-10000, 10000].
        A valid square has four equal sides with positive length and four equal angles
            (90-degree angles).
        
        Input points have no order.
-----------------

# 539_Minimum_Time_Difference
# 539. Minimum Time Difference

Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum
    minutes difference between any two time points in the list.

    Example 1:
    Input: ["23:59","00:00"]
Output: 1

    

    Note:
    
        The number of time points in the given list is at least 2 and won't exceed 20000.
        The input time is legal and ranges from 00:00 to 23:59.
-----------------

# 1607_Sellers_With_No_Sales
# 1607. Sellers With No Sales


-----------------

# 816_Ambiguous_Coordinates
# 816. Ambiguous Coordinates

We had some 2-dimensional coordinates, like "(1, 3)" or "(2,
        0.5)".  Then, we removed all commas, decimal points, and spaces, and
        ended up with the string S.  Return a list of strings representing all
        possibilities for what our original coordinates could have been.

    Our original representation never had extraneous zeroes, so we never started with numbers
        like "00", "0.0", "0.00", "1.0", "001",
        "00.01", or any other number that can be represented with less digits. 
        Also, a decimal point within a number never occurs without at least one digit occuring
        before it, so we never started with numbers like ".1".

    The final answer list can be returned in any order.  Also note that all coordinates in
        the final answer have exactly one space between them (occurring after the comma.)

    Example 1:
Input: "(123)"
Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]

    Example 2:
Input: "(00011)"
Output:  ["(0.001, 1)", "(0, 0.011)"]
Explanation:
0.0, 00, 0001 or 00.01 are not allowed.

    Example 3:
Input: "(0123)"
Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]

    Example 4:
Input: "(100)"
Output: [(10, 0)]
Explanation:
1.0 is not allowed.

     

    Note: 

    
        4 <= S.length <= 12.
        S[0] = "(", S[S.length - 1] = ")", and the
            other elements in S are digits.
-----------------

# 43_Multiply_Strings
# 43. Multiply Strings

Given two non-negative integers num1 and num2 represented as
        strings, return the product of num1 and num2, also represented as
        a string.

    Example 1:

    Input: num1 = "2", num2 = "3"
Output: "6"

    Example 2:

    Input: num1 = "123", num2 = "456"
Output: "56088"

    Note:

    
        The length of both num1 and num2 is < 110.
        Both num1 and num2 contain only digits 0-9.
        
        Both num1 and num2 do not contain any leading zero,
            except the number 0 itself.
        
        You must not use any built-in BigInteger library or convert the
            inputs to integer directly.
-----------------

# 554_Brick_Wall
# 554. Brick Wall

There is a brick wall in front of you. The wall is rectangular and has several rows of
        bricks. The bricks have the same height but different width. You want to draw a vertical
        line from the top to the bottom and cross the least bricks.

    The brick wall is represented by a list of rows. Each row is a list of integers representing
        the width of each brick in this row from left to right.

    If your line go through the edge of a brick, then the brick is not considered as crossed. You
        need to find out how to draw the line to cross the least bricks and return the number of
        crossed bricks.

    You cannot draw a line just along one of the two vertical edges of the wall, in which case
        the line will obviously cross no bricks. 

     

    Example:

    Input: [[1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]]

Output: 2

Explanation:

     

    Note:

    
        The width sum of bricks in different rows are the same and won't exceed INT_MAX.
        
        The number of bricks in each row is in range [1,10,000]. The height of wall is in range
            [1,10,000]. Total number of bricks of the wall won't exceed 20,000.
-----------------

# 1114_Print_in_Order
# 1114. Print in Order

Suppose we have a class:

    public class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}

    The same instance of Foo will be passed to three different threads. Thread A
        will call first(), thread B will call second(), and thread C will
        call third(). Design a mechanism and modify the program to ensure that second() is
        executed after first(), and third() is executed after second().
    

     

    Example 1:

    Input: [1,2,3]
Output: "firstsecondthird"
Explanation: There are three threads being fired asynchronously. The input [1,2,3] means thread A calls first(), thread B calls second(), and thread C calls third(). "firstsecondthird" is the correct output.

    Example 2:

    Input: [1,3,2]
Output: "firstsecondthird"
Explanation: The input [1,3,2] means thread A calls first(), thread B calls third(), and thread C calls second(). "firstsecondthird" is the correct output.

     

    Note:

    We do not know how the threads will be scheduled in the operating system, even though the
        numbers in the input seems to imply the ordering. The input format you see is mainly to
        ensure our tests' comprehensiveness.
-----------------

# 493_Reverse_Pairs
# 493. Reverse Pairs

Given an array nums, we call (i, j) an important reverse
        pair if i < j and nums[i] > 2*nums[j].

    You need to return the number of important reverse pairs in the given array.

    Example1:
    Input: [1,3,2,3,1]
Output: 2

    

    Example2:
    Input: [2,4,3,5,1]
Output: 3

    

    Note:
    
        The length of the given array will not exceed 50,000.
        All the numbers in the input array are in the range of 32-bit integer.
-----------------

# 1275_Find_Winner_on_a_Tic_Tac_Toe_Game
# 1275. Find Winner on a Tic Tac Toe Game


-----------------

# 1110_Delete_Nodes_And_Return_Forest
# 1110. Delete Nodes And Return Forest

Given the root of a binary tree, each node in the tree has a distinct
        value.

    After deleting all nodes with a value in to_delete, we are left with a
        forest (a disjoint union of trees).

    Return the roots of the trees in the remaining forest.  You may return the result in any
        order.

     
    Example 1:

    

    Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

     
    Constraints:

    
        The number of nodes in the given tree is at most 1000.
        Each node has a distinct value between 1 and 1000.
        to_delete.length <= 1000
        to_delete contains distinct values between 1 and
            1000.
-----------------

# 1776_Car_Fleet_II
# 1776. Car Fleet II


-----------------

# 97_Interleaving_String
# 97. Interleaving String

Given s1, s2, s3, find whether s3 is formed by the
        interleaving of s1 and s2.

    Example 1:

    Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

    Example 2:

    Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
-----------------

# 124_Binary_Tree_Maximum_Path_Sum
# 124. Binary Tree Maximum Path Sum

Given a non-empty binary tree, find the maximum path sum.

    For this problem, a path is defined as any sequence of nodes from some starting node to any
        node in the tree along the parent-child connections. The path must contain at least
            one node and does not need to go through the root.

    Example 1:

    Input: [1,2,3]

       1
      / \
     2   3

Output: 6

    Example 2:

    Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
-----------------

# 312_Burst_Balloons
# 312. Burst Balloons

Given n balloons, indexed from 0 to n-1. Each balloon
        is painted with a number on it represented by array nums. You are asked to
        burst all the balloons. If the you burst balloon i you will get nums[left]
            * nums[i] * nums[right] coins. Here left and right are
        adjacent indices of i. After the burst, the left and
        right then becomes adjacent.

    Find the maximum coins you can collect by bursting the balloons wisely.

    Note:

    
        You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can
            not burst them.
        
        0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
    

    Example:

    Input: [3,1,5,8]
Output: 167
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
-----------------

# 1741_Find_Total_Time_Spent_by_Each_Employee
# 1741. Find Total Time Spent by Each Employee


-----------------

# 1633_Percentage_of_Users_Attended_a_Contest
# 1633. Percentage of Users Attended a Contest


-----------------

# 1643_Kth_Smallest_Instructions
# 1643. Kth Smallest Instructions


-----------------

# 1358_Number_of_Substrings_Containing_All_Three_Characters
# 1358. Number of Substrings Containing All Three Characters


-----------------

# 961_N-Repeated_Element_in_Size_2N_Array
# 961. N-Repeated Element in Size 2N Array

In a array A of size 2N, there are N+1 unique
        elements, and exactly one of these elements is repeated N times.

    Return the element repeated N times.
-----------------

# 1640_Check_Array_Formation_Through_Concatenation
# 1640. Check Array Formation Through Concatenation


-----------------

# 304_Range_Sum_Query_2D_-_Immutable
# 304. Range Sum Query 2D - Immutable

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by
        its upper left corner (row1, col1) and lower right corner (row2,
        col2).

    
        
        The above rectangle (with the red border) is defined by (row1, col1) = (2, 1)
            and (row2, col2) = (4, 3), which contains sum = 8.
        
    

    Example:
    Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12

    

    Note:
    
        You may assume that the matrix does not change.
        There are many calls to sumRegion function.
        You may assume that row1 ≤ row2 and col1 ≤ col2.
-----------------

# 871_Minimum_Number_of_Refueling_Stops
# 871. Minimum Number of Refueling Stops

A car travels from a starting position to a destination which is target miles
        east of the starting position.

    Along the way, there are gas stations.  Each station[i] represents a
        gas station that is station[i][0] miles east of the starting position, and has
        station[i][1] liters of gas.

    The car starts with an infinite tank of gas, which initially has startFuel liters
        of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.

    When the car reaches a gas station, it may stop and refuel, transferring all the gas
        from the station into the car.

    What is the least number of refueling stops the car must make in order to reach its
        destination?  If it cannot reach the destination, return -1.

    Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there. 
        If the car reaches the destination with 0 fuel left, it is still considered to have
        arrived.
-----------------

# 1334_Find_the_City_With_the_Smallest_Number_of_Neighbors_at_a_Threshold_Distance
# 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance


-----------------

# 956_Tallest_Billboard
# 956. Tallest Billboard

You are installing a billboard and want it to have the largest height.  The billboard
        will have two steel supports, one on each side.  Each steel support must be an equal
        height.

    You have a collection of rods which can be welded together.  For example,
        if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of
        length 6.

    Return the largest possible height of your billboard installation.  If you cannot
        support the billboard, return 0.

     

    Example 1:

    Input: [1,2,3,6]
Output: 6
Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
-----------------

# 1271_Hexspeak
# 1271. Hexspeak


-----------------

# 792_Number_of_Matching_Subsequences
# 792. Number of Matching Subsequences

Given string S and a dictionary of words words, find the
        number of words[i] that is a subsequence of S.

    Example :
Input:
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".

    Note:

    
        All words in words and S will only consists of lowercase
            letters.
        
        The length of S will be in the range of [1, 50000].
        The length of words will be in the range of [1, 5000].
        
        The length of words[i] will be in the range of [1, 50].
-----------------

# 88_Merge_Sorted_Array
# 88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into
        nums1 as one sorted array.

    Note:

    
        The number of elements initialized in nums1 and nums2 are m
            and n respectively.
        
        You may assume that nums1 has enough space (size that is greater or equal to
            m + n) to hold additional elements from nums2.
        
    

    Example:

    Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
-----------------

# 1095_Find_in_Mountain_Array
# 1095. Find in Mountain Array

(This problem is an interactive problem.)

    You may recall that an array A is a mountain array if and only if:
    

    
        A.length >= 3
        There exists some i with 0 < i < A.length -
            1 such that:
            
                A[0] < A[1] < ... A[i-1] < A[i]
                A[i] > A[i+1] > ... > A[A.length - 1]
            
        
    

    Given a mountain array mountainArr, return the minimum index
        such that mountainArr.get(index) == target.  If such an index doesn't
        exist, return -1.

    You can't access the mountain array directly.  You may only access
        the array using a MountainArray interface:

    
        MountainArray.get(k) returns the element of the array at index
            k (0-indexed).
        
        MountainArray.length() returns the length of the array.
    

    Submissions making more than 100 calls to MountainArray.get will
        be judged Wrong Answer.  Also, any solutions that attempt to circumvent the
        judge will result in disqualification.

    
    

     
    Example 1:

    Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.

    Example 2:

    Input: array = [0,1,2,4,2,1], target = 3
Output: -1
Explanation: 3 does not exist in the array, so we return -1.

     
    Constraints:

    
        3 <= mountain_arr.length() <= 10000
        0 <= target <= 10^9
        0 <= mountain_arr.get(index) <= 10^9
-----------------

# 69_Sqrt(x)
# 69. Sqrt(x)

Implement int sqrt(int x).

    Compute and return the square root of x, where x is guaranteed to
        be a non-negative integer.

    Since the return type is an integer, the decimal digits are truncated and only the
        integer part of the result is returned.

    Example 1:

    Input: 4
Output: 2

    Example 2:

    Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
-----------------

# 832_Flipping_an_Image
# 832. Flipping an Image

Given a binary matrix A, we want to flip the image horizontally, then invert it,
        and return the resulting image.

    To flip an image horizontally means that each row of the image is reversed.  For
        example, flipping [1, 1, 0] horizontally results in [0, 1,
            1].

    To invert an image means that each 0 is replaced by 1, and
        each 1 is replaced by 0. For example, inverting [0,
            1, 1] results in [1, 0, 0].

    Example 1:

    Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

    Example 2:

    Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

    Notes:

    
        1 <= A.length = A[0].length <= 20
        0 <= A[i][j] <= 1
-----------------

# 478_Generate_Random_Point_in_a_Circle
# 478. Generate Random Point in a Circle

Given the radius and x-y positions of the center of a circle, write a function randPoint which generates
        a uniform random point in the circle.

    Note:

    
        input and output values are in floating-point.
        
        radius and x-y position of the center of the circle is passed into the class
            constructor.
        
        a point on the circumference of the circle is considered to be in the circle.
        randPoint returns a size 2 array containing x-position and
            y-position of the random point, in that order.
-----------------

# 1261_Find_Elements_in_a_Contaminated_Binary_Tree
# 1261. Find Elements in a Contaminated Binary Tree


-----------------

# 606_Construct_String_from_Binary_Tree
# 606. Construct String from Binary Tree

You need to construct a string consists of parenthesis and integers from a binary tree with
        the preorder traversing way.

    The null node needs to be represented by empty parenthesis pair "()". And you need to omit
        all the empty parenthesis pairs that don't affect the one-to-one mapping relationship
        between the string and the original binary tree.

    Example 1:
    Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"
Explanation: Originallay it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)".

    

    Example 2:
    Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
-----------------

# 1343_Number_of_Sub-arrays_of_Size_K_and_Average_Greater_than_or_Equal_to_Threshold
# 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold


-----------------

# 1427_Perform_String_Shifts
# 1427. Perform String Shifts


-----------------

# 417_Pacific_Atlantic_Water_Flow
# 417. Pacific Atlantic Water Flow

Given an m x n matrix of non-negative integers representing the height of each
        unit cell in a continent, the "Pacific ocean" touches the left and top edges of
        the matrix and the "Atlantic ocean" touches the right and bottom edges.

    Water can only flow in four directions (up, down, left, or right) from a cell to another one
        with height equal or lower.

    Find the list of grid coordinates where water can flow to both the Pacific and Atlantic
        ocean.

    Note:

    
        The order of returned grid coordinates does not matter.
        Both m and n are less than 150.
    

     

    Example:

    Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
-----------------

# 1145_Binary_Tree_Coloring_Game
# 1145. Binary Tree Coloring Game

Two players play a turn based game on a binary tree.  We are given the
        root of this binary tree, and the number of nodes n in the
        tree.  n is odd, and each node has a distinct value from
        1 to n.

    Initially, the first player names a value x with 1 <= x <= n,
        and the second player names a value y with 1 <= y <= n and
        y != x.  The first player colors the node with value x red,
        and the second player colors the node with value y blue.

    Then, the players take turns starting with the first player.  In each turn, that player
        chooses a node of their color (red if player 1, blue if player 2) and colors an uncolored
        neighbor of the chosen node (either the left child, right child, or parent of the chosen
        node.)

    If (and only if) a player cannot choose such a node in this way, they must pass their
        turn.  If both players pass their turn, the game ends, and the winner is the player
        that colored more nodes.

    You are the second player.  If it is possible to choose such a y to
        ensure you win the game, return true.  If it is not possible, return
        false.

     
    Example 1:
    
    Input: root = [1,2,3,4,5,6,7,8,9,10,11], n = 11, x = 3
Output: true
Explanation: The second player can choose the node with value 2.

     
    Constraints:

    
        root is the root of a binary tree with n nodes and distinct
            node values from 1 to n.
        
        n is odd.
        1 <= x <= n <= 100
-----------------

# 1503_Last_Moment_Before_All_Ants_Fall_Out_of_a_Plank
# 1503. Last Moment Before All Ants Fall Out of a Plank


-----------------

# 806_Number_of_Lines_To_Write_String
# 806. Number of Lines To Write String

We are to write the letters of a given string S, from left to right into lines.
        Each line has maximum width 100 units, and if writing a letter would cause the width of the
        line to exceed 100 units, it is written on the next line. We are given an array widths,
        an array where widths[0] is the width of 'a', widths[1] is the width of 'b',
        ..., and widths[25] is the width of 'z'.

    Now answer two questions: how many lines have at least one character from S, and
        what is the width used by the last such line? Return your answer as an integer list of
        length 2.

     

    Example :
Input:
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
Output: [3, 60]
Explanation: 
All letters have the same length of 10. To write all 26 letters,
we need two full lines and one line with 60 units.

    Example :
Input:
widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
Output: [2, 4]
Explanation: 
All letters except 'a' have the same length of 10, and
"bbbcccdddaa" will cover 9 * 10 + 2 * 4 = 98 units.
For the last 'a', it is written on the second line because
there is only 2 units left in the first line.
So the answer is 2 lines, plus 4 units in the second line.

     

    Note:

    
        The length of S will be in the range [1, 1000].
        S will only contain lowercase letters.
        widths is an array of length 26.
        widths[i] will be in the range of [2, 10].
-----------------

# 999_Available_Captures_for_Rook
# 999. Available Captures for Rook

On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white
        bishops, and black pawns.  These are given as characters 'R', '.',
        'B', and 'p' respectively. Uppercase characters represent white pieces, and
        lowercase characters represent black pieces.

    The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north,
        east, west, and south), then moves in that direction until it chooses to stop, reaches the
        edge of the board, or captures an opposite colored pawn by moving to the same square it
        occupies.  Also, rooks cannot move into the same square as other friendly bishops.

    Return the number of pawns the rook can capture in one move.

     

    Example 1:

    

    Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.

    Example 2:

    

    Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.

    Example 3:

    

    Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.

     

    Note:

    
        board.length == board[i].length == 8
        board[i][j] is either 'R', '.',
            'B', or 'p'
        There is exactly one cell with board[i][j] == 'R'
-----------------

# 1345_Jump_Game_IV
# 1345. Jump Game IV


-----------------

# 1074_Number_of_Submatrices_That_Sum_to_Target
# 1074. Number of Submatrices That Sum to Target

Given a matrix, and a target, return the number of non-empty
        submatrices that sum to target.

    A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y]
        with x1 <= x <= x2 and y1 <= y <= y2.

    Two submatrices (x1, y1, x2, y2) and (x1', y1', x2',
        y2') are different if they have some coordinate that is different: for
        example, if x1 != x1'.

     

    Example 1:

    Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.
-----------------

# 600_Non-negative_Integers_without_Consecutive_Ones
# 600. Non-negative Integers without Consecutive Ones

Given a positive integer n, find the number of non-negative integers less than or
        equal to n, whose binary representations do NOT contain consecutive ones.

    Example 1:
    Input: 5
Output: 5
Explanation:
Here are the non-negative integers <= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule.

    

    Note:
        1 <= n <= 109
-----------------

# 1852_Distinct_Numbers_in_Each_Subarray
# 1852. Distinct Numbers in Each Subarray


-----------------

# 889_Construct_Binary_Tree_from_Preorder_and_Postorder_Traversal
# 889. Construct Binary Tree from Preorder and Postorder Traversal

Return any binary tree that matches the given preorder and postorder traversals.

    Values in the traversals pre and post are distinct positive
        integers.
-----------------

# 954_Array_of_Doubled_Pairs
# 954. Array of Doubled Pairs

Given an array of integers A with even length, return true if
        and only if it is possible to reorder it such that A[2 * i + 1] = 2 * A[2 * i]
        for every 0 <= i < len(A) / 2.
-----------------

# 1819_Number_of_Different_Subsequences_GCDs
# 1819. Number of Different Subsequences GCDs


-----------------

# 1273_Delete_Tree_Nodes
# 1273. Delete Tree Nodes


-----------------

# 1009_Complement_of_Base_10_Integer
# 1009. Complement of Base 10 Integer

Every non-negative integer N has a binary representation.  For
        example, 5 can be represented as "101" in
        binary, 11 as "1011" in binary, and so on. 
        Note that except for N = 0, there are no leading zeroes in any binary
        representation.

    The complement of a binary representation is the number in binary you get
        when changing every 1 to a 0 and 0 to a
        1.  For example, the complement of "101" in binary
        is "010" in binary.

    For a given number N in base-10, return the complement of it's binary
        representation as a base-10 integer.
-----------------

# 1195_Fizz_Buzz_Multithreaded
# 1195. Fizz Buzz Multithreaded

Write a program that outputs the string representation of numbers from 1 to n,
        however:

    
        If the number is divisible by 3, output "fizz".
        If the number is divisible by 5, output "buzz".
        If the number is divisible by both 3 and 5, output "fizzbuzz".
    

    For example, for n = 15, we output: 1, 2, fizz, 4, buzz, fizz,
        7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz.

    Suppose you are given the following code:

    class FizzBuzz {
  public FizzBuzz(int n) { ... }               // constructor
  public void fizz(printFizz) { ... }          // only output "fizz"
  public void buzz(printBuzz) { ... }          // only output "buzz"
  public void fizzbuzz(printFizzBuzz) { ... }  // only output "fizzbuzz"
  public void number(printNumber) { ... }      // only output the numbers
}

    Implement a multithreaded version of FizzBuzz with four
        threads. The same instance of FizzBuzz will be passed to four different
        threads:

    
        Thread A will call fizz() to check for divisibility of 3 and
            outputs fizz.
        
        Thread B will call buzz() to check for divisibility of 5 and
            outputs buzz.
        
        Thread C will call fizzbuzz() to check for divisibility of 3 and 5 and
            outputs fizzbuzz.
        
        Thread D will call number() which should only output the numbers.
-----------------

# 1468_Calculate_Salaries
# 1468. Calculate Salaries


-----------------

# 510_Inorder_Successor_in_BST_II
# 510. Inorder Successor in BST II

Given a binary search tree and a node in it, find the in-order successor of that node in the
        BST.

    The successor of a node p is the node with the smallest key greater than p.val.
    

    You will have direct access to the node but not to the root of the tree. Each node will have
        a reference to its parent node.

     

    Example 1:
    
    Input: 
root = {"$id":"1","left":{"$id":"2","left":null,"parent":{"$ref":"1"},"right":null,"val":1},"parent":null,"right":{"$id":"3","left":null,"parent":{"$ref":"1"},"right":null,"val":3},"val":2}
p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of Node type.

    Example 2:
    
    Input: 
root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":1},"parent":{"$ref":"2"},"right":null,"val":2},"parent":{"$ref":"1"},"right":{"$id":"5","left":null,"parent":{"$ref":"2"},"right":null,"val":4},"val":3},"parent":null,"right":{"$id":"6","left":null,"parent":{"$ref":"1"},"right":null,"val":6},"val":5}
p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.

    Example 3:
    
    Input: 
root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":2},"parent":{"$ref":"2"},"right":{"$id":"5","left":null,"parent":{"$ref":"3"},"right":null,"val":4},"val":3},"parent":{"$ref":"1"},"right":{"$id":"6","left":null,"parent":{"$ref":"2"},"right":{"$id":"7","left":{"$id":"8","left":null,"parent":{"$ref":"7"},"right":null,"val":9},"parent":{"$ref":"6"},"right":null,"val":13},"val":7},"val":6},"parent":null,"right":{"$id":"9","left":{"$id":"10","left":null,"parent":{"$ref":"9"},"right":null,"val":17},"parent":{"$ref":"1"},"right":{"$id":"11","left":null,"parent":{"$ref":"9"},"right":null,"val":20},"val":18},"val":15}
p = 15
Output: 17

    Example 4:
    
    Input: 
root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":2},"parent":{"$ref":"2"},"right":{"$id":"5","left":null,"parent":{"$ref":"3"},"right":null,"val":4},"val":3},"parent":{"$ref":"1"},"right":{"$id":"6","left":null,"parent":{"$ref":"2"},"right":{"$id":"7","left":{"$id":"8","left":null,"parent":{"$ref":"7"},"right":null,"val":9},"parent":{"$ref":"6"},"right":null,"val":13},"val":7},"val":6},"parent":null,"right":{"$id":"9","left":{"$id":"10","left":null,"parent":{"$ref":"9"},"right":null,"val":17},"parent":{"$ref":"1"},"right":{"$id":"11","left":null,"parent":{"$ref":"9"},"right":null,"val":20},"val":18},"val":15}
p = 13
Output: 15

     

    Note:

    
        If the given node has no in-order successor in the tree, return null.
        It's guaranteed that the values of the tree are unique.
        Remember that we are using the Node type instead of TreeNode
            type so their string representation are different.
        
    

     

    Follow up:

    Could you solve it without looking up any of the node's values?
-----------------

# 1031_Maximum_Sum_of_Two_Non-Overlapping_Subarrays
# 1031. Maximum Sum of Two Non-Overlapping Subarrays

Given an array A of non-negative integers, return the maximum sum of elements in
        two non-overlapping (contiguous) subarrays, which have lengths L and
        M.  (For clarification, the L-length subarray could occur
        before or after the M-length subarray.)

    Formally, return the largest V for which V = (A[i] + A[i+1] +
        ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:

    
        0 <= i < i + L - 1 < j < j + M - 1 < A.length,
            or
        0 <= j < j + M - 1 < i < i + L - 1 < A.length.
-----------------

# 807_Max_Increase_to_Keep_City_Skyline
# 807. Max Increase to Keep City Skyline

In a 2 dimensional array grid, each value grid[i][j] represents the
        height of a building located there. We are allowed to increase the height of any number of
        buildings, by any amount (the amounts can be different for different buildings). Height 0
        is considered to be a building as well. 

    At the end, the "skyline" when viewed from all four directions of the grid,
        i.e. top, bottom, left, and right, must be the same as the skyline of the
        original grid. A city's skyline is the outer contour of the rectangles formed by all the
        buildings when viewed from a distance. See the following example.

    What is the maximum total sum that the height of the buildings can be increased?

    Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation:
The grid is:
[ [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

    Notes: 

    
        1 < grid.length = grid[0].length <= 50.
        All heights grid[i][j] are in the range [0, 100].
        All buildings in grid[i][j] occupy the entire grid cell: that is, they are
            a 1 x 1 x grid[i][j] rectangular prism.
-----------------

# 1484_Group_Sold_Products_By_The_Date
# 1484. Group Sold Products By The Date


-----------------

# 39_Combination_Sum
# 39. Combination Sum

Given a set of candidate numbers (candidates) (without
        duplicates) and a target number (target), find all unique combinations
        in candidates where the candidate numbers sums to target.

    The same repeated number may be chosen from candidates unlimited
        number of times.

    Note:

    
        All numbers (including target) will be positive integers.
        The solution set must not contain duplicate combinations.
    

    Example 1:

    Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

    Example 2:

    Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
-----------------

# 1697_Checking_Existence_of_Edge_Length_Limited_Paths
# 1697. Checking Existence of Edge Length Limited Paths


-----------------

# 1657_Determine_if_Two_Strings_Are_Close
# 1657. Determine if Two Strings Are Close


-----------------

# 1355_Activity_Participants
# 1355. Activity Participants


-----------------

# 1027_Longest_Arithmetic_Sequence
# 1027. Longest Arithmetic Sequence

Given an array A of integers, return the length of the longest
        arithmetic subsequence in A.

    Recall that a subsequence of A is a list A[i_1], A[i_2], ...,
        A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1,
        and that a sequence B is arithmetic if B[i+1] - B[i]
        are all the same value (for 0 <= i < B.length - 1).

     

    Example 1:

    Input: [3,6,9,12]
Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.
-----------------

# 1101_The_Earliest_Moment_When_Everyone_Become_Friends
# 1101. The Earliest Moment When Everyone Become Friends

In a social group, there are N people, with unique integer ids from
        0 to N-1.

    We have a list of logs, where each logs[i] = [timestamp, id_A,
        id_B] contains a non-negative integer timestamp, and the ids of two different
        people.

    Each log represents the time in which two different people became friends.  Friendship
        is symmetric: if A is friends with B, then B is friends with A.

    Let's say that person A is acquainted with person B if A is friends with B, or A is a
        friend of someone acquainted with B.

    Return the earliest time for which every person became acquainted with every other person.
        Return -1 if there is no such earliest time.

     

    Example 1:

    Input: logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], N = 6
Output: 20190301
Explanation: 
The first event occurs at timestamp = 20190101 and after 0 and 1 become friends we have the following friendship groups [0,1], [2], [3], [4], [5].
The second event occurs at timestamp = 20190104 and after 3 and 4 become friends we have the following friendship groups [0,1], [2], [3,4], [5].
The third event occurs at timestamp = 20190107 and after 2 and 3 become friends we have the following friendship groups [0,1], [2,3,4], [5].
The fourth event occurs at timestamp = 20190211 and after 1 and 5 become friends we have the following friendship groups [0,1,5], [2,3,4].
The fifth event occurs at timestamp = 20190224 and as 2 and 4 are already friend anything happens.
The sixth event occurs at timestamp = 20190301 and after 0 and 3 become friends we have that all become friends.

     

    Note:

    
        2 <= N <= 100
        1 <= logs.length <= 10^4
        0 <= logs[i][0] <= 10^9
        0 <= logs[i][1], logs[i][2] <= N - 1
        It's guaranteed that all timestamps in logs[i][0] are different.
        logs are not necessarily ordered by some criteria.
        logs[i][1] != logs[i][2]
-----------------

# 285_Inorder_Successor_in_BST
# 285. Inorder Successor in BST

Given a binary search tree and a node in it, find the in-order successor of that node in the
        BST.

    The successor of a node p is the node with the smallest key greater
        than p.val.

     

    Example 1:
    
    Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

    Example 2:
    
    Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.

     

    Note:

    
        If the given node has no in-order successor in the tree, return null.
        It's guaranteed that the values of the tree are unique.
-----------------

# 918_Maximum_Sum_Circular_Subarray
# 918. Maximum Sum Circular Subarray

Given a circular array C of integers represented
        by A, find the maximum possible sum of a non-empty subarray of
        C.

    Here, a circular array means the end of the array connects to the
        beginning of the array.  (Formally, C[i] = A[i] when 0 <= i <
            A.length, and C[i+A.length] = C[i] when i >=
            0.)

    Also, a subarray may only include each element of the fixed buffer A at most
        once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not
        exist i <= k1, k2 <= j with k1 % A.length = k2 %
            A.length.)
-----------------

# 1240_Tiling_a_Rectangle_with_the_Fewest_Squares
# 1240. Tiling a Rectangle with the Fewest Squares

Given a rectangle of size n x m, find the minimum number of integer-sided squares that
        tile the rectangle.

     
    Example 1:

    

    Input: n = 2, m = 3
Output: 3
Explanation: 3 squares are necessary to cover the rectangle.
2 (squares of 1x1)
1 (square of 2x2)

    Example 2:

    

    Input: n = 5, m = 8
Output: 5

    Example 3:

    

    Input: n = 11, m = 13
Output: 6

     
    Constraints:

    
        1 <= n <= 13
        1 <= m <= 13
-----------------

# 1378_Replace_Employee_ID_With_The_Unique_Identifier
# 1378. Replace Employee ID With The Unique Identifier


-----------------

# 1384_Total_Sales_Amount_by_Year
# 1384. Total Sales Amount by Year


-----------------

# 412_Fizz_Buzz
# 412. Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to n.

    But for multiples of three it should output “Fizz” instead of the number and for the
        multiples of five output “Buzz”. For numbers which are multiples of both three and five
        output “FizzBuzz”.

    Example:
    n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
-----------------

# 943_Find_the_Shortest_Superstring
# 943. Find the Shortest Superstring

Given an array A of strings, find any smallest string that contains each string in
        A as a substring.

    We may assume that no string in A is substring of another string in
        A.
-----------------

# 524_Longest_Word_in_Dictionary_through_Deleting
# 524. Longest Word in Dictionary through Deleting

Given a string and a string dictionary, find the longest string in the dictionary that can
        be formed by deleting some characters of the given string. If there are more than one
        possible results, return the longest word with the smallest lexicographical order. If there
        is no possible result, return the empty string.
    
    Example 1:
    Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output:
"apple"

    

    
    Example 2:
    Input:
s = "abpcplea", d = ["a","b","c"]

Output:
"a"

    

    Note:
    
        All the strings in the input will only contain lower-case letters.
        The size of the dictionary won't exceed 1,000.
        The length of all the strings in the input won't exceed 1,000.
-----------------

# 1081_Smallest_Subsequence_of_Distinct_Characters
# 1081. Smallest Subsequence of Distinct Characters

Return the lexicographically smallest subsequence of text that contains all the
        distinct characters of text exactly once.

     

    Example 1:

    Input: "cdadabcc"
Output: "adbc"
-----------------

# 1243_Array_Transformation
# 1243. Array Transformation

Given an initial array arr, every day you produce a new array using the array of
        the previous day.

    On the i-th day, you do the following operations on the array of day i-1 to
        produce the array of day i:

    
        If an element is smaller than both its left neighbor and its right neighbor, then this
            element is incremented.
        
        If an element is bigger than both its left neighbor and its right neighbor, then this
            element is decremented.
        
        The first and last elements never change.
    

    After some days, the array does not change. Return that final array.

     
    Example 1:

    Input: arr = [6,2,3,4]
Output: [6,3,3,4]
Explanation: 
On the first day, the array is changed from [6,2,3,4] to [6,3,3,4].
No more operations can be done to this array.

    Example 2:

    Input: arr = [1,6,3,4,3,5]
Output: [1,4,4,4,4,5]
Explanation: 
On the first day, the array is changed from [1,6,3,4,3,5] to [1,5,4,3,4,5].
On the second day, the array is changed from [1,5,4,3,4,5] to [1,4,4,4,4,5].
No more operations can be done to this array.

     
    Constraints:

    
        1 <= arr.length <= 100
        1 <= arr[i] <= 100
-----------------

# 251_Flatten_2D_Vector
# 251. Flatten 2D Vector

Design and implement an iterator to flatten a 2d vector. It should support the following
        operations: next and hasNext.

     

    Example:

    Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // return 1
iterator.next(); // return 2
iterator.next(); // return 3
iterator.hasNext(); // return true
iterator.hasNext(); // return true
iterator.next(); // return 4
iterator.hasNext(); // return false

     

    Notes:

    
        Please remember to RESET your class variables declared in Vector2D, as
            static/class variables are persisted across multiple test cases. Please see here for more details.
        
        You may assume that next() call will always be valid, that is, there will
            be at least a next element in the 2d vector when next() is called.
        
    

     

    Follow up:

    As an added challenge, try to code it using only iterators
        in C++ or iterators in Java.
-----------------

# 1826_Faulty_Sensor
# 1826. Faulty Sensor


-----------------

# 488_Zuma_Game
# 488. Zuma Game

Think about Zuma Game. You have a row of balls on the table, colored red(R), yellow(Y),
        blue(B), green(G), and white(W). You also have several balls in your hand.
    
        Each time, you may choose a ball in your hand, and insert it into the row (including the
        leftmost place and rightmost place). Then, if there is a group of 3 or more balls in the
        same color touching, remove these balls. Keep doing this until no more balls can be
        removed.
    
        Find the minimal balls you have to insert to remove all the balls on the table. If you
        cannot remove all the balls, output -1.
    
    Examples:
Input: "WRRBBW", "RB"
Output: -1
Explanation: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW

Input: "WWRRBBWW", "WRBRW"
Output: 2
Explanation: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty

Input:"G", "GGGGG"
Output: 2
Explanation: G -> G[G] -> GG[G] -> empty

Input: "RBYYBBRRB", "YRBGB"
Output: 3
Explanation: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty

    

    Note:
    
        You may assume that the initial row of balls on the table won’t have any 3 or more
            consecutive balls with the same color.
        
        The number of balls on the table won't exceed 20, and the string represents these balls
            is called "board" in the input.
        
        The number of balls in your hand won't exceed 5, and the string represents these balls
            is called "hand" in the input.
        
        Both input strings will be non-empty and only contain characters 'R','Y','B','G','W'.
-----------------

# 851_Loud_and_Rich
# 851. Loud and Rich

In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different
        amounts of money, and different levels of quietness.

    For convenience, we'll call the person with label x, simply "person
        x".

    We'll say that richer[i] = [x, y] if person x definitely
        has more money than person y.  Note that richer may
        only be a subset of valid observations.

    Also, we'll say quiet[x] = q if person x has
        quietness q.

    Now, return answer, where answer[x] = y if y is the
        least quiet person (that is, the person y with the smallest value of quiet[y]),
        among all people who definitely have equal to or more money than person
        x.
-----------------

# 860_Lemonade_Change
# 860. Lemonade Change

At a lemonade stand, each lemonade costs $5. 

    Customers are standing in a queue to buy from you, and order one at a time (in the order
        specified by bills).

    Each customer will only buy one lemonade and pay with either a $5, $10,
        or $20 bill.  You must provide the correct change to each customer, so
        that the net transaction is that the customer pays $5.

    Note that you don't have any change in hand at first.

    Return true if and only if you can provide every customer with correct
        change.
-----------------

# 738_Monotone_Increasing_Digits
# 738. Monotone Increasing Digits

Given a non-negative integer N, find the largest number that is less than or
        equal to N with monotone increasing digits.
    
    
        (Recall that an integer has monotone increasing digits if and only if each pair of
        adjacent digits x and y satisfy x <= y.)
    
    

    Example 1:
    Input: N = 10
Output: 9

    

    Example 2:
    Input: N = 1234
Output: 1234

    

    Example 3:
    Input: N = 332
Output: 299

    

    Note:
        N is an integer in the range [0, 10^9].
-----------------

# 565_Array_Nesting
# 565. Array Nesting

A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the
        longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the
        rule below.

    Suppose the first element in S starts with the selection of element A[i] of index = i, the
        next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop
        adding right before a duplicate element occurs in S.

     

    Example 1:

    Input: A = [5,4,0,3,1,6,2]
Output: 4
Explanation:
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

One of the longest S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}

     

    Note:

    
        N is an integer within the range [1, 20,000].
        The elements of A are all distinct.
        Each element of A is an integer within the range [0, N-1].
-----------------

# 231_Power_of_Two
# 231. Power of Two

Given an integer, write a function to determine if it is a power of two.

    Example 1:

    Input: 1
Output: true
Explanation: 20 = 1

    Example 2:

    Input: 16
Output: true
Explanation: 24 = 16

    Example 3:

    Input: 218
Output: false
-----------------

# 1669_Merge_In_Between_Linked_Lists
# 1669. Merge In Between Linked Lists


-----------------

# 59_Spiral_Matrix_II
# 59. Spiral Matrix II

Given a positive integer n, generate a square matrix filled with elements from 1 to
        n2 in spiral order.

    Example:

    Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
-----------------

# 1053_Previous_Permutation_With_One_Swap
# 1053. Previous Permutation With One Swap

Given an array A of positive integers (not necessarily distinct), return the
        lexicographically largest permutation that is smaller than A, that can be
        made with one swap (A swap exchanges the positions of two numbers
        A[i] and A[j]).  If it cannot be done, then return the same
        array.

     

    Example 1:

    Input: [3,2,1]
Output: [3,1,2]
Explanation: Swapping 2 and 1.

    Example 2:

    Input: [1,1,5]
Output: [1,1,5]
Explanation: This is already the smallest permutation.

    Example 3:

    Input: [1,9,4,6,7]
Output: [1,7,4,6,9]
Explanation: Swapping 9 and 7.

    Example 4:

    Input: [3,1,1,3]
Output: [1,3,1,3]
Explanation: Swapping 1 and 3.

     

    Note:

    
        1 <= A.length <= 10000
        1 <= A[i] <= 10000
-----------------

# 1222_Queens_That_Can_Attack_the_King
# 1222. Queens That Can Attack the King

On an 8x8 chessboard, there can be multiple Black Queens and one White King.
    

    Given an array of integer coordinates queens that represents the positions of
        the Black Queens, and a pair of coordinates king that represent the position of
        the White King, return the coordinates of all the queens (in any order) that can attack the
        King.

     
    Example 1:

    

    Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation: 
The queen at [0,1] can attack the king cause they're in the same row.
The queen at [1,0] can attack the king cause they're in the same column.
The queen at [3,3] can attack the king cause they're in the same diagnal.
The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1].
The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0].
The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.

    Example 2:

    

    Input: queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
Output: [[2,2],[3,4],[4,4]]

    Example 3:

    

    Input: queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], king = [3,4]
Output: [[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]

     
    Constraints:

    
        1 <= queens.length <= 63
        queens[0].length == 2
        0 <= queens[i][j] < 8
        king.length == 2
        0 <= king[0], king[1] < 8
        At most one piece is allowed in a cell.
-----------------

# 472_Concatenated_Words
# 472. Concatenated Words

Given a list of words (without duplicates), please write a program that returns all
    concatenated words in the given list of words.
    A concatenated word is defined as a string that is comprised entirely of at least two shorter
        words in the given array.

    Example:
    Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";  "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

    

    Note:
    
        The number of elements of the given array will not exceed 10,000 
        The length sum of elements in the given array will not exceed 600,000.
        All the input string will only include lower case letters.
        The returned elements order does not matter.
-----------------

# 117_Populating_Next_Right_Pointers_in_Each_Node_II
# 117. Populating Next Right Pointers in Each Node II

Given a binary tree

    struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

    Populate each next pointer to point to its next right node. If there is no next right node,
        the next pointer should be set to NULL.

    Initially, all next pointers are set to NULL.

     

    Example:

    

    Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.

     

    Note:

    
        You may only use constant extra space.
        Recursive approach is fine, implicit stack space does not count as extra space for this
            problem.
-----------------

# 102_Binary_Tree_Level_Order_Traversal
# 102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from
        left to right, level by level).

    
        For example:
        Given binary tree [3,9,20,null,null,15,7],
        3
   / \
  9  20
    /  \
   15   7

    
    
        return its level order traversal as:
    [
  [3],
  [9,20],
  [15,7]
]
-----------------

# 1700_Number_of_Students_Unable_to_Eat_Lunch
# 1700. Number of Students Unable to Eat Lunch


-----------------

# 1597_Build_Binary_Expression_Tree_From_Infix_Expression
# 1597. Build Binary Expression Tree From Infix Expression


-----------------

# 1284_Minimum_Number_of_Flips_to_Convert_Binary_Matrix_to_Zero_Matrix
# 1284. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix


-----------------

# 1546_Maximum_Number_of_Non-Overlapping_Subarrays_With_Sum_Equals_Target
# 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target


-----------------

# 530_Minimum_Absolute_Difference_in_BST
# 530. Minimum Absolute Difference in BST

Given a binary search tree with non-negative values, find the minimum absolute difference between
        values of any two nodes.

    Example:

    Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

     

    Note: There are at least two nodes in this BST.
-----------------

# 1719_Number_Of_Ways_To_Reconstruct_A_Tree
# 1719. Number Of Ways To Reconstruct A Tree


-----------------

# 689_Maximum_Sum_of_3_Non-Overlapping_Subarrays
# 689. Maximum Sum of 3 Non-Overlapping Subarrays

In a given array nums of positive integers, find three non-overlapping subarrays
        with maximum sum.

    Each subarray will be of size k, and we want to maximize the sum of all 3*k
        entries.

    Return the result as a list of indices representing the starting position of each interval
        (0-indexed). If there are multiple answers, return the lexicographically smallest one.

    Example:

    Input: [1,2,1,2,6,7,5,1], 2
Output: [0, 3, 5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

     

    Note:

    
        nums.length will be between 1 and 20000.
        nums[i] will be between 1 and 65535.
        k will be between 1 and floor(nums.length / 3).
-----------------

# 206_Reverse_Linked_List
# 206. Reverse Linked List

Reverse a singly linked list.

    Example:

    Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

    Follow up:

    A linked list can be reversed either iteratively or recursively. Could you implement
        both?
-----------------

# 44_Wildcard_Matching
# 44. Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard
        pattern matching with support for '?' and '*'.

    '?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

    The matching should cover the entire input string (not partial).

    Note:

    
        s could be empty and contains only lowercase letters a-z.
        
        p could be empty and contains only lowercase letters a-z, and
            characters like ? or *.
        
    

    Example 1:

    Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

    Example 2:

    Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.

    Example 3:

    Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

    Example 4:

    Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

    Example 5:

    Input:
s = "acdcb"
p = "a*c?b"
Output: false
-----------------

# 182_Duplicate_Emails
# 182. Duplicate Emails

Write a SQL query to find all duplicate emails in a table named Person.

    +----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+

    For example, your query should return the following for the above table:

    +---------+
| Email   |
+---------+
| a@b.com |
+---------+

    Note: All emails are in lowercase.
-----------------

# 1839_Longest_Substring_Of_All_Vowels_in_Order
# 1839. Longest Substring Of All Vowels in Order


-----------------

# 712_Minimum_ASCII_Delete_Sum_for_Two_Strings
# 712. Minimum ASCII Delete Sum for Two Strings

Given two strings s1, s2, find the lowest ASCII sum of deleted characters to
        make two strings equal.

    Example 1:
    Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

    

    Example 2:
    Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

    

    Note:
    0 < s1.length, s2.length <= 1000.
    All elements of each string will have an ASCII value in [97, 122].
-----------------

# 1733_Minimum_Number_of_People_to_Teach
# 1733. Minimum Number of People to Teach


-----------------

# 788_Rotated_Digits
# 788. Rotated Digits

X is a good number if after rotating each digit individually by 180 degrees, we get a valid
        number that is different from X.  Each digit must be rotated - we cannot choose to
        leave it alone.

    A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to
        themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the
        numbers do not rotate to any other number and become invalid.

    Now given a positive number N, how many numbers X from 1 to
        N are good?

    Example:
Input: 10
Output: 4
Explanation:
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.

    Note:

    
        N  will be in range [1, 10000].
-----------------

# 1163_Last_Substring_in_Lexicographical_Order
# 1163. Last Substring in Lexicographical Order

Given a string s, return the last substring of s in lexicographical
        order.

     

    Example 1:

    Input: "abab"
Output: "bab"
Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".

    Example 2:

    Input: "leetcode"
Output: "tcode"

     

    Note:

    
        1 <= s.length <= 4 * 10^5
        s contains only lowercase English letters.
-----------------

# 739_Daily_Temperatures
# 739. Daily Temperatures

Given a list of daily temperatures T, return a list such that, for each day in
        the input, tells you how many days you would have to wait until a warmer temperature. If
        there is no future day for which this is possible, put 0 instead.
    
    
        For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76,
        73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
    

    Note:
        The length of temperatures will be in the range [1, 30000].
        Each temperature will be an integer in the range [30, 100].
-----------------

# 525_Contiguous_Array
# 525. Contiguous Array

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0
        and 1. 

    Example 1:
    Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

    

    Example 2:
    Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

    

    Note:
        The length of the given binary array will not exceed 50,000.
-----------------

# 1586_Binary_Search_Tree_Iterator_II
# 1586. Binary Search Tree Iterator II


-----------------

# 323_Number_of_Connected_Components_in_an_Undirected_Graph
# 323. Number of Connected Components in an Undirected Graph

Given n nodes labeled from 0 to n - 1 and a list of
        undirected edges (each edge is a pair of nodes), write a function to find the number of
        connected components in an undirected graph.

    Example 1:

    Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4

Output: 2

    Example 2:

    Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1

    Note:
        You can assume that no duplicate edges will appear in edges. Since all edges
        are undirected, [0, 1] is the same as [1, 0] and thus will not
        appear together in edges.
-----------------

# 1785_Minimum_Elements_to_Add_to_Form_a_Given_Sum
# 1785. Minimum Elements to Add to Form a Given Sum


-----------------

# 1509_Minimum_Difference_Between_Largest_and_Smallest_Value_in_Three_Moves
# 1509. Minimum Difference Between Largest and Smallest Value in Three Moves


-----------------

# 1184_Distance_Between_Bus_Stops
# 1184. Distance Between Bus Stops

A bus has n stops numbered from 0 to n - 1 that
        form a circle. We know the distance between all pairs of neighboring stops where distance[i]
        is the distance between the stops number i and (i + 1) % n.
    

    The bus goes along both directions i.e. clockwise and counterclockwise.

    Return the shortest distance between the given start and destination stops.
    

     
    Example 1:

    

    Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

     

    Example 2:

    

    Input: distance = [1,2,3,4], start = 0, destination = 2
Output: 3
Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.

     

    Example 3:

    

    Input: distance = [1,2,3,4], start = 0, destination = 3
Output: 4
Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

     
    Constraints:

    
        1 <= n <= 10^4
        distance.length == n
        0 <= start, destination < n
        0 <= distance[i] <= 10^4
-----------------

# 1662_Check_If_Two_String_Arrays_are_Equivalent
# 1662. Check If Two String Arrays are Equivalent


-----------------

# 202_Happy_Number
# 202. Happy Number

Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: Starting with any positive
        integer, replace the number by the sum of the squares of its digits, and repeat the process
        until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does
        not include 1. Those numbers for which this process ends in 1 are happy numbers.

    Example: 

    Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
-----------------

# 541_Reverse_String_II
# 541. Reverse String II

Given a string and an integer k, you need to reverse the first k characters for every 2k
    characters counting from the start of the string. If there are less than k characters left,
    reverse all of them. If there are less than 2k but greater than or equal to k characters, then
    reverse the first k characters and left the other as original.
    

    Example:
    Input: s = "abcdefg", k = 2
Output: "bacdfeg"

    

    Restrictions: 
    
         The string consists of lower English letters only.
         Length of the given string and k will in the range [1, 10000]
-----------------

# 61_Rotate_List
# 61. Rotate List

Given a linked list, rotate the list to the right by k places, where k
        is non-negative.

    Example 1:

    Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

    Example 2:

    Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
-----------------

# 1353_Maximum_Number_of_Events_That_Can_Be_Attended
# 1353. Maximum Number of Events That Can Be Attended


-----------------

# 596_Classes_More_Than_5_Students
# 596. Classes More Than 5 Students

There is a table courses with columns: student and class

    Please list out all classes which have more than or equal to 5 students.

    For example, the table:

    +---------+------------+
| student | class      |
+---------+------------+
| A       | Math       |
| B       | English    |
| C       | Math       |
| D       | Biology    |
| E       | Math       |
| F       | Computer   |
| G       | Math       |
| H       | Math       |
| I       | Math       |
+---------+------------+

    Should output:

    +---------+
| class   |
+---------+
| Math    |
+---------+

     

    Note:
        The students should not be counted duplicate in each course.
-----------------

# 1006_Clumsy_Factorial
# 1006. Clumsy Factorial

Normally, the factorial of a positive integer n is the product of all
        positive integers less than or equal to n.  For example, factorial(10)
            = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

    We instead make a clumsy factorial: using the integers in decreasing order, we swap
        out the multiply operations for a fixed rotation of operations: multiply (*), divide
        (/), add (+) and subtract (-) in this order.

    For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  However,
        these operations are still applied using the usual order of operations of arithmetic: we do
        all multiplication and division steps before any addition or subtraction steps, and
        multiplication and division steps are processed left to right.

    Additionally, the division that we use is floor division such that 10
        * 9 / 8 equals 11.  This guarantees the result is an
        integer.

    Implement the clumsy function as
        defined above: given an integer N, it returns the clumsy factorial of
        N.

     

    Example 1:

    Input: 4
Output: 7
Explanation: 7 = 4 * 3 / 2 + 1

    Example 2:

    Input: 10
Output: 12
Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

     

    Note:

    
        1 <= N <= 10000
        -2^31 <= answer <= 2^31 - 1  (The answer is guaranteed to fit
            within a 32-bit integer.)
-----------------

# 1429_First_Unique_Number
# 1429. First Unique Number


-----------------

# 1040_Moving_Stones_Until_Consecutive_II
# 1040. Moving Stones Until Consecutive II

On an infinite number line, the position of the i-th stone is given by stones[i]. 
        Call a stone an endpoint stone if it has the smallest or largest position.

    Each turn, you pick up an endpoint stone and move it to an unoccupied position so that it is
        no longer an endpoint stone.

    In particular, if the stones are at say, stones = [1,2,5], you cannot
        move the endpoint stone at position 5, since moving it to any position (such as 0, or 3)
        will still keep that stone as an endpoint stone.

    The game ends when you cannot make any more moves, ie. the stones are in consecutive
        positions.

    When the game ends, what is the minimum and maximum number of moves that you could have made? 
        Return the answer as an length 2 array: answer = [minimum_moves,
            maximum_moves]

     

    Example 1:

    Input: [7,4,9]
Output: [1,2]
Explanation: 
We can move 4 -> 8 for one move to finish the game.
Or, we can move 9 -> 5, 4 -> 6 for two moves to finish the game.
-----------------

# 406_Queue_Reconstruction_by_Height
# 406. Queue Reconstruction by Height

Suppose you have a random list of people standing in a queue. Each person is described by a
        pair of integers (h, k), where h is the height of the person and
        k is the number of people in front of this person who have a height greater
        than or equal to h. Write an algorithm to reconstruct the queue.

    Note:
        The number of people is less than 1,100.
     

    Example

    Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
-----------------

# 440_K-th_Smallest_in_Lexicographical_Order
# 440. K-th Smallest in Lexicographical Order

Given integers n and k, find the lexicographically k-th smallest
        integer in the range from 1 to n.

    Note: 1 ≤ k ≤ n ≤ 109.

    Example:
    Input:
n: 13   k: 2

Output:
10

Explanation:
The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
-----------------

# 1325_1325._Delete_Leaves_With_a_Given_Value
# 1325. 1325. Delete Leaves With a Given Value


-----------------

# 109_Convert_Sorted_List_to_Binary_Search_Tree
# 109. Convert Sorted List to Binary Search Tree

Given a singly linked list where elements are sorted in ascending order, convert it to a
        height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the
        depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
-----------------

# 1696_Jump_Game_VI
# 1696. Jump Game VI


-----------------

# 268_Missing_Number
# 268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
        find the one that is missing from the array.

    Example 1:

    Input: [3,0,1]
Output: 2

    Example 2:

    Input: [9,6,4,2,3,5,7,0,1]
Output: 8

    Note:
        Your algorithm should run in linear runtime complexity. Could you implement it using only
        constant extra space complexity?
-----------------

# 1769_Minimum_Number_of_Operations_to_Move_All_Balls_to_Each_Box
# 1769. Minimum Number of Operations to Move All Balls to Each Box


-----------------

# 722_Remove_Comments
# 722. Remove Comments

Given a C++ program, remove comments from it. The program source is an array
        where source[i] is the i-th line of the source code. This
        represents the result of splitting the original source code string by the newline character
        \n.

    In C++, there are two types of comments, line comments, and block comments.
    
        The string // denotes a line comment, which represents that it and rest of the
        characters to the right of it in the same line should be ignored.
    
    
        The string /* denotes a block comment, which represents that all characters
        until the next (non-overlapping) occurrence of */ should be ignored. (Here,
        occurrences happen in reading order: line by line from left to right.) To be clear, the
        string /*/ does not yet end the block comment, as the ending would be
        overlapping the beginning.
    
    
        The first effective comment takes precedence over others: if the string //
        occurs in a block comment, it is ignored. Similarly, if the string /* occurs in
        a line or block comment, it is also ignored.
    
    
        If a certain line of code is empty after removing comments, you must not output that line:
        each string in the answer list will be non-empty.
    
    
        There will be no control characters, single quote, or double quote characters. For example,
        source = "string s = "/* Not a comment. */";" will not be a test case. (Also,
        nothing else such as defines or macros will interfere with the comments.)
    
    
        It is guaranteed that every open block comment will eventually be closed, so /*
        outside of a line or block comment always starts a new comment.
    
    
        Finally, implicit newline characters can be deleted by block comments. Please see the
        examples below for details.
    

    After removing the comments from the source code, return the source code in the same
        format.

    Example 1:
    Input:
source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]

The line by line code is visualized as below:
/*Test program */
int main()
{
  // variable declaration
int a, b, c;
/* This is a test
   multiline
   comment for
   testing */
a = b + c;
}

Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]

The line by line code is visualized as below:
int main()
{

int a, b, c;
a = b + c;
}

Explanation:
The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.

    

    Example 2:
    Input:
source = ["a/*comment", "line", "more_comment*/b"]
Output: ["ab"]
Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.  After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].

    

    Note:
    The length of source is in the range [1, 100].
    The length of source[i] is in the range [0, 80].
    Every open block comment is eventually closed.
    There are no single-quote, double-quote, or control characters in the source code.
-----------------

# 937_Reorder_Data_in_Log_Files
# 937. Reorder Data in Log Files

You have an array of logs.  Each log is a space delimited string of words.
    

    For each log, the first word in each log is an alphanumeric identifier.  Then,
        either:

    
        Each word after the identifier will consist only of lowercase letters, or;
        Each word after the identifier will consist only of digits.
    

    We will call these two varieties of logs letter-logs and digit-logs. 
        It is guaranteed that each log has at least one word after its identifier.

    Reorder the logs so that all of the letter-logs come before any digit-log.  The
        letter-logs are ordered lexicographically ignoring identifier, with the identifier used in
        case of ties.  The digit-logs should be put in their original order.

    Return the final order of the logs.

     
    Example 1:
    Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

     
    Constraints:

    
        0 <= logs.length <= 100
        3 <= logs[i].length <= 100
        logs[i] is guaranteed to have an identifier, and a word after the
            identifier.
-----------------

# 616_Add_Bold_Tag_in_String
# 616. Add Bold Tag in String

Given a string s and a list of strings dict, you need to add a closed pair of bold
    tag <b> and </b> to wrap the substrings in s that exist in
    dict. If two such substrings overlap, you need to wrap them together by only one pair of closed
    bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine
    them.

    Example 1:
    Input:
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"

    

    Example 2:
    Input:
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"

    

    Note:
    
        The given dict won't contain duplicates, and its length won't exceed 100.
        All the strings in input have length in range [1, 1000].
-----------------

# 1789_Primary_Department_for_Each_Employee
# 1789. Primary Department for Each Employee


-----------------

# 1565_Unique_Orders_and_Customers_Per_Month
# 1565. Unique Orders and Customers Per Month


-----------------

# 1067_Digit_Count_in_Range
# 1067. Digit Count in Range

Given an integer d between 0 and 9, and two positive
    integers low and high as lower and upper bounds, respectively. Return
    the number of times that d occurs as a digit in all integers between
    low and high, including the bounds low and
    high.
     

    Example 1:

    Input: d = 1, low = 1, high = 13
Output: 6
Explanation: 
The digit d=1 occurs 6 times in 1,10,11,12,13. Note that the digit d=1 occurs twice in the number 11.
-----------------

# 591_Tag_Validator
# 591. Tag Validator

Given a string representing a code snippet, you need to implement a tag validator to parse
        the code and return whether it is valid. A code snippet is valid if all the following rules
        hold:
    
    
        The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.
        
        A closed tag (not necessarily valid) has exactly the following format : <TAG_NAME>TAG_CONTENT</TAG_NAME>.
            Among them, <TAG_NAME> is the start tag, and
            </TAG_NAME> is the end tag. The TAG_NAME in start and end tags should
            be the same. A closed tag is valid if and only if the TAG_NAME and TAG_CONTENT
            are valid.
        
        A valid TAG_NAME only contain upper-case letters, and has
            length in range [1,9]. Otherwise, the TAG_NAME is invalid.
        
        A valid TAG_CONTENT may contain other valid closed tags, cdata
            and any characters (see note1) EXCEPT unmatched <, unmatched
            start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the
            TAG_CONTENT is invalid.
        
        A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa.
            However, you also need to consider the issue of unbalanced when tags are nested.
        
        A < is unmatched if you cannot find a subsequent >. And
            when you find a < or </, all the subsequent characters
            until the next > should be parsed as TAG_NAME (not necessarily valid).
        
        The cdata has the following format : <![CDATA[CDATA_CONTENT]]>. The
            range of CDATA_CONTENT is defined as the characters between <![CDATA[
            and the first subsequent ]]>.
        
        CDATA_CONTENT may contain any characters. The function of cdata is
            to forbid the validator to parse CDATA_CONTENT, so even it has some
            characters that can be parsed as tag (no matter valid or invalid), you should treat it
            as regular characters.
        
    

    Valid Code Examples:
    Input: "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
Output: True
Explanation: 
The code is wrapped in a closed tag : <DIV> and </DIV>. 
The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. 
Although CDATA_CONTENT has unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as tag.
So TAG_CONTENT is valid, and then the code is valid. Thus return true.

Input: "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
Output: True
Explanation:
We first separate the code into : start_tag|tag_content|end_tag.
start_tag -> "<DIV>"
end_tag -> "</DIV>"
tag_content could also be separated into : text1|cdata|text2.
text1 -> ">>  ![cdata[]] "
cdata -> "<![CDATA[<div>]>]]>", where the CDATA_CONTENT is "<div>]>"
text2 -> "]]>>]"

The reason why start_tag is NOT "<DIV>>>" is because of the rule 6.
The reason why cdata is NOT "<![CDATA[<div>]>]]>]]>" is because of the rule 7.

    

    Invalid Code Examples:
    Input: "<A>  <B> </A>   </B>"
Output: False
Explanation: Unbalanced. If "<A>" is closed, then "<B>" must be unmatched, and vice versa.

Input: "<DIV>  div tag is not closed  <DIV>"
Output: False

Input: "<DIV>  unmatched <  </DIV>"
Output: False

Input: "<DIV> closed tags with invalid tag name  <b>123</b> </DIV>"
Output: False

Input: "<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>"
Output: False

Input: "<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>"
Output: False

    

    Note:
    
        For simplicity, you could assume the input code (including the any characters
            mentioned above) only contain letters, digits,
            '<','>','/','!','[',']'
            and ' '.
-----------------

# 1551_Minimum_Operations_to_Make_Array_Equal
# 1551. Minimum Operations to Make Array Equal


-----------------

# 642_Design_Search_Autocomplete_System
# 642. Design Search Autocomplete System

Design a search autocomplete system for a search engine. Users may input a sentence (at least
        one word and end with a special character '#'). For each
            character they type except '#', you need to return the top 3
        historical hot sentences that have prefix the same as the part of sentence already typed.
        Here are the specific rules:

    
        The hot degree for a sentence is defined as the number of times a user typed the exactly
            same sentence before.
        
        The returned top 3 hot sentences should be sorted by hot degree (The first is the
            hottest one). If several sentences have the same degree of hot, you need to use
            ASCII-code order (smaller one appears first).
        
        If less than 3 hot sentences exist, then just return as many as you can.
        When the input is a special character, it means the sentence ends, and in this case, you
            need to return an empty list.
        
    

    Your job is to implement the following functions:

    The constructor function:

    AutocompleteSystem(String[] sentences, int[] times): This is the constructor.
        The input is historical data. Sentences is a string array consists of
        previously typed sentences. Times is the corresponding times a sentence has
        been typed. Your system should record these historical data.

    Now, the user wants to input a new sentence. The following function will provide the next
        character the user types:

    List<String> input(char c): The input c is the next character
        typed by the user. The character will only be lower-case letters ('a'
        to 'z'), blank space (' ') or a special character
        ('#'). Also, the previously typed sentence should be recorded in your
        system. The output will be the top 3 historical hot sentences that have prefix the
        same as the part of sentence already typed.
     

    Example:
        Operation: AutocompleteSystem(["i love you", "island","ironman",
        "i love leetcode"], [5,3,2,2])
        The system have already tracked down the following sentences and their corresponding
        times:
        "i love you" : 5 times
        "island" : 3 times
        "ironman" : 2 times
        "i love leetcode" : 2 times
        Now, the user begins another search:
        
        Operation: input('i')
        Output: ["i love you", "island","i love leetcode"]
        Explanation:
        There are four sentences that have prefix "i". Among them, "ironman"
        and "i love leetcode" have same hot degree. Since ' ' has
        ASCII code 32 and 'r' has ASCII code 114, "i love leetcode"
        should be in front of "ironman". Also we only need to output top 3 hot sentences,
        so "ironman" will be ignored.
        
        Operation: input(' ')
        Output: ["i love you","i love leetcode"]
        Explanation:
        There are only two sentences that have prefix "i ".
        
        Operation: input('a')
        Output: []
        Explanation:
        There are no sentences that have prefix "i a".
        
        Operation: input('#')
        Output: []
        Explanation:
        The user finished the input, the sentence "i a" should be saved as a
        historical sentence in system. And the following input will be counted as a new search.
     

    Note:

    
        The input sentence will always start with a letter and end with '#', and only
            one blank space will exist between two words.
        
        The number of complete sentences that to be searched won't exceed 100. The
            length of each sentence including those in the historical data won't exceed 100.
        
        Please use double-quote instead of single-quote when you write test cases even for a
            character input.
        
        Please remember to RESET your class variables declared in class
            AutocompleteSystem, as static/class variables are persisted across multiple test
                cases. Please see here
            for more details.
-----------------

# 1217_Play_with_Chips
# 1217. Play with Chips

There are some chips, and the i-th chip is at position chips[i].

    You can perform any of the two following types of moves any number of times
        (possibly zero) on any chip:

    
        Move the i-th chip by 2 units to the left or to the right with a
            cost of 0.
        
        Move the i-th chip by 1 unit to the left or to the right
            with a cost of 1.
        
    

    There can be two or more chips at the same position initially.

    Return the minimum cost needed to move all the chips to the same position (any
        position).

     
    Example 1:

    Input: chips = [1,2,3]
Output: 1
Explanation: Second chip will be moved to positon 3 with cost 1. First chip will be moved to position 3 with cost 0. Total cost is 1.

    Example 2:

    Input: chips = [2,2,2,3,3]
Output: 2
Explanation: Both fourth and fifth chip will be moved to position two with cost 1. Total minimum cost will be 2.

     
    Constraints:

    
        1 <= chips.length <= 100
        1 <= chips[i] <= 10^9
-----------------

# 1362_Closest_Divisors
# 1362. Closest Divisors


-----------------

# 1109_Corporate_Flight_Bookings
# 1109. Corporate Flight Bookings

There are n flights, and they are labeled from 1 to
        n.

    We have a list of flight bookings.  The i-th booking bookings[i]
        = [i, j, k] means that we booked k seats from flights labeled
        i to j inclusive.

    Return an array answer of length n, representing the number of
        seats booked on each flight in order of their label.

     
    Example 1:

    Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
Output: [10,55,45,25,25]

     
    Constraints:

    
        1 <= bookings.length <= 20000
        1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
        1 <= bookings[i][2] <= 10000
-----------------

# 80_Remove_Duplicates_from_Sorted_Array_II
# 80. Remove Duplicates from Sorted Array II

Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice
        and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the
        input array in-place
        with O(1) extra memory.

    Example 1:

    Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.

    Example 2:

    Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.

    Clarification:

    Confused why the returned value is an integer but your answer is an array?

    Note that the input array is passed in by reference, which means
        modification to the input array will be known to the caller as well.

    Internally you can think of this:

    // nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
-----------------

# 945_Minimum_Increment_to_Make_Array_Unique
# 945. Minimum Increment to Make Array Unique

Given an array of integers A, a move consists of choosing any A[i], and
        incrementing it by 1.

    Return the least number of moves to make every value in A unique.

     

    Example 1:

    Input: [1,2,2]
Output: 1
Explanation:  After 1 move, the array could be [1, 2, 3].
-----------------

# 527_Word_Abbreviation
# 527. Word Abbreviation

Given an array of n distinct non-empty strings, you need to generate minimal possible
        abbreviations for every word following rules below.

    
        Begin with the first character and then the number of characters abbreviated, which
            followed by the last character.
        
        If there are any conflict, that is more than one words share the same abbreviation, a
            longer prefix is used instead of only the first character until making the map from word
            to abbreviation become unique. In other words, a final abbreviation cannot map to more
            than one original words.
        
         If the abbreviation doesn't make the word shorter, then keep it as original.
    

    Example:
    Input: ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]
Output: ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]

    

    Note:
    
         Both n and the length of each word will not exceed 400.
         The length of each word is greater than 1.
         The words consist of lowercase English letters only.
         The return answers should be in the same order as the original array.
-----------------

# 809_Expressive_Words
# 809. Expressive Words

Sometimes people repeat letters to represent extra feeling, such as "hello" ->
        "heeellooo", "hi" -> "hiiii".  In these strings like
        "heeellooo", we have groups of adjacent letters that are all the same: 
        "h", "eee", "ll", "ooo".

    For some given string S, a query word is stretchy if it can be made to
        be equal to S by any number of applications of the following extension
        operation: choose a group consisting of characters c, and add some number
        of characters c to the group so that the size of the group is 3 or more.

    For example, starting with "hello", we could do an extension on the group "o"
        to get "hellooo", but we cannot get "helloo" since the group "oo"
        has size less than 3.  Also, we could do another extension like "ll" ->
        "lllll" to get "helllllooo".  If S =
            "helllllooo", then the query word "hello" would be stretchy
        because of these two extension operations: query = "hello" -> "hellooo"
            -> "helllllooo" = S.

    Given a list of query words, return the number of words that are stretchy. 

     

    Example:
Input:
S = "heeellooo"
words = ["hello", "hi", "helo"]
Output: 1
Explanation:
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.

     

    Notes: 

    
        0 <= len(S) <= 100.
        0 <= len(words) <= 100.
        0 <= len(words[i]) <= 100.
        S and all words in words consist only of lowercase
            letters
-----------------

# 711_Number_of_Distinct_Islands_II
# 711. Number of Distinct Islands II

Given a non-empty 2D array grid of 0's and 1's, an island is a group of
        1's (representing land) connected 4-directionally (horizontal or vertical.) You
        may assume all four edges of the grid are surrounded by water.

    Count the number of distinct islands. An island is considered to be the same as
        another if they have the same shape, or have the same shape after rotation (90, 180,
        or 270 degrees only) or reflection (left/right direction or up/down direction).

    Example 1:
    11000
10000
00001
00011

    Given the above grid map, return 1.
    
    Notice that:
    11
1

    and
     1
11

    are considered same island shapes. Because if we make a 180 degrees clockwise rotation on
    the first island, then two islands will have the same shapes.
    

    Example 2:
    11100
10001
01001
01110
    Given the above grid map, return 2.
    
    Here are the two distinct islands:
    111
1

    and
    1
1

    
    Notice that:
    111
1

    and
    1
111

    are considered same island shapes. Because if we flip the first array in the up/down
    direction, then they have the same shapes.
    

    Note:
        The length of each dimension in the given grid does not exceed 50.
-----------------

# 863_All_Nodes_Distance_K_in_Binary_Tree
# 863. All Nodes Distance K in Binary Tree

We are given a binary tree (with root node root), a target
        node, and an integer value K.

    Return a list of the values of all nodes that have a distance K from the
        target node.  The answer can be returned in any order.
-----------------

# 1533_Find_the_Index_of_the_Large_Integer
# 1533. Find the Index of the Large Integer


-----------------

# 1018_Binary_Prefix_Divisible_By_5
# 1018. Binary Prefix Divisible By 5

Given an array A of 0s and 1s, consider
        N_i: the i-th subarray from A[0] to A[i] interpreted as
        a binary number (from most-significant-bit to least-significant-bit.)

    Return a list of booleans answer, where answer[i] is true if
        and only if N_i is divisible by 5.

    Example 1:

    Input: [0,1,1]
Output: [true,false,false]
Explanation: 
The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.

    Example 2:

    Input: [1,1,1]
Output: [false,false,false]

    Example 3:

    Input: [0,1,1,1,1,1]
Output: [true,false,false,false,true,false]

    Example 4:

    Input: [1,1,1,0,1]
Output: [false,false,false,false,false]

     

    Note:

    
        1 <= A.length <= 30000
        A[i] is 0 or 1
-----------------

# 1445_Apples_&_Oranges
# 1445. Apples & Oranges


-----------------

# 1016_Binary_String_With_Substrings_Representing_1_To_N
# 1016. Binary String With Substrings Representing 1 To N

Given a binary string S (a string consisting only of '0' and '1's)
        and a positive integer N, return true if and only if for every integer X from 1
        to N, the binary representation of X is a substring of S.

     

    Example 1:

    Input: S = "0110", N = 3
Output: true

    Example 2:

    Input: S = "0110", N = 4
Output: false

     

    Note:

    
        1 <= S.length <= 1000
        1 <= N <= 10^9
-----------------

# 23_Merge_k_Sorted_Lists
# 23. Merge k Sorted Lists

Merge k sorted linked lists and return it as one sorted list. Analyze and describe
        its complexity.

    Example:

    Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
-----------------

# 238_Product_of_Array_Except_Self
# 238. Product of Array Except Self

Given an array nums of n integers where n > 1,  return
        an array output such that output[i] is equal to the product of all
        the elements of nums except nums[i].

    Example:

    Input:  [1,2,3,4]
Output: [24,12,8,6]

    Note: Please solve it without division and in O(n).
    

    Follow up:
        Could you solve it with constant space complexity? (The output array does
            not count as extra space for the purpose of space complexity analysis.)
-----------------

# 1630_Arithmetic_Subarrays
# 1630. Arithmetic Subarrays


-----------------

# 1234_Replace_the_Substring_for_Balanced_String
# 1234. Replace the Substring for Balanced String

You are given a string containing only 4 kinds of characters 'Q',
        'W', 'E' and 'R'.

    A string is said to be balanced if each of its characters
        appears n/4 times where n is the length of the string.

    Return the minimum length of the substring that can be replaced with any
        other string of the same length to make the original string s balanced.
    

    Return 0 if the string is already balanced.

     
    Example 1:

    Input: s = "QWER"
Output: 0
Explanation: s is already balanced.

    Example 2:

    Input: s = "QQWE"
Output: 1
Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.

    Example 3:

    Input: s = "QQQW"
Output: 2
Explanation: We can replace the first "QQ" to "ER".

    Example 4:

    Input: s = "QQQQ"
Output: 3
Explanation: We can replace the last 3 'Q' to make s = "QWER".

     
    Constraints:

    
        1 <= s.length <= 10^5
        s.length is a multiple of 4
        s contains only 'Q', 'W',
            'E' and 'R'.
-----------------

# 840_Magic_Squares_In_Grid
# 840. Magic Squares In Grid

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to
        9 such that each row, column, and both diagonals all have the same sum.

    Given an grid of integers, how many 3 x 3 "magic square" subgrids
        are there?  (Each subgrid is contiguous).

     

    Example 1:

    Input: [[4,3,8,4],
        [9,5,1,9],
        [2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:
438
951
276

while this one is not:
384
519
762

In total, there is only one magic square inside the given grid.

    Note:

    
        1 <= grid.length <= 10
        1 <= grid[0].length <= 10
        0 <= grid[i][j] <= 15
-----------------

# 941_Valid_Mountain_Array
# 941. Valid Mountain Array

Given an array A of integers, return true if and only if it is a
        valid mountain array.

    Recall that A is a mountain array if and only if:

    
        A.length >= 3
        There exists some i with 0 < i < A.length - 1 such
            that:
            
                A[0] < A[1] < ... A[i-1] < A[i] 
                A[i] > A[i+1] > ... > A[A.length - 1]
            
        
    

     

    Example 1:

    Input: [2,1]
Output: false
-----------------

# 1332_Remove_Palindromic_Subsequences
# 1332. Remove Palindromic Subsequences


-----------------

# 1082_Sales_Analysis_I
# 1082. Sales Analysis I

Table: Product

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
| unit_price   | int     |
+--------------+---------+
product_id is the primary key of this table.

    Table: Sales

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| seller_id   | int     |
| product_id  | int     |
| buyer_id    | int     |
| sale_date   | date    |
| quantity    | int     |
| price       | int     |
+------ ------+---------+
This table has no primary key, it can have repeated rows.
product_id is a foreign key to Product table.

     

    Write an SQL query that reports the best seller by total sales
        price, If there is a tie, report them all.

    The query result format is in the following example:

    Product table:
+------------+--------------+------------+
| product_id | product_name | unit_price |
+------------+--------------+------------+
| 1          | S8           | 1000       |
| 2          | G4           | 800        |
| 3          | iPhone       | 1400       |
+------------+--------------+------------+

Sales table:
+-----------+------------+----------+------------+----------+-------+
| seller_id | product_id | buyer_id | sale_date  | quantity | price |
+-----------+------------+----------+------------+----------+-------+
| 1         | 1          | 1        | 2019-01-21 | 2        | 2000  |
| 1         | 2          | 2        | 2019-02-17 | 1        | 800   |
| 2         | 2          | 3        | 2019-06-02 | 1        | 800   |
| 3         | 3          | 4        | 2019-05-13 | 2        | 2800  |
+-----------+------------+----------+------------+----------+-------+

Result table:
+-------------+
| seller_id   |
+-------------+
| 1           |
| 3           |
+-------------+
Both sellers with id 1 and 3 sold products with the most total price of 2800.
-----------------

# 1842_Next_Palindrome_Using_Same_Digits
# 1842. Next Palindrome Using Same Digits


-----------------

# 866_Prime_Palindrome
# 866. Prime Palindrome

Find the smallest prime palindrome greater than or equal to N.

    Recall that a number is prime if it's only divisors are 1 and itself, and
        it is greater than 1. 

    For example, 2,3,5,7,11 and 13 are primes.

    Recall that a number is a palindrome if it reads the same from left to right as it
        does from right to left. 

    For example, 12321 is a palindrome.
-----------------

# 1392_Longest_Happy_Prefix
# 1392. Longest Happy Prefix


-----------------

# 1665_Minimum_Initial_Energy_to_Finish_Tasks
# 1665. Minimum Initial Energy to Finish Tasks


-----------------

# 234_Palindrome_Linked_List
# 234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

    Example 1:

    Input: 1->2
Output: false

    Example 2:

    Input: 1->2->2->1
Output: true

    Follow up:
        Could you do it in O(n) time and O(1) space?
-----------------

# 171_Excel_Sheet_Column_Number
# 171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

    For example:

        A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

    Example 1:

    Input: "A"
Output: 1

    Example 2:

    Input: "AB"
Output: 28

    Example 3:

    Input: "ZY"
Output: 701
-----------------

# 912_Sort_an_Array
# 912. Sort an Array

Given an array of integers nums, sort the array in ascending order.

     

    
    

    Example 1:

    Input: [5,2,3,1]
Output: [1,2,3,5]

    Example 2:

    Input: [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]

     

    Note:

    
        1 <= A.length <= 10000
        -50000 <= A[i] <= 50000
-----------------

# 1268_Search_Suggestions_System
# 1268. Search Suggestions System


-----------------

# 1531_String_Compression_II
# 1531. String Compression II


-----------------

# 319_Bulb_Switcher
# 319. Bulb Switcher

There are n bulbs that are initially off. You first turn on all the bulbs. Then, you
        turn off every second bulb. On the third round, you toggle every third bulb (turning on if
        it's off or turning off if it's on). For the i-th round, you toggle every i
        bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on
        after n rounds.

    Example:

    Input: 3
Output: 1
Explanation:
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off].

So you should return 1, because there is only one bulb is on.
-----------------

# 1462_Course_Schedule_IV
# 1462. Course Schedule IV


-----------------

# 1228_Missing_Number_In_Arithmetic_Progression
# 1228. Missing Number In Arithmetic Progression

In some array arr, the values were in arithmetic progression: the
        values arr[i+1] - arr[i] are all equal for every 0
            <= i < arr.length - 1.

    Then, a value from arr was removed that was not the first or
        last value in the array.

    Return the removed value.

     
    Example 1:

    Input: arr = [5,7,11,13]
Output: 9
Explanation: The previous array was [5,7,9,11,13].

    Example 2:

    Input: arr = [15,13,12]
Output: 14
Explanation: The previous array was [15,14,13,12].

     
    Constraints:

    
        3 <= arr.length <= 1000
        0 <= arr[i] <= 10^5
-----------------

# 1091_Shortest_Path_in_Binary_Matrix
# 1091. Shortest Path in Binary Matrix

In an N by N square grid, each cell is either empty (0) or blocked (1).

    A clear path from top-left to bottom-right has length k
        if and only if it is composed of cells C_1, C_2, ..., C_k such that:

    
        Adjacent cells C_i and C_{i+1} are connected 8-directionally
            (ie., they are different and share an edge or corner)
        
        C_1 is at location (0, 0) (ie. has value
            grid[0][0])
        
        C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
        
        If C_i is located at (r, c), then grid[r][c]
            is empty (ie. grid[r][c] == 0).
        
    

    Return the length of the shortest such clear path from top-left to bottom-right.  If
        such a path does not exist, return -1.

     

    Example 1:

    Input: [[0,1],[1,0]]

Output: 2
-----------------

# 1212_Team_Scores_in_Football_Tournament
# 1212. Team Scores in Football Tournament

Table: Teams

    +---------------+----------+
| Column Name   | Type     |
+---------------+----------+
| team_id       | int      |
| team_name     | varchar  |
+---------------+----------+
team_id is the primary key of this table.
Each row of this table represents a single football team.

    Table: Matches

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| match_id      | int     |
| host_team     | int     |
| guest_team    | int     |
| host_goals    | int     |
| guest_goals   | int     |
+---------------+---------+
match_id is the primary key of this table.
Each row is a record of a finished match between two different teams.
Teams host_team and guest_team are represented by their IDs in the teams table (team_id) and they scored host_goals and guest_goals goals respectively.

     
    You would like to compute the scores of all teams after all matches. Points are awarded as
    follows:

    
        A team receives three points if they win a match (Score strictly more goals
            than the opponent team).
        
        A team receives one point if they draw a match (Same number of goals as the
            opponent team).
        
        A team receives no points if they lose a match (Score less goals than the opponent
            team).
        
    

    Write an SQL query that selects the team_id, team_name and
        num_points of each team in the tournament after all described matches.
        Result table should be ordered by num_points (decreasing order). In case of
        a tie, order the records by team_id (increasing order).

    The query result format is in the following example:

    Teams table:
+-----------+--------------+
| team_id   | team_name    |
+-----------+--------------+
| 10        | Leetcode FC  |
| 20        | NewYork FC   |
| 30        | Atlanta FC   |
| 40        | Chicago FC   |
| 50        | Toronto FC   |
+-----------+--------------+

Matches table:
+------------+--------------+---------------+-------------+--------------+
| match_id   | host_team    | guest_team    | host_goals  | guest_goals  |
+------------+--------------+---------------+-------------+--------------+
| 1          | 10           | 20            | 3           | 0            |
| 2          | 30           | 10            | 2           | 2            |
| 3          | 10           | 50            | 5           | 1            |
| 4          | 20           | 30            | 1           | 0            |
| 5          | 50           | 30            | 1           | 0            |
+------------+--------------+---------------+-------------+--------------+

Result table:
+------------+--------------+---------------+
| team_id    | team_name    | num_points    |
+------------+--------------+---------------+
| 10         | Leetcode FC  | 7             |
| 20         | NewYork FC   | 3             |
| 50         | Toronto FC   | 3             |
| 30         | Atlanta FC   | 1             |
| 40         | Chicago FC   | 0             |
+------------+--------------+---------------+
-----------------

# 673_Number_of_Longest_Increasing_Subsequence
# 673. Number of Longest Increasing Subsequence

Given an unsorted array of integers, find the number of longest increasing subsequence.
    

    Example 1:
    Input: [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].

    

    Example 2:
    Input: [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

    

    Note:
        Length of the given array will be not exceed 2000 and the answer is guaranteed to be fit in
        32-bit signed int.
-----------------

# 704_Binary_Search
# 704. Binary Search

Given a sorted (in ascending order) integer array nums of
        n elements and a target value, write a function to search target
        in nums. If target exists, then return its index, otherwise return
        -1.

    
        Example 1:

    Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

    Example 2:

    Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

     

    Note:

    
        You may assume that all elements in nums are unique.
        n will be in the range [1, 10000].
        The value of each element in nums will be in the range [-9999,
            9999].
-----------------

# 1125_Smallest_Sufficient_Team
# 1125. Smallest Sufficient Team

In a project, you have a list of required skills req_skills, and a list of
        people.  The i-th person people[i] contains a list of
        skills that person has.

    Consider a sufficient team: a set of people such that for every required skill in
        req_skills, there is at least one person in the team who has that skill. 
        We can represent these teams by the index of each person: for example, team = [0, 1,
            3] represents the people with skills people[0],
        people[1], and people[3].

    Return any sufficient team of the smallest possible size, represented
        by the index of each person.

    You may return the answer in any order.  It is guaranteed an answer exists.

     
    Example 1:
    Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
Output: [0,2]

    Example 2:
    Input: req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
Output: [1,2]

     
    Constraints:

    
        1 <= req_skills.length <= 16
        1 <= people.length <= 60
        1 <= people[i].length, req_skills[i].length, people[i][j].length <=
            16
        Elements of req_skills and people[i] are (respectively)
            distinct.
        
        req_skills[i][j], people[i][j][k] are lowercase English letters.
        Every skill in people[i] is a skill in req_skills.
        It is guaranteed a sufficient team exists.
-----------------

# 1757_Recyclable_and_Low_Fat_Products
# 1757. Recyclable and Low Fat Products


-----------------

# 5_Longest_Palindromic_Substring
# 5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in
        s. You may assume that the maximum length of s is 1000.
    

    Example 1:

    Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

    Example 2:

    Input: "cbbd"
Output: "bb"
-----------------

# 298_Binary_Tree_Longest_Consecutive_Sequence
# 298. Binary Tree Longest Consecutive Sequence

Given a binary tree, find the length of the longest consecutive sequence path.

    The path refers to any sequence of nodes from some starting node to any node in the tree
        along the parent-child connections. The longest consecutive path need to be from parent to
        child (cannot be the reverse).

    Example 1:

    Input:

   1
    \
     3
    / \
   2   4
        \
         5

Output: 3

Explanation: Longest consecutive sequence path is 3-4-5, so return 3.

    Example 2:

    Input:

   2
    \
     3
    /
   2
  /
 1

Output: 2

Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
-----------------

# 521_Longest_Uncommon_Subsequence_I
# 521. Longest Uncommon Subsequence I

Given a group of two strings, you need to find the longest uncommon subsequence of this
        group of two strings.
        The longest uncommon subsequence is defined as the longest subsequence of one of these
        strings and this subsequence should not be any subsequence of the other strings.
    

    
        A subsequence is a sequence that can be derived from one sequence by deleting some
        characters without changing the order of the remaining elements. Trivially, any string is a
        subsequence of itself and an empty string is a subsequence of any string.
    

    
        The input will be two strings, and the output needs to be the length of the longest uncommon
        subsequence. If the longest uncommon subsequence doesn't exist, return -1.
    

    Example 1:
    Input: "aba", "cdc"
Output: 3
Explanation: The longest uncommon subsequence is "aba" (or "cdc"), because "aba" is a subsequence of "aba", but not a subsequence of any other strings in the group of two strings.

    

    Note:
    
        Both strings' lengths will not exceed 100.
        Only letters from a ~ z will appear in input strings.
-----------------

# 1064_Fixed_Point
# 1064. Fixed Point

Given an array A of distinct integers sorted in ascending order, return the
        smallest index i that satisfies A[i] == i.  Return
        -1 if no such i exists.

     

    Example 1:

    Input: [-10,-5,0,3,7]
Output: 3
Explanation: 
For the given array, A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3, thus the output is 3.

    Example 2:

    Input: [0,2,5,8,17]
Output: 0
Explanation: 
A[0] = 0, thus the output is 0.

    Example 3:

    Input: [-10,-5,3,4,7,9]
Output: -1
Explanation: 
There is no such i that A[i] = i, thus the output is -1.

     

    Note:

    
        1 <= A.length < 10^4
        -10^9 <= A[i] <= 10^9
-----------------

# 1232_Check_If_It_Is_a_Straight_Line
# 1232. Check If It Is a Straight Line

You are given an array coordinates, coordinates[i] = [x, y],
        where [x, y] represents the coordinate of a point. Check if these points make
        a straight line in the XY plane.

     

     
    Example 1:

    

    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

    Example 2:

    

    Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

     
    Constraints:

    
        2 <= coordinates.length <= 1000
        coordinates[i].length == 2
        -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
        coordinates contains no duplicate point.
-----------------

# 250_Count_Univalue_Subtrees
# 250. Count Univalue Subtrees

Given a binary tree, count the number of uni-value subtrees.

    A Uni-value subtree means all nodes of the subtree have the same value.

    Example :

    Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4
-----------------

# 1737_Change_Minimum_Characters_to_Satisfy_One_of_Three_Conditions
# 1737. Change Minimum Characters to Satisfy One of Three Conditions


-----------------

# 3_Longest_Substring_Without_Repeating_Characters
# 3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.
-----------------

# 1596_The_Most_Frequently_Ordered_Products_for_Each_Customer
# 1596. The Most Frequently Ordered Products for Each Customer


-----------------

# 1495_Friendly_Movies_Streamed_Last_Month
# 1495. Friendly Movies Streamed Last Month


-----------------

# 857_Minimum_Cost_to_Hire_K_Workers
# 857. Minimum Cost to Hire K Workers

There are N workers.  The i-th worker has a
        quality[i] and a minimum wage expectation wage[i].

    Now we want to hire exactly K workers to form a paid group. 
        When hiring a group of K workers, we must pay them according to the following rules:

    
        Every worker in the paid group should be paid in the ratio of their quality compared to
            other workers in the paid group.
        
        Every worker in the paid group must be paid at least their minimum wage expectation.
        
    

    Return the least amount of money needed to form a paid group satisfying the above
        conditions.
-----------------

# 72_Edit_Distance
# 72. Edit Distance

Given two words word1 and word2, find the minimum number of operations
        required to convert word1 to word2.

    You have the following 3 operations permitted on a word:

    
        Insert a character
        Delete a character
        Replace a character
    

    Example 1:

    Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

    Example 2:

    Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
-----------------

# 1808_Maximize_Number_of_Nice_Divisors
# 1808. Maximize Number of Nice Divisors


-----------------

# 881_Boats_to_Save_People
# 881. Boats to Save People

The i-th person has weight people[i], and each boat can carry a
        maximum weight of limit.

    Each boat carries at most 2 people at the same time, provided the sum of the weight of
        those people is at most limit.

    Return the minimum number of boats to carry every given person.  (It is guaranteed each
        person can be carried by a boat.)
-----------------

# 930_Binary_Subarrays_With_Sum
# 930. Binary Subarrays With Sum

In an array A of 0s and 1s, how many
        non-empty subarrays have sum S?

     

    Example 1:

    Input: A = [1,0,1,0,1], S = 2
Output: 4
Explanation: 
The 4 subarrays are bolded below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

     

    Note:

    
        A.length <= 30000
        0 <= S <= A.length
        A[i] is either 0 or 1.
-----------------

# 728_Self_Dividing_Numbers
# 728. Self Dividing Numbers

A self-dividing number is a number that is divisible by every digit it contains.
    
    
        For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2
        == 0, and 128 % 8 == 0.
    
    
        Also, a self-dividing number is not allowed to contain the digit zero.
    
    
        Given a lower and upper number bound, output a list of every possible self dividing number,
        including the bounds if possible.
    
    Example 1:
    Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

    

    Note:
    The boundaries of each input argument are 1 <= left <= right <= 10000.
-----------------

# 336_Palindrome_Pairs
# 336. Palindrome Pairs

Given a list of unique words, find all pairs of distinct indices (i,
        j) in the given list, so that the concatenation of the two words, i.e. words[i]
        + words[j] is a palindrome.

    Example 1:
-----------------

# 970_Powerful_Integers
# 970. Powerful Integers

Given two positive integers x and y, an integer is
        powerful if it is equal to x^i + y^j for some integers
        i >= 0 and j >= 0.

    Return a list of all powerful integers that have value less than or equal to bound.
    

    You may return the answer in any order.  In your answer, each value should occur at most
        once.
-----------------

# 987_Vertical_Order_Traversal_of_a_Binary_Tree
# 987. Vertical Order Traversal of a Binary Tree

Given a binary tree, return the vertical order traversal of its nodes values.
    

    For each node at position (X, Y), its left and right children respectively will
        be at positions (X-1, Y-1) and (X+1, Y-1).

    Running a vertical line from X = -infinity to X = +infinity,
        whenever the vertical line touches some nodes, we report the values of the nodes in order
        from top to bottom (decreasing Y coordinates).

    If two nodes have the same position, then the value of the node that is reported first is the
        value that is smaller.

    Return an list of non-empty reports in order of X coordinate.  Every
        report will have a list of values of nodes.

     

    Example 1:
-----------------

# 886_Possible_Bipartition
# 886. Possible Bipartition

Given a set of N people (numbered 1, 2, ..., N), we would like
        to split everyone into two groups of any size.

    Each person may dislike some other people, and they should not go into the same
        group. 

    Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people
        numbered a and b into the same group.

    Return true if and only if it is possible to split everyone into two groups
        in this way.
-----------------

# 1823_Find_the_Winner_of_the_Circular_Game
# 1823. Find the Winner of the Circular Game


-----------------

# 1762_Buildings_With_an_Ocean_View
# 1762. Buildings With an Ocean View


-----------------

# 402_Remove_K_Digits
# 402. Remove K Digits

Given a non-negative integer num represented as a string, remove k digits from
        the number so that the new number is the smallest possible.
    

    Note:
    
        The length of num is less than 10002 and will be ≥ k.
        The given num does not contain any leading zero.
    
    
    

    Example 1:
    Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

    

    Example 2:
    Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

    

    Example 3:
    Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
-----------------

# 827_Making_A_Large_Island
# 827. Making A Large Island

In a 2D grid of 0s and 1s, we change at most one 0 to
        a 1.

    After, what is the size of the largest island? (An island is a 4-directionally connected
        group of 1s).

    Example 1:

    Input: [[1, 0], [0, 1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

    Example 2:

    Input: [[1, 1], [1, 0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

    Example 3:

    Input: [[1, 1], [1, 1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.

     

    Notes:

    
        1 <= grid.length = grid[0].length <= 50.
        0 <= grid[i][j] <= 1.
-----------------

# 75_Sort_Colors
# 75. Sort Colors

Given an array with n objects colored red, white or blue, sort them in-place so
        that objects of the same color are adjacent, with the colors in the order red, white and
        blue.

    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue
        respectively.

    Note: You are not suppose to use the library's sort function for
        this problem.

    Example:

    Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

    Follow up:

    
        A rather straight forward solution is a two-pass algorithm using counting sort.
            First, iterate the array counting number of 0's, 1's, and 2's, then
            overwrite array with total number of 0's, then 1's and followed by 2's.
        
        Could you come up with a one-pass algorithm using only constant space?
-----------------

# 894_All_Possible_Full_Binary_Trees
# 894. All Possible Full Binary Trees

A full binary tree is a binary tree where each node has exactly 0 or 2 children.
    

    Return a list of all possible full binary trees with N nodes.  Each element
        of the answer is the root node of one possible tree.

    Each node of each tree in the answer must have node.val
        = 0.

    You may return the final list of trees in any order.

     

    Example 1:

    Input: 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Explanation:

     

    Note:

    
        1 <= N <= 20
-----------------

# 1779_Find_Nearest_Point_That_Has_the_Same_X_or_Y_Coordinate
# 1779. Find Nearest Point That Has the Same X or Y Coordinate


-----------------

# 601_Human_Traffic_of_Stadium
# 601. Human Traffic of Stadium

X city built a new stadium, each day many people visit it and the stats are saved as these
        columns: id, visit_date, people

    Please write a query to display the records which have 3 or more consecutive rows and the
        amount of people more than 100(inclusive).
    For example, the table stadium:

    +------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+

    For the sample data above, the output is:

    +------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+

    Note:
        Each day only have one row record, and the dates are increasing with id increasing.
-----------------

# 1829_Maximum_XOR_for_Each_Query
# 1829. Maximum XOR for Each Query


-----------------

# 316_Remove_Duplicate_Letters
# 316. Remove Duplicate Letters

Given a string which contains only lowercase letters, remove duplicate letters so that every
        letter appears once and only once. You must make sure your result is the smallest in
        lexicographical order among all possible results.

    Example 1:

    Input: "bcabc"
Output: "abc"

    Example 2:

    Input: "cbacdcbc"
Output: "acdb"
-----------------

# 435_Non-overlapping_Intervals
# 435. Non-overlapping Intervals

Given a collection of intervals, find the minimum number of intervals you need to remove to
        make the rest of the intervals non-overlapping.

    
    

     

    Example 1:

    Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

    Example 2:

    Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

    Example 3:

    Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

     

    Note:

    
        You may assume the interval's end point is always bigger than its start point.
        Intervals like [1,2] and [2,3] have borders "touching" but they don't
            overlap each other.
-----------------

# 320_Generalized_Abbreviation
# 320. Generalized Abbreviation

Write a function to generate the generalized abbreviations of a word. 

    Note: The order of the output does not matter.

    Example:

    Input: "word"
Output:
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
-----------------

# 1079_Letter_Tile_Possibilities
# 1079. Letter Tile Possibilities

You have a set of tiles, where each tile has one letter tiles[i]
        printed on it.  Return the number of possible non-empty sequences of letters you can
        make.

     

    Example 1:

    Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
-----------------

# 829_Consecutive_Numbers_Sum
# 829. Consecutive Numbers Sum

Given a positive integer N, how many ways can we write it as a sum of consecutive
        positive integers?

    Example 1:

    Input: 5
Output: 2
Explanation: 5 = 5 = 2 + 3

    Example 2:

    Input: 9
Output: 3
Explanation: 9 = 9 = 4 + 5 = 2 + 3 + 4

    Example 3:

    Input: 15
Output: 4
Explanation: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

    Note: 1 <= N <= 10 ^ 9.
-----------------

# 200_Number_of_Islands
# 200. Number of Islands

Given a 2d grid map of '1's (land) and '0's
        (water), count the number of islands. An island is surrounded by water and is formed by
        connecting adjacent lands horizontally or vertically. You may assume all four edges of the
        grid are all surrounded by water.

    Example 1:

    Input:
11110
11010
11000
00000

Output: 1

    Example 2:

    Input:
11000
11000
00100
00011

Output: 3
-----------------

# 1850_Minimum_Adjacent_Swaps_to_Reach_the_Kth_Smallest_Number
# 1850. Minimum Adjacent Swaps to Reach the Kth Smallest Number


-----------------

# 53_Maximum_Subarray
# 53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at
        least one number) which has the largest sum and return its sum.

    Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

    Follow up:

    If you have figured out the O(n) solution, try coding another solution using the
        divide and conquer approach, which is more subtle.
-----------------

# 225_Implement_Stack_using_Queues
# 225. Implement Stack using Queues

Implement the following operations of a stack using queues.

    
        push(x) -- Push element x onto stack.
        pop() -- Removes the element on top of the stack.
        top() -- Get the top element.
        empty() -- Return whether the stack is empty.
    

    Example:

    MyStack stack = new MyStack();

stack.push(1);
stack.push(2);
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false

    Notes:

    
        You must use only standard operations of a queue -- which means only push
            to back, peek/pop from front, size, and is
            empty operations are valid.
        
        Depending on your language, queue may not be supported natively. You may simulate a
            queue by using a list or deque (double-ended queue), as long as you use only standard
            operations of a queue.
        
        You may assume that all operations are valid (for example, no pop or top operations will
            be called on an empty stack).
-----------------

# 1094_Car_Pooling
# 1094. Car Pooling

You are driving a vehicle that has capacity empty seats initially available
        for passengers.  The vehicle only drives east (ie. it
        cannot turn around and drive west.)

    Given a list of trips, trip[i] = [num_passengers, start_location,
        end_location] contains information about the i-th trip: the number
        of passengers that must be picked up, and the locations to pick them up and drop them off. 
        The locations are given as the number of kilometers due east from your vehicle's
        initial location.

    Return true if and only if it is possible to pick up and drop off all
        passengers for all the given trips. 

     

    Example 1:

    Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
-----------------

# 1289_Minimum_Falling_Path_Sum_II
# 1289. Minimum Falling Path Sum II


-----------------

# 205_Isomorphic_Strings
# 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

    Two strings are isomorphic if the characters in s can be replaced to get t.
    

    All occurrences of a character must be replaced with another character while preserving the
        order of characters. No two characters may map to the same character but a character may map
        to itself.

    Example 1:

    Input: s = "egg", t = "add"
Output: true

    Example 2:

    Input: s = "foo", t = "bar"
Output: false

    Example 3:

    Input: s = "paper", t = "title"
Output: true

    Note:
        You may assume both s and t have the same length.
-----------------

# 1732_Find_the_Highest_Altitude
# 1732. Find the Highest Altitude


-----------------

# 103_Binary_Tree_Zigzag_Level_Order_Traversal
# 103. Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the zigzag level order traversal of its nodes' values.
        (ie, from left to right, then right to left for the next level and alternate between).

    
        For example:
        Given binary tree [3,9,20,null,null,15,7],
        3
   / \
  9  20
    /  \
   15   7

    
    
        return its zigzag level order traversal as:
    [
  [3],
  [20,9],
  [15,7]
]
-----------------

# 670_Maximum_Swap
# 670. Maximum Swap

Given a non-negative integer, you could swap two digits at most once to get the
        maximum valued number. Return the maximum valued number you could get.
    

    Example 1:
    Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

    

    Example 2:
    Input: 9973
Output: 9973
Explanation: No swap.

    

    Note:
    
        The given number is in the range [0, 108]
-----------------

# 1069_Product_Sales_Analysis_II
# 1069. Product Sales Analysis II

Table: Sales

    +-------------+-------+
| Column Name | Type  |
+-------------+-------+
| sale_id     | int   |
| product_id  | int   |
| year        | int   |
| quantity    | int   |
| price       | int   |
+-------------+-------+
sale_id is the primary key of this table.
product_id is a foreign key to Product table.
Note that the price is per unit.

    Table: Product

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
+--------------+---------+
product_id is the primary key of this table.

     

    Write an SQL query that reports the total quantity sold for every product id.

    The query result format is in the following example:

    Sales table:
+---------+------------+------+----------+-------+
| sale_id | product_id | year | quantity | price |
+---------+------------+------+----------+-------+
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |
+---------+------------+------+----------+-------+

Product table:
+------------+--------------+
| product_id | product_name |
+------------+--------------+
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |
+------------+--------------+

Result table:
+--------------+----------------+
| product_id   | total_quantity |
+--------------+----------------+
| 100          | 22             |
| 200          | 15             |
+--------------+----------------+
-----------------

# 1386_Cinema_Seat_Allocation
# 1386. Cinema Seat Allocation


-----------------

# 163_Missing_Ranges
# 163. Missing Ranges

Given a sorted integer array nums, where the range of elements are
        in the inclusive range [lower, upper],
        return its missing ranges.

    Example:

    Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
-----------------

# 1561_Maximum_Number_of_Coins_You_Can_Get
# 1561. Maximum Number of Coins You Can Get


-----------------

# 281_Zigzag_Iterator
# 281. Zigzag Iterator

Given two 1d vectors, implement an iterator to return their elements alternately.

    Example:

    Input:
v1 = [1,2]
v2 = [3,4,5,6]

Output: [1,3,2,4,5,6]

Explanation: By calling next repeatedly until hasNext returns false,
             the order of elements returned by next should be: [1,3,2,4,5,6].

    Follow up: What if you are given k 1d vectors? How well can your code be
        extended to such cases?

    Clarification for the follow up question:
        The "Zigzag" order is not clearly defined and is ambiguous for k >
            2 cases. If "Zigzag" does not look right to you, replace "Zigzag"
        with "Cyclic". For example:

    Input:
[1,2,3]
[4,5,6,7]
[8,9]

Output: [1,4,8,2,5,9,3,6,7].
-----------------

# 8_String_to_Integer_(atoi)
# 8. String to Integer (atoi)

Implement atoi which converts a string to an integer.

    The function first discards as many whitespace characters as necessary until the first
        non-whitespace character is found. Then, starting from this character, takes an optional
        initial plus or minus sign followed by as many numerical digits as possible, and interprets
        them as a numerical value.

    The string can contain additional characters after those that form the integral number, which
        are ignored and have no effect on the behavior of this function.

    If the first sequence of non-whitespace characters in str is not a valid integral number, or
        if no such sequence exists because either str is empty or it contains only whitespace
        characters, no conversion is performed.

    If no valid conversion could be performed, a zero value is returned.

    Note:

    
        Only the space character ' ' is considered as whitespace character.
        
        Assume we are dealing with an environment which could only store integers within the
            32-bit signed integer range: [−231,  231 −
            1]. If the numerical value is out of the range of representable values, INT_MAX (231 −
            1) or INT_MIN (−231) is returned.
        
    

    Example 1:

    Input: "42"
Output: 42

    Example 2:

    Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

    Example 3:

    Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

    Example 4:

    Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.

    Example 5:

    Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
-----------------

# 1703_Minimum_Adjacent_Swaps_for_K_Consecutive_Ones
# 1703. Minimum Adjacent Swaps for K Consecutive Ones


-----------------

# 1673_Find_the_Most_Competitive_Subsequence
# 1673. Find the Most Competitive Subsequence


-----------------

# 648_Replace_Words
# 648. Replace Words

In English, we have a concept called root, which can be followed by some other
        words to form another longer word - let's call this word successor. For
        example, the root an, followed by other, which can form another
        word another.

    Now, given a dictionary consisting of many roots and a sentence. You need to replace all the
        successor in the sentence with the root forming it. If a successor
        has many roots can form it, replace it with the root with the shortest length.
    

    You need to output the sentence after the replacement.

    Example 1:

    Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

     

    Note:

    
        The input will only have lower-case letters.
        1 <= dict words number <= 1000
        1 <= sentence words number <= 1000
        1 <= root length <= 100
        1 <= sentence words length <= 1000
-----------------

# 846_Hand_of_Straights
# 846. Hand of Straights

Alice has a hand of cards, given as an array of integers.

    Now she wants to rearrange the cards into groups so that each group is size W,
        and consists of W consecutive cards.

    Return true if and only if she can.

     

    
    

    Example 1:

    Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].

    Example 2:

    Input: hand = [1,2,3,4,5], W = 4
Output: false
Explanation: Alice's hand can't be rearranged into groups of 4.

     

    Note:

    
        1 <= hand.length <= 10000
        0 <= hand[i] <= 10^9
        1 <= W <= hand.length
-----------------

# 1257_Smallest_Common_Region
# 1257. Smallest Common Region


-----------------

# 560_Subarray_Sum_Equals_K
# 560. Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of
        continuous subarrays whose sum equals to k.

    Example 1:
    Input:nums = [1,1,1], k = 2
Output: 2

    

    Note:
    
        The length of the array is in range [1, 20,000].
        The range of numbers in the array is [-1000, 1000] and the range of the integer k
            is [-1e7, 1e7].
-----------------

# 825_Friends_Of_Appropriate_Ages
# 825. Friends Of Appropriate Ages

Some people will make friend requests. The list of their ages is given and ages[i] is
        the age of the ith person. 

    Person A will NOT friend request person B (B != A) if any of the following conditions are
        true:

    
        age[B] <= 0.5 * age[A] + 7
        age[B] > age[A]
        age[B] > 100 && age[A] < 100
    

    Otherwise, A will friend request B.

    Note that if A requests B, B does not necessarily request A.  Also, people will not
        friend request themselves.

    How many total friend requests are made?

    Example 1:

    Input: [16,16]
Output: 2
Explanation: 2 people friend request each other.

    Example 2:

    Input: [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.

    Example 3:

    Input: [20,30,100,110,120]
Output: 
Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.

     

    Notes:

    
        1 <= ages.length <= 20000.
        1 <= ages[i] <= 120.
-----------------

# 869_Reordered_Power_of_2
# 869. Reordered Power of 2

Starting with a positive integer N, we reorder the digits in any order
        (including the original order) such that the leading digit is not zero.

    Return true if and only if we can do this in a way such that the resulting
        number is a power of 2.
-----------------

# 105_Construct_Binary_Tree_from_Preorder_and_Inorder_Traversal
# 105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

    Note:
        You may assume that duplicates do not exist in the tree.

    For example, given

    preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

    Return the following binary tree:

        3
   / \
  9  20
    /  \
   15   7
-----------------

# 1514_Path_with_Maximum_Probability
# 1514. Path with Maximum Probability


-----------------

# 590_N-ary_Tree_Postorder_Traversal
# 590. N-ary Tree Postorder Traversal

Given an n-ary tree, return the postorder traversal of its nodes' values.

    For example, given a 3-ary tree:

     

    
        

     

    Return its postorder traversal as: [5,6,3,2,4,1].
     

    Note:

    Recursive solution is trivial, could you do it iteratively?
-----------------

# 1698_Number_of_Distinct_Substrings_in_a_String
# 1698. Number of Distinct Substrings in a String

Hints:

    Hint 1
    Calculate the prefix hashing array for s.
    Hint 2
    Use the prefix hashing array to calculate the hashing value of each substring.
    Hint 3
    Compare the hashing values to determine the unique substrings.
    Hint 4
    There could be collisions if you use hashing, what about double hashing.
-----------------

# 1_Two_Sum
# 1. Two Sum

Given an array of integers, return indices of the two numbers such that they
        add up to a specific target.

    You may assume that each input would have exactly one solution, and
        you may not use the same element twice.

    Example:

    Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
-----------------

# 1291_Sequential_Digits
# 1291. Sequential Digits


-----------------

# 452_Minimum_Number_of_Arrows_to_Burst_Balloons
# 452. Minimum Number of Arrows to Burst Balloons

There are a number of spherical balloons spread in two-dimensional space. For each balloon,
        provided input is the start and end coordinates of the horizontal diameter. Since it's
        horizontal, y-coordinates don't matter and hence the x-coordinates of start and end of
        the diameter suffice. Start is always smaller than end. There will be at most 104
        balloons.

    An arrow can be shot up exactly vertically from different points along the x-axis. A balloon
        with xstart and xend bursts by an arrow shot at x if xstart
        ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An
        arrow once shot keeps travelling up infinitely. The problem is to find the minimum number of
        arrows that must be shot to burst all balloons.

    Example:

    Input:
[[10,16], [2,8], [1,6], [7,12]]

Output:
2

Explanation:
One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).
-----------------

# 379_Design_Phone_Directory
# 379. Design Phone Directory

Design a Phone Directory which supports the following operations:

    
    
        get: Provide a number which is not assigned to anyone.
        check: Check if a number is available or not.
        release: Recycle or release a number.
    
    

    Example:
    // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
PhoneDirectory directory = new PhoneDirectory(3);

// It can return any available phone number. Here we assume it returns 0.
directory.get();

// Assume it returns 1.
directory.get();

// The number 2 is available, so return true.
directory.check(2);

// It returns 2, the only number that is left.
directory.get();

// The number 2 is no longer available, so return false.
directory.check(2);

// Release number 2 back to the pool.
directory.release(2);

// Number 2 is available again, return true.
directory.check(2);
-----------------

# 464_Can_I_Win
# 464. Can I Win

In the "100 game," two players take turns adding, to a running total, any integer from 1..10.
        The player who first causes the running total to reach or exceed 100 wins. 

    What if we change the game so that players cannot re-use integers? 

    For example, two players might take turns drawing from a common pool of numbers of 1..15
        without replacement until they reach a total >= 100.

    Given an integer maxChoosableInteger and another integer
        desiredTotal, determine if the first player to move can force a win, assuming
        both players play optimally. 

    You can always assume that maxChoosableInteger will not be larger than 20 and
        desiredTotal will not be larger than 300.
    

    Example
    Input:
maxChoosableInteger = 10
desiredTotal = 11

Output:
false

Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
Same with other integers chosen by the first player, the second player will always win.
-----------------

# 1395_Count_Number_of_Teams
# 1395. Count Number of Teams


-----------------

# 1448_Count_Good_Nodes_in_Binary_Tree
# 1448. Count Good Nodes in Binary Tree


-----------------

# 260_Single_Number_III
# 260. Single Number III

Given an array of numbers nums, in which exactly two elements appear only once
        and all the other elements appear exactly twice. Find the two elements that appear only
        once.

    Example:

    Input:  [1,2,1,3,2,5]
Output: [3,5]

    Note:

    
        The order of the result is not important. So in the above example, [5, 3]
            is also correct.
        
        Your algorithm should run in linear runtime complexity. Could you implement it using
            only constant space complexity?
-----------------

# 613_Shortest_Distance_in_a_Line
# 613. Shortest Distance in a Line

Table point holds the x coordinate of some points on x-axis in a plane, which are
    all integers.
     
    Write a query to find the shortest distance between two points in these points.

     

    | x   |
|-----|
| -1  |
| 0   |
| 2   |

     
    The shortest distance is '1' obviously, which is from point '-1' to '0'.
    So the output is as below:

     

    | shortest|
|---------|
| 1       |

     
    Note: Every point is unique, which means there is no duplicates in table
    point.

     
    Follow-up: What if all these points have an id and are arranged from the left most to the
    right most of x axis?
-----------------

# 1288_Remove_Covered_Intervals
# 1288. Remove Covered Intervals


-----------------

# 790_Domino_and_Tromino_Tiling
# 790. Domino and Tromino Tiling

We have two types of tiles: a 2x1 domino shape, and an "L" tromino shape. These
        shapes may be rotated.

    XX  <- domino

XX  <- "L" tromino
X

    Given N, how many ways are there to tile a 2 x N board? Return your answer modulo
        10^9 + 7.

    (In a tiling, every square must be covered by a tile. Two tilings are different if and only
        if there are two 4-directionally adjacent cells on the board such that exactly one of the
        tilings has both squares occupied by a tile.)

    Example:
Input: 3
Output: 5
Explanation:
The five different ways are listed below, different letters indicates different tiles:
XYZ XXZ XYY XXY XYY
XYZ YYZ XZZ XYY XXY

    Note:

    
        N  will be in range [1, 1000].
-----------------

# 919_Complete_Binary_Tree_Inserter
# 919. Complete Binary Tree Inserter

A complete binary tree is a binary tree in which every level, except possibly the
        last, is completely filled, and all nodes are as far left as possible.

    Write a data structure CBTInserter that is initialized with a complete
        binary tree and supports the following operations:

    
        CBTInserter(TreeNode root) initializes the data structure on a given tree with
            head node root;
        
        CBTInserter.insert(int v) will insert a TreeNode into the
            tree with value node.val = v so that the tree remains complete,
            and returns the value of the parent of the inserted
                TreeNode;
        
        CBTInserter.get_root() will return the head node of the tree.
-----------------

# 31_Next_Permutation
# 31. Next Permutation

Implement next permutation, which rearranges numbers into the
        lexicographically next greater permutation of numbers.

    If such arrangement is not possible, it must rearrange it as the lowest possible order (ie,
        sorted in ascending order).

    The replacement must be in-place and use only
        constant extra memory.

    Here are some examples. Inputs are in the left-hand column and its corresponding outputs are
        in the right-hand column.

    1,2,3 → 1,3,2
        3,2,1 → 1,2,3
        1,1,5 → 1,5,1
-----------------

# 54_Spiral_Matrix
# 54. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns),
        return all elements of the matrix in spiral order.

    Example 1:

    Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

    Example 2:
    Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
-----------------

# 1735_Count_Ways_to_Make_Array_With_Product
# 1735. Count Ways to Make Array With Product


-----------------

# 1728_Cat_and_Mouse_II
# 1728. Cat and Mouse II


-----------------

# 1521_Find_a_Value_of_a_Mysterious_Function_Closest_to_Target
# 1521. Find a Value of a Mysterious Function Closest to Target


-----------------

# 4_Median_of_Two_Sorted_Arrays
# 4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

    Find the median of the two sorted arrays. The overall run time complexity should be O(log
        (m+n)).

    You may assume nums1 and nums2 cannot be both empty.
    

    Example 1:

    nums1 = [1, 3]
nums2 = [2]

The median is 2.0

    Example 2:

    nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
-----------------

# 908_Smallest_Range_I
# 908. Smallest Range I

Given an array A of integers, for each integer A[i] we may choose
        any x with -K <= x <= K, and add x to A[i].
    

    After this process, we have some array B.

    Return the smallest possible difference between the maximum value of B and
        the minimum value of B.
-----------------

# 142_Linked_List_Cycle_II
# 142. Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return
        null.

    To represent a cycle in the given linked list, we use an integer pos which
        represents the position (0-indexed) in the linked list where tail connects to. If
        pos is -1, then there is no cycle in the linked list.

    Note: Do not modify the linked list.

     

    Example 1:

    Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

    

    Example 2:

    Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

    

    Example 3:

    Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

    

     

    Follow-up:
        Can you solve it without using extra space?
-----------------

# 17_Letter_Combinations_of_a_Phone_Number
# 17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter
        combinations that the number could represent.

    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that
        1 does not map to any letters.

    
        
    

    Example:

    Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

    Note:

    Although the above answer is in lexicographical order, your answer could be in any order you
        want.
-----------------

# 1727_Largest_Submatrix_With_Rearrangements
# 1727. Largest Submatrix With Rearrangements


-----------------

# 1340_Jump_Game_V
# 1340. Jump Game V


-----------------

# 1167_Minimum_Cost_to_Connect_Sticks
# 1167. Minimum Cost to Connect Sticks

You have some sticks with positive integer lengths.

    You can connect any two sticks of lengths X and Y into one stick by
        paying a cost of X + Y.  You perform this action until there is one stick
        remaining.

    Return the minimum cost of connecting all the given sticks into one stick
        in this way.

     
    Example 1:
    Input: sticks = [2,4,3]
Output: 14

    Example 2:
    Input: sticks = [1,8,3,5]
Output: 30

     
    Constraints:

    
        1 <= sticks.length <= 10^4
        1 <= sticks[i] <= 10^4
-----------------

# 757_Set_Intersection_Size_At_Least_Two
# 757. Set Intersection Size At Least Two

An integer interval [a, b] (for integers a < b) is a set of all
        consecutive integers from a to b, including a and
        b.
    
    
        Find the minimum size of a set S such that for every integer interval A in
        intervals, the intersection of S with A has size at least 2.
    

    Example 1:
    Input: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
Output: 3
Explanation:
Consider the set S = {2, 3, 4}.  For each interval, there are at least 2 elements from S in the interval.
Also, there isn't a smaller size set that fulfills the above condition.
Thus, we output the size of this set, which is 3.

    

    Example 2:
    Input: intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
Output: 5
Explanation:
An example of a minimum sized set is {1, 2, 3, 4, 5}.

    

    Note:
    
        intervals will have length in range [1, 3000].
        intervals[i] will have length 2, representing some integer
            interval.
        
        intervals[i][j] will be an integer in [0, 10^8].
-----------------

# 1168_Optimize_Water_Distribution_in_a_Village
# 1168. Optimize Water Distribution in a Village

There are n houses in a village. We want to
        supply water for all the houses by building wells and laying pipes.

    For each house i, we can either build a well inside it directly with cost wells[i],
        or pipe in water from another well to it. The costs to lay pipes between houses are given by
        the array pipes, where each pipes[i] = [house1, house2, cost] represents
        the cost to connect house1 and house2 together
        using a pipe. Connections are bidirectional.

    Find the minimum total cost to supply water to all houses.

     
    Example 1:

    

    Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
Output: 3
Explanation: 
The image shows the costs of connecting houses using pipes.
The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.

     
    Constraints:

    
        1 <= n <= 10000
        wells.length == n
        0 <= wells[i] <= 10^5
        1 <= pipes.length <= 10000
        1 <= pipes[i][0], pipes[i][1] <= n
        0 <= pipes[i][2] <= 10^5
        pipes[i][0] != pipes[i][1]
-----------------

# 1553_Minimum_Number_of_Days_to_Eat_N_Oranges
# 1553. Minimum Number of Days to Eat N Oranges


-----------------

# 248_Strobogrammatic_Number_III
# 248. Strobogrammatic Number III

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at
        upside down).

    Write a function to count the total strobogrammatic numbers that exist in the range of low
        <= num <= high.

    Example:

    Input: low = "50", high = "100"
Output: 3
Explanation: 69, 88, and 96 are three strobogrammatic numbers.

    Note:
        Because the range might be a large number, the low and high numbers are
        represented as string.
-----------------

# 1037_Valid_Boomerang
# 1037. Valid Boomerang

A boomerang is a set of 3 points that are all distinct and not in a
        straight line.

    Given a list of three points in the plane, return whether these points are a
        boomerang.

     

    Example 1:

    Input: [[1,1],[2,3],[3,2]]
Output: true
-----------------

# 1187_Make_Array_Strictly_Increasing
# 1187. Make Array Strictly Increasing

Given two integer arrays arr1 and arr2, return the minimum
        number of operations (possibly zero) needed to make arr1 strictly
        increasing.

    In one operation, you can choose two indices 0 <= i <
        arr1.length and 0 <= j < arr2.length and do the
        assignment arr1[i] = arr2[j].

    If there is no way to make arr1 strictly increasing, return -1.
    

     
    Example 1:

    Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
Output: 1
Explanation: Replace 5 with 2, then arr1 = [1, 2, 3, 6, 7].

    Example 2:

    Input: arr1 = [1,5,3,6,7], arr2 = [4,3,1]
Output: 2
Explanation: Replace 5 with 3 and then replace 3 with 4. arr1 = [1, 3, 4, 6, 7].

    Example 3:

    Input: arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
Output: -1
Explanation: You can't make arr1 strictly increasing.

     
    Constraints:

    
        1 <= arr1.length, arr2.length <= 2000
        0 <= arr1[i], arr2[i] <= 10^9
-----------------

# 1077_Project_Employees_III
# 1077. Project Employees III

Table: Project

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| project_id  | int     |
| employee_id | int     |
+-------------+---------+
(project_id, employee_id) is the primary key of this table.
employee_id is a foreign key to Employee table.

    Table: Employee

    +------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| employee_id      | int     |
| name             | varchar |
| experience_years | int     |
+------------------+---------+
employee_id is the primary key of this table.

     

    Write an SQL query that reports the most experienced employees in each
        project. In case of a tie, report all employees with the maximum number of experience years.
    

    The query result format is in the following example:

    Project table:
+-------------+-------------+
| project_id  | employee_id |
+-------------+-------------+
| 1           | 1           |
| 1           | 2           |
| 1           | 3           |
| 2           | 1           |
| 2           | 4           |
+-------------+-------------+

Employee table:
+-------------+--------+------------------+
| employee_id | name   | experience_years |
+-------------+--------+------------------+
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 3                |
| 4           | Doe    | 2                |
+-------------+--------+------------------+

Result table:
+-------------+---------------+
| project_id  | employee_id   |
+-------------+---------------+
| 1           | 1             |
| 1           | 3             |
| 2           | 1             |
+-------------+---------------+
Both employees with id 1 and 3 have the most experience among the employees of the first project. For the second project, the employee with id 1 has the most experience.
-----------------

# 1787_Make_the_XOR_of_All_Segments_Equal_to_Zero
# 1787. Make the XOR of All Segments Equal to Zero


-----------------

# 1083_Sales_Analysis_II
# 1083. Sales Analysis II

Table: Product

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
| unit_price   | int     |
+--------------+---------+
product_id is the primary key of this table.

    Table: Sales

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| seller_id   | int     |
| product_id  | int     |
| buyer_id    | int     |
| sale_date   | date    |
| quantity    | int     |
| price       | int     |
+------ ------+---------+
This table has no primary key, it can have repeated rows.
product_id is a foreign key to Product table.

     

    Write an SQL query that reports the buyers who have bought S8 but
        not iPhone. Note that S8 and iPhone are products present in the
        Product table.

    The query result format is in the following example:

    Product table:
+------------+--------------+------------+
| product_id | product_name | unit_price |
+------------+--------------+------------+
| 1          | S8           | 1000       |
| 2          | G4           | 800        |
| 3          | iPhone       | 1400       |
+------------+--------------+------------+

Sales table:
+-----------+------------+----------+------------+----------+-------+
| seller_id | product_id | buyer_id | sale_date  | quantity | price |
+-----------+------------+----------+------------+----------+-------+
| 1         | 1          | 1        | 2019-01-21 | 2        | 2000  |
| 1         | 2          | 2        | 2019-02-17 | 1        | 800   |
| 2         | 1          | 3        | 2019-06-02 | 1        | 800   |
| 3         | 3          | 3        | 2019-05-13 | 2        | 2800  |
+-----------+------------+----------+------------+----------+-------+

Result table:
+-------------+
| buyer_id    |
+-------------+
| 1           |
+-------------+
The buyer with id 1 bought an S8 but didn't buy an iPhone. The buyer with id 3 bought both.
-----------------

# 656_Coin_Path
# 656. Coin Path

Given an array A (index starts at 1) consisting of N integers:
        A1, A2, ..., AN and an integer B. The
        integer B denotes that from any place (suppose the index is i) in
        the array A, you can jump to any one of the place in the array A
        indexed i+1, i+2, …, i+B if this place can be
        jumped to. Also, if you step on the index i, you have to pay Ai coins.
        If Ai is -1, it means you can’t jump to the place indexed
        i in the array.

    Now, you start from the place indexed 1 in the array A, and your
        aim is to reach the place indexed N using the minimum coins. You need to return
        the path of indexes (starting from 1 to N) in the array you should take to get to the place
        indexed N using minimum coins.

    If there are multiple paths with the same cost, return the lexicographically smallest such
        path.

    If it's not possible to reach the place indexed N then you need to return an empty
        array.

    Example 1:

    Input: [1,2,4,-1,2], 2
Output: [1,3,5]

     

    Example 2:

    Input: [1,2,4,-1,2], 1
Output: []

     

    Note:

    
        Path Pa1, Pa2, ..., Pan is lexicographically
            smaller than Pb1, Pb2, ..., Pbm, if and only if at the
            first i where Pai and Pbi differ,
            Pai < Pbi; when no such i exists,
            then n < m.
        
        A1 >= 0. A2, ..., AN (if exist) will in the range of
            [-1, 100].
        
        Length of A is in the range of [1, 1000].
        B is in the range of [1, 100].
-----------------

# 474_Ones_and_Zeroes
# 474. Ones and Zeroes

In the computer world, use restricted resource you have to generate maximum benefit is what
        we always want to pursue.

    For now, suppose you are a dominator of m 0s and n 1s
        respectively. On the other hand, there is an array with strings consisting of only
        0s and 1s.

    Now your task is to find the maximum number of strings that you can form with given m
        0s and n 1s. Each 0 and 1 can be
        used at most once.

    Note:

    
        The given numbers of 0s and 1s will both not exceed
            100
        The size of given string array won't exceed 600.
    

     

    Example 1:

    Input: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
Output: 4

Explanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are “10,”0001”,”1”,”0”

     

    Example 2:

    Input: Array = {"10", "0", "1"}, m = 1, n = 1
Output: 2

Explanation: You could form "10", but then you'd have nothing left. Better form "0" and "1".
-----------------

# 111_Minimum_Depth_of_Binary_Tree
# 111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

    The minimum depth is the number of nodes along the shortest path from the root node down to
        the nearest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
   / \
  9  20
    /  \
   15   7

    return its minimum depth = 2.
-----------------

# 540_Single_Element_in_a_Sorted_Array
# 540. Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly
        twice, except for one element which appears exactly once. Find this single element that
        appears only once.

     

    Example 1:

    Input: [1,1,2,3,3,4,4,8,8]
Output: 2

    Example 2:

    Input: [3,3,7,7,10,11,11]
Output: 10

     

    Note: Your solution should run in O(log n) time and O(1) space.
-----------------

# 1421_NPV_Queries
# 1421. NPV Queries


-----------------

# 347_Top_K_Frequent_Elements
# 347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
-----------------

# 157_Read_N_Characters_Given_Read4
# 157. Read N Characters Given Read4

Given a file and assume that you can only read the file using a given
        method read4, implement a method to read n characters.

     

    Method read4: 

    The API read4 reads 4 consecutive characters from the file, then writes
        those characters into the buffer array buf.

    The return value is the number of actual characters read.

    Note that read4() has its own file pointer, much like FILE *fp
        in C.

    Definition of read4:

        Parameter:  char[] buf
    Returns:    int

Note: buf[] is destination not source, the results from read4 will be copied to buf[]

    Below is a high level example of how read4 works:

    File file("abcdefghijk"); // File is "abcdefghijk", initially file pointer (fp) points to 'a'
char[] buf = new char[4]; // Create buffer with enough space to store characters
read4(buf); // read4 returns 4. Now buf = "abcd", fp points to 'e'
read4(buf); // read4 returns 4. Now buf = "efgh", fp points to 'i'
read4(buf); // read4 returns 3. Now buf = "ijk", fp points to end of file

     

    Method read:

    By using the read4 method, implement the method read that
        reads n characters from the file and store it in the buffer
        array buf. Consider that you cannot manipulate the file
        directly.

    The return value is the number of actual characters read.

    Definition of read: 

        Parameters:	char[] buf, int n
    Returns:	int

Note: buf[] is destination not source, you will need to write the results to buf[]

     

    Example 1:

    Input: file = "abc", n = 4
Output: 3
Explanation: After calling your read method, buf should contain "abc". We read a total of 3 characters from the file, so return 3. Note that "abc" is the file's content, not buf. buf is the destination buffer that you will have to write the results to.

    Example 2:

    Input: file = "abcde", n = 5
Output: 5
Explanation: After calling your read method, buf should contain "abcde". We read a total of 5 characters from the file, so return 5.

    Example 3:

    Input: file = "abcdABCD1234", n = 12
Output: 12
Explanation: After calling your read method, buf should contain "abcdABCD1234". We read a total of 12 characters from the file, so return 12.

    Example 4:

    Input: file = "leetcode", n = 5
Output: 5
Explanation: After calling your read method, buf should contain "leetc". We read a total of 5 characters from the file, so return 5.

     

    Note:

    
        Consider that you cannot manipulate the file directly, the file is only
            accesible for read4 but not for read.
        
        The read function will only be called once for each test case.
        You may assume the destination buffer array, buf, is guaranteed
            to have enough space for storing n characters.
-----------------

# 994_Rotting_Oranges
# 994. Rotting Oranges

In a given grid, each cell can have one of three values:

    
        the value 0 representing an empty cell;
        the value 1 representing a fresh orange;
        the value 2 representing a rotten orange.
    

    Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes
        rotten.

    Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
        If this is impossible, return -1 instead.
-----------------

# 132_Palindrome_Partitioning_II
# 132. Palindrome Partitioning II

Given a string s, partition s such that every substring of the partition is
        a palindrome.

    Return the minimum cuts needed for a palindrome partitioning of s.

    Example:

    Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
-----------------

# 56_Merge_Intervals
# 56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

    Example 1:

    Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

    Example 2:

    Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

    NOTE: input types have been changed on April 15, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 1793_Maximum_Score_of_a_Good_Subarray
# 1793. Maximum Score of a Good Subarray


-----------------

# 369_Plus_One_Linked_List
# 369. Plus One Linked List

Given a non-negative integer represented as non-empty a singly linked list of digits,
        plus one to the integer.

    You may assume the integer do not contain any leading zero, except the number 0 itself.

    The digits are stored such that the most significant digit is at the head of the list.
-----------------

# 1704_Determine_if_String_Halves_Are_Alike
# 1704. Determine if String Halves Are Alike


-----------------

# 500_Keyboard_Row
# 500. Keyboard Row

Given a List of words, return the words that can be typed using letters of alphabet on
        only one row's of American keyboard like the image below.

     

    
     

    Example:

    Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

     

    Note:

    
        You may use one character in the keyboard more than once.
        You may assume the input string will only contain letters of alphabet.
-----------------

# 1202_Smallest_String_With_Swaps
# 1202. Smallest String With Swaps

You are given a string s, and an array of pairs of indices in the
        string pairs where pairs[i] = [a, b] indicates
        2 indices(0-indexed) of the string.

    You can swap the characters at any pair of indices in the given pairs any
        number of times.

    Return the lexicographically smallest string that s can be changed to
        after using the swaps.

     
    Example 1:

    Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination:
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"

    Example 2:

    Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"

    Example 3:

    Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"

     
    Constraints:

    
        1 <= s.length <= 10^5
        0 <= pairs.length <= 10^5
        0 <= pairs[i][0], pairs[i][1] < s.length
        s only contains lower case English letters.
-----------------

# 1635_Hopper_Company_Queries_I
# 1635. Hopper Company Queries I


-----------------

# 512_Game_Play_Analysis_II
# 512. Game Play Analysis II

Table: Activity

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key of this table.
This table shows the activity of players of some game.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on some day using some device.

     

    Write a SQL query that reports the device that is first
        logged in for each player.

    The query result format is in the following example:

    Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+

Result table:
+-----------+-----------+
| player_id | device_id |
+-----------+-----------+
| 1         | 2         |
| 2         | 3         |
| 3         | 1         |
+-----------+-----------+
-----------------

# 454_4Sum_II
# 454. 4Sum II

Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k,
        l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

    To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500.
        All integers are in the range of -228 to 228 - 1 and the result is
        guaranteed to be at most 231 - 1.

    Example:

    Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
-----------------

# 256_Paint_House
# 256. Paint House

There are a row of n houses, each house can be painted with one of the three colors:
        red, blue or green. The cost of painting each house with a certain color is different. You
        have to paint all the houses such that no two adjacent houses have the same color.

    The cost of painting each house with a certain color is represented by a n x 3
        cost matrix. For example, costs[0][0] is the cost of painting house 0 with
        color red; costs[1][2] is the cost of painting house 1 with color green, and so
        on... Find the minimum cost to paint all houses.

    Note:
        All costs are positive integers.

    Example:

    Input: [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
             Minimum cost: 2 + 5 + 3 = 10.
-----------------

# 469_Convex_Polygon
# 469. Convex Polygon

Given a list of points that form a polygon when joined sequentially, find if this polygon is
        convex (Convex
            polygon definition).

     

    Note:

    
        There are at least 3 and at most 10,000 points.
        Coordinates are in the range -10,000 to 10,000.
        You may assume the polygon formed by given points is always a simple polygon (Simple polygon
            definition). In other words, we ensure that exactly two edges intersect at each
            vertex, and that edges otherwise don't intersect each other.
        
    

     

    Example 1:

    [[0,0],[0,1],[1,1],[1,0]]

Answer: True

Explanation:

    Example 2:

    [[0,0],[0,10],[10,10],[10,0],[5,5]]

Answer: False

Explanation:
-----------------

# 548_Split_Array_with_Equal_Sum
# 548. Split Array with Equal Sum

Given an array with n integers, you need to find if there are triplets (i, j, k) which
        satisfies following conditions:
    
         0 < i, i + 1 < j, j + 1 < k < n - 1
         Sum of subarrays (0, i - 1), (i + 1, j - 1), (j + 1, k - 1) and (k + 1, n - 1) should
            be equal.
        
    
    where we define that subarray (L, R) represents a slice of the original array starting from the
    element indexed L to the element indexed R.
    

    Example:
    Input: [1,2,1,2,1,2,1]
Output: True
Explanation:
i = 1, j = 3, k = 5.
sum(0, i - 1) = sum(0, 0) = 1
sum(i + 1, j - 1) = sum(2, 2) = 1
sum(j + 1, k - 1) = sum(4, 4) = 1
sum(k + 1, n - 1) = sum(6, 6) = 1

    

    Note:
    
         1 <= n <= 2000.
         Elements in the given array will be in range [-1,000,000, 1,000,000].
-----------------

# 681_Next_Closest_Time
# 681. Next Closest Time

Given a time represented in the format "HH:MM", form the next closest time by reusing the
        current digits. There is no limit on how many times a digit can be reused.

    You may assume the given input string is always valid. For example, "01:34", "12:09" are all
        valid. "1:34", "12:9" are all invalid.

    Example 1:
    Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.

    

    Example 2:
    Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
-----------------

# 19_Remove_Nth_Node_From_End_of_List
# 19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.
    

    Example:

    Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

    Note:

    Given n will always be valid.

    Follow up:

    Could you do this in one pass?
-----------------

# 1244_Design_A_Leaderboard
# 1244. Design A Leaderboard

Design a Leaderboard class, which has 3 functions:

    
        addScore(playerId, score): Update the leaderboard by adding
            score to the given player's score. If there is no player with such id
            in the leaderboard, add him to the leaderboard with the given score.
        
        top(K): Return the score sum of the top K players.
        reset(playerId): Reset the score of the player with the given id to 0.
            It is guaranteed that the player was added to the leaderboard before calling this
            function.
        
    

    Initially, the leaderboard is empty.

     
    Example 1:

    Input: 
["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
Output: 
[null,null,null,null,null,null,73,null,null,null,141]

Explanation: 
Leaderboard leaderboard = new Leaderboard ();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;

     
    Constraints:

    
        1 <= playerId, K <= 10000
        It's guaranteed that K is less than or equal to the current number of
            players.
        
        1 <= score <= 100
        There will be at most 1000 function calls.
-----------------

# 1443_Minimum_Time_to_Collect_All_Apples_in_a_Tree
# 1443. Minimum Time to Collect All Apples in a Tree


-----------------

# 1549_The_Most_Recent_Orders_for_Each_Product
# 1549. The Most Recent Orders for Each Product


-----------------

# 259_3Sum_Smaller
# 259. 3Sum Smaller

Given an array of n integers nums and a target, find the number of index
        triplets i, j, k with 0 <= i < j < k < n that satisfy
        the condition nums[i] + nums[j] + nums[k] < target.

    Example:

    Input: nums = [-2,0,1,3], and target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]

    Follow up:
        Could you solve it in O(n2) runtime?
-----------------

# 680_Valid_Palindrome_II
# 680. Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge
        whether you can make it a palindrome.
    

    Example 1:
    Input: "aba"
Output: True

    

    Example 2:
    Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

    

    Note:
    
        The string will only contain lowercase characters a-z.
            The maximum length of the string is 50000.
-----------------

# 1136_Parallel_Courses
# 1136. Parallel Courses

There are N courses, labelled from 1 to N.

    We are given relations[i] = [X, Y], representing a prerequisite
        relationship between course X and course Y: course
        X has to be studied before course Y.

    In one semester you can study any number of courses as long as you have studied all the
        prerequisites for the course you are studying.

    Return the minimum number of semesters needed to study all courses.  If there is no way
        to study all the courses, return -1.

     

    Example 1:

    

    Input: N = 3, relations = [[1,3],[2,3]]
Output: 2
Explanation: 
In the first semester, courses 1 and 2 are studied. In the second semester, course 3 is studied.

    Example 2:

    

    Input: N = 3, relations = [[1,2],[2,3],[3,1]]
Output: -1
Explanation: 
No course can be studied because they depend on each other.

     

    Note:

    
        1 <= N <= 5000
        1 <= relations.length <= 5000
        relations[i][0] != relations[i][1]
        There are no repeated relations in the input.
-----------------

# 183_Customers_Who_Never_Order
# 183. Customers Who Never Order

Suppose that a website contains two tables, the Customers table and the Orders
        table. Write a SQL query to find all customers who never order anything.

    Table: Customers.

    +----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+

    Table: Orders.

    +----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+

    Using the above tables as example, return the following:

    +-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
-----------------

# 1391_Check_if_There_is_a_Valid_Path_in_a_Grid
# 1391. Check if There is a Valid Path in a Grid


-----------------

# 294_Flip_Game_II
# 294. Flip Game II

You are playing the following Flip Game with your friend: Given a string that contains only
        these two characters: + and -, you and your friend take turns to
        flip two consecutive "++" into "--".
        The game ends when a person can no longer make a move and therefore the other person will be
        the winner.

    Write a function to determine if the starting player can guarantee a win.

    Example:

    Input: s = "++++"
Output: true
Explanation: The starting player can guarantee a win by flipping the middle "++" to become "+--+".

    Follow up:
        Derive your algorithm's runtime complexity.
-----------------

# 724_Find_Pivot_Index
# 724. Find Pivot Index

Given an array of integers nums, write a method that returns the "pivot"
        index of this array.

    We define the pivot index as the index where the sum of the numbers to the left of the index
        is equal to the sum of the numbers to the right of the index.

    If no such index exists, we should return -1. If there are multiple pivot indexes, you should
        return the left-most pivot index.

    Example 1:

    Input:
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.

     

    Example 2:

    Input:
nums = [1, 2, 3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

     

    Note:

    
        The length of nums will be in the range [0, 10000].
        Each element nums[i] will be an integer in the range [-1000,
            1000].
-----------------

# 1717_Maximum_Score_From_Removing_Substrings
# 1717. Maximum Score From Removing Substrings


-----------------

# 675_Cut_Off_Trees_for_Golf_Event
# 675. Cut Off Trees for Golf Event

You are asked to cut off trees in a forest for a golf event. The forest is represented as a
        non-negative 2D map, in this map:

    
        0 represents the obstacle can't be reached.
        1 represents the ground can be walked through.
        The place with number bigger than 1 represents a tree can be
            walked through, and this positive number represents the tree's height.
        
    

     

    You are asked to cut off all the trees in this forest in the order of tree's
        height - always cut off the tree with lowest height first. And after cutting, the original
        place has the tree will become a grass (value 1).

    You will start from the point (0, 0) and you should output the minimum steps you need to
        walk to cut off all the trees. If you can't cut off all the trees, output -1 in that
        situation.

    You are guaranteed that no two trees have the same height and there is at least
        one tree needs to be cut off.

    Example 1:

    Input:
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6

     

    Example 2:

    Input:
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1

     

    Example 3:

    Input:
[
 [2,3,4],
 [0,0,5],
 [8,7,6]
]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.

     

    Hint: size of the given matrix will not exceed 50x50.
-----------------

# 424_Longest_Repeating_Character_Replacement
# 424. Longest Repeating Character Replacement

Given a string s that consists of only uppercase English letters, you can
        perform at most k operations on that string.

    In one operation, you can choose any character of the string and change it
        to any other uppercase English character.

    Find the length of the longest sub-string containing all repeating letters you can get after
        performing the above operations.

    Note:
        Both the string's length and k will not exceed 104.

    Example 1:

    Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.

     

    Example 2:

    Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
-----------------

# 421_Maximum_XOR_of_Two_Numbers_in_an_Array
# 421. Maximum XOR of Two Numbers in an Array

Given a non-empty array of numbers, a0, a1, a2,
        … , an-1, where 0 ≤ ai < 231.

    Find the maximum result of ai XOR aj, where 0 ≤ i, j
        < n.

    Could you do this in O(n) runtime?

    Example:

    Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
-----------------

# 1638_Count_Substrings_That_Differ_by_One_Character
# 1638. Count Substrings That Differ by One Character


-----------------

# 665_Non-decreasing_Array
# 665. Non-decreasing Array

Given an array with n integers, your task is to check if it could become
        non-decreasing by modifying at most 1 element.
    

    
        We define an array is non-decreasing if array[i] <= array[i + 1] holds for
        every i (1 <= i < n).
    

    Example 1:
    Input: [4,2,3]
Output: True
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

    

    Example 2:
    Input: [4,2,1]
Output: False
Explanation: You can't get a non-decreasing array by modify at most one element.

    

    Note:
        The n belongs to [1, 10,000].
-----------------

# 783_Minimum_Distance_Between_BST_Nodes
# 783. Minimum Distance Between BST Nodes

Given a Binary Search Tree (BST) with the root node root, return the
        minimum difference between the values of any two different nodes in the tree.

    Example :

    Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \
    1   3

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.

    Note:

    
        The size of the BST will be between 2 and 100.
        The BST is always valid, each node's value is an integer, and each node's value
            is different.
-----------------

# 32_Longest_Valid_Parentheses
# 32. Longest Valid Parentheses

Given a string containing just the characters '(' and
        ')', find the length of the longest valid (well-formed) parentheses
        substring.

    Example 1:

    Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"

    Example 2:

    Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
-----------------

# 1721_Swapping_Nodes_in_a_Linked_List
# 1721. Swapping Nodes in a Linked List


-----------------

# 1781_Sum_of_Beauty_of_All_Substrings
# 1781. Sum of Beauty of All Substrings


-----------------

# 33_Search_in_Rotated_Sorted_Array
# 33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you
        beforehand.

    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    You are given a target value to search. If found in the array return its index, otherwise
        return -1.

    You may assume no duplicate exists in the array.

    Your algorithm's runtime complexity must be in the order of O(log n).
    

    Example 1:

    Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

    Example 2:

    Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
-----------------

# 462_Minimum_Moves_to_Equal_Array_Elements_II
# 462. Minimum Moves to Equal Array Elements II

Given a non-empty integer array, find the minimum number of moves required to make all
        array elements equal, where a move is incrementing a selected element by 1 or decrementing a
        selected element by 1.

    You may assume the array's length is at most 10,000.

    Example:
    Input:
[1,2,3]

Output:
2

Explanation:
Only two moves are needed (remember each move increments or decrements one element):

[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
-----------------

# 1444_Number_of_Ways_of_Cutting_a_Pizza
# 1444. Number of Ways of Cutting a Pizza


-----------------

# 660_Remove_9
# 660. Remove 9

Start from integer 1, remove any integer that contains 9 such as 9, 19, 29... 

    So now, you will have a new integer sequence: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, ...

    Given a positive integer n, you need to return the n-th integer after removing.
        Note that 1 will be the first integer.

    Example 1:
    Input: 9
Output: 10

    

    
         Hint: n will not exceed 9 x 10^8.
-----------------

# 901_Online_Stock_Span
# 901. Online Stock Span

Write a class StockSpanner which collects daily price quotes for some stock, and
        returns the span of that stock's price for the current day.

    The span of the stock's price today is defined as the maximum number of consecutive
        days (starting from today and going backwards) for which the price of the stock was
        less than or equal to today's price.

    For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60,
        75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].
-----------------

# 351_Android_Unlock_Patterns
# 351. Android Unlock Patterns

Given an Android 3x3 key lock screen and two integers m and n, where 1
        ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen,
        which consist of minimum of m keys and maximum n keys.

     

    Rules for a valid pattern:

    
        Each pattern must connect at least m keys and at most n keys.
        All the keys must be distinct.
        If the line connecting two consecutive keys in the pattern passes through any other
            keys, the other keys must have previously selected in the pattern. No jumps through non
            selected key is allowed.
        
        The order of keys used matters.
    

     

    

     

    Explanation:

    | 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |

    Invalid move: 4 - 1 - 3 - 6 
        Line 1 - 3 passes through key 2 which had not been selected in the pattern.

    Invalid move: 4 - 1 - 9 - 2
        Line 1 - 9 passes through key 5 which had not been selected in the pattern.

    Valid move: 2 - 4 - 1 - 3 - 6
        Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern
    

    Valid move: 6 - 5 - 4 - 1 - 9 - 2
        Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.
    

     

    Example:
-----------------

# 1096_Brace_Expansion_II
# 1096. Brace Expansion II

Under a grammar given below, strings can represent a set of lowercase words.  Let's use
        R(expr) to denote the set of words the expression
        represents.

    Grammar can best be understood through simple examples:

    
        Single letters represent a singleton set containing that word.
            
                R("a") = {"a"}
                R("w") = {"w"}
            
        
        When we take a comma delimited list of 2 or more expressions, we take the union of
            possibilities.
            
                R("{a,b,c}") =
                    {"a","b","c"}
                R("{{a,b},{b,c}}") =
                    {"a","b","c"} (notice the final set
                    only contains each word at most once)
                
            
        
        When we concatenate two expressions, we take the set of possible concatenations between
            two words where the first word comes from the first expression and the second word comes
            from the second expression.
            
                R("{a,b}{c,d}") = {"ac","ad","bc","bd"}
                
                R("a{b,c}{d,e}f{g,h}") = {"abdfg", "abdfh",
                    "abefg", "abefh", "acdfg", "acdfh",
                    "acefg", "acefh"}
            
        
    

    Formally, the 3 rules for our grammar:

    
        For every lowercase letter x, we have R(x) = {x}
        For expressions e_1, e_2, ... , e_k with k >= 2, we
            have R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
        For expressions e_1 and e_2, we have R(e_1 + e_2) =
            {a + b for (a, b) in R(e_1) × R(e_2)}, where + denotes
            concatenation, and × denotes the cartesian product.
        
    

    Given an expression representing a set of words under the given grammar, return
        the sorted list of words that the expression represents.
-----------------

# 1189_Maximum_Number_of_Balloons
# 1189. Maximum Number of Balloons

Given a string text, you want to use the characters
        of text to form as many instances of the word "balloon"
        as possible.

    You can use each character in text at most once. Return the
        maximum number of instances that can be formed.

     
    Example 1:

    

    Input: text = "nlaebolko"
Output: 1

    Example 2:

    

    Input: text = "loonbalxballpoon"
Output: 2

    Example 3:

    Input: text = "leetcode"
Output: 0

     
    Constraints:

    
        1 <= text.length <= 10^4
        text consists of lower case English letters only.
-----------------

# 948_Bag_of_Tokens
# 948. Bag of Tokens

You have an initial power P, an initial score of 0 points, and a
        bag of tokens.

    Each token can be used at most once, has a value token[i], and has potentially
        two ways to use it.

    
        If we have at least token[i] power, we may play the token face up, losing
            token[i] power, and gaining 1 point.
        
        If we have at least 1 point, we may play the token face down, gaining
            token[i] power, and losing 1 point.
        
    

    Return the largest number of points we can have after playing any number of tokens.
-----------------

# 1359_Count_All_Valid_Pickup_and_Delivery_Options
# 1359. Count All Valid Pickup and Delivery Options


-----------------

# 1354_Construct_Target_Array_With_Multiple_Sums
# 1354. Construct Target Array With Multiple Sums


-----------------

# 25_Reverse_Nodes_in_k-Group
# 25. Reverse Nodes in k-Group

Given a linked list, reverse the nodes of a linked list k at a time and return its
        modified list.

    k is a positive integer and is less than or equal to the length of the linked list.
        If the number of nodes is not a multiple of k then left-out nodes in the end should
        remain as it is.

    
    

    Example:

    Given this linked list: 1->2->3->4->5

    For k = 2, you should return: 2->1->4->3->5

    For k = 3, you should return: 3->2->1->4->5

    Note:

    
        Only constant extra memory is allowed.
        You may not alter the values in the list's nodes, only nodes itself may be
            changed.
-----------------

# 360_Sort_Transformed_Array
# 360. Sort Transformed Array

Given a sorted array of integers nums and integer values a, b and
        c. Apply a quadratic function of the form f(x) = ax2 +
        bx + c to each element x in the array.

    The returned array must be in sorted order.

    Expected time complexity: O(n)
-----------------

# 1028_Recover_a_Tree_From_Preorder_Traversal
# 1028. Recover a Tree From Preorder Traversal

We run a preorder depth first search on the root of a binary tree.

    At each node in this traversal, we output D dashes (where D is the
        depth of this node), then we output the value of this node.  (If the
            depth of a node is D, the depth of its immediate child is D+1. 
            The depth of the root node is 0.)

    If a node has only one child, that child is guaranteed to be the left child.

    Given the output S of this traversal, recover the tree and return its
        root.

     

    Example 1:

    

    Input: "1-2--3--4-5--6--7"
Output: [1,2,5,3,4,6,7]
-----------------

# 135_Candy
# 135. Candy

There are N children standing in a line. Each child is assigned a rating value.

    You are giving candies to these children subjected to the following requirements:

    
        Each child must have at least one candy.
        Children with a higher rating get more candies than their neighbors.
    

    What is the minimum candies you must give?

    Example 1:

    Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

    Example 2:

    Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
-----------------

# 244_Shortest_Word_Distance_II
# 244. Shortest Word Distance II

Design a class which receives a list of words in the constructor, and implements a method
        that takes two words word1 and word2 and return the shortest distance
        between these two words in the list. Your method will be called repeatedly many
        times with different parameters. 

    Example:
        Assume that words = ["practice", "makes", "perfect",
            "coding", "makes"].

    Input: word1 = “coding”, word2 = “practice”
Output: 3

    Input: word1 = "makes", word2 = "coding"
Output: 1

    Note:
        You may assume that word1 does not equal to word2, and
        word1 and word2 are both in the list.
-----------------

# 506_Relative_Ranks
# 506. Relative Ranks

Given scores of N athletes, find their relative ranks and the people with the top
        three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze
        Medal".

    Example 1:
    Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the left two athletes, you just need to output their relative ranks according to their scores.

    

    Note:
    
        N is a positive integer and won't exceed 10,000.
        All the scores of athletes are guaranteed to be unique.
-----------------

# 1119_Remove_Vowels_from_a_String
# 1119. Remove Vowels from a String

Given a string S, remove the vowels 'a',
        'e', 'i', 'o', and 'u'
        from it, and return the new string.

     

    Example 1:

    Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"

    Example 2:

    Input: "aeiou"
Output: ""

     

    Note:

    
        S consists of lowercase English letters only.
        1 <= S.length <= 1000
-----------------

# 290_Word_Pattern
# 290. Word Pattern

Given a pattern and a string str, find if str follows
        the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in
        pattern and a non-empty word in str.

    Example 1:

    Input: pattern = "abba", str = "dog cat cat dog"
Output: true

    Example 2:

    Input:pattern = "abba", str = "dog cat cat fish"
Output: false

    Example 3:

    Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

    Example 4:

    Input: pattern = "abba", str = "dog dog dog dog"
Output: false

    Notes:
        You may assume pattern contains only lowercase letters, and str
        contains lowercase letters that may be separated by a single space.
-----------------

# 66_Plus_One
# 66. Plus One

Given a non-empty array of digits representing a non-negative integer,
        plus one to the integer.

    The digits are stored such that the most significant digit is at the head of the list, and
        each element in the array contain a single digit.

    You may assume the integer does not contain any leading zero, except the number 0 itself.

    Example 1:

    Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

    Example 2:

    Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
-----------------

# 289_Game_of_Life
# 289. Game of Life

According to the Wikipedia's article: "The Game of
        Life, also known simply as Life, is a cellular automaton devised by the British
        mathematician John Horton Conway in 1970."

    Given a board with m by n cells, each cell has an initial state
        live (1) or dead (0). Each cell interacts with its eight
            neighbors (horizontal, vertical, diagonal) using the following four rules (taken
        from the above Wikipedia article):

    
        Any live cell with fewer than two live neighbors dies, as if caused by
            under-population.
        
        Any live cell with two or three live neighbors lives on to the next generation.
        Any live cell with more than three live neighbors dies, as if by over-population..
        Any dead cell with exactly three live neighbors becomes a live cell, as if by
            reproduction.
        
    

    Write a function to compute the next state (after one update) of the board given its current
        state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
    

    Example:

    Input:
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output:
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

    Follow up:

    
        Could you solve it in-place? Remember that the board needs to be updated at the same
            time: You cannot update some cells first and then use their updated values to update
            other cells.
        
        In this question, we represent the board using a 2D array. In principle, the board is
            infinite, which would cause problems when the active area encroaches the border of the
            array. How would you address these problems?
-----------------

# 1357_Apply_Discount_Every_n_Orders
# 1357. Apply Discount Every n Orders


-----------------

# 471_Encode_String_with_Shortest_Length
# 471. Encode String with Shortest Length

Given a non-empty string, encode the string such that its encoded length is the
        shortest.

    The encoding rule is: k[encoded_string], where the encoded_string inside
        the square brackets is being repeated exactly k times.

    Note:

    
        k will be a positive integer and encoded string will not be empty or have extra
            space.
        
        You may assume that the input string contains only lowercase English letters. The string's
            length is at most 160.
        
        If an encoding process does not make the string shorter, then do not encode it. If there
            are several solutions, return any of them is fine.
        
    

     

    Example 1:

    Input: "aaa"
Output: "aaa"
Explanation: There is no way to encode it such that it is shorter than the input string, so we do not encode it.

     

    Example 2:

    Input: "aaaaa"
Output: "5[a]"
Explanation: "5[a]" is shorter than "aaaaa" by 1 character.

     

    Example 3:

    Input: "aaaaaaaaaa"
Output: "10[a]"
Explanation: "a9[a]" or "9[a]a" are also valid solutions, both of them have the same length = 5, which is the same as "10[a]".

     

    Example 4:

    Input: "aabcaabcd"
Output: "2[aabc]d"
Explanation: "aabc" occurs twice, so one answer can be "2[aabc]d".

     

    Example 5:

    Input: "abbbabbbcabbbabbbc"
Output: "2[2[abbb]c]"
Explanation: "abbbabbbc" occurs twice, but "abbbabbbc" can also be encoded to "2[abbb]c", so one answer can be "2[2[abbb]c]".
-----------------

# 1706_Where_Will_the_Ball_Fall
# 1706. Where Will the Ball Fall


-----------------

# 1616_Split_Two_Strings_to_Make_Palindrome
# 1616. Split Two Strings to Make Palindrome


-----------------

# 178_Rank_Scores
# 178. Rank Scores

Write a SQL query to rank scores. If there is a tie between two scores, both should have the
        same ranking. Note that after a tie, the next ranking number should be the next consecutive
        integer value. In other words, there should be no "holes" between ranks.

    +----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+

    For example, given the above Scores table, your query should generate the
        following report (order by highest score):

    +-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
-----------------

# 1316_Distinct_Echo_Substrings
# 1316. Distinct Echo Substrings


-----------------

# 1126_Active_Businesses
# 1126. Active Businesses

Table: Events

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| business_id   | int     |
| event_type    | varchar |
| occurences    | int     |
+---------------+---------+
(business_id, event_type) is the primary key of this table.
Each row in the table logs the info that an event of some type occured at some business for a number of times.

     

    Write an SQL query to find all active businesses.

    An active business is a business that has more than one event type with occurences
        greater than the average occurences of that event type among all businesses.

    The query result format is in the following example:

    Events table:
+-------------+------------+------------+
| business_id | event_type | occurences |
+-------------+------------+------------+
| 1           | reviews    | 7          |
| 3           | reviews    | 3          |
| 1           | ads        | 11         |
| 2           | ads        | 7          |
| 3           | ads        | 6          |
| 1           | page views | 3          |
| 2           | page views | 12         |
+-------------+------------+------------+

Result table:
+-------------+
| business_id |
+-------------+
| 1           |
+-------------+
Average for 'reviews', 'ads' and 'page views' are (7+3)/2=5, (11+7+6)/3=8, (3+12)/2=7.5 respectively.
Business with id 1 has 7 'reviews' events (more than 5) and 11 'ads' events (more than 8) so it is an active business.
-----------------

# 867_Transpose_Matrix
# 867. Transpose Matrix

Given a matrix A, return the transpose of A.

    The transpose of a matrix is the matrix flipped over it's main diagonal, switching the
        row and column indices of the matrix.
-----------------

# 1543_Fix_Product_Name_Format
# 1543. Fix Product Name Format


-----------------

# 1707_Maximum_XOR_With_an_Element_From_Array
# 1707. Maximum XOR With an Element From Array


-----------------

# 1623_All_Valid_Triplets_That_Can_Represent_a_Country
# 1623. All Valid Triplets That Can Represent a Country


-----------------

# 763_Partition_Labels
# 763. Partition Labels

A string S of lowercase letters is given. We want to partition this string into
        as many parts as possible so that each letter appears in at most one part, and return a list
        of integers representing the size of these parts.
    
    

    Example 1:
    Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

    

    Note:
    
        S will have length in range [1, 500].
        S will consist of lowercase letters ('a' to 'z')
            only.
-----------------

# 147_Insertion_Sort_List
# 147. Insertion Sort List

Sort a linked list using insertion sort.

    
    

    
        A graphical example of insertion sort. The partial sorted list (black) initially
            contains only the first element in the list.
            With each iteration one element (red) is removed from the input data and inserted
            in-place into the sorted list
        
        
         
    

    
    

    Algorithm of Insertion Sort:

    
        Insertion sort iterates, consuming one input element each repetition, and growing a
            sorted output list.
        
        At each iteration, insertion sort removes one element from the input data, finds the
            location it belongs within the sorted list, and inserts it there.
        
        It repeats until no input elements remain.
    

    
        Example 1:

    Input: 4->2->1->3
Output: 1->2->3->4

    Example 2:

    Input: -1->5->3->4->0
Output: -1->0->3->4->5
-----------------

# 104_Maximum_Depth_of_Binary_Tree
# 104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to
        the farthest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
   / \
  9  20
    /  \
   15   7

    return its depth = 3.
-----------------

# 114_Flatten_Binary_Tree_to_Linked_List
# 114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

    For example, given the following tree:

        1
   / \
  2   5
 / \   \
3   4   6

    The flattened tree should look like:

    1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
-----------------

# 499_The_Maze_III
# 499. The Maze III

There is a ball in a maze with empty spaces and walls. The ball can go through empty
        spaces by rolling up (u), down (d), left (l) or right (r), but
        it won't stop rolling until hitting a wall. When the ball stops, it could choose the
        next direction. There is also a hole in this maze. The ball will drop into the hole
        if it rolls on to the hole.

    Given the ball position, the hole position and the maze, find out how
        the ball could drop into the hole by moving the shortest distance. The distance is
        defined by the number of empty spaces traveled by the ball from the start position
        (excluded) to the hole (included). Output the moving directions by using 'u',
        'd', 'l' and 'r'. Since there could be several different shortest
        ways, you should output the lexicographically smallest way. If the ball cannot reach
        the hole, output "impossible".

    The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
        You may assume that the borders of the maze are all walls. The ball and the hole coordinates
        are represented by row and column indexes.

     

    Example 1:

    Input 1: a maze represented by a 2D array

0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0

Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (0, 1)

Output: "lul"

Explanation: There are two shortest ways for the ball to drop into the hole.
The first way is left -> up -> left, represented by "lul".
The second way is up -> left, represented by 'ul'.
Both ways have shortest distance 6, but the first way is lexicographically smaller because 'l' < 'u'. So the output is "lul".

    Example 2:

    Input 1: a maze represented by a 2D array

0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0

Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (3, 0)

Output: "impossible"

Explanation: The ball cannot reach the hole.

     

    Note:

    
        There is only one ball and one hole in the maze.
        Both the ball and hole exist on an empty space, and they will not be at the same
            position initially.
        
        The given maze does not contain border (like the red rectangle in the example pictures),
            but you could assume the border of the maze are all walls.
        
        The maze contains at least 2 empty spaces, and the width and the height of the maze won't
            exceed 30.
-----------------

# 537_Complex_Number_Multiplication
# 537. Complex Number Multiplication

Given two strings representing two complex
        numbers.

    
        You need to return a string representing their multiplication. Note i2 = -1
        according to the definition.
    

    Example 1:
    Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

    

    Example 2:
    Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.

    

    Note:
    
        The input strings will not have extra blank.
        The input strings will be given in the form of a+bi, where the integer a
            and b will both belong to the range of [-100, 100]. And the output should be
                also in this form.
-----------------

# 1825_Finding_MK_Average