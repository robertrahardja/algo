
# 1825. Finding MK Average


-----------------

# 252_Meeting_Rooms
# 252. Meeting Rooms

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...]
        (si < ei), determine if a person could attend all meetings.

    Example 1:

    Input: [[0,30],[5,10],[15,20]]
Output: false

    Example 2:

    Input: [[7,10],[2,4]]
Output: true

    NOTE: input types have been changed on April 15, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 1259_Handshakes_That_Don't_Cross
# 1259. Handshakes That Don't Cross


-----------------

# 1310_XOR_Queries_of_a_Subarray
# 1310. XOR Queries of a Subarray


-----------------

# 1154_Day_of_the_Year
# 1154. Day of the Year

Given a string date representing a Gregorian calendar
        date formatted as YYYY-MM-DD, return the day number of the year.

     
    Example 1:

    Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

    Example 2:

    Input: date = "2019-02-10"
Output: 41

    Example 3:

    Input: date = "2003-03-01"
Output: 60

    Example 4:

    Input: date = "2004-03-01"
Output: 61

     
    Constraints:

    
        date.length == 10
        date[4] == date[7] == '-', and all other date[i]'s
            are digits
        
        date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.
-----------------

# 693_Binary_Number_with_Alternating_Bits
# 693. Binary Number with Alternating Bits

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits
        will always have different values.

    Example 1:
    Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101

    

    Example 2:
    Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111.

    

    Example 3:
    Input: 11
Output: False
Explanation:
The binary representation of 11 is: 1011.

    

    Example 4:
    Input: 10
Output: True
Explanation:
The binary representation of 10 is: 1010.
-----------------

# 1488_Avoid_Flood_in_The_City
# 1488. Avoid Flood in The City


-----------------

# 1086_High_Five
# 1086. High Five

Given a list of scores of different students, return the average score of each student's
        top five scores in the order of each student's id.

    Each entry items[i] has items[i][0] the student's id, and
        items[i][1] the student's score.  The average score is calculated
        using integer division.

     

    Example 1:

    Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation: 
The average of the student with id = 1 is 87.
The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.

     

    Note:

    
        1 <= items.length <= 1000
        items[i].length == 2
        The IDs of the students is between 1 to 1000
        The score of the students is between 1 to 100
        For each student, there are at least 5 scores
-----------------

# 1690_Stone_Game_VII
# 1690. Stone Game VII


-----------------

# 422_Valid_Word_Square
# 422. Valid Word Square

Given a sequence of words, check whether it forms a valid word square.

    A sequence of words forms a valid word square if the kth row and column
        read the exact same string, where 0 ≤ k < max(numRows, numColumns).

    Note:
    
        The number of words given is at least 1 and does not exceed 500.
        Word length will be at least 1 and does not exceed 500.
        Each word contains only lowercase English alphabet a-z.
    
    

    Example 1:
    Input:
[
  "abcd",
  "bnrt",
  "crmy",
  "dtye"
]

Output:
true

Explanation:
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crmy".
The fourth row and fourth column both read "dtye".

Therefore, it is a valid word square.

    

    Example 2:
    Input:
[
  "abcd",
  "bnrt",
  "crm",
  "dt"
]

Output:
true

Explanation:
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crm".
The fourth row and fourth column both read "dt".

Therefore, it is a valid word square.

    

    Example 3:
    Input:
[
  "ball",
  "area",
  "read",
  "lady"
]

Output:
false

Explanation:
The third row reads "read" while the third column reads "lead".

Therefore, it is NOT a valid word square.
-----------------

# 1598_Crawler_Log_Folder
# 1598. Crawler Log Folder


-----------------

# 409_Longest_Palindrome
# 409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the
        longest palindromes that can be built with those letters.

    This is case sensitive, for example "Aa" is not considered a palindrome here.
    

    Note:
        Assume the length of given string will not exceed 1,010.
    

    Example: 
    Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
-----------------

# 1746_Maximum_Subarray_Sum_After_One_Operation
# 1746. Maximum Subarray Sum After One Operation


-----------------

# 868_Binary_Gap
# 868. Binary Gap

Given a positive integer N, find and return the longest distance between
        two consecutive 1's in the binary representation of N.

    If there aren't two consecutive 1's, return 0.
-----------------

# 306_Additive_Number
# 306. Additive Number

Additive number is a string whose digits can form additive sequence.

    A valid additive sequence should contain at least three numbers. Except for the first
        two numbers, each subsequent number in the sequence must be the sum of the preceding two.
    

    Given a string containing only digits '0'-'9', write a function
        to determine if it's an additive number.

    Note: Numbers in the additive sequence cannot have leading zeros, so sequence
        1, 2, 03 or 1, 02, 3 is invalid.

     
    Example 1:

    Input: "112358"
Output: true
Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
             1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

    Example 2:

    Input: "199100199"
Output: true
Explanation: The additive sequence is: 1, 99, 100, 199. 
             1 + 99 = 100, 99 + 100 = 199

     
    Constraints:

    
        num consists only of digits '0'-'9'.
        
        1 <= num.length <= 35
    

    Follow up:
        How would you handle overflow for very large input integers?
-----------------

# 164_Maximum_Gap
# 164. Maximum Gap

Given an unsorted array, find the maximum difference between the successive elements in its
        sorted form.

    Return 0 if the array contains less than 2 elements.

    Example 1:

    Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
             (3,6) or (6,9) has the maximum difference 3.

    Example 2:

    Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

    Note:

    
        You may assume all elements in the array are non-negative integers and fit in the 32-bit
            signed integer range.
        
        Try to solve it in linear time/space.
-----------------

# 1045_Customers_Who_Bought_All_Products
# 1045. Customers Who Bought All Products

Table: Customer

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| customer_id | int     |
| product_key | int     |
+-------------+---------+
product_key is a foreign key to Product table.

    Table: Product

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_key | int     |
+-------------+---------+
product_key is the primary key column for this table.

     

    Write an SQL query for a report that provides the customer ids from
        the Customer table that bought all the products in the Product table.
    

    For example:

    Customer table:
+-------------+-------------+
| customer_id | product_key |
+-------------+-------------+
| 1           | 5           |
| 2           | 6           |
| 3           | 5           |
| 3           | 6           |
| 1           | 6           |
+-------------+-------------+

Product table:
+-------------+
| product_key |
+-------------+
| 5           |
| 6           |
+-------------+

Result table:
+-------------+
| customer_id |
+-------------+
| 1           |
| 3           |
+-------------+
The customers who bought all the products (5 and 6) are customers with id 1 and 3.
-----------------

# 917_Reverse_Only_Letters
# 917. Reverse Only Letters

Given a string S, return the "reversed" string where all characters
        that are not a letter stay in the same place, and all letters reverse their positions.
-----------------

# 364_Nested_List_Weight_Sum_II
# 364. Nested List Weight Sum II

Given a nested list of integers, return the sum of all integers in the list weighted by their
        depth.

    Each element is either an integer, or a list -- whose elements may also be integers or other
        lists.

    Different from the previous
        question where weight is increasing from root to leaf, now the weight is defined from
        bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the
        largest weight.

    Example 1:
-----------------

# 508_Most_Frequent_Subtree_Sum
# 508. Most Frequent Subtree Sum

Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree
        sum of a node is defined as the sum of all the node values formed by the subtree rooted at
        that node (including the node itself). So what is the most frequent subtree sum value? If
        there is a tie, return all the values with the highest frequency in any order.
    

    Examples 1
        Input:
      5
 /  \
2   -3

    return [2, -3, 4], since all the values happen only once, return all of them in any order.
    

    Examples 2
        Input:
      5
 /  \
2   -5

    return [2], since 2 happens twice, however -5 only occur once.
    

    Note:
        You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
-----------------

# 1007_Minimum_Domino_Rotations_For_Equal_Row
# 1007. Minimum Domino Rotations For Equal Row

In a row of dominoes, A[i] and B[i] represent the top and bottom
        halves of the i-th domino.  (A domino is a tile with two numbers from 1 to
        6 - one on each half of the tile.)

    We may rotate the i-th domino, so that A[i] and B[i]
        swap values.

    Return the minimum number of rotations so that all the values in A are the same,
        or all the values in B are the same.

    If it cannot be done, return -1.

     

    Example 1:

    

    Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

    Example 2:

    Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

     

    Note:

    
        1 <= A[i], B[i] <= 6
        2 <= A.length == B.length <= 20000
-----------------

# 1748_Sum_of_Unique_Elements
# 1748. Sum of Unique Elements


-----------------

# 1367_Linked_List_in_Binary_Tree
# 1367. Linked List in Binary Tree


-----------------

# 603_Consecutive_Available_Seats
# 603. Consecutive Available Seats

Several friends at a cinema ticket office would like to reserve consecutive available
    seats.
    Can you help to query all the consecutive available seats order by the seat_id using the
    following cinema table?
    | seat_id | free |
|---------|------|
| 1       | 1    |
| 2       | 0    |
| 3       | 1    |
| 4       | 1    |
| 5       | 1    |

     
    Your query should return the following result for the sample case above.

     

    | seat_id |
|---------|
| 3       |
| 4       |
| 5       |

    Note:

    
        The seat_id is an auto increment int, and free is bool ('1' means free, and
            '0' means occupied.).
        
        Consecutive available seats are more than 2(inclusive) seats consecutively available.
-----------------

# 1162_As_Far_from_Land_as_Possible
# 1162. As Far from Land as Possible

Given an N x N grid containing only values 0 and
        1, where 0 represents water and 1
        represents land, find a water cell such that its distance to the nearest land cell is
        maximized and return the distance.

    The distance used in this problem is the Manhattan distance: the distance
        between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 -
            y1|.

    If no land or water exists in the grid, return -1.

     

    Example 1:

    

    Input: [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: 
The cell (1, 1) is as far as possible from all the land with distance 2.

    Example 2:

    

    Input: [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: 
The cell (2, 2) is as far as possible from all the land with distance 4.

     

    Note:

    
        1 <= grid.length == grid[0].length <= 100
        grid[i][j] is 0 or 1
-----------------

# 172_Factorial_Trailing_Zeroes
# 172. Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

    Example 1:

    Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

    Example 2:

    Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.

    Note: Your solution should be in logarithmic time complexity.
-----------------

# 678_Valid_Parenthesis_String
# 678. Valid Parenthesis String

Given a string containing only three types of characters: '(', ')' and '*', write a function
        to check whether this string is valid. We define the validity of a string by these rules:
    
        Any left parenthesis '(' must have a corresponding right parenthesis ')'.
        
        Any right parenthesis ')' must have a corresponding left parenthesis '('.
        
        Left parenthesis '(' must go before the corresponding right parenthesis
            ')'.
        
        '*' could be treated as a single right parenthesis ')' or a
            single left parenthesis '(' or an empty string.
        
        An empty string is also valid.
    
    

    Example 1:
    Input: "()"
Output: True

    

    Example 2:
    Input: "(*)"
Output: True

    

    Example 3:
    Input: "(*))"
Output: True

    

    Note:
    
        The string size will be in the range [1, 100].
-----------------

# 1080_Insufficient_Nodes_in_Root_to_Leaf_Paths
# 1080. Insufficient Nodes in Root to Leaf Paths

Given the root of a binary tree, consider all root to leaf paths:
        paths from the root to any leaf.  (A leaf is a node with no children.)

    A node is insufficient if every such root to leaf
        path intersecting this node has sum strictly less than limit.
    

    Delete all insufficient nodes simultaneously, and return the root of the resulting binary
        tree.

     

    Example 1:

    
Input: root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1

Output: [1,2,3,4,null,null,7,8,9,null,14]
-----------------

# 770_Basic_Calculator_IV
# 770. Basic Calculator IV

Given an expression such as expression = "e + 8 - a +
        5" and an evaluation map such as {"e": 1} (given in terms
        of evalvars = ["e"] and evalints = [1]), return a list
        of tokens representing the simplified expression, such as ["-1*a","14"]
    

    
        An expression alternates chunks and symbols, with a space separating each chunk and
            symbol.
        
        A chunk is either an expression in parentheses, a variable, or a non-negative integer.
        
        A variable is a string of lowercase letters (not including digits.) Note that variables
            can be multiple letters, and note that variables never have a leading coefficient or
            unary operator like "2x" or "-x".
        
    

    Expressions are evaluated in the usual order: brackets first, then multiplication, then
        addition and subtraction. For example, expression = "1 + 2 * 3" has
        an answer of ["7"].

    The format of the output is as follows:

    
        For each term of free variables with non-zero coefficient, we write the free variables
            within a term in sorted order lexicographically. For example, we would never write a
            term like "b*a*c", only "a*b*c".
        
        Terms have degree equal to the number of free variables being multiplied, counting
            multiplicity. (For example, "a*a*b*c" has degree 4.) We write the
            largest degree terms of our answer first, breaking ties by lexicographic order ignoring
            the leading coefficient of the term.
        
        The leading coefficient of the term is placed directly to the left with an asterisk
            separating it from the variables (if they exist.)  A leading coefficient of 1 is
            still printed.
        
        An example of a well formatted answer is ["-2*a*a*a", "3*a*a*b",
            "3*b*b", "4*a", "5*c", "-6"] 
        
        Terms (including constant terms) with coefficient 0 are not included.  For example,
            an expression of "0" has an output of [].
        
    

    Examples:

    Input: expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
Output: ["-1*a","14"]

Input: expression = "e - 8 + temperature - pressure",
evalvars = ["e", "temperature"], evalints = [1, 12]
Output: ["-1*pressure","5"]

Input: expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
Output: ["1*e*e","-64"]

Input: expression = "7 - 7", evalvars = [], evalints = []
Output: []

Input: expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []
Output: ["5*a*b*c"]

Input: expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
evalvars = [], evalints = []
Output: ["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]

    Note:

    
        expression will have length in range [1, 250].
        evalvars, evalints will have equal lengths in range [0, 100].
-----------------

# 331_Verify_Preorder_Serialization_of_a_Binary_Tree
# 331. Verify Preorder Serialization of a Binary Tree

One way to serialize a binary tree is to use pre-order traversal. When we encounter a
        non-null node, we record the node's value. If it is a null node, we record using a
        sentinel value such as #.

         _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #

    For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#",
        where # represents a null node.

    Given a string of comma separated values, verify whether it is a correct preorder traversal
        serialization of a binary tree. Find an algorithm without reconstructing the tree.

    Each comma separated value in the string must be either an integer or a character '#'
        representing null pointer.

    You may assume that the input format is always valid, for example it could never contain two
        consecutive commas such as "1,,3".

    Example 1:

    Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true

    Example 2:

    Input: "1,#"
Output: false

    Example 3:

    Input: "9,#,#,1"
Output: false
-----------------

# 1324_1324._Print_Words_Vertically
# 1324. 1324. Print Words Vertically


-----------------

# 318_Maximum_Product_of_Word_Lengths
# 318. Maximum Product of Word Lengths

Given a string array words, find the maximum value of length(word[i]) *
        length(word[j]) where the two words do not share common letters. You may assume that
        each word will contain only lower case letters. If no such two words exist, return 0.

    Example 1:

    Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".

    Example 2:

    Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".

    Example 3:

    Input: ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.
-----------------

# 1342_Number_of_Steps_to_Reduce_a_Number_to_Zero
# 1342. Number of Steps to Reduce a Number to Zero


-----------------

# 1337_The_K_Weakest_Rows_in_a_Matrix
# 1337. The K Weakest Rows in a Matrix


-----------------

# 746_Min_Cost_Climbing_Stairs
# 746. Min Cost Climbing Stairs

On a staircase, the i-th step has some non-negative cost cost[i]
        assigned (0 indexed).
    
    
        Once you pay the cost, you can either climb one or two steps. You need to find minimum cost
        to reach the top of the floor, and you can either start from the step with index 0, or the
        step with index 1.
    

    Example 1:
    Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

    

    Example 2:
    Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

    

    Note:
    
        cost will have a length in the range [2, 1000].
        Every cost[i] will be an integer in the range [0, 999].
-----------------

# 1772_Sort_Features_by_Popularity
# 1772. Sort Features by Popularity


-----------------

# 594_Longest_Harmonious_Subsequence
# 594. Longest Harmonious Subsequence

We define a harmounious array as an array where the difference between its maximum value and
        its minimum value is exactly 1.

    Now, given an integer array, you need to find the length of its longest harmonious
        subsequence among all its possible subsequences.
    

    Example 1:

    Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

     

    Note: The length of the input array will not exceed 20,000.
-----------------

# 1682_Longest_Palindromic_Subsequence_II
# 1682. Longest Palindromic Subsequence II


-----------------

# 1317_Convert_Integer_to_the_Sum_of_Two_No-Zero_Integers
# 1317. Convert Integer to the Sum of Two No-Zero Integers


-----------------

# 1581_Customer_Who_Visited_but_Did_Not_Make_Any_Transactions
# 1581. Customer Who Visited but Did Not Make Any Transactions


-----------------

# 1742_Maximum_Number_of_Balls_in_a_Box
# 1742. Maximum Number of Balls in a Box


-----------------

# 63_Unique_Paths_II
# 63. Unique Paths II

A robot is located at the top-left corner of a m x n grid (marked 'Start'
        in the diagram below).

    The robot can only move either down or right at any point in time. The robot is trying to
        reach the bottom-right corner of the grid (marked 'Finish' in the diagram
        below).

    Now consider if some obstacles are added to the grids. How many unique paths would there
        be?

    
        

    An obstacle and empty space is marked as 1 and 0 respectively in
        the grid.

    Note: m and n will be at most 100.

    Example 1:

    Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
-----------------

# 862_Shortest_Subarray_with_Sum_at_Least_K
# 862. Shortest Subarray with Sum at Least K

Return the length of the shortest, non-empty, contiguous subarray of
        A with sum at least K.

    If there is no non-empty subarray with sum at least K, return -1.
-----------------

# 1174_Immediate_Food_Delivery_II
# 1174. Immediate Food Delivery II

Table: Delivery

    +-----------------------------+---------+
| Column Name                 | Type    |
+-----------------------------+---------+
| delivery_id                 | int     |
| customer_id                 | int     |
| order_date                  | date    |
| customer_pref_delivery_date | date    |
+-----------------------------+---------+
delivery_id is the primary key of this table.
The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).

     

    If the preferred delivery date of the customer is the same as the order date then
        the order is called immediate otherwise it's called scheduled.
    

    The first order of a customer is the order with the earliest order date
        that customer made. It is guaranteed that a customer has exactly one first order.

    Write an SQL query to find the percentage of immediate orders in the first orders of all
        customers, rounded to 2 decimal places.

    The query result format is in the following example:

    Delivery table:
+-------------+-------------+------------+-----------------------------+
| delivery_id | customer_id | order_date | customer_pref_delivery_date |
+-------------+-------------+------------+-----------------------------+
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 2           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-12                  |
| 4           | 3           | 2019-08-24 | 2019-08-24                  |
| 5           | 3           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |
| 7           | 4           | 2019-08-09 | 2019-08-09                  |
+-------------+-------------+------------+-----------------------------+

Result table:
+----------------------+
| immediate_percentage |
+----------------------+
| 50.00                |
+----------------------+
The customer id 1 has a first order with delivery id 1 and it is scheduled.
The customer id 2 has a first order with delivery id 2 and it is immediate.
The customer id 3 has a first order with delivery id 5 and it is scheduled.
The customer id 4 has a first order with delivery id 7 and it is immediate.
Hence, half the customers have immediate first orders.
-----------------

# 1002_Find_Common_Characters
# 1002. Find Common Characters

Given an array A of strings made only from lowercase letters, return a list
        of all characters that show up in all strings within the list (including
            duplicates).  For example, if a character occurs 3 times in all
        strings but not 4 times, you need to include that character three times in the final
        answer.

    You may return the answer in any order.
-----------------

# 685_Redundant_Connection_II
# 685. Redundant Connection II

In this problem, a rooted tree is a directed graph such that, there is exactly one
        node (the root) for which all other nodes are descendants of this node, plus every node has
        exactly one parent, except for the root node which has no parents.
    
    
        The given input is a directed graph that started as a rooted tree with N nodes (with
        distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has
        two different vertices chosen from 1 to N, and was not an edge that already existed.
    
    
        The resulting graph is given as a 2D-array of edges. Each element of edges
        is a pair [u, v] that represents a directed edge connecting nodes u
        and v, where u is a parent of child v.
    
    
        Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes.
        If there are multiple answers, return the answer that occurs last in the given 2D-array.
    
    Example 1:
    Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given directed graph will be like this:
  1
 / \
v   v
2-->3

    
    Example 2:
    Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
Output: [4,1]
Explanation: The given directed graph will be like this:
5 <- 1 -> 2
     ^    |
     |    v
     4 <- 3

    
    Note:
    The size of the input 2D-array will be between 3 and 1000.
    Every integer represented in the 2D-array will be between 1 and N, where N is the size of
        the input array.
-----------------

# 1326_1326._Minimum_Number_of_Taps_to_Open_to_Water_a_Garden
# 1326. 1326. Minimum Number of Taps to Open to Water a Garden


-----------------

# 307_Range_Sum_Query_-_Mutable
# 307. Range Sum Query - Mutable

Given an integer array nums, find the sum of the elements between indices i and
        j (i ≤ j), inclusive.

    The update(i, val) function modifies nums by updating the element at index
        i to val.

    Example:

    Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8

    Note:

    
        The array is only modifiable by the update function.
        You may assume the number of calls to update and sumRange function is
            distributed evenly.
-----------------

# 389_Find_the_Difference
# 389. Find the Difference

Given two strings s and t which consist of only lowercase
        letters.

    String t is generated by random shuffling string s and then add
        one more letter at a random position.

    Find the letter that was added in t.

    Example:
    Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
-----------------

# 305_Number_of_Islands_II
# 305. Number of Islands II

A 2d grid map of m rows and n columns is initially filled with
        water. We may perform an addLand operation which turns the water at position (row,
        col) into a land. Given a list of positions to operate, count the number of islands after
            each addLand operation. An island is surrounded by water and is formed by
        connecting adjacent lands horizontally or vertically. You may assume all four edges of the
        grid are all surrounded by water.

    Example:

    Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
Output: [1,1,2,3]

    Explanation:

    Initially, the 2d grid grid is filled with water. (Assume 0 represents water and
        1 represents land).

    0 0 0
0 0 0
0 0 0

    Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

    1 0 0
0 0 0   Number of islands = 1
0 0 0

    Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

    1 1 0
0 0 0   Number of islands = 1
0 0 0

    Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

    1 1 0
0 0 1   Number of islands = 2
0 0 0

    Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

    1 1 0
0 0 1   Number of islands = 3
0 1 0

    Follow up:

    Can you do it in time complexity O(k log mn), where k is the length of the
        positions?
-----------------

# 1137_N-th_Tribonacci_Number
# 1137. N-th Tribonacci Number

The Tribonacci sequence Tn is defined as follows: 

    T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn
        + Tn+1 + Tn+2 for n >= 0.

    Given n, return the value of Tn.

     
    Example 1:

    Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

    Example 2:

    Input: n = 25
Output: 1389537

     
    Constraints:

    
        0 <= n <= 37
        The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 -
            1.
-----------------

# 1645_Hopper_Company_Queries_II
# 1645. Hopper Company Queries II


-----------------

# 1764_Form_Array_by_Concatenating_Subarrays_of_Another_Array
# 1764. Form Array by Concatenating Subarrays of Another Array


-----------------

# 663_Equal_Tree_Partition
# 663. Equal Tree Partition

Given a binary tree with n nodes, your task is to check if it's possible to
        partition the tree to two trees which have the equal sum of values after removing
        exactly one edge on the original tree.
    

    Example 1:
    Input:
    5
   / \
  10 10
    /  \
   2   3

Output: True
Explanation:
    5
   /
  10

Sum: 15

   10
  /  \
 2    3

Sum: 15

    

    Example 2:
    Input:
    1
   / \
  2  10
    /  \
   2   20

Output: False
Explanation: You can't split the tree into two trees with equal sum after removing exactly one edge on the tree.

    

    Note:
    
        The range of tree node value is in the range of [-100000, 100000].
        1 <= n <= 10000
-----------------

# 201_Bitwise_AND_of_Numbers_Range
# 201. Bitwise AND of Numbers Range

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all
        numbers in this range, inclusive.

    Example 1:

    Input: [5,7]
Output: 4

    Example 2:

    Input: [0,1]
Output: 0
-----------------

# 361_Bomb_Enemy
# 361. Bomb Enemy

Given a 2D grid, each cell is either a wall 'W', an enemy 'E'
        or empty '0' (the number zero), return the maximum enemies you can kill
        using one bomb.
        The bomb kills all the enemies in the same row and column from the planted point until it
        hits the wall since the wall is too strong to be destroyed.
        Note: You can only put the bomb at an empty cell.

    Example:
-----------------

# 1744_Can_You_Eat_Your_Favorite_Candy_on_Your_Favorite_Day
# 1744. Can You Eat Your Favorite Candy on Your Favorite Day?


-----------------

# 1161_Maximum_Level_Sum_of_a_Binary_Tree
# 1161. Maximum Level Sum of a Binary Tree

Given the root of a binary tree, the level of its root is 1, the
        level of its children is 2, and so on.

    Return the smallest level X such that the sum of all the values
        of nodes at level X is maximal.

     

    Example 1:

    

    Input: [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

     

    Note:

    
        The number of nodes in the given tree is between 1 and 10^4.
        
        -10^5 <= node.val <= 10^5
-----------------

# 1121_Divide_Array_Into_Increasing_Sequences
# 1121. Divide Array Into Increasing Sequences

Given a non-decreasing array of positive integers nums and
        an integer K, find out if this array can be divided into one or more disjoint
            increasing subsequences of length at least K.

     

    Example 1:

    Input: nums = [1,2,2,3,3,4,4], K = 3
Output: true
Explanation: 
The array can be divided into the two subsequences [1,2,3,4] and [2,3,4] with lengths at least 3 each.

    Example 2:

    Input: nums = [5,6,6,7,8], K = 3
Output: false
Explanation: 
There is no way to divide the array using the conditions required.

     

    Note:

    
        1 <= nums.length <= 10^5
        1 <= K <= nums.length
        1 <= nums[i] <= 10^5
-----------------

# 1051_Height_Checker
# 1051. Height Checker

Students are asked to stand in non-decreasing order of heights for an annual photo.

    Return the minimum number of students not standing in the right positions.  (This is the
        number of students that must move in order for all students to be standing in non-decreasing
        order of height.)

     

    Example 1:

    Input: [1,1,4,2,1,3]
Output: 3
Explanation: 
Students with heights 4, 3 and the last 1 are not standing in the right positions.

     

    Note:

    
        1 <= heights.length <= 100
        1 <= heights[i] <= 100
-----------------

# 276_Paint_Fence
# 276. Paint Fence

There is a fence with n posts, each post can be painted with one of the k colors.

    You have to paint all the posts such that no more than two adjacent fence posts have the same
        color.

    Return the total number of ways you can paint the fence.

    Note:
        n and k are non-negative integers.

    Example:

    Input: n = 3, k = 2
Output: 6
Explanation: Take c1 as color 1, c2 as color 2. All possible ways are:

            post1  post2  post3
 -----      -----  -----  -----
   1         c1     c1     c2
   2         c1     c2     c1
   3         c1     c2     c2
   4         c2     c1     c1 
   5         c2     c1     c2
   6         c2     c2     c1
-----------------

# 145_Binary_Tree_Postorder_Traversal
# 145. Binary Tree Postorder Traversal

Given a binary tree, return the postorder traversal of its nodes' values.

    Example:

    Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]

    Follow up: Recursive solution is trivial, could you do it iteratively?
-----------------

# 1068_Product_Sales_Analysis_I
# 1068. Product Sales Analysis I

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
(sale_id, year) is the primary key of this table.
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

     

    Write an SQL query that reports all product names of the products in the
        Sales table along with their selling year and price.
    

    For example:

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
+--------------+-------+-------+
| product_name | year  | price |
+--------------+-------+-------+
| Nokia        | 2008  | 5000  |
| Nokia        | 2009  | 5000  |
| Apple        | 2011  | 9000  |
+--------------+-------+-------+
-----------------

# 36_Valid_Sudoku
# 36. Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
        validated according to the following rules:

    
        Each row must contain the digits 1-9 without repetition.
        
        Each column must contain the digits 1-9 without repetition.
        Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
            repetition.
        
    

    
        
        A partially filled sudoku which is valid.
    

    The Sudoku board could be partially filled, where empty cells are filled with the character
        '.'.

    Example 1:

    Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

    Example 2:

    Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

    Note:

    
        A Sudoku board (partially filled) could be valid but is not necessarily solvable.
        Only the filled cells need to be validated according to the mentioned rules.
        The given board contain only digits 1-9 and the character '.'.
        
        The given board size is always 9x9.
-----------------

# 1046_Last_Stone_Weight
# 1046. Last Stone Weight

We have a collection of rocks, each rock has a positive integer weight.

    Each turn, we choose the two heaviest rocks and smash them
        together.  Suppose the stones have weights x and y with
        x <= y.  The result of this smash is:

    
        If x == y, both stones are totally destroyed;
        If x != y, the stone of weight x is totally destroyed, and the
            stone of weight y has new weight y-x.
        
    

    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if
        there are no stones left.)

     

    Example 1:

    Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

     

    Note:

    
        1 <= stones.length <= 30
        1 <= stones[i] <= 1000
-----------------

# 928_Minimize_Malware_Spread_II
# 928. Minimize Malware Spread II

(This problem is the same as Minimize Malware Spread, with the differences bolded.)
    

    In a network of nodes, each node i is directly connected to another node
        j if and only if graph[i][j] = 1.

    Some nodes initial are initially infected by malware.  Whenever two nodes
        are directly connected and at least one of those two nodes is infected by malware, both
        nodes will be infected by malware.  This spread of malware will continue until no more
        nodes can be infected in this manner.

    Suppose M(initial) is the final number of nodes infected with malware in
        the entire network, after the spread of malware stops.

    We will remove one node from the initial list, completely removing it and any
        connections from this node to any other node.  Return the node that if
        removed, would minimize M(initial).  If multiple nodes could be
        removed to minimize M(initial), return such a node with the smallest index.
-----------------

# 208_Implement_Trie_(Prefix_Tree)
# 208. Implement Trie (Prefix Tree)

Implement a trie with insert, search, and startsWith
        methods.

    Example:

    Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

    Note:

    
        You may assume that all inputs are consist of lowercase letters a-z.
        All inputs are guaranteed to be non-empty strings.
-----------------

# 761_Special_Binary_String
# 761. Special Binary String

Special binary strings are binary strings with the following two properties:
    
    
    The number of 0's is equal to the number of 1's.
    Every prefix of the binary string has at least as many 1's as 0's.
    
    Given a special string S, a move consists of choosing two consecutive,
    non-empty, special substrings of S, and swapping them. (Two strings are
    consecutive if the last character of the first string is exactly one index before the first
    character of the second string.)

    
        At the end of any number of moves, what is the lexicographically largest resulting string
        possible?
    

    Example 1:
    Input: S = "11011000"
Output: "11100100"
Explanation:
The strings "10" [occuring at S[1]] and "1100" [at S[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.

    

    Note:
    
        S has length at most 50.
        S is guaranteed to be a special binary string as defined above.
-----------------

# 589_N-ary_Tree_Preorder_Traversal
# 589. N-ary Tree Preorder Traversal

Given an n-ary tree, return the preorder traversal of its nodes' values.

    For example, given a 3-ary tree:

     

    
        

     

    Return its preorder traversal as: [1,3,5,6,2,4].

     

    Note:

    Recursive solution is trivial, could you do it iteratively?
-----------------

# 570_Managers_with_at_Least_5_Direct_Reports
# 570. Managers with at Least 5 Direct Reports

The Employee table holds all employees including their managers. Every employee
        has an Id, and there is also a column for the manager Id.

    +------+----------+-----------+----------+
|Id    |Name 	  |Department |ManagerId |
+------+----------+-----------+----------+
|101   |John 	  |A 	      |null      |
|102   |Dan 	  |A 	      |101       |
|103   |James 	  |A 	      |101       |
|104   |Amy 	  |A 	      |101       |
|105   |Anne 	  |A 	      |101       |
|106   |Ron 	  |B 	      |101       |
+------+----------+-----------+----------+

    Given the Employee table, write a SQL query that finds out managers with at
        least 5 direct report. For the above table, your SQL query should return:

    +-------+
| Name  |
+-------+
| John  |
+-------+

    Note:
        No one would report to himself.
-----------------

# 189_Rotate_Array
# 189. Rotate Array

Given an array, rotate the array to the right by k steps, where k is
        non-negative.

    Example 1:

    Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

    Example 2:

    Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

    Note:

    
        Try to come up as many solutions as you can, there are at least 3 different ways to
            solve this problem.
        
        Could you do it in-place with O(1) extra space?
-----------------

# 633_Sum_of_Square_Numbers
# 633. Sum of Square Numbers

Given a non-negative integer c, your task is to decide whether there're two
        integers a and b such that a2 + b2 = c.

    Example 1:

    Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5

     

    Example 2:

    Input: 3
Output: False
-----------------

# 37_Sudoku_Solver
# 37. Sudoku Solver

Write a program to solve a Sudoku puzzle by filling the empty cells.

    A sudoku solution must satisfy all of the following rules:

    
        Each of the digits 1-9 must occur exactly once in each row.
        Each of the digits 1-9 must occur exactly once in each
            column.
        
        Each of the the digits 1-9 must occur exactly once in each of the 9
            3x3 sub-boxes of the grid.
        
    

    Empty cells are indicated by the character '.'.

    
        
        A sudoku puzzle...
    

    
        
        ...and its solution numbers marked in red.
    

    Note:

    
        The given board contain only digits 1-9 and the character '.'.
        
        You may assume that the given Sudoku puzzle will have a single unique solution.
        The given board size is always 9x9.
-----------------

# 1120_Maximum_Average_Subtree
# 1120. Maximum Average Subtree

Given the root of a binary tree, find the maximum average value of any subtree
        of that tree.

    (A subtree of a tree is any node of that tree plus all its descendants. The average value of
        a tree is the sum of its values, divided by the number of nodes.)

     

    Example 1:

    

    Input: [5,6,1]
Output: 6.00000
Explanation: 
For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
For the node with value = 6 we have an average of 6 / 1 = 6.
For the node with value = 1 we have an average of 1 / 1 = 1.
So the answer is 6 which is the maximum.

     

    Note:

    
        The number of nodes in the tree is between 1 and 5000.
        Each node will have a value between 0 and 100000.
        Answers will be accepted as correct if they are within 10^-5 of the correct
            answer.
-----------------

# 775_Global_and_Local_Inversions
# 775. Global and Local Inversions

We have some permutation A of [0, 1, ..., N - 1], where
        N is the length of A.

    The number of (global) inversions is the number of i < j with 0 <= i
        < j < N and A[i] > A[j].

    The number of local inversions is the number of i with 0 <= i <
        N and A[i] > A[i+1].

    Return true if and only if the number of global inversions is equal to the
        number of local inversions.

    Example 1:

    Input: A = [1,0,2]
Output: true
Explanation: There is 1 global inversion, and 1 local inversion.

    Example 2:

    Input: A = [1,2,0]
Output: false
Explanation: There are 2 global inversions, and 1 local inversion.

    Note:

    
        A will be a permutation of [0, 1, ..., A.length - 1].
        A will have length in range [1, 5000].
        The time limit for this problem has been reduced.
-----------------

# 1247_Minimum_Swaps_to_Make_Strings_Equal
# 1247. Minimum Swaps to Make Strings Equal

You are given two strings s1 and s2 of equal
        length consisting of letters "x" and "y"
        only. Your task is to make these two strings equal to each other. You
        can swap any two characters that belong to different strings, which
        means: swap s1[i] and s2[j].

    Return the minimum number of swaps required to make s1 and
        s2 equal, or return -1 if it is impossible to do
        so.

     
    Example 1:

    Input: s1 = "xx", s2 = "yy"
Output: 1
Explanation:
Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".

    Example 2: 

    Input: s1 = "xy", s2 = "yx"
Output: 2
Explanation:
Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
Note that you can't swap s1[0] and s1[1] to make s1 equal to "yx", cause we can only swap chars in different strings.

    Example 3:

    Input: s1 = "xx", s2 = "xy"
Output: -1

    Example 4:

    Input: s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"
Output: 4

     
    Constraints:

    
        1 <= s1.length, s2.length <= 1000
        s1, s2 only contain 'x' or
            'y'.
-----------------

# 408_Valid_Word_Abbreviation
# 408. Valid Word Abbreviation

Given a non-empty string s and an abbreviation abbr, return
        whether the string matches with the given abbreviation.
    

    A string such as "word" contains only the following valid abbreviations:

    ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]

    Notice that only the above abbreviations are valid abbreviations of the string
        "word". Any other string is not a valid abbreviation of "word".
    

    Note:
        Assume s contains only lowercase letters and abbr contains only
        lowercase letters and digits.
    

    Example 1:
    Given s = "internationalization", abbr = "i12iz4n":

Return true.

    

    Example 2:
    Given s = "apple", abbr = "a2e":

Return false.
-----------------

# 1084_Sales_Analysis_III
# 1084. Sales Analysis III

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

     

    Write an SQL query that reports the products that were
        only sold in spring 2019. That is,
        between 2019-01-01 and 2019-03-31 inclusive.

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
+-------------+--------------+
| product_id  | product_name |
+-------------+--------------+
| 1           | S8           |
+-------------+--------------+
The product with id 1 was only sold in spring 2019 while the other two were sold after.
-----------------

# 842_Split_Array_into_Fibonacci_Sequence
# 842. Split Array into Fibonacci Sequence

Given a string S of digits, such as S = "123456579",
        we can split it into a Fibonacci-like sequence [123, 456, 579].
    

    Formally, a Fibonacci-like sequence is a list F of non-negative integers
        such that:

    
        0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit
            signed integer type);
        
        F.length >= 3;
        and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
        
    

    Also, note that when splitting the string into pieces, each piece must not have extra leading
        zeroes, except if the piece is the number 0 itself.

    Return any Fibonacci-like sequence split from S, or return [] if it
        cannot be done.

    Example 1:

    Input: "123456579"
Output: [123,456,579]

    Example 2:

    Input: "11235813"
Output: [1,1,2,3,5,8,13]

    Example 3:

    Input: "112358130"
Output: []
Explanation: The task is impossible.

    Example 4:

    Input: "0123"
Output: []
Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.

    Example 5:

    Input: "1101111"
Output: [110, 1, 111]
Explanation: The output [11, 0, 11, 11] would also be accepted.

    Note: 

    
        1 <= S.length <= 200
        S contains only digits.
-----------------

# 262_Trips_and_Users
# 262. Trips and Users

The Trips table holds all taxi trips. Each trip has a unique Id, while Client_Id
        and Driver_Id are both foreign keys to the Users_Id at the Users table. Status
        is an ENUM type of (‘completed’, ‘cancelled_by_driver’, ‘cancelled_by_client’).
    

    +----+-----------+-----------+---------+--------------------+----------+
| Id | Client_Id | Driver_Id | City_Id |        Status      |Request_at|
+----+-----------+-----------+---------+--------------------+----------+
| 1  |     1     |    10     |    1    |     completed      |2013-10-01|
| 2  |     2     |    11     |    1    | cancelled_by_driver|2013-10-01|
| 3  |     3     |    12     |    6    |     completed      |2013-10-01|
| 4  |     4     |    13     |    6    | cancelled_by_client|2013-10-01|
| 5  |     1     |    10     |    1    |     completed      |2013-10-02|
| 6  |     2     |    11     |    6    |     completed      |2013-10-02|
| 7  |     3     |    12     |    6    |     completed      |2013-10-02|
| 8  |     2     |    12     |    12   |     completed      |2013-10-03|
| 9  |     3     |    10     |    12   |     completed      |2013-10-03|
| 10 |     4     |    13     |    12   | cancelled_by_driver|2013-10-03|
+----+-----------+-----------+---------+--------------------+----------+

    The Users table holds all users. Each user has an unique Users_Id, and Role is
        an ENUM type of (‘client’, ‘driver’, ‘partner’).

    +----------+--------+--------+
| Users_Id | Banned |  Role  |
+----------+--------+--------+
|    1     |   No   | client |
|    2     |   Yes  | client |
|    3     |   No   | client |
|    4     |   No   | client |
|    10    |   No   | driver |
|    11    |   No   | driver |
|    12    |   No   | driver |
|    13    |   No   | driver |
+----------+--------+--------+

    Write a SQL query to find the cancellation rate of requests made by unbanned users (both
        client and driver must be unbanned) between Oct 1, 2013 and Oct
            3, 2013. The cancellation rate is computed by dividing the number of canceled
        (by client or driver) requests made by unbanned users by the total number of requests made
        by unbanned users.

    For the above tables, your SQL query should return the following rows with the cancellation
        rate being rounded to two decimal places.

    +------------+-------------------+
|     Day    | Cancellation Rate |
+------------+-------------------+
| 2013-10-01 |       0.33        |
| 2013-10-02 |       0.00        |
| 2013-10-03 |       0.50        |
+------------+-------------------+

    Credits:
        Special thanks to @cak1erlizhou
        for contributing this question, writing the problem description and adding part of the test
        cases.
-----------------

# 302_Smallest_Rectangle_Enclosing_Black_Pixels
# 302. Smallest Rectangle Enclosing Black Pixels

An image is represented by a binary matrix with 0 as a white pixel and
        1 as a black pixel. The black pixels are connected, i.e., there is only one
        black region. Pixels are connected horizontally and vertically. Given the location (x,
            y) of one of the black pixels, return the area of the smallest (axis-aligned)
        rectangle that encloses all black pixels.

    Example:

    Input:
[
  "0010",
  "0110",
  "0100"
]
and x = 0, y = 2

Output: 6
-----------------

# 181_Employees_Earning_More_Than_Their_Managers
# 181. Employees Earning More Than Their Managers

The Employee table holds all employees including their managers. Every employee
        has an Id, and there is also a column for the manager Id.

    +----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+

    Given the Employee table, write a SQL query that finds out employees who earn
        more than their managers. For the above table, Joe is the only employee who earns more than
        his manager.

    +----------+
| Employee |
+----------+
| Joe      |
+----------+
-----------------

# 48_Rotate_Image
# 48. Rotate Image

You are given an n x n 2D matrix representing an image.

    Rotate the image by 90 degrees (clockwise).

    Note:

    You have to rotate the image in-place, which means
        you have to modify the input 2D matrix directly. DO NOT allocate another 2D
        matrix and do the rotation.

    Example 1:

    Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

    Example 2:

    Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
-----------------

# 1414_Find_the_Minimum_Number_of_Fibonacci_Numbers_Whose_Sum_Is_K
# 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K


-----------------

# 1656_Design_an_Ordered_Stream
# 1656. Design an Ordered Stream


-----------------

# 10_Regular_Expression_Matching
# 10. Regular Expression Matching

Given an input string (s) and a pattern (p), implement regular
        expression matching with support for '.' and '*'.
    

    '.' Matches any single character.
'*' Matches zero or more of the preceding element.

    The matching should cover the entire input string (not partial).

    Note:

    
        s could be empty and contains only lowercase letters a-z.
        
        p could be empty and contains only lowercase letters a-z, and
            characters like . or *.
        
    

    Example 1:

    Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

    Example 2:

    Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

    Example 3:

    Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

    Example 4:

    Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

    Example 5:

    Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
-----------------

# 1838_Frequency_of_the_Most_Frequent_Element
# 1838. Frequency of the Most Frequent Element


-----------------

# 1123_Lowest_Common_Ancestor_of_Deepest_Leaves
# 1123. Lowest Common Ancestor of Deepest Leaves

Given a rooted binary tree, return the lowest common ancestor of its deepest leaves.

    Recall that:

    
        The node of a binary tree is a leaf if and only if it has no children
        The depth of the root of the tree is 0, and if the depth of a node is
            d, the depth of each of its children is d+1.
        
        The lowest common ancestor of a set S of nodes is the node
            A with the largest depth such that every node in S is in the subtree with
            root A.
        
    

     
    Example 1:

    Input: root = [1,2,3]
Output: [1,2,3]
Explanation:
The deepest leaves are the nodes with values 2 and 3.
The lowest common ancestor of these leaves is the node with value 1.
The answer returned is a TreeNode object (not an array) with serialization "[1,2,3]".

    Example 2:

    Input: root = [1,2,3,4]
Output: [4]

    Example 3:

    Input: root = [1,2,3,4,5]
Output: [2,4,5]

     
    Constraints:

    
        The given tree will have between 1 and 1000 nodes.
        Each node of the tree will have a distinct value between 1 and 1000.
-----------------

# 1636_Sort_Array_by_Increasing_Frequency
# 1636. Sort Array by Increasing Frequency


-----------------

# 411_Minimum_Unique_Word_Abbreviation
# 411. Minimum Unique Word Abbreviation

A string such as "word" contains the following abbreviations:

    ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]

    Given a target string and a set of strings in a dictionary, find an abbreviation of this
        target string with the smallest possible length such that it does not conflict
        with abbreviations of the strings in the dictionary. 

    Each number or letter in the abbreviation is considered length = 1. For example, the
        abbreviation "a32bc" has length = 4.

    Note:
    
        In the case of multiple answers as shown in the second example below, you may return any
            one of them.
        
        Assume length of target string = m, and dictionary size = n. You may
            assume that m ≤ 21, n ≤ 1000, and log2(n) + m
                ≤ 20.
        
    
    

    Examples:
    "apple", ["blade"] -> "a4" (because "5" or "4e" conflicts with "blade")

"apple", ["plain", "amber", "blade"] -> "1p3" (other valid answers include "ap3", "a3e", "2p2", "3le", "3l1").
-----------------

# 1821_Find_Customers_With_Positive_Revenue_this_Year
# 1821. Find Customers With Positive Revenue this Year


-----------------

# 15_3Sum
# 15. 3Sum

Given an array nums of n integers, are there elements a,
        b, c in nums such that a + b + c =
        0? Find all unique triplets in the array which gives the sum of zero.

    Note:

    The solution set must not contain duplicate triplets.

    Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
-----------------

# 1122_Relative_Sort_Array
# 1122. Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2
        are distinct, and all elements in arr2 are also in arr1.

    Sort the elements of arr1 such that the relative ordering of items in
        arr1 are the same as in arr2.  Elements that don't appear
        in arr2 should be placed at the end of arr1 in
        ascending order.

     
    Example 1:
    Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

     
    Constraints:

    
        arr1.length, arr2.length <= 1000
        0 <= arr1[i], arr2[i] <= 1000
        Each arr2[i] is distinct.
        Each arr2[i] is in arr1.
-----------------

# 799_Champagne_Tower
# 799. Champagne Tower

We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses,
        and so on until the 100th row.  Each glass holds one cup (250ml) of champagne.

    Then, some champagne is poured in the first glass at the top.  When the top most glass
        is full, any excess liquid poured will fall equally to the glass immediately to the left and
        right of it.  When those glasses become full, any excess champagne will fall equally to
        the left and right of those glasses, and so on.  (A glass at the bottom row has it's
        excess champagne fall on the floor.)

    For example, after one cup of champagne is poured, the top most glass is full.  After
        two cups of champagne are poured, the two glasses on the second row are half full. 
        After three cups of champagne are poured, those two cups become full - there are 3 full
        glasses total now.  After four cups of champagne are poured, the third row has the
        middle glass half full, and the two outside glasses are a quarter full, as pictured
        below.

    

    Now after pouring some non-negative integer cups of champagne, return how full the j-th glass
        in the i-th row is (both i and j are 0 indexed.)

     

    Example 1:
Input: poured = 1, query_glass = 1, query_row = 1
Output: 0.0
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.

Example 2:
Input: poured = 2, query_glass = 1, query_row = 1
Output: 0.5
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.

     

    Note:

    
        poured will be in the range of [0, 10 ^ 9].
        
        query_glass and query_row will be in the range of [0,
            99].
-----------------

# 1225_Report_Contiguous_Dates
# 1225. Report Contiguous Dates

Table: Failed

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| fail_date    | date    |
+--------------+---------+
Primary key for this table is fail_date.
Failed table contains the days of failed tasks.

    Table: Succeeded

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| success_date | date    |
+--------------+---------+
Primary key for this table is success_date.
Succeeded table contains the days of succeeded tasks.

     

    A system is running one task every day. Every task is independent of the
        previous tasks. The tasks can fail or succeed.

    Write an SQL query to generate a report of period_state for each continuous
        interval of days in the period from 2019-01-01 to
        2019-12-31.

    period_state is 'failed' if tasks in this interval failed
        or 'succeeded' if tasks in this interval succeeded. Interval of days
        are retrieved as start_date and end_date.

    Order result by start_date.

    The query result format is in the following example:

    Failed table:
+-------------------+
| fail_date         |
+-------------------+
| 2018-12-28        |
| 2018-12-29        |
| 2019-01-04        |
| 2019-01-05        |
+-------------------+

Succeeded table:
+-------------------+
| success_date      |
+-------------------+
| 2018-12-30        |
| 2018-12-31        |
| 2019-01-01        |
| 2019-01-02        |
| 2019-01-03        |
| 2019-01-06        |
+-------------------+

Result table:
+--------------+--------------+--------------+
| period_state | start_date   | end_date     |
+--------------+--------------+--------------+
| succeeded    | 2019-01-01   | 2019-01-03   |
| failed       | 2019-01-04   | 2019-01-05   |
| succeeded    | 2019-01-06   | 2019-01-06   |
+--------------+--------------+--------------+

The report ignored the system state in 2018 as we care about the system in the period 2019-01-01 to 2019-12-31.
From 2019-01-01 to 2019-01-03 all tasks succeeded and the system state was "succeeded".
From 2019-01-04 to 2019-01-05 all tasks failed and system state was "failed".
From 2019-01-06 to 2019-01-06 all tasks succeeded and system state was "succeeded".
-----------------

# 526_Beautiful_Arrangement
# 526. Beautiful Arrangement

Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array
        that is constructed by these N numbers successfully if one of the following is true
        for the ith position (1 <= i <= N) in this array:

    
        The number at the ith position is divisible by i.
        i is divisible by the number at the ith position.
    

     

    Now given N, how many beautiful arrangements can you construct?

    Example 1:

    Input: 2
Output: 2
Explanation:

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).

Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

     

    Note:

    
        N is a positive integer and will not exceed 15.
-----------------

# 985_Sum_of_Even_Numbers_After_Queries
# 985. Sum of Even Numbers After Queries

We have an array A of integers, and an array queries of
        queries.

    For the i-th query val = queries[i][0], index =
        queries[i][1], we add val to A[index]. 
        Then, the answer to the i-th query is the sum of the even values of
        A.

    (Here, the given index = queries[i][1] is a 0-based index, and each query
        permanently modifies the array A.)

    Return the answer to all queries.  Your answer array should
        have answer[i] as the answer to the i-th query.

     

    Example 1:

    Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: 
At the beginning, the array is [1,2,3,4].
After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

     

    Note:

    
        1 <= A.length <= 10000
        -10000 <= A[i] <= 10000
        1 <= queries.length <= 10000
        -10000 <= queries[i][0] <= 10000
        0 <= queries[i][1] < A.length
-----------------

# 1608_Special_Array_With_X_Elements_Greater_Than_or_Equal_X
# 1608. Special Array With X Elements Greater Than or Equal X


-----------------

# 1108_Defanging_an_IP_Address
# 1108. Defanging an IP Address

Given a valid (IPv4) IP address, return a defanged version of that IP address.
    

    A defanged IP address replaces every period "."
        with "[.]".

     
    Example 1:
    Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

    Example 2:
    Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

     
    Constraints:

    
        The given address is a valid IPv4 address.
-----------------

# 610_Triangle_Judgement
# 610. Triangle Judgement

A pupil Tim gets homework to identify whether three line segments could possibly form a
    triangle.
     
    However, this assignment is very heavy because there are hundreds of records to calculate.

     
    Could you help Tim by writing a query to judge whether these three sides can form a triangle,
    assuming table triangle holds the length of the three sides x, y and z.

     

    | x  | y  | z  |
|----|----|----|
| 13 | 15 | 30 |
| 10 | 20 | 15 |

    For the sample data above, your query should return the follow result:

    | x  | y  | z  | triangle |
|----|----|----|----------|
| 13 | 15 | 30 | No       |
| 10 | 20 | 15 | Yes      |
-----------------

# 1716_Calculate_Money_in_Leetcode_Bank
# 1716. Calculate Money in Leetcode Bank


-----------------

# 152_Maximum_Product_Subarray
# 152. Maximum Product Subarray

Given an integer array nums, find the contiguous subarray within an array
        (containing at least one number) which has the largest product.

    Example 1:

    Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

    Example 2:

    Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
-----------------

# 662_Maximum_Width_of_Binary_Tree
# 662. Maximum Width of Binary Tree

Given a binary tree, write a function to get the maximum width of the given tree. The width
        of a tree is the maximum width among all levels. The binary tree has the same structure as a
        full binary tree, but some nodes are null.

    The width of one level is defined as the length between the end-nodes (the leftmost and right
        most non-null nodes in the level, where the null nodes between the end-nodes
        are also counted into the length calculation.

    Example 1:

    Input:

           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

    Example 2:

    Input:

          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).

    Example 3:

    Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).

    Example 4:

    Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).

    Note: Answer will in the range of 32-bit signed integer.
-----------------

# 79_Word_Search
# 79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cell, where "adjacent"
        cells are those horizontally or vertically neighboring. The same letter cell may not be used
        more than once.

    Example:

    board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
-----------------

# 1347_Minimum_Number_of_Steps_to_Make_Two_Strings_Anagram
# 1347. Minimum Number of Steps to Make Two Strings Anagram


-----------------

# 910_Smallest_Range_II
# 910. Smallest Range II

Given an array A of integers, for each integer A[i] we need to
        choose either x = -K or x = K, and add
        x to A[i] (only once).

    After this process, we have some array B.

    Return the smallest possible difference between the maximum value of B and
        the minimum value of B.
-----------------

# 1351_Count_Negative_Numbers_in_a_Sorted_Matrix
# 1351. Count Negative Numbers in a Sorted Matrix


-----------------

# 671_Second_Minimum_Node_In_a_Binary_Tree
# 671. Second Minimum Node In a Binary Tree

Given a non-empty special binary tree consisting of nodes with the non-negative value, where
        each node in this tree has exactly two or zero sub-node. If the
        node has two sub-nodes, then this node's value is the smaller value among its two
        sub-nodes. More formally, the property root.val = min(root.left.val,
            root.right.val) always holds.

    Given such a binary tree, you need to output the second minimum value in the set made
        of all the nodes' value in the whole tree.

    If no such second minimum value exists, output -1 instead.

    Example 1:

    Input:
    2
   / \
  2   5
     / \
    5   7

Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.

     

    Example 2:

    Input:
    2
   / \
  2   2

Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
-----------------

# 1213_Intersection_of_Three_Sorted_Arrays
# 1213. Intersection of Three Sorted Arrays

Given three integer arrays arr1, arr2 and
        arr3 sorted in strictly increasing
        order, return a sorted array of only the integers that appeared
        in all three arrays.

     
    Example 1:

    Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.

     
    Constraints:

    
        1 <= arr1.length, arr2.length, arr3.length <= 1000
        1 <= arr1[i], arr2[i], arr3[i] <= 2000
-----------------

# 765_Couples_Holding_Hands
# 765. Couples Holding Hands

N couples sit in 2N seats arranged in a row and want to hold hands. We want to know the
        minimum number of swaps so that every couple is sitting side by side. A swap consists
        of choosing any two people, then they stand up and switch seats.
    
    
        The people and seats are represented by an integer from 0 to 2N-1,
        the couples are numbered in order, the first couple being (0, 1), the second
        couple being (2, 3), and so on with the last couple being (2N-2,
        2N-1).
    
    
        The couples' initial seating is given by row[i] being the value of the person
        who is initially sitting in the i-th seat.

    Example 1:
    Input: row = [0, 2, 1, 3]
Output: 1
Explanation: We only need to swap the second (row[1]) and third (row[2]) person.

    

    Example 2:
    Input: row = [3, 2, 0, 1]
Output: 0
Explanation: All couples are already seated side by side.

    

    
        Note:
    
        len(row) is even and in the range of [4, 60].
        row is guaranteed to be a permutation of 0...len(row)-1.
-----------------

# 187_Repeated_DNA_Sequences
# 187. Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example:
        "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated
        sequences within the DNA.

    Write a function to find all the 10-letter-long sequences (substrings) that occur more than
        once in a DNA molecule.

    Example:

    Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
-----------------

# 456_132_Pattern
# 456. 132 Pattern

Given a sequence of n integers a1, a2, ..., an, a 132
        pattern is a subsequence ai, aj, ak
        such
        that i < j < k and ai < ak < aj.
        Design an algorithm that takes a list of n numbers as input and checks whether there is a
        132 pattern in the list.

    Note: n will be less than 15,000.

    Example 1:
    Input: [1, 2, 3, 4]

Output: False

Explanation: There is no 132 pattern in the sequence.

    

    Example 2:
    Input: [3, 1, 4, 2]

Output: True

Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

    

    Example 3:
    Input: [-1, 3, 2, 0]

Output: True

Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
-----------------

# 1159_Market_Analysis_II
# 1159. Market Analysis II

Table: Users

    +----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| join_date      | date    |
| favorite_brand | varchar |
+----------------+---------+
user_id is the primary key of this table.
This table has the info of the users of an online shopping website where users can sell and buy items.

    Table: Orders

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| order_date    | date    |
| item_id       | int     |
| buyer_id      | int     |
| seller_id     | int     |
+---------------+---------+
order_id is the primary key of this table.
item_id is a foreign key to the Items table.
buyer_id and seller_id are foreign keys to the Users table.

    Table: Items

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| item_id       | int     |
| item_brand    | varchar |
+---------------+---------+
item_id is the primary key of this table.

     

    Write an SQL query to find for each user, whether the brand of the second item (by date) they
        sold is their favorite brand. If a user sold less than two items, report the
        answer for that user as no.

    It is guaranteed that no seller sold more than one item on a day.

    The query result format is in the following example:

    Users table:
+---------+------------+----------------+
| user_id | join_date  | favorite_brand |
+---------+------------+----------------+
| 1       | 2019-01-01 | Lenovo         |
| 2       | 2019-02-09 | Samsung        |
| 3       | 2019-01-19 | LG             |
| 4       | 2019-05-21 | HP             |
+---------+------------+----------------+

Orders table:
+----------+------------+---------+----------+-----------+
| order_id | order_date | item_id | buyer_id | seller_id |
+----------+------------+---------+----------+-----------+
| 1        | 2019-08-01 | 4       | 1        | 2         |
| 2        | 2019-08-02 | 2       | 1        | 3         |
| 3        | 2019-08-03 | 3       | 2        | 3         |
| 4        | 2019-08-04 | 1       | 4        | 2         |
| 5        | 2019-08-04 | 1       | 3        | 4         |
| 6        | 2019-08-05 | 2       | 2        | 4         |
+----------+------------+---------+----------+-----------+

Items table:
+---------+------------+
| item_id | item_brand |
+---------+------------+
| 1       | Samsung    |
| 2       | Lenovo     |
| 3       | LG         |
| 4       | HP         |
+---------+------------+

Result table:
+-----------+--------------------+
| seller_id | 2nd_item_fav_brand |
+-----------+--------------------+
| 1         | no                 |
| 2         | yes                |
| 3         | yes                |
| 4         | no                 |
+-----------+--------------------+

The answer for the user with id 1 is no because they sold nothing.
The answer for the users with id 2 and 3 is yes because the brands of their second sold items are their favorite brands.
The answer for the user with id 4 is no because the brand of their second sold item is not their favorite brand.
-----------------

# 861_Score_After_Flipping_Matrix
# 861. Score After Flipping Matrix

We have a two dimensional matrix A where each value is 0 or
        1.

    A move consists of choosing any row or column, and toggling each value in that row or column:
        changing all 0s to 1s, and all 1s to 0s.
    

    After making any number of moves, every row of this matrix is interpreted as a binary number,
        and the score of the matrix is the sum of these numbers.

    Return the highest possible score.
-----------------

# 343_Integer_Break
# 343. Integer Break

Given a positive integer n, break it into the sum of at least two positive
        integers and maximize the product of those integers. Return the maximum product you can get.
    

    Example 1:
-----------------

# 1436_Destination_City
# 1436. Destination City


-----------------

# 390_Elimination_Game
# 390. Elimination Game

There is a list of sorted integers from 1 to n. Starting from left to right, remove
        the first number and every other number afterward until you reach the end of the list.

    Repeat the previous step again, but this time from right to left, remove the right most
        number and every other number from the remaining numbers.

    We keep repeating the steps again, alternating left to right and right to left, until a
        single number remains.

    Find the last number that remains starting with a list of length n.

    Example:
    Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
-----------------

# 815_Bus_Routes
# 815. Bus Routes

We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats
        forever. For example if routes[0] = [1, 5, 7], this means that the first bus
        (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->...
        forever.

    We start at bus stop S (initially not on a bus), and we want to go to bus stop
        T. Travelling by buses only, what is the least number of buses we must take to
        reach our destination? Return -1 if it is not possible.

    Example:
Input:
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
Explanation:
The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

    Note: 

    
        1 <= routes.length <= 500.
        1 <= routes[i].length <= 500.
        0 <= routes[i][j] < 10 ^ 6.
-----------------

# 605_Can_Place_Flowers
# 605. Can Place Flowers

Suppose you have a long flowerbed in which some of the plots are planted and some are not.
        However, flowers cannot be planted in adjacent plots - they would compete for water and both
        would die.

    Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1
        means not empty), and a number n, return if n new flowers can be planted in it
        without violating the no-adjacent-flowers rule.

    Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
Output: True

    

    Example 2:
    Input: flowerbed = [1,0,0,0,1], n = 2
Output: False

    

    Note:
    
        The input array won't violate no-adjacent-flowers rule.
        The input array size is in the range of [1, 20000].
        n is a non-negative integer which won't exceed the input array size.
-----------------

# 407_Trapping_Rain_Water_II
# 407. Trapping Rain Water II

Given an m x n matrix of positive integers representing the height of each unit
        cell in a 2D elevation map, compute the volume of water it is able to trap after raining.
    

     

    Note:

    Both m and n are less than 110. The height of each unit cell is greater than 0
        and is less than 20,000.

     

    Example:

    Given the following 3x6 height map:
[
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

Return 4.

    
        

    The above image represents the elevation map [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
        before the rain.

     

    
        

    After the rain, water is trapped between the blocks. The total volume of water trapped is
        4.
-----------------

# 1476_Subrectangle_Queries
# 1476. Subrectangle Queries


-----------------

# 1215_Stepping_Numbers
# 1215. Stepping Numbers

A Stepping Number is an integer such that all of its adjacent digits
        have an absolute difference of exactly 1. For example, 321 is a
        Stepping Number while 421 is not.

    Given two integers low and high, find and return a
        sorted list of all the Stepping Numbers in the range [low,
            high] inclusive.

     
    Example 1:
    Input: low = 0, high = 21
Output: [0,1,2,3,4,5,6,7,8,9,10,12,21]

     
    Constraints:

    
        0 <= low <= high <= 2 * 10^9
-----------------

# 619_Biggest_Single_Number
# 619. Biggest Single Number

Table my_numbers contains many numbers in column num including duplicated
        ones.
        Can you write a SQL query to find the biggest number, which only appears once.

    +---+
|num|
+---+
| 8 |
| 8 |
| 3 |
| 3 |
| 1 |
| 4 |
| 5 |
| 6 |

    For the sample data above, your query should return the following result:

    +---+
|num|
+---+
| 6 |

    Note:
    If there is no such number, just output null.
-----------------

# 1846_Maximum_Element_After_Decreasing_and_Rearranging
# 1846. Maximum Element After Decreasing and Rearranging


-----------------

# 1500_Design_a_File_Sharing_System
# 1500. Design a File Sharing System


-----------------

# 277_Find_the_Celebrity
# 277. Find the Celebrity

Suppose you are at a party with n people (labeled from 0 to n
        - 1) and among them, there may exist one celebrity. The definition of a celebrity is
        that all the other n - 1 people know him/her but he/she does not know any of
        them.

    Now you want to find out who the celebrity is or verify that there is not one. The only thing
        you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get
        information of whether A knows B. You need to find out the celebrity (or verify there is not
        one) by asking as few questions as possible (in the asymptotic sense).

    You are given a helper function bool knows(a, b) which tells you whether A knows
        B. Implement a function int findCelebrity(n). There will be exactly one
        celebrity if he/she is in the party. Return the celebrity's label if there is a
        celebrity in the party. If there is no celebrity, return -1.

     

    Example 1:
    
    Input: graph = [
  [1,1,0],
  [0,1,0],
  [1,1,1]
]
Output: 1
Explanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.

    Example 2:
    
    Input: graph = [
  [1,0,1],
  [1,1,0],
  [0,1,1]
]
Output: -1
Explanation: There is no celebrity.

     

    Note:

    
        The directed graph is represented as an adjacency matrix, which is an n x
            n matrix where a[i][j] = 1 means person i knows
            person j while a[i][j] = 0 means the contrary.
        
        Remember that you won't have direct access to the adjacency matrix.
-----------------

# 904_Fruit_Into_Baskets
# 904. Fruit Into Baskets

In a row of trees, the i-th tree produces fruit with type tree[i].
    

    You start at any tree of your choice, then repeatedly perform the
        following steps:

    
        Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
        Move to the next tree to the right of the current tree.  If there is no tree to the
            right, stop.
        
    

    Note that you do not have any choice after the initial choice of starting tree: you must
        perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

    You have two baskets, and each basket can carry any quantity of fruit, but you want each
        basket to only carry one type of fruit each.

    What is the total amount of fruit you can collect with this procedure?

     

    Example 1:

    Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].
-----------------

# 190_Reverse_Bits
# 190. Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

     

    Example 1:

    Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

    Example 2:

    Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10101111110010110010011101101001.

     

    Note:

    
        Note that in some languages such as Java, there is no unsigned integer type. In this
            case, both input and output will be given as signed integer type and should not affect
            your implementation, as the internal binary representation of the integer is the same
            whether it is signed or unsigned.
        
        In Java, the compiler represents the signed integers using 2's
            complement notation. Therefore, in Example 2 above the input
            represents the signed integer -3 and the output represents the signed
            integer -1073741825.
        
    

     

    Follow up:

    If this function is called many times, how would you optimize it?
-----------------

# 1231_Divide_Chocolate
# 1231. Divide Chocolate

You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness
        given by the array sweetness.

    You want to share the chocolate with your K friends so you start cutting
        the chocolate bar into K+1 pieces using K cuts,
        each piece consists of some consecutive chunks.

    Being generous, you will eat the piece with the minimum total sweetness and
        give the other pieces to your friends.

    Find the maximum total sweetness of the piece you can get by cutting
        the chocolate bar optimally.

     
    Example 1:

    Input: sweetness = [1,2,3,4,5,6,7,8,9], K = 5
Output: 6
Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]

    Example 2:

    Input: sweetness = [5,6,7,8,9,1,2,3,4], K = 8
Output: 1
Explanation: There is only one way to cut the bar into 9 pieces.

    Example 3:

    Input: sweetness = [1,2,2,1,2,2,1,2,2], K = 2
Output: 5
Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]

     
    Constraints:

    
        0 <= K < sweetness.length <= 10^4
        1 <= sweetness[i] <= 10^5
-----------------

# 905_Sort_Array_By_Parity
# 905. Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the
        even elements of A, followed by all the odd elements of A.

    You may return any answer array that satisfies this condition.
-----------------

# 169_Majority_Element
# 169. Majority Element

Given an array of size n, find the majority element. The majority element is the
        element that appears more than ⌊ n/2 ⌋ times.

    You may assume that the array is non-empty and the majority element always exist in the
        array.

    Example 1:

    Input: [3,2,3]
Output: 3

    Example 2:

    Input: [2,2,1,1,1,2,2]
Output: 2
-----------------

# 1491_Average_Salary_Excluding_the_Minimum_and_Maximum_Salary
# 1491. Average Salary Excluding the Minimum and Maximum Salary


-----------------

# 1055_Shortest_Way_to_Form_String
# 1055. Shortest Way to Form String

From any string, we can form a subsequence of that string by deleting some number of
        characters (possibly no deletions).

    Given two strings source and target, return the minimum number of
        subsequences of source such that their concatenation equals target.
        If the task is impossible, return -1.

     

    Example 1:

    Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".

    Example 2:

    Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.

    Example 3:

    Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".

     
    Constraints:

    
        Both the source and target strings consist of only lowercase
            English letters from "a"-"z".
        
        The lengths of source and target string are between
            1 and 1000.
-----------------

# 1810_Minimum_Path_Cost_in_a_Hidden_Grid
# 1810. Minimum Path Cost in a Hidden Grid


-----------------

# 1652_Defuse_the_Bomb
# 1652. Defuse the Bomb


-----------------

# 1129_Shortest_Path_with_Alternating_Colors
# 1129. Shortest Path with Alternating Colors

Consider a directed graph, with nodes labelled 0, 1, ..., n-1.  In this
        graph, each edge is either red or blue, and there could be self-edges or parallel
        edges.

    Each [i, j] in red_edges denotes a red directed edge from node
        i to node j.  Similarly, each [i, j] in blue_edges
        denotes a blue directed edge from node i to node j.

    Return an array answer of length n, where
        each answer[X] is the length of the shortest path from node
        0 to node X such that the edge colors alternate along
        the path (or -1 if such a path doesn't exist).

     
    Example 1:
    Input: n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
Output: [0,1,-1]

    Example 2:
    Input: n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
Output: [0,1,-1]

    Example 3:
    Input: n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
Output: [0,-1,-1]

    Example 4:
    Input: n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
Output: [0,1,2]

    Example 5:
    Input: n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
Output: [0,1,1]

     
    Constraints:

    
        1 <= n <= 100
        red_edges.length <= 400
        blue_edges.length <= 400
        red_edges[i].length == blue_edges[i].length == 2
        0 <= red_edges[i][j], blue_edges[i][j] < n
-----------------

# 98_Validate_Binary_Search_Tree
# 98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

    Assume a BST is defined as follows:

    
        The left subtree of a node contains only nodes with keys less than the
            node's key.
        
        The right subtree of a node contains only nodes with keys greater than
            the node's key.
        
        Both the left and right subtrees must also be binary search trees.
    

     

    Example 1:

        2
   / \
  1   3

Input: [2,1,3]
Output: true

    Example 2:

        5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
-----------------

# 1194_Tournament_Winners
# 1194. Tournament Winners

Table: Players

    +-------------+-------+
| Column Name | Type  |
+-------------+-------+
| player_id   | int   |
| group_id    | int   |
+-------------+-------+
player_id is the primary key of this table.
Each row of this table indicates the group of each player.

    Table: Matches

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| match_id      | int     |
| first_player  | int     |
| second_player | int     |
| first_score   | int     |
| second_score  | int     |
+---------------+---------+
match_id is the primary key of this table.
Each row is a record of a match, first_player and second_player contain the player_id of each match.
first_score and second_score contain the number of points of the first_player and second_player respectively.
You may assume that, in each match, players belongs to the same group.

     

    The winner in each group is the player who scored the maximum total points within the group. In
        the case of a tie, the lowest player_id wins.

    Write an SQL query to find the winner in each group.

    The query result format is in the following example:

    Players table:
+-----------+------------+
| player_id | group_id   |
+-----------+------------+
| 15        | 1          |
| 25        | 1          |
| 30        | 1          |
| 45        | 1          |
| 10        | 2          |
| 35        | 2          |
| 50        | 2          |
| 20        | 3          |
| 40        | 3          |
+-----------+------------+

Matches table:
+------------+--------------+---------------+-------------+--------------+
| match_id   | first_player | second_player | first_score | second_score |
+------------+--------------+---------------+-------------+--------------+
| 1          | 15           | 45            | 3           | 0            |
| 2          | 30           | 25            | 1           | 2            |
| 3          | 30           | 15            | 2           | 0            |
| 4          | 40           | 20            | 5           | 2            |
| 5          | 35           | 50            | 1           | 1            |
+------------+--------------+---------------+-------------+--------------+

Result table:
+-----------+------------+
| group_id  | player_id  |
+-----------+------------+
| 1         | 15         |
| 2         | 35         |
| 3         | 40         |
+-----------+------------+
-----------------

# 652_Find_Duplicate_Subtrees
# 652. Find Duplicate Subtrees

Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you
        only need to return the root node of any one of them.

    Two trees are duplicate if they have the same structure with same node values.

    Example 1: 

            1
       / \
      2   3
     /   / \
    4   2   4
       /
      4

    The following are two duplicate subtrees:

          2
     /
    4

    and

        4

    Therefore, you need to return above trees' root in the form of a list.
-----------------

# 27_Remove_Element
# 27. Remove Element

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the
        input array in-place
        with O(1) extra memory.

    The order of elements can be changed. It doesn't matter what you leave beyond the new
        length.

    Example 1:

    Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.

    Example 2:

    Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.

    Clarification:

    Confused why the returned value is an integer but your answer is an array?

    Note that the input array is passed in by reference, which means
        modification to the input array will be known to the caller as well.

    Internally you can think of this:

    // nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
-----------------

# 1689_Partitioning_Into_Minimum_Number_Of_Deci-Binary_Numbers
# 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers


-----------------

# 1666_Change_the_Root_of_a_Binary_Tree
# 1666. Change the Root of a Binary Tree


-----------------

# 884_Uncommon_Words_from_Two_Sentences
# 884. Uncommon Words from Two Sentences

We are given two sentences A and B.  (A sentence is
        a string of space separated words.  Each word consists only of lowercase
        letters.)

    A word is uncommon if it appears exactly once in one of the sentences, and does
        not appear in the other sentence.

    Return a list of all uncommon words. 

    You may return the list in any order.
-----------------

# 253_Meeting_Rooms_II
# 253. Meeting Rooms II

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...]
        (si < ei), find the minimum number of conference rooms required.
    

    Example 1:

    Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

    Example 2:

    Input: [[7,10],[2,4]]
Output: 1

    NOTE: input types have been changed on April 15, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 76_Minimum_Window_Substring
# 76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the
        characters in T in complexity O(n).

    Example:

    Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

    Note:

    
        If there is no such window in S that covers all characters in T, return the empty string
            "".
        
        If there is such window, you are guaranteed that there will always be only one unique
            minimum window in S.
-----------------

# 828_Unique_Letter_String
# 828. Unique Letter String

A character is unique in string S if it occurs exactly once in it.

    For example, in string S = "LETTER", the only unique characters are
        "L" and "R".

    Let's define UNIQ(S) as the number of unique characters in string
        S.

    For example, UNIQ("LETTER") =  2.

    Given a string S with only uppercases, calculate the sum of UNIQ(substring)
        over all non-empty substrings of S.

    If there are two or more equal substrings at different positions in S, we
        consider them different.

    Since the answer can be very large, return the answer modulo 10 ^ 9 +
        7.

     

    Example 1:

    Input: "ABC"
Output: 10
Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
Evey substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

    Example 2:

    Input: "ABA"
Output: 8
Explanation: The same as example 1, except uni("ABA") = 1.

     

    Note: 0 <= S.length <= 10000.
-----------------

# 1796_Second_Largest_Digit_in_a_String
# 1796. Second Largest Digit in a String


-----------------

# 1750_Minimum_Length_of_String_After_Deleting_Similar_Ends
# 1750. Minimum Length of String After Deleting Similar Ends


-----------------

# 1831_Maximum_Transaction_Each_Day
# 1831. Maximum Transaction Each Day


-----------------

# 1504_Count_Submatrices_With_All_Ones
# 1504. Count Submatrices With All Ones


-----------------

# 237_Delete_Node_in_a_Linked_List
# 237. Delete Node in a Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only
        access to that node.

    Given linked list -- head = [4,5,1,9], which looks like following:

     

    Example 1:
    

    Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

    Example 2:
    

    Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

     

    Note:

    
        The linked list will have at least two elements.
        All of the nodes' values will be unique.
        The given node will not be the tail and it will always be a valid node of the
            linked list.
        
        Do not return anything from your function.
-----------------

# 394_Decode_String
# 394. Decode String

Given an encoded string, return its decoded string.

    The encoding rule is: k[encoded_string], where the encoded_string inside
        the square brackets is being repeated exactly k times. Note that k is
        guaranteed to be a positive integer.

    You may assume that the input string is always valid; No extra white spaces, square brackets
        are well-formed, etc.

    Furthermore, you may assume that the original data does not contain any digits and that
        digits are only for those repeat numbers, k. For example, there won't be input
        like 3a or 2[4].

    Examples:

    s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
-----------------

# 1107_New_Users_Daily_Count
# 1107. New Users Daily Count

Table: Traffic

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| activity      | enum    |
| activity_date | date    |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
The activity column is an ENUM type of ('login', 'logout', 'jobs', 'groups', 'homepage').

     

    Write an SQL query that reports for every date within at most 90 days
        from today, the number of users that logged in for the first time on that date. Assume today
        is 2019-06-30.

    The query result format is in the following example:

    Traffic table:
+---------+----------+---------------+
| user_id | activity | activity_date |
+---------+----------+---------------+
| 1       | login    | 2019-05-01    |
| 1       | homepage | 2019-05-01    |
| 1       | logout   | 2019-05-01    |
| 2       | login    | 2019-06-21    |
| 2       | logout   | 2019-06-21    |
| 3       | login    | 2019-01-01    |
| 3       | jobs     | 2019-01-01    |
| 3       | logout   | 2019-01-01    |
| 4       | login    | 2019-06-21    |
| 4       | groups   | 2019-06-21    |
| 4       | logout   | 2019-06-21    |
| 5       | login    | 2019-03-01    |
| 5       | logout   | 2019-03-01    |
| 5       | login    | 2019-06-21    |
| 5       | logout   | 2019-06-21    |
+---------+----------+---------------+

Result table:
+------------+-------------+
| login_date | user_count  |
+------------+-------------+
| 2019-05-01 | 1           |
| 2019-06-21 | 2           |
+------------+-------------+
Note that we only care about dates with non zero user count.
The user with id 5 first logged in on 2019-03-01 so he's not counted on 2019-06-21.
-----------------

# 1552_Magnetic_Force_Between_Two_Balls
# 1552. Magnetic Force Between Two Balls


-----------------

# 1751_Maximum_Number_of_Events_That_Can_Be_Attended_II
# 1751. Maximum Number of Events That Can Be Attended II


-----------------

# 1377_Frog_Position_After_T_Seconds
# 1377. Frog Position After T Seconds


-----------------

# 174_Dungeon_Game
# 174. Dungeon Game

table.dungeon, .dungeon th, .dungeon td {
  border:3px solid black;
}

 .dungeon th, .dungeon td {
    text-align: center;
    height: 70px;
    width: 70px;
}

    
    The demons had captured the princess (P) and imprisoned her in the
        bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid.
        Our valiant knight (K) was initially positioned in the top-left room and
        must fight his way through the dungeon to rescue the princess.

    The knight has an initial health point represented by a positive integer. If at any point his
        health point drops to 0 or below, he dies immediately.

    Some of the rooms are guarded by demons, so the knight loses health (negative
        integers) upon entering these rooms; other rooms are either empty (0's) or
        contain magic orbs that increase the knight's health (positive integers).

    In order to reach the princess as quickly as possible, the knight decides to move only
        rightward or downward in each step.

     

    Write a function to determine the knight's minimum initial health so that he is
        able to rescue the princess.

    For example, given the dungeon below, the initial health of the knight must be at least
        7 if he follows the optimal path RIGHT-> RIGHT -> DOWN ->
            DOWN.

    
        
        
            -2 (K)
            -3
            3
        
        
            -5
            -10
            1
        
        
            10
            30
            -5 (P)
        
        
    

     

    Note:

    
        The knight's health has no upper bound.
        Any room can contain threats or power-ups, even the first room the knight enters and the
            bottom-right room where the princess is imprisoned.
-----------------

# 617_Merge_Two_Binary_Trees
# 617. Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some
        nodes of the two trees are overlapped while the others are not.

    You need to merge them into a new binary tree. The merge rule is that if two nodes overlap,
        then sum node values up as the new value of the merged node. Otherwise, the NOT null node
        will be used as the node of new tree.

    Example 1:

    Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7

     

    Note: The merging process must start from the root nodes of both trees.
-----------------

# 1223_Dice_Roll_Simulation
# 1223. Dice Roll Simulation

A die simulator generates a random number from 1 to 6 for each roll. You introduced a
        constraint to the generator such that it cannot roll the number i more than
        rollMax[i] (1-indexed) consecutive times. 

    Given an array of integers rollMax and an integer n,
        return the number of distinct sequences that can be obtained with exact n
        rolls.

    Two sequences are considered different if at least one element differs from each other. Since
        the answer may be too large, return it modulo 10^9 + 7.

     
    Example 1:

    Input: n = 2, rollMax = [1,1,2,2,2,3]
Output: 34
Explanation: There will be 2 rolls of die, if there are no constraints on the die, there are 6 * 6 = 36 possible combinations. In this case, looking at rollMax array, the numbers 1 and 2 appear at most once consecutively, therefore sequences (1,1) and (2,2) cannot occur, so the final answer is 36-2 = 34.

    Example 2:

    Input: n = 2, rollMax = [1,1,1,1,1,1]
Output: 30

    Example 3:

    Input: n = 3, rollMax = [1,1,1,2,2,3]
Output: 181

     
    Constraints:

    
        1 <= n <= 5000
        rollMax.length == 6
        1 <= rollMax[i] <= 15
-----------------

# 552_Student_Attendance_Record_II
# 552. Student Attendance Record II

Given a positive integer n, return the number of all possible attendance records with
        length n, which will be regarded as rewardable. The answer may be very large, return it
        after mod 109 + 7.

    A student attendance record is a string that only contains the following three
        characters:

    
    
        'A' : Absent.
        'L' : Late.
        'P' : Present.
    
    

    
        A record is regarded as rewardable if it doesn't contain more than one 'A' (absent)
        or more than two continuous 'L' (late).

    Example 1:
    Input: n = 2
Output: 8
Explanation:
There are 8 records with length 2 will be regarded as rewardable:
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" won't be regarded as rewardable owing to more than one absent times.

    

    Note:
        The value of n won't exceed 100,000.
-----------------

# 740_Delete_and_Earn
# 740. Delete and Earn

Given an array nums of integers, you can perform operations on the array.

    In each operation, you pick any nums[i] and delete it to earn
        nums[i] points. After, you must delete every element equal to nums[i]
            - 1 or nums[i] + 1.

    You start with 0 points. Return the maximum number of points you can earn by applying such
        operations.

    Example 1:

    Input: nums = [3, 4, 2]
Output: 6
Explanation:
Delete 4 to earn 4 points, consequently 3 is also deleted.
Then, delete 2 to earn 2 points. 6 total points are earned.

     

    Example 2:

    Input: nums = [2, 2, 3, 3, 3, 4]
Output: 9
Explanation:
Delete 3 to earn 3 points, deleting both 2's and the 4.
Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
9 total points are earned.

     

    Note:

    
        The length of nums is at most 20000.
        Each element nums[i] is an integer in the range [1, 10000].
-----------------

# 339_Nested_List_Weight_Sum
# 339. Nested List Weight Sum

Given a nested list of integers, return the sum of all integers in the list weighted by their
        depth.

    Each element is either an integer, or a list -- whose elements may also be integers or other
        lists.
-----------------

# 654_Maximum_Binary_Tree
# 654. Maximum Binary Tree

Given an integer array with no duplicates. A maximum tree building on this array is defined
        as follow:
    
        The root is the maximum number in the array.
        The left subtree is the maximum tree constructed from left part subarray divided by the
            maximum number.
        
        The right subtree is the maximum tree constructed from right part subarray divided by
            the maximum number.
        
    
    

    
        Construct the maximum tree by the given array and output the root node of this tree.
    

    Example 1:
    Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    /
     2  0
       \
        1

    

    Note:
    
        The size of the given array will be in the range [1,1000].
-----------------

# 694_Number_of_Distinct_Islands
# 694. Number of Distinct Islands

Given a non-empty 2D array grid of 0's and 1's, an island is a group of
        1's (representing land) connected 4-directionally (horizontal or vertical.) You
        may assume all four edges of the grid are surrounded by water.

    Count the number of distinct islands. An island is considered to be the same as
        another if and only if one island can be translated (and not rotated or reflected) to equal
        the other.

    Example 1:
    11000
11000
00011
00011

    Given the above grid map, return 1.
    

    Example 2:
    11011
10000
00001
11011
    Given the above grid map, return 3.
    Notice that:
    11
1

    and
     1
11

    are considered different island shapes, because we do not consider reflection / rotation.
    

    Note:
        The length of each dimension in the given grid does not exceed 50.
-----------------

# 965_Univalued_Binary_Tree
# 965. Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

    Return true if and only if the given tree is univalued.

     

    Example 1:
    
    Input: [1,1,1,1,1,null,1]
Output: true
-----------------

# 822_Card_Flipping_Game
# 822. Card Flipping Game

On a table are N cards, with a positive integer printed on the front and back of
        each card (possibly different).

    We flip any number of cards, and after we choose one card. 

    If the number X on the back of the chosen card is not on the front of any
        card, then this number X is good.

    What is the smallest number that is good?  If no number is good, output 0.
    

    Here, fronts[i] and backs[i] represent the number on the front and
        back of card i. 

    A flip swaps the front and back numbers, so the value on the front is now on the back
        and vice versa.

    Example:

    Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
Output: 2
Explanation: If we flip the second card, the fronts are [1,3,4,4,7] and the backs are [1,2,4,1,3].
We choose the second card, which has number 2 on the back, and it isn't on the front of any card, so 2 is good.

     

    Note:

    
        1 <= fronts.length == backs.length <= 1000.
        1 <= fronts[i] <= 2000.
        1 <= backs[i] <= 2000.
-----------------

# 1015_Smallest_Integer_Divisible_by_K
# 1015. Smallest Integer Divisible by K

Given a positive integer K, you need find the smallest positive
        integer N such that N is divisible by K, and
        N only contains the digit 1.

    Return the length of N.  If there is no such N, return
        -1.

     

    Example 1:

    Input: 1
Output: 1
Explanation: The smallest answer is N = 1, which has length 1.

    Example 2:

    Input: 2
Output: -1
Explanation: There is no such positive integer N divisible by 2.

    Example 3:

    Input: 3
Output: 3
Explanation: The smallest answer is N = 111, which has length 3.

     

    Note:

    
        1 <= K <= 10^5
-----------------

# 968_Binary_Tree_Cameras
# 968. Binary Tree Cameras

Given a binary tree, we install cameras on the nodes of the tree. 

    Each camera at a node can monitor its parent, itself, and its immediate
        children.

    Calculate the minimum number of cameras needed to monitor all nodes of the tree.

     

    Example 1:
-----------------

# 944_Delete_Columns_to_Make_Sorted
# 944. Delete Columns to Make Sorted

We are given an array A of N lowercase letter strings, all of
        the same length.

    Now, we may choose any set of deletion indices, and for each string, we delete all the
        characters in those indices.

    For example, if we have an array A = ["abcdef","uvwxyz"]
        and deletion indices {0, 2, 3}, then the final array after deletions is ["bef",
            "vyz"], and the remaining columns of A
        are ["b","v"], ["e","y"],
        and ["f","z"].  (Formally, the c-th
        column is [A[0][c], A[1][c], ..., A[A.length-1][c]].)

    Suppose we chose a set of deletion indices D such that after deletions, each
        remaining column in A is in non-decreasing sorted order.

    Return the minimum possible value of D.length.
-----------------

# 1142_User_Activity_for_the_Past_30_Days_II
# 1142. User Activity for the Past 30 Days II

Table: Activity

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| session_id    | int     |
| activity_date | date    |
| activity_type | enum    |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
The activity_type column is an ENUM of type ('open_session', 'end_session', 'scroll_down', 'send_message').
The table shows the user activities for a social media website.
Note that each session belongs to exactly one user.

     

    Write an SQL query to find the average number of sessions per user for a period of 30 days
        ending 2019-07-27 inclusively, rounded to 2 decimal
            places. The sessions we want to count for a user are those with at least one
        activity in that time period.

    The query result format is in the following example:

    Activity table:
+---------+------------+---------------+---------------+
| user_id | session_id | activity_date | activity_type |
+---------+------------+---------------+---------------+
| 1       | 1          | 2019-07-20    | open_session  |
| 1       | 1          | 2019-07-20    | scroll_down   |
| 1       | 1          | 2019-07-20    | end_session   |
| 2       | 4          | 2019-07-20    | open_session  |
| 2       | 4          | 2019-07-21    | send_message  |
| 2       | 4          | 2019-07-21    | end_session   |
| 3       | 2          | 2019-07-21    | open_session  |
| 3       | 2          | 2019-07-21    | send_message  |
| 3       | 2          | 2019-07-21    | end_session   |
| 3       | 5          | 2019-07-21    | open_session  |
| 3       | 5          | 2019-07-21    | scroll_down   |
| 3       | 5          | 2019-07-21    | end_session   |
| 4       | 3          | 2019-06-25    | open_session  |
| 4       | 3          | 2019-06-25    | end_session   |
+---------+------------+---------------+---------------+

Result table:
+---------------------------+
| average_sessions_per_user |
+---------------------------+
| 1.33                      |
+---------------------------+
User 1 and 2 each had 1 session in the past 30 days while user 3 had 2 sessions so the average is (1 + 1 + 2) / 3 = 1.33.
-----------------

# 94_Binary_Tree_Inorder_Traversal
# 94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

    Example:

    Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]

    Follow up: Recursive solution is trivial, could you do it iteratively?
-----------------

# 924_Minimize_Malware_Spread
# 924. Minimize Malware Spread

In a network of nodes, each node i is directly connected to another node
        j if and only if graph[i][j] = 1.

    Some nodes initial are initially infected by malware.  Whenever two nodes
        are directly connected and at least one of those two nodes is infected by malware, both
        nodes will be infected by malware.  This spread of malware will continue until no more
        nodes can be infected in this manner.

    Suppose M(initial) is the final number of nodes infected with malware in
        the entire network, after the spread of malware stops.

    We will remove one node from the initial list.  Return the node that if removed,
        would minimize M(initial).  If multiple nodes could be removed to
        minimize M(initial), return such a node with the smallest index.

    Note that if a node was removed from the initial list of infected nodes, it
        may still be infected later as a result of the malware spread.

     

    
    

    Example 1:

    Input: graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]
Output: 0

    Example 2:

    Input: graph = [[1,0,0],[0,1,0],[0,0,1]], initial = [0,2]
Output: 0

    Example 3:

    Input: graph = [[1,1,1],[1,1,1],[1,1,1]], initial = [1,2]
Output: 1

     

    Note:

    
        1 < graph.length = graph[0].length <= 300
        0 <= graph[i][j] == graph[j][i] <= 1
        graph[i][i] = 1
        1 <= initial.length < graph.length
        0 <= initial[i] < graph.length
-----------------

# 137_Single_Number_II
# 137. Single Number II

Given a non-empty array of integers, every element appears
        three times except for one, which appears exactly once. Find that single one.

    Note:

    Your algorithm should have a linear runtime complexity. Could you implement it without using
        extra memory?

    Example 1:

    Input: [2,2,3,2]
Output: 3

    Example 2:

    Input: [0,1,0,1,0,1,99]
Output: 99
-----------------

# 690_Employee_Importance
# 690. Employee Importance

You are given a data structure of employee information, which includes the employee's unique
        id, his importance value and his direct subordinates' id.

    For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee
        3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data
        structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []].
        Note that although employee 3 is also a subordinate of employee 1, the relationship is not
            direct.

    Now given the employee information of a company, and an employee id, you need to return the
        total importance value of this employee and all his subordinates.

    Example 1:

    Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
Output: 11
Explanation:
Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.

     

    Note:

    
        One employee has at most one direct leader and may have several subordinates.
        
        The maximum number of employees won't exceed 2000.
-----------------

# 434_Number_of_Segments_in_a_String
# 434. Number of Segments in a String

Count the number of segments in a string, where a segment is defined to be a contiguous
        sequence of non-space characters.

    Please note that the string does not contain any non-printable characters.

    Example:
    Input: "Hello, my name is John"
Output: 5
-----------------

# 885_Spiral_Matrix_III
# 885. Spiral Matrix III

On a 2 dimensional grid with R rows and C columns, we start at
        (r0, c0) facing east.

    Here, the north-west corner of the grid is at the first row and column, and the
        south-east corner of the grid is at the last row and column.

    Now, we walk in a clockwise spiral shape to visit every position in this grid. 

    Whenever we would move outside the boundary of the grid, we continue our walk outside the
        grid (but may return to the grid boundary later.) 

    Eventually, we reach all R * C spaces of the grid.

    Return a list of coordinates representing the positions of the grid in the order they were
        visited.

     

    Example 1:

    Input: R = 1, C = 4, r0 = 0, c0 = 0
Output: [[0,0],[0,1],[0,2],[0,3]]

     

    Example 2:

    Input: R = 5, C = 6, r0 = 1, c0 = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
-----------------

# 378_Kth_Smallest_Element_in_a_Sorted_Matrix
# 378. Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are sorted in ascending
        order, find the kth smallest element in the matrix.

    
        Note that it is the kth smallest element in the sorted order, not the kth distinct element.
    

    Example:
    matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.

    

    Note: 
        You may assume k is always valid, 1 ≤ k ≤ n2.
-----------------

# 597_Friend_Requests_I_Overall_Acceptance_Rate
# 597. Friend Requests I: Overall Acceptance Rate

In social network like Facebook or Twitter, people send friend requests and accept others’
    requests as well. Now given two tables as below:
     
    Table: friend_request

    | sender_id | send_to_id |request_date|
|-----------|------------|------------|
| 1         | 2          | 2016_06-01 |
| 1         | 3          | 2016_06-01 |
| 1         | 4          | 2016_06-01 |
| 2         | 3          | 2016_06-02 |
| 3         | 4          | 2016-06-09 |

     
    Table: request_accepted

    | requester_id | accepter_id |accept_date |
|--------------|-------------|------------|
| 1            | 2           | 2016_06-03 |
| 1            | 3           | 2016-06-08 |
| 2            | 3           | 2016-06-08 |
| 3            | 4           | 2016-06-09 |
| 3            | 4           | 2016-06-10 |

     
    Write a query to find the overall acceptance rate of requests rounded to 2 decimals, which is
    the number of acceptance divide the number of requests.

     
    For the sample data above, your query should return the following result.

     

    |accept_rate|
|-----------|
|       0.80|

     
    Note:

    
        The accepted requests are not necessarily from the table friend_request. In
            this case, you just need to simply count the total accepted requests (no matter whether
            they are in the original requests), and divide it by the number of requests to get the
            acceptance rate.
        
        It is possible that a sender sends multiple requests to the same receiver, and a request
            could be accepted more than once. In this case, the ‘duplicated’ requests or
            acceptances are only counted once.
        
        If there is no requests at all, you should return 0.00 as the accept_rate.
    

     
    Explanation: There are 4 unique accepted requests, and there are 5 requests in total. So
    the rate is 0.80.

     
    Follow-up:

    
        Can you write a query to return the accept rate but for every month?
        How about the cumulative accept rate for every day?
-----------------

# 1774_Closest_Dessert_Cost
# 1774. Closest Dessert Cost


-----------------

# 85_Maximal_Rectangle
# 85. Maximal Rectangle

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle
        containing only 1's and return its area.

    Example:

    Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
-----------------

# 1233_Remove_Sub-Folders_from_the_Filesystem
# 1233. Remove Sub-Folders from the Filesystem

Given a list of folders, remove all sub-folders in those folders and return in any
        order the folders after removing.

    If a folder[i] is located within another folder[j], it is
        called a sub-folder of it.

    The format of a path is one or more concatenated strings of the
        form: / followed by one or more lowercase English letters. For
        example, /leetcode and /leetcode/problems are
        valid paths while an empty string and / are not.

     
    Example 1:

    Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
Output: ["/a","/c/d","/c/f"]
Explanation: Folders "/a/b/" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.

    Example 2:

    Input: folder = ["/a","/a/b/c","/a/b/d"]
Output: ["/a"]
Explanation: Folders "/a/b/c" and "/a/b/d/" will be removed because they are subfolders of "/a".

    Example 3:

    Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
Output: ["/a/b/c","/a/b/ca","/a/b/d"]

     
    Constraints:

    
        1 <= folder.length <= 4 * 10^4
        2 <= folder[i].length <= 100
        folder[i] contains only lowercase letters and '/'
        folder[i] always starts with character '/'
        Each folder name is unique.
-----------------

# 715_Range_Module
# 715. Range Module

A Range Module is a module that tracks ranges of numbers. Your task is to design and
        implement the following interfaces in an efficient manner.

    
    addRange(int left, int right) Adds the half-open interval [left,
        right), tracking every real number in that interval. Adding an interval that
        partially overlaps with currently tracked numbers should add any numbers in the interval
        [left, right) that are not already tracked.
    
    

    
    queryRange(int left, int right) Returns true if and only if every real number
        in the interval [left, right)
        is currently being tracked.
    
    

    
    removeRange(int left, int right) Stops tracking every real number currently
        being tracked in the interval [left, right).
    
    

    Example 1:
    addRange(10, 20): null
removeRange(14, 16): null
queryRange(10, 14): true (Every number in [10, 14) is being tracked)
queryRange(13, 15): false (Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
queryRange(16, 17): true (The number 16 in [16, 17) is still being tracked, despite the remove operation)

    

    Note:
    A half open interval [left, right) denotes all real numbers left <= x <
        right.
    

    0 < left < right < 10^9 in all calls to addRange, queryRange,
        removeRange.
    
    The total number of calls to addRange in a single test case is at most 1000.
    
    The total number of calls to queryRange in a single test case is at most 5000.
    
    The total number of calls to removeRange in a single test case is at most
        1000.
-----------------

# 1851_Minimum_Interval_to_Include_Each_Query
# 1851. Minimum Interval to Include Each Query


-----------------

# 1570_Dot_Product_of_Two_Sparse_Vectors
# 1570. Dot Product of Two Sparse Vectors


-----------------

# 578_Get_Highest_Answer_Rate_Question
# 578. Get Highest Answer Rate Question

Get the highest answer rate question from a table survey_log with these columns:
        uid, action, question_id, answer_id, q_num,
        timestamp.

    uid means user id; action has these kind of values: "show", "answer",
        "skip"; answer_id is not null when action column is "answer", while is
        null for "show" and "skip"; q_num is the numeral order of the question
        in current session.

    Write a sql query to identify the question which has the highest answer rate.

    Example:

    Input:
+------+-----------+--------------+------------+-----------+------------+
| uid  | action    | question_id  | answer_id  | q_num     | timestamp  |
+------+-----------+--------------+------------+-----------+------------+
| 5    | show      | 285          | null       | 1         | 123        |
| 5    | answer    | 285          | 124124     | 1         | 124        |
| 5    | show      | 369          | null       | 2         | 125        |
| 5    | skip      | 369          | null       | 2         | 126        |
+------+-----------+--------------+------------+-----------+------------+
Output:
+-------------+
| survey_log  |
+-------------+
|    285      |
+-------------+
Explanation:
question 285 has answer rate 1/1, while question 369 has 0/1 answer rate, so output 285.

     

    Note: The highest answer rate meaning is: answer number's ratio in show number in
        the same question.
-----------------

# 1360_Number_of_Days_Between_Two_Dates
# 1360. Number of Days Between Two Dates


-----------------

# 723_Candy_Crush
# 723. Candy Crush

This question is about implementing a basic elimination algorithm for Candy Crush.

    Given a 2D integer array board representing the grid of candy, different
        positive integers board[i][j] represent different types of candies. A value of
        board[i][j] = 0 represents that the cell at position (i, j) is
        empty. The given board represents the state of the game following the player's move.
        Now, you need to restore the board to a stable state by crushing candies according to
        the following rules:

    
        If three or more candies of the same type are adjacent vertically or horizontally,
            "crush" them all at the same time - these positions become empty.
        
        After crushing all candies simultaneously, if an empty space on the board has candies on
            top of itself, then these candies will drop until they hit a candy or bottom at the same
            time. (No new candies will drop outside the top boundary.)
        
        After the above steps, there may exist more candies that can be crushed. If so, you need
            to repeat the above steps.
        
        If there does not exist more candies that can be crushed (ie. the board is stable),
            then return the current board.
        
    

    You need to perform the above rules until the board becomes stable, then return the current
        board.

     

    Example:

    Input:
board =
[[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]

Output:
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

Explanation:

     

    Note:

    
        The length of board will be in the range [3, 50].
        The length of board[i] will be in the range [3, 50].
        Each board[i][j] will initially start as an integer in the range [1, 2000].
-----------------

# 6_ZigZag_Conversion
# 6. ZigZag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given
        number of rows like this: (you may want to display this pattern in a fixed font for better
        legibility)

    P   A   H   N
A P L S I I G
Y   I   R

    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);

    Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

    Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
-----------------

# 84_Largest_Rectangle_in_Histogram
# 84. Largest Rectangle in Histogram

Given n non-negative integers representing the histogram's bar height where the
        width of each bar is 1, find the area of largest rectangle in the histogram.

     

    
        
        Above is a histogram where width of each bar is 1, given height =
            [2,1,5,6,2,3].
        
    

     

    
        
        The largest rectangle is shown in the shaded area, which has area = 10
            unit.
        
    

     

    Example:

    Input: [2,1,5,6,2,3]
Output: 10
-----------------

# 1148_Article_Views_I
# 1148. Article Views I

Table: Views

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| article_id    | int     |
| author_id     | int     |
| viewer_id     | int     |
| view_date     | date    |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
Each row of this table indicates that some viewer viewed an article (written by some author) on some date.
Note that equal author_id and viewer_id indicate the same person.

     

    Write an SQL query to find all the authors that viewed at least one of their own articles,
        sorted in ascending order by their id.

    The query result format is in the following example:

    Views table:
+------------+-----------+-----------+------------+
| article_id | author_id | viewer_id | view_date  |
+------------+-----------+-----------+------------+
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |
+------------+-----------+-----------+------------+

Result table:
+------+
| id   |
+------+
| 4    |
| 7    |
+------+
-----------------

# 1313_Decompress_Run-Length_Encoded_List
# 1313. Decompress Run-Length Encoded List


-----------------

# 1054_Distant_Barcodes
# 1054. Distant Barcodes

In a warehouse, there is a row of barcodes, where the i-th barcode
        is barcodes[i].

    Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any
        answer, and it is guaranteed an answer exists.

     

    Example 1:

    Input: [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
-----------------

# 911_Online_Election
# 911. Online Election

In an election, the i-th vote was cast for persons[i] at time
        times[i].

    Now, we would like to implement the following query function: TopVotedCandidate.q(int
        t) will return the number of the person that was leading the election at time
        t.  

    Votes cast at time t will count towards our query.  In the case of a tie,
        the most recent vote (among tied candidates) wins.
-----------------

# 133_Clone_Graph
# 133. Clone Graph

Given a reference of a node in a connected undirected graph, return a deep
        copy (clone) of the graph. Each node in the graph contains a val
        (int) and a list (List[Node]) of its neighbors.

     

    Example:

    

    Input:
{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

Explanation:
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.

     

    Note:

    
        The number of nodes will be between 1 and 100.
        The undirected graph is a simple graph, which means no repeated edges and no
            self-loops in the graph.
        
        Since the graph is undirected, if node p has node q as neighbor,
            then node q must have node p as neighbor too.
        
        You must return the copy of the given node as a reference to the cloned
            graph.
-----------------

# 833_Find_And_Replace_in_String
# 833. Find And Replace in String

To some string S, we will perform some replacement operations that
        replace groups of letters with new ones (not necessarily the same size).

    Each replacement operation has 3 parameters: a starting index i, a
        source word x and a target word y.  The rule
        is that if x starts at position
        i in the original string
        S, then we will replace that occurrence of x with y. 
        If not, we do nothing.

    For example, if we have S = "abcd" and we have some
        replacement operation i = 2, x = "cd", y = "ffff",
        then because "cd" starts at position 2 in the original string S, we will
        replace it with "ffff".

    Using another example on S = "abcd", if we have both the replacement
        operation i = 0, x = "ab", y = "eee", as well as another
        replacement operation i = 2, x = "ec", y = "ffff",
        this second operation does nothing because in the original string S[2] = 'c',
        which doesn't match x[0] = 'e'.

    All these operations occur simultaneously.  It's guaranteed that there won't be
        any overlap in replacement: for example, S = "abc", indexes = [0, 1], sources
            = ["ab","bc"] is not a valid test case.

    Example 1:

    Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
Output: "eeebffff"
Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
"cd" starts at index 2 in S, so it's replaced by "ffff".

    Example 2:

    Input: S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]
Output: "eeecd"
Explanation: "ab" starts at index 0 in S, so it's replaced by "eee".
"ec" doesn't starts at index 2 in the original S, so we do nothing.

    Notes:

    
        0 <= indexes.length = sources.length = targets.length <=
            100
        0 < indexes[i] < S.length <= 1000
        All characters in given inputs are lowercase letters.
-----------------

# 377_Combination_Sum_IV
# 377. Combination Sum IV

Given an integer array with all positive numbers and no duplicates, find the number of
        possible combinations that add up to a positive integer target.

    Example:

    nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.

     

    Follow up:
        What if negative numbers are allowed in the given array?
        How does it change the problem?
        What limitation we need to add to the question to allow negative numbers?

    Credits:
        Special thanks to @pbrother for adding this
        problem and creating all test cases.
-----------------

# 729_My_Calendar_I
# 729. My Calendar I

Implement a MyCalendar class to store your events. A new event can be added if
        adding the event will not cause a double booking.

    Your class will have the method, book(int start, int end). Formally, this
        represents a booking on the half open interval [start, end), the range of real
        numbers x such that start <= x < end.

    A double booking happens when two events have some non-empty intersection (ie., there
        is some time that is common to both events.)

    For each call to the method MyCalendar.book, return true if the
        event can be added to the calendar successfully without causing a double booking. Otherwise,
        return false and do not add the event to the calendar.
    Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start,
    end)

    Example 1:

    MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(15, 25); // returns false
MyCalendar.book(20, 30); // returns true
Explanation:
The first event can be booked.  The second can't because time 15 is already booked by another event.
The third event can be booked, as the first event takes every time less than 20, but not including 20.

     

    Note:

    
        The number of calls to MyCalendar.book per test case will be at most 1000.
        
        In calls to MyCalendar.book(start, end), start and
            end are integers in the range [0, 10^9].
-----------------

# 315_Count_of_Smaller_Numbers_After_Self
# 315. Count of Smaller Numbers After Self

You are given an integer array nums and you have to return a new counts array.
        The counts array has the property where counts[i] is the number of
        smaller elements to the right of nums[i].

    Example:

    Input: [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
-----------------

# 1164_Product_Price_at_a_Given_Date
# 1164. Product Price at a Given Date

Table: Products

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| new_price     | int     |
| change_date   | date    |
+---------------+---------+
(product_id, change_date) is the primary key of this table.
Each row of this table indicates that the price of some product was changed to a new price at some date.

     

    Write an SQL query to find the prices of all products on 2019-08-16. Assume
        the price of all products before any change is 10.

    The query result format is in the following example:

    Products table:
+------------+-----------+-------------+
| product_id | new_price | change_date |
+------------+-----------+-------------+
| 1          | 20        | 2019-08-14  |
| 2          | 50        | 2019-08-14  |
| 1          | 30        | 2019-08-15  |
| 1          | 35        | 2019-08-16  |
| 2          | 65        | 2019-08-17  |
| 3          | 20        | 2019-08-18  |
+------------+-----------+-------------+

Result table:
+------------+-------+
| product_id | price |
+------------+-------+
| 2          | 50    |
| 1          | 35    |
| 3          | 10    |
+------------+-------+
-----------------

# 263_Ugly_Number
# 263. Ugly Number

Write a program to check whether a given number is an ugly number.

    Ugly numbers are positive numbers whose prime factors only include 2,
        3, 5.

    Example 1:

    Input: 6
Output: true
Explanation: 6 = 2 × 3

    Example 2:

    Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2

    Example 3:

    Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.

    Note:

    
        1 is typically treated as an ugly number.
        Input is within the 32-bit signed integer range: [−231, 
            231 − 1].
-----------------

# 1133_Largest_Unique_Number
# 1133. Largest Unique Number

Given an array of integers A, return the largest integer that only occurs once.
    

    If no integer occurs once, return -1.

     

    Example 1:

    Input: [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: 
The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.

    Example 2:

    Input: [9,9,8,8]
Output: -1
Explanation: 
There is no number that occurs only once.

     

    Note:

    
        1 <= A.length <= 2000
        0 <= A[i] <= 1000
-----------------

# 1473_Paint_House_III
# 1473. Paint House III


-----------------

# 91_Decode_Ways
# 91. Decode Ways

A message containing letters from A-Z is being encoded to numbers using the
        following mapping:

    'A' -> 1
'B' -> 2
...
'Z' -> 26

    Given a non-empty string containing only digits, determine the total number
        of ways to decode it.

    Example 1:

    Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

    Example 2:

    Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
-----------------

# 384_Shuffle_an_Array
# 384. Shuffle an Array

Shuffle a set of numbers without duplicates.
    

    Example:
    // Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
-----------------

# 503_Next_Greater_Element_II
# 503. Next Greater Element II

Given a circular array (the next element of the last element is the first element of the
        array), print the Next Greater Number for every element. The Next Greater Number of a number
        x is the first greater number to its traversing-order next in the array, which means you
        could search circularly to find its next greater number. If it doesn't exist, output -1 for
        this number.
    

    Example 1:
    Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; The number 2 can't find next greater number; 
        The second 1's next greater number needs to search circularly, which is also 2.

    

    Note:
        The length of given array won't exceed 10000.
-----------------

# 437_Path_Sum_III
# 437. Path Sum III

You are given a binary tree in which each node contains an integer value.

    Find the number of paths that sum to a given value.

    The path does not need to start or end at the root or a leaf, but it must go downwards
        (traveling only from parent nodes to child nodes).

    The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to
        1,000,000.

    Example:
    root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
-----------------

# 773_Sliding_Puzzle
# 773. Sliding Puzzle

On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and
        an empty square represented by 0.

    A move consists of choosing 0 and a 4-directionally adjacent number and
        swapping it.

    The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
    

    Given a puzzle board, return the least number of moves required so that the state of the
        board is solved. If it is impossible for the state of the board to be solved, return -1.

    Examples:

    Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.

    Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.

    Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]

    Input: board = [[3,2,4],[1,5,0]]
Output: 14

    Note:

    
        board will be a 2 x 3 array as described above.
        board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].
-----------------

# 672_Bulb_Switcher_II
# 672. Bulb Switcher II

There is a room with n lights which are turned on initially and 4 buttons on the
        wall. After performing exactly m unknown operations towards buttons, you need
        to return how many different kinds of status of the n lights could be.

    Suppose n lights are labeled as number [1, 2, 3 ..., n], function of these 4
        buttons are given below:

    
        Flip all the lights.
        Flip lights with even numbers.
        Flip lights with odd numbers.
        Flip lights with (3k + 1) numbers, k = 0, 1, 2, ...
    

     

    Example 1:

    Input: n = 1, m = 1.
Output: 2
Explanation: Status can be: [on], [off]

     

    Example 2:

    Input: n = 2, m = 1.
Output: 3
Explanation: Status can be: [on, off], [off, on], [off, off]

     

    Example 3:

    Input: n = 3, m = 1.
Output: 4
Explanation: Status can be: [off, on, off], [on, off, on], [off, off, off], [off, on, on].

     

    Note: n and m both fit in range [0, 1000].
-----------------

# 1370_Increasing_Decreasing_String
# 1370. Increasing Decreasing String


-----------------

# 520_Detect_Capital
# 520. Detect Capital

Given a word, you need to judge whether the usage of capitals in it is right or not.

    We define the usage of capitals in a word to be right when one of the following cases
        holds:

    
        All letters in this word are capitals, like "USA".
        All letters in this word are not capitals, like "leetcode".
        Only the first letter in this word is capital, like "Google".
    
    Otherwise, we define that this word doesn't use capitals in a right way.

     

    Example 1:

    Input: "USA"
Output: True

     

    Example 2:

    Input: "FlaG"
Output: False

     

    Note: The input will be a non-empty word consisting of uppercase and lowercase latin
        letters.
-----------------

# 977_Squares_of_a_Sorted_Array
# 977. Squares of a Sorted Array

Given an array of integers A sorted in non-decreasing order, return an
        array of the squares of each number, also in sorted non-decreasing order.
-----------------

# 963_Minimum_Area_Rectangle_II
# 963. Minimum Area Rectangle II

Given a set of points in the xy-plane, determine the minimum area of any
        rectangle formed from these points, with sides not necessarily parallel to
        the x and y axes.

    If there isn't any rectangle, return 0.

     

    Example 1:

    

    Input: [[1,2],[2,1],[1,0],[0,1]]
Output: 2.00000
Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.
-----------------

# 1663_Smallest_String_With_A_Given_Numeric_Value
# 1663. Smallest String With A Given Numeric Value


-----------------

# 116_Populating_Next_Right_Pointers_in_Each_Node
# 116. Populating Next Right Pointers in Each Node

You are given a perfect binary tree where all leaves are on the
        same level, and every parent has two children. The binary tree has the following definition:
    

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

    

    Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}

Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.

     

    Note:

    
        You may only use constant extra space.
        Recursive approach is fine, implicit stack space does not count as extra space for this
            problem.
-----------------

# 1439_Find_the_Kth_Smallest_Sum_of_a_Matrix_With_Sorted_Rows
# 1439. Find the Kth Smallest Sum of a Matrix With Sorted Rows


-----------------

# 497_Random_Point_in_Non-overlapping_Rectangles
# 497. Random Point in Non-overlapping Rectangles

Given a list of non-overlapping axis-aligned rectangles
        rects, write a function pick which randomly and uniformily picks
        an integer point in the space covered by the rectangles.

    Note:

    
        An integer point is a point that has integer coordinates. 
        
        A point on the perimeter of a rectangle is included in
            the space covered by the rectangles. 
        
        ith rectangle = rects[i] = [x1,y1,x2,y2],
            where [x1, y1] are the integer coordinates of the bottom-left corner,
            and [x2, y2] are the integer coordinates of the top-right corner.
        
        length and width of each rectangle does not exceed 2000.
        1 <= rects.length <= 100
        pick return a point as an array of integer coordinates [p_x,
            p_y]
        pick is called at most 10000 times.
-----------------

# 611_Valid_Triangle_Number
# 611. Valid Triangle Number

Given an array consists of non-negative integers, your task is to count the number of triplets
    chosen from the array that can make triangles if we take them as side lengths of a triangle.

    Example 1:
    Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

    

    Note:
    
        The length of the given array won't exceed 1000.
        The integers in the given array are in the range of [0, 1000].
-----------------

# 220_Contains_Duplicate_III
# 220. Contains Duplicate III

Given an array of integers, find out whether there are two distinct indices i and
        j in the array such that the absolute difference between nums[i] and
        nums[j] is at most t and the absolute difference between i and
        j is at most k.
-----------------

# 1668_Maximum_Repeating_Substring
# 1668. Maximum Repeating Substring


-----------------

# 1346_Check_If_N_and_Its_Double_Exist
# 1346. Check If N and Its Double Exist


-----------------

# 1453_Maximum_Number_of_Darts_Inside_of_a_Circular_Dartboard
# 1453. Maximum Number of Darts Inside of a Circular Dartboard


-----------------

# 1801_Number_of_Orders_in_the_Backlog
# 1801. Number of Orders in the Backlog


-----------------

# 73_Set_Matrix_Zeroes
# 73. Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its entire row and column to
        0. Do it in-place.
    

    Example 1:

    Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

    Example 2:

    Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

    Follow up:

    
        A straight forward solution using O(mn) space is probably a bad idea.
        
        A simple improvement uses O(m + n) space, but still not the best
            solution.
        
        Could you devise a constant space solution?
-----------------

# 1701_Average_Waiting_Time
# 1701. Average Waiting Time


-----------------

# 1723_Find_Minimum_Time_to_Finish_All_Jobs
# 1723. Find Minimum Time to Finish All Jobs


-----------------

# 480_Sliding_Window_Median
# 480. Sliding Window Median

Median is the middle value in an ordered integer list. If the size of the list is even, there
        is no middle value. So the median is the mean of the two middle value.
    Examples: 
    [2,3,4] , the median is 3
    [2,3], the median is (2 + 3) / 2 = 2.5

    Given an array nums, there is a sliding window of size k which is moving from
        the very left of the array to the very right. You can only see the k numbers in the
        window. Each time the sliding window moves right by one position. Your job is to output the
        median array for each window in the original array.

    For example,
        Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

    Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6

    Therefore, return the median sliding window as [1,-1,-1,3,5,6].

    Note: 
        You may assume k is always valid, ie: k is always smaller than
        input array's size for non-empty array.
-----------------

# 1502_Can_Make_Arithmetic_Progression_From_Sequence
# 1502. Can Make Arithmetic Progression From Sequence


-----------------

# 68_Text_Justification
# 68. Text Justification

Given an array of words and a width maxWidth, format the text such that each
        line has exactly maxWidth characters and is fully (left and right) justified.

    You should pack your words in a greedy approach; that is, pack as many words as you can in
        each line. Pad extra spaces ' ' when necessary so that each line has
        exactly maxWidth characters.

    Extra spaces between words should be distributed as evenly as possible. If the number of
        spaces on a line do not divide evenly between words, the empty slots on the left will be
        assigned more spaces than the slots on the right.

    For the last line of text, it should be left justified and no extra space is
        inserted between words.

    Note:

    
        A word is defined as a character sequence consisting of non-space characters
            only.
        
        Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
        
        The input array words contains at least one word.
    

    Example 1:

    Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

    Example 2:

    Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.

    Example 3:

    Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
-----------------

# 636_Exclusive_Time_of_Functions
# 636. Exclusive Time of Functions

On a single threaded CPU, we execute some functions.  Each function has
        a unique id between 0 and N-1.

    We store logs in timestamp order that describe when a function is entered or exited.

    Each log is a string with this format: "{function_id}:{"start" | "end"}:{timestamp}". 
        For example, "0:start:3" means the function with id
        0 started at the beginning of timestamp 3. 
        "1:end:2" means the function with id 1 ended at
            the end of timestamp 2.

    A function's exclusive time is the number of units of time spent in this
        function.  Note that this does not include any recursive calls to
        child functions.

    The CPU is single threaded which means that only one function is being
        executed at a given time unit.

    Return the exclusive time of each function, sorted by their function id.

     

    Example 1:

    

    Input:
n = 2
logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
Output: [3, 4]
Explanation:
Function 0 starts at the beginning of time 0, then it executes 2 units of time and reaches the end of time 1.
Now function 1 starts at the beginning of time 2, executes 4 units of time and ends at time 5.
Function 0 is running again at the beginning of time 6, and also ends at the end of time 6, thus executing for 1 unit of time.
So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.

     

    Note:

    
        1 <= n <= 100
        Two functions won't start or end at the same time.
        Functions will always log when they exit.
-----------------

# 573_Squirrel_Simulation
# 573. Squirrel Simulation

There's a tree, a squirrel, and several nuts. Positions are represented by the cells in a 2D
    grid. Your goal is to find the minimal distance for the squirrel to collect all the nuts
    and put them under the tree one by one. The squirrel can only take at most one nut at one
    time and can move in four directions - up, down, left and right, to the adjacent cell. The
    distance is represented by the number of moves.
    Example 1:

    Input:
Height : 5
Width : 7
Tree position : [2,2]
Squirrel : [4,4]
Nuts : [[3,0], [2,5]]
Output: 12
Explanation:
​​​​​

    Note:

    
        All given positions won't overlap.
        The squirrel can take at most one nut at one time.
        The given positions of nuts have no order.
        Height and width are positive integers. 3 <= height * width <= 10,000.
        The given positions contain at least one nut, only one tree and one squirrel.
-----------------

# 536_Construct_Binary_Tree_from_String
# 536. Construct Binary Tree from String

You need to construct a binary tree from a string consisting of parenthesis and
        integers. 

    The whole input represents a binary tree. It contains an integer followed by zero, one or two
        pairs of parenthesis. The integer represents the root's value and a pair of parenthesis
        contains a child binary tree with the same structure. 

    You always start to construct the left child node of the parent first if it exists.
    

    Example:
    Input: "4(2(3)(1))(6(5))"
Output: return the tree root node representing the following tree:

       4
     /   \
    2     6
   / \   /
  3   1 5

    

    Note:
    
        There will only be '(', ')', '-' and
            '0' ~ '9' in the input string.
        
        An empty tree is represented by "" instead of "()".
-----------------

# 1615_Maximal_Network_Rank
# 1615. Maximal Network Rank


-----------------

# 865_Smallest_Subtree_with_all_the_Deepest_Nodes
# 865. Smallest Subtree with all the Deepest Nodes

Given a binary tree rooted at root, the depth of each node is the
        shortest distance to the root.

    A node is deepest if it has the largest depth possible among any node in the
        entire tree.

    The subtree of a node is that node, plus the set of all descendants of that node.

    Return the node with the largest depth such that it contains all the deepest nodes in its
        subtree.

     

    Example 1:

    Input: [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation:

We return the node with value 2, colored in yellow in the diagram.
The nodes colored in blue are the deepest nodes of the tree.
The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
Both the input and output have TreeNode type.

     

    Note:

    
        The number of nodes in the tree will be between 1 and 500.
        The values of each node are unique.
-----------------

# 1712_Ways_to_Split_Array_Into_Three_Subarrays
# 1712. Ways to Split Array Into Three Subarrays


-----------------

# 477_Total_Hamming_Distance
# 477. Total Hamming Distance

The Hamming
        distance between two integers is the number of positions at which the corresponding bits
        are different.

    Now your job is to find the total Hamming distance between all pairs of the given numbers.

    Example:
    Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

    

    Note:
    
        Elements of the given array are in the range of 0  to 10^9
        Length of the array will not exceed 10^4.
-----------------

# 1559_Detect_Cycles_in_2D_Grid
# 1559. Detect Cycles in 2D Grid


-----------------

# 812_Largest_Triangle_Area
# 812. Largest Triangle Area

You have a list of points in the plane. Return the area of the largest triangle that can be
        formed by any 3 of the points.

    Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation:
The five points are show in the figure below. The red triangle is the largest.

    

    Notes: 

    
        3 <= points.length <= 50.
        No points will be duplicated.
         -50 <= points[i][j] <= 50.
        Answers within 10^-6 of the true value will be accepted as
            correct.
-----------------

# 207_Course_Schedule
# 207. Course Schedule

There are a total of n courses you have to take, labeled from 0 to n-1.
    

    Some courses may have prerequisites, for example to take course 0 you have to first take
        course 1, which is expressed as a pair: [0,1]

    Given the total number of courses and a list of prerequisite pairs, is it possible for
        you to finish all courses?

    Example 1:

    Input: 2, [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.

    Example 2:

    Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

    Note:

    
        The input prerequisites is a graph represented by a list of edges, not adjacency
            matrices. Read more about how a graph is represented.
        
        You may assume that there are no duplicate edges in the input prerequisites.
-----------------

# 1459_Rectangles_Area
# 1459. Rectangles Area


-----------------

# 50_Pow(x,_n)
# 50. Pow(x, n)

Implement pow(x,
        n), which calculates x raised to the power n
        (xn).

    Example 1:

    Input: 2.00000, 10
Output: 1024.00000

    Example 2:

    Input: 2.10000, 3
Output: 9.26100

    Example 3:

    Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

    Note:

    
        -100.0 < x < 100.0
        n is a 32-bit signed integer, within the range [−231, 231 −
            1]
-----------------

# 950_Reveal_Cards_In_Increasing_Order
# 950. Reveal Cards In Increasing Order

In a deck of cards, every card has a unique integer.  You can order the deck in any
        order you want.

    Initially, all the cards start face down (unrevealed) in one deck.

    Now, you do the following steps repeatedly, until all cards are revealed:

    
        Take the top card of the deck, reveal it, and take it out of the deck.
        If there are still cards in the deck, put the next top card of the deck at the
            bottom of the deck.
        
        If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
    

    Return an ordering of the deck that would reveal the cards in increasing
        order.

    The first entry in the answer is considered to be the top of the deck.
-----------------

# 1420_Build_Array_Where_You_Can_Find_The_Maximum_Exactly_K_Comparisons
# 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons


-----------------

# 624_Maximum_Distance_in_Arrays
# 624. Maximum Distance in Arrays

Given m arrays, and each array is sorted in ascending order. Now you can pick
        up two integers from two different arrays (each array picks one) and calculate the distance.
        We define the distance between two integers a and b to be their
        absolute difference |a-b|. Your task is to find the maximum distance.
    

    Example 1:
    Input:
[[1,2,3],
 [4,5],
 [1,2,3]]
Output: 4
Explanation:
One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

    

    Note:
    
        Each given array will have at least 1 number. There will be at least two non-empty
            arrays.
        
        The total number of the integers in all the m arrays will be in the
            range of [2, 10000].
        
        The integers in the m arrays will be in the range of [-10000, 10000].
-----------------

# 1709_Biggest_Window_Between_Visits
# 1709. Biggest Window Between Visits


-----------------

# 1600_Throne_Inheritance
# 1600. Throne Inheritance


-----------------

# 1490_Clone_N-ary_Tree
# 1490. Clone N-ary Tree


-----------------

# 1530_Number_of_Good_Leaf_Nodes_Pairs
# 1530. Number of Good Leaf Nodes Pairs


-----------------

# 113_Path_Sum_II
# 113. Path Sum II

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals
        the given sum.

    Note: A leaf is a node with no children.

    Example:

    Given the below binary tree and sum = 22,

          5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1

    Return:

    [
   [5,4,11,2],
   [5,8,4,5]
]
-----------------

# 782_Transform_to_Chessboard
# 782. Transform to Chessboard

An N x N board contains only 0s and 1s. In each move,
        you can swap any 2 rows with each other, or any 2 columns with each other.

    What is the minimum number of moves to transform the board into a "chessboard" - a
        board where no 0s and no 1s are 4-directionally adjacent? If the
        task is impossible, return -1.

    Examples:
Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
Explanation:
One potential sequence of moves is shown below, from left to right:

0110     1010     1010
0110 --> 1010 --> 0101
1001     0101     1010
1001     0101     0101

The first move swaps the first and second column.
The second move swaps the second and third row.

Input: board = [[0, 1], [1, 0]]
Output: 0
Explanation:
Also note that the board with 0 in the top left corner,
01
10

is also a valid chessboard.

Input: board = [[1, 0], [1, 0]]
Output: -1
Explanation:
No matter what sequence of moves you make, you cannot end with a valid chessboard.

    Note:

    
        board will have the same number of rows and columns, a number in the range
            [2, 30].
        
        board[i][j] will be only 0s or 1s.
-----------------

# 1843_Suspicious_Bank_Accounts
# 1843. Suspicious Bank Accounts


-----------------

# 365_Water_and_Jug_Problem
# 365. Water and Jug Problem

You are given two jugs with capacities x and y litres. There is an infinite
        amount of water supply available. You need to determine whether it is possible to measure
        exactly z litres using these two jugs.

    If z liters of water is measurable, you must have z liters of water contained
        within one or both buckets by the end.

    Operations allowed:

    
        Fill any of the jugs completely with water.
        Empty any of the jugs.
        Pour water from one jug into another till the other jug is completely full or the first
            jug itself is empty.
        
    

    Example 1: (From the famous "Die Hard" example)
    

    Input: x = 3, y = 5, z = 4
Output: True

    Example 2:

    Input: x = 2, y = 6, z = 5
Output: False
-----------------

# 1489_Find_Critical_and_Pseudo-Critical_Edges_in_Minimum_Spanning_Tree
# 1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree


-----------------

# 301_Remove_Invalid_Parentheses
# 301. Remove Invalid Parentheses

Remove the minimum number of invalid parentheses in order to make the input string valid.
        Return all possible results.

    Note: The input string may contain letters other than the parentheses
        ( and ).

    Example 1:

    Input: "()())()"
Output: ["()()()", "(())()"]

    Example 2:

    Input: "(a)())()"
Output: ["(a)()()", "(a())()"]

    Example 3:

    Input: ")("
Output: [""]
-----------------

# 1180_Count_Substrings_with_Only_One_Distinct_Letter
# 1180. Count Substrings with Only One Distinct Letter

Given a string S, return the number of substrings that have only
        one distinct letter.

     
    Example 1:

    Input: S = "aaaba"
Output: 8
Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8.

    Example 2:

    Input: S = "aaaaaaaaaa"
Output: 55

     
    Constraints:

    
        1 <= S.length <= 1000
        S[i] consists of only lowercase English letters.
-----------------

# 1632_Rank_Transform_of_a_Matrix
# 1632. Rank Transform of a Matrix


-----------------

# 753_Cracking_the_Safe
# 753. Cracking the Safe

There is a box protected by a password. The password is a sequence of n
        digits where each digit can be one of the first k digits 0, 1, ...,
            k-1.

    While entering a password, the last n digits entered will automatically be
        matched against the correct password.

    For example, assuming the correct password is "345", if you type
        "012345", the box will open because the correct password matches the
        suffix of the entered password.

    Return any password of minimum length that is guaranteed to open the box at
        some point of entering it.

     

    Example 1:

    Input: n = 1, k = 2
Output: "01"
Note: "10" will be accepted too.

    Example 2:

    Input: n = 2, k = 2
Output: "00110"
Note: "01100", "10011", "11001" will be accepted too.

     

    Note:

    
        n will be in the range [1, 4].
        k will be in the range [1, 10].
        k^n will be at most 4096.
-----------------

# 1277_Count_Square_Submatrices_with_All_Ones
# 1277. Count Square Submatrices with All Ones


-----------------

# 1572_Matrix_Diagonal_Sum
# 1572. Matrix Diagonal Sum


-----------------

# 468_Validate_IP_Address
# 468. Validate IP Address

Write a function to check whether an input string is a valid IPv4 address or IPv6 address or
        neither.
    

    
        IPv4 addresses are canonically represented in dot-decimal notation, which consists of
        four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;
    

    
        Besides, leading zeros in the IPv4 is invalid. For example, the address
        172.16.254.01 is invalid.
    

    
        IPv6 addresses are represented as eight groups of four hexadecimal digits, each group
        representing 16 bits. The groups are separated by colons (":"). For example, the address
        2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit
        some leading zeros among four hexadecimal digits and some low-case characters in the address
        to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6
        address(Omit leading zeros and using upper cases).
    

    
        However, we don't replace a consecutive group of zero value with a single empty group using
        two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334
        is an invalid IPv6 address.
    

    
        Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334
        is invalid.
    

    Note:
        You may assume there is no extra space or special characters in the input string.
    

    Example 1:
    Input: "172.16.254.1"

Output: "IPv4"

Explanation: This is a valid IPv4 address, return "IPv4".

    

    Example 2:
    Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"

Output: "IPv6"

Explanation: This is a valid IPv6 address, return "IPv6".

    

    Example 3:
    Input: "256.256.256.256"

Output: "Neither"

Explanation: This is neither a IPv4 address nor a IPv6 address.
-----------------

# 1013_Partition_Array_Into_Three_Parts_With_Equal_Sum
# 1013. Partition Array Into Three Parts With Equal Sum

Given an array A of integers, return true if and only if we can
        partition the array into three non-empty parts with equal sums.

    Formally, we can partition the array if we can find indexes i+1 < j with
        (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... +
            A[A.length - 1])

     

    Example 1:

    Input: [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
-----------------

# 785_Is_Graph_Bipartite
# 785. Is Graph Bipartite?

Given an undirected graph, return true if and only if it is
        bipartite.

    Recall that a graph is bipartite if we can split it's set of nodes into two
        independent subsets A and B such that every edge in the graph has one node in A and
        another node in B.

    The graph is given in the following form: graph[i] is a list of indexes
        j for which the edge between nodes i and j exists. 
        Each node is an integer between 0 and graph.length - 1. 
        There are no self edges or parallel edges: graph[i] does not contain
        i, and it doesn't contain any element twice.

    Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation:
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.

    Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation:
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.

     

    Note:

    
        graph will have length in range [1, 100].
        graph[i] will contain integers in range [0, graph.length - 1].
        
        graph[i] will not contain i or duplicate values.
        The graph is undirected: if any element j is in graph[i], then
            i will be in graph[j].
-----------------

# 127_Word_Ladder
# 127. Word Ladder

Given two words (beginWord and endWord), and a dictionary's word list,
        find the length of shortest transformation sequence from beginWord to
        endWord, such that:

    
        Only one letter can be changed at a time.
        Each transformed word must exist in the word list. Note that beginWord is not
            a transformed word.
        
    

    Note:

    
        Return 0 if there is no such transformation sequence.
        All words have the same length.
        All words contain only lowercase alphabetic characters.
        You may assume no duplicates in the word list.
        You may assume beginWord and endWord are non-empty and are not the
            same.
        
    

    Example 1:

    Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

    Example 2:

    Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
-----------------

# 1172_Dinner_Plate_Stacks
# 1172. Dinner Plate Stacks

You have an infinite number of stacks arranged in a row and numbered (left to right) from 0,
        each of the stacks has the same maximum capacity.

    Implement the DinnerPlates class:

    
        DinnerPlates(int capacity) Initializes the object with the maximum capacity
            of the stacks.
        
        void push(int val) pushes the given positive integer val
            into the leftmost stack with size less than capacity.
        
        int pop() returns the value at the top of the rightmost non-empty
            stack and removes it from that stack, and returns -1 if all stacks are
            empty.
        
        int popAtStack(int index) returns the value at the top of the stack
            with the given index and removes it from that stack, and returns -1 if the
            stack with that given index is empty.
        
    

    Example:

    Input: 
["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"]
[[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]
Output: 
[null,null,null,null,null,null,2,null,null,20,21,5,4,3,1,-1]

Explanation: 
DinnerPlates D = DinnerPlates(2);  // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);         // The stacks are now:  2  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 2.  The stacks are now:     4
                                                       1  3  5
                                                       ﹈ ﹈ ﹈
D.push(20);        // The stacks are now: 20  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.push(21);        // The stacks are now: 20  4 21
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 20.  The stacks are now:     4 21
                                                        1  3  5
                                                        ﹈ ﹈ ﹈
D.popAtStack(2);   // Returns 21.  The stacks are now:     4
                                                        1  3  5
                                                        ﹈ ﹈ ﹈
D.pop()            // Returns 5.  The stacks are now:      4
                                                        1  3
                                                        ﹈ ﹈
D.pop()            // Returns 4.  The stacks are now:   1  3
                                                        ﹈ ﹈
D.pop()            // Returns 3.  The stacks are now:   1
                                                        ﹈
D.pop()            // Returns 1.  There are no stacks.
D.pop()            // Returns -1.  There are still no stacks.

     
    Constraints:

    
        1 <= capacity <= 20000
        1 <= val <= 20000
        0 <= index <= 100000
        At most 200000 calls will be made to push,
            pop, and popAtStack.
-----------------

# 322_Coin_Change
# 322. Coin Change

You are given coins of different denominations and a total amount of money amount.
        Write a function to compute the fewest number of coins that you need to make up that amount.
        If that amount of money cannot be made up by any combination of the coins, return
        -1.

    Example 1:

    Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

    Example 2:

    Input: coins = [2], amount = 3
Output: -1

    Note:
        You may assume that you have an infinite number of each kind of coin.
-----------------

# 326_Power_of_Three
# 326. Power of Three

Given an integer, write a function to determine if it is a power of three.

    Example 1:

    Input: 27
Output: true

    Example 2:

    Input: 0
Output: false

    Example 3:

    Input: 9
Output: true

    Example 4:

    Input: 45
Output: false

    Follow up:
        Could you do it without using any loop / recursion?
-----------------

# 1767_Find_the_Subtasks_That_Did_Not_Execute
# 1767. Find the Subtasks That Did Not Execute


-----------------

# 1544_Make_The_String_Great
# 1544. Make The String Great


-----------------

# 1339_Maximum_Product_of_Splitted_Binary_Tree
# 1339. Maximum Product of Splitted Binary Tree


-----------------

# 1555_Bank_Account_Summary
# 1555. Bank Account Summary


-----------------

# 45_Jump_Game_II
# 45. Jump Game II

Given an array of non-negative integers, you are initially positioned at the first index of
        the array.

    Each element in the array represents your maximum jump length at that position.

    Your goal is to reach the last index in the minimum number of jumps.

    Example:

    Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

    Note:

    You can assume that you can always reach the last index.
-----------------

# 1280_Students_and_Examinations
# 1280. Students and Examinations


-----------------

# 571_Find_Median_Given_Frequency_of_Numbers
# 571. Find Median Given Frequency of Numbers

The Numbers table keeps the value of number and its frequency.

    +----------+-------------+
|  Number  |  Frequency  |
+----------+-------------|
|  0       |  7          |
|  1       |  1          |
|  2       |  3          |
|  3       |  1          |
+----------+-------------+

    In this table, the numbers are 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, so the median
        is (0 + 0) / 2 = 0.

    +--------+
| median |
+--------|
| 0.0000 |
+--------+

    Write a query to find the median of all numbers and name the result as median.
-----------------

# 1790_Check_if_One_String_Swap_Can_Make_Strings_Equal
# 1790. Check if One String Swap Can Make Strings Equal


-----------------

# 853_Car_Fleet
# 853. Car Fleet

N cars are going to the same destination along a one lane road.  The
        destination is target miles away.

    Each car i has a constant speed speed[i] (in miles per
        hour), and initial position position[i] miles towards the target along the
        road.

    A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to
        bumper at the same speed.

    The distance between these two cars is ignored - they are assumed to have the same
        position.

    A car fleet is some non-empty set of cars driving at the same position and same
        speed.  Note that a single car is also a car fleet.

    If a car catches up to a car fleet right at the destination point, it will still be considered
        as one car fleet.

    
        How many car fleets will arrive at the destination?

     

    Example 1:

    Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 and 8 become a fleet, meeting each other at 12.
The car starting at 0 doesn't catch up to any other car, so it is a fleet by itself.
The cars starting at 5 and 3 become a fleet, meeting each other at 6.
Note that no other cars meet these fleets before the destination, so the answer is 3.

    
        Note:

    
        0 <= N <= 10 ^ 4
        0 < target <= 10 ^ 6
        0 < speed[i] <= 10 ^ 6
        0 <= position[i] < target
        All initial positions are different.
-----------------

# 817_Linked_List_Components
# 817. Linked List Components

We are given head, the head node of a linked list
        containing unique integer values.

    We are also given the list G, a subset of the values in the linked list.
    

    Return the number of connected components in G, where two values are connected
        if they appear consecutively in the linked list.

    Example 1:

    Input:
head: 0->1->2->3
G = [0, 1, 3]
Output: 2
Explanation:
0 and 1 are connected, so [0, 1] and [3] are the two connected components.

    Example 2:

    Input:
head: 0->1->2->3->4
G = [0, 3, 1, 4]
Output: 2
Explanation:
0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.

    Note: 

    
        If N is the length of the linked list given by head, 1
            <= N <= 10000.
        
        The value of each node in the linked list will be in the range [0, N - 1].
        
        1 <= G.length <= 10000.
        G is a subset of all values in the linked list.
-----------------

# 1248_Count_Number_of_Nice_Subarrays
# 1248. Count Number of Nice Subarrays

Given an array of integers nums and an integer k.
        A subarray is called nice if there
        are k odd numbers on it.

    Return the number of nice sub-arrays.

     
    Example 1:

    Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

    Example 2:

    Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There is no odd numbers in the array.

    Example 3:

    Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16

     
    Constraints:

    
        1 <= nums.length <= 50000
        1 <= nums[i] <= 10^5
        1 <= k <= nums.length
-----------------

# 1227_Airplane_Seat_Assignment_Probability
# 1227. Airplane Seat Assignment Probability

n passengers board an airplane with exactly n seats. The first passenger has lost the ticket
        and picks a seat randomly. But after that, the rest of passengers will:

    
        Take their own seat if it is still available, 
        Pick other seats randomly when they find their seat occupied 
    

    What is the probability that the n-th person can get his own seat?

     
    Example 1:

    Input: n = 1
Output: 1.00000
Explanation: The first person can only get the first seat.

    Example 2:

    Input: n = 2
Output: 0.50000
Explanation: The second person has a probability of 0.5 to get the second seat (when first person gets the first seat).

     
    Constraints:

    
        1 <= n <= 10^5
-----------------

# 1135_Connecting_Cities_With_Minimum_Cost
# 1135. Connecting Cities With Minimum Cost

There are N cities numbered from 1 to N.

    You are given connections, where each connections[i] = [city1, city2,
        cost] represents the cost to connect city1 and city2
        together.  (A connection is bidirectional: connecting city1 and
        city2 is the same as connecting city2 and city1.)

    Return the minimum cost so that for every pair of cities, there exists a path of
        connections (possibly of length 1) that connects those two cities together.  The cost
        is the sum of the connection costs used. If the task is impossible, return -1.

     

    Example 1:

    

    Input: N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
Output: 6
Explanation: 
Choosing any 2 edges will connect all cities so we choose the minimum 2.

    Example 2:

    

    Input: N = 4, connections = [[1,2,3],[3,4,4]]
Output: -1
Explanation: 
There is no way to connect all cities even if all edges are used.

     

    Note:

    
        1 <= N <= 10000
        1 <= connections.length <= 10000
        1 <= connections[i][0], connections[i][1] <= N
        0 <= connections[i][2] <= 10^5
        connections[i][0] != connections[i][1]
-----------------

# 604_Design_Compressed_String_Iterator
# 604. Design Compressed String Iterator

Design and implement a data structure for a compressed string iterator. It should support
        the following operations: next and hasNext.
    

    
        The given compressed string will be in the form of each letter followed by a positive
        integer representing the number of this letter existing in the original uncompressed string.
    

    
        next() - if the original string still has uncompressed characters, return the
        next letter; Otherwise return a white space.
        hasNext() - Judge whether there is any letter needs to be uncompressed.
    

    
        Note:
        Please remember to RESET your class variables declared in StringIterator, as
        static/class variables are persisted across multiple test cases. Please see here for more details.
    

    Example:
    StringIterator iterator = new StringIterator("L1e2t1C1o1d1e1");

iterator.next(); // return 'L'
iterator.next(); // return 'e'
iterator.next(); // return 'e'
iterator.next(); // return 't'
iterator.next(); // return 'C'
iterator.next(); // return 'o'
iterator.next(); // return 'd'
iterator.hasNext(); // return true
iterator.next(); // return 'e'
iterator.hasNext(); // return false
iterator.next(); // return ' '
-----------------

# 1618_Maximum_Font_to_Fit_a_Sentence_in_a_Screen
# 1618. Maximum Font to Fit a Sentence in a Screen


-----------------

# 1151_Minimum_Swaps_to_Group_All_1's_Together
# 1151. Minimum Swaps to Group All 1's Together

Given a binary array data, return the minimum number of swaps required
        to group all 1’s present in the array together in any
            place in the array.

     

    Example 1:

    Input: [1,0,1,0,1]
Output: 1
Explanation: 
There are 3 ways to group all 1's together:
[1,1,1,0,0] using 1 swap.
[0,1,1,1,0] using 2 swaps.
[0,0,1,1,1] using 1 swap.
The minimum is 1.

    Example 2:

    Input: [0,0,0,1,0]
Output: 0
Explanation: 
Since there is only one 1 in the array, no swaps needed.

    Example 3:

    Input: [1,0,1,0,1,0,0,1,1,0,1]
Output: 3
Explanation: 
One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].

     

    Note:

    
        1 <= data.length <= 10^5
        0 <= data[i] <= 1
-----------------

# 1372_Longest_ZigZag_Path_in_a_Binary_Tree
# 1372. Longest ZigZag Path in a Binary Tree


-----------------

# 144_Binary_Tree_Preorder_Traversal
# 144. Binary Tree Preorder Traversal

Given a binary tree, return the preorder traversal of its nodes' values.

    Example:

    Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]

    Follow up: Recursive solution is trivial, could you do it iteratively?
-----------------

# 803_Bricks_Falling_When_Hit
# 803. Bricks Falling When Hit

We have a grid of 1s and 0s; the 1s in a cell represent bricks.  A brick will not drop
        if and only if it is directly connected to the top of the grid, or at least one of its
        (4-way) adjacent bricks will not drop.

    We will do some erasures sequentially. Each time we want to do the erasure at the
        location (i, j), the brick (if it exists) on that location will disappear, and then some
        other bricks may drop because of that erasure.

    Return an array representing the number of bricks that will drop after each erasure in
        sequence.

    Example 1:
Input:
grid = [[1,0,0,0],[1,1,1,0]]
hits = [[1,0]]
Output: [2]
Explanation: 
If we erase the brick at (1, 0), the brick at (1, 1) and (1, 2) will drop. So we should return 2.

    Example 2:
Input:
grid = [[1,0,0,0],[1,1,0,0]]
hits = [[1,1],[1,0]]
Output: [0,0]
Explanation: 
When we erase the brick at (1, 0), the brick at (1, 1) has already disappeared due to the last move. So each erasure will cause no bricks dropping.  Note that the erased brick (1, 0) will not be counted as a dropped brick.

     

    Note:

    
        The number of rows and columns in the grid will be in the range [1, 200].
        The number of erasures will not exceed the area of the grid.
        It is guaranteed that each erasure will be different from any other erasure, and located
            inside the grid.
        
        An erasure may refer to a location with no brick - if it does, no bricks drop.
-----------------

# 531_Lonely_Pixel_I
# 531. Lonely Pixel I

Given a picture consisting of black and white pixels, find the number of black lonely
        pixels.

    The picture is represented by a 2D char array consisting of 'B' and 'W', which means black
        and white pixels respectively. 

    A black lonely pixel is character 'B' that located at a specific position where the same row
        and same column don't have any other black pixels.

    Example:
    Input:
[['W', 'W', 'B'],
 ['W', 'B', 'W'],
 ['B', 'W', 'W']]

Output: 3
Explanation: All the three 'B's are black lonely pixels.

    

    Note:
    
        The range of width and height of the input 2D array is [1,500].
-----------------

# 932_Beautiful_Array
# 932. Beautiful Array

For some fixed N, an array A is beautiful if it is a
        permutation of the integers 1, 2, ..., N, such that:

    For every i < j, there is no k with i
        < k < j such that A[k] * 2 = A[i] + A[j].

    Given N, return any beautiful array A.  (It
        is guaranteed that one exists.)

     

    Example 1:

    Input: 4
Output: [2,1,4,3]
-----------------

# 1216_Valid_Palindrome_III
# 1216. Valid Palindrome III

Given a string s and an integer k, find out if the given
        string is a K-Palindrome or not.

    A string is K-Palindrome if it can be transformed into a palindrome by removing at
        most k characters from it.

     
    Example 1:

    Input: s = "abcdeca", k = 2
Output: true
Explanation: Remove 'b' and 'e' characters.

     
    Constraints:

    
        1 <= s.length <= 1000
        s has only lowercase English letters.
        1 <= k <= s.length
-----------------

# 991_Broken_Calculator
# 991. Broken Calculator

On a broken calculator that has a number showing on its display, we can perform two
        operations:

    
        Double: Multiply the number on the display by 2, or;
        Decrement: Subtract 1 from the number on the display.
    

    Initially, the calculator is displaying the number X.

    Return the minimum number of operations needed to display the number Y.

     

    Example 1:

    Input: X = 2, Y = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

    Example 2:

    Input: X = 5, Y = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.

    Example 3:

    Input: X = 3, Y = 10
Output: 3
Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.

    Example 4:

    Input: X = 1024, Y = 1
Output: 1023
Explanation: Use decrement operations 1023 times.

     

    Note:

    
        1 <= X <= 10^9
        1 <= Y <= 10^9
-----------------

# 335_Self_Crossing
# 335. Self Crossing

You are given an array x of n positive numbers. You start at point (0,0)
        and moves x[0] metres to the north, then x[1] metres to the west,
        x[2] metres to the south, x[3] metres to the east and so on. In
        other words, after each move your direction changes counter-clockwise.

    Write a one-pass algorithm with O(1) extra space to determine, if your path
        crosses itself, or not.

     

    Example 1:

    ┌───┐
│   │
└───┼──>
    │

Input: [2,1,1,2]
Output: true

    Example 2:

    ┌──────┐
│      │
│
│
└────────────>

Input: [1,2,3,4]
Output: false

    Example 3:

    ┌───┐
│   │
└───┼>

Input: [1,1,1,1]
Output: true
-----------------

# 188_Best_Time_to_Buy_and_Sell_Stock_IV
# 188. Best Time to Buy and Sell Stock IV

Say you have an array for which the i-th element is the price of a given stock on
        day i.

    Design an algorithm to find the maximum profit. You may complete at most k
        transactions.

    Note:
        You may not engage in multiple transactions at the same time (ie, you must sell the stock
        before you buy again).

    Example 1:

    Input: [2,4,1], k = 2
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

    Example 2:

    Input: [3,2,6,5,0,3], k = 2
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
-----------------

# 1528_Shuffle_String
# 1528. Shuffle String


-----------------

# 1770_Maximum_Score_from_Performing_Multiplication_Operations
# 1770. Maximum Score from Performing Multiplication Operations


-----------------

# 293_Flip_Game
# 293. Flip Game

You are playing the following Flip Game with your friend: Given a string that contains only
        these two characters: + and -, you and your friend take turns to
        flip two consecutive "++" into "--".
        The game ends when a person can no longer make a move and therefore the other person will be
        the winner.

    Write a function to compute all possible states of the string after one valid move.

    Example:

    Input: s = "++++"
Output:
[
  "--++",
  "+--+",
  "++--"
]

    Note: If there is no valid move, return an empty list [].
-----------------

# 321_Create_Maximum_Number
# 321. Create Maximum Number

Given two arrays of length m and n with digits 0-9
        representing two numbers. Create the maximum number of length k <= m + n
        from digits of the two. The relative order of the digits from the same array must be
        preserved. Return an array of the k digits.

    Note: You should try to optimize your time and space complexity.

    Example 1:

    Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]

    Example 2:

    Input:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
Output:
[6, 7, 6, 0, 4]

    Example 3:

    Input:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
Output:
[9, 8, 9]
-----------------

# 195_Tenth_Line
# 195. Tenth Line

Given a text file file.txt, print just the 10th line of the file.
    

    Example:

    Assume that file.txt has the following content:

    Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10

    Your script should output the tenth line, which is:

    Line 10
-----------------

# 1088_Confusing_Number_II
# 1088. Confusing Number II

We can rotate digits by 180 degrees to form new digits. When 0, 1, 6, 8, 9 are rotated 180
        degrees, they become 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5 and 7 are rotated 180
        degrees, they become invalid.

    A confusing number is a number that when rotated 180 degrees becomes a different
        number with each digit valid.(Note that the rotated number can be greater than the original
        number.)

    Given a positive integer N, return the number of confusing numbers between
        1 and N inclusive.

     

    Example 1:

    Input: 20
Output: 6
Explanation: 
The confusing numbers are [6,9,10,16,18,19].
6 converts to 9.
9 converts to 6.
10 converts to 01 which is just 1.
16 converts to 91.
18 converts to 81.
19 converts to 61.

    Example 2:

    Input: 100
Output: 19
Explanation: 
The confusing numbers are [6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100].

     

    Note:

    
        1 <= N <= 10^9
-----------------

# 888_Fair_Candy_Swap
# 888. Fair Candy Swap

Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th
        bar of candy that Alice has, and B[j] is the size of the j-th bar
        of candy that Bob has.

    Since they are friends, they would like to exchange one candy bar each so that after the
        exchange, they both have the same total amount of candy.  (The total amount of
            candy a person has is the sum of the sizes of candy bars they have.)

    Return an integer array ans where ans[0] is the size of the
        candy bar that Alice must exchange, and ans[1] is the size of the candy bar
        that Bob must exchange.

    If there are multiple answers, you may return any one of them.  It is guaranteed an
        answer exists.
-----------------

# 1477_Find_Two_Non-overlapping_Sub-arrays_Each_With_Target_Sum
# 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum


-----------------

# 473_Matchsticks_to_Square
# 473. Matchsticks to Square

Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little
        match girl has, please find out a way you can make one square by using up all those
        matchsticks. You should not break any stick, but you can link them up, and each matchstick
        must be used exactly one time.

     Your input will be several matchsticks the girl has, represented with their stick length.
        Your output will either be true or false, to represent whether you could make one square
        using all the matchsticks the little match girl has.

    Example 1:
    Input: [1,1,2,2,2]
Output: true

Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

    

    Example 2:
    Input: [3,3,3,3,4]
Output: false

Explanation: You cannot find a way to form a square with all the matchsticks.

    

    Note:
    
        The length sum of the given matchsticks is in the range of 0 to
            10^9.
        The length of the given matchstick array will not exceed 15.
-----------------

# 732_My_Calendar_III
# 732. My Calendar III

Implement a MyCalendarThree class to store your events. A new event can always
        be added.

    Your class will have one method, book(int start, int end). Formally, this
        represents a booking on the half open interval [start, end), the range of real
        numbers x such that start <= x < end.

    A K-booking happens when K events have some non-empty intersection (ie., there
        is some time that is common to all K events.)

    For each call to the method MyCalendar.book, return an integer K
        representing the largest integer such that there exists a K-booking in the
        calendar.
    Your class will be called like this: MyCalendarThree cal = new MyCalendarThree();
    MyCalendarThree.book(start, end)

    Example 1:

    MyCalendarThree();
MyCalendarThree.book(10, 20); // returns 1
MyCalendarThree.book(50, 60); // returns 1
MyCalendarThree.book(10, 40); // returns 2
MyCalendarThree.book(5, 15); // returns 3
MyCalendarThree.book(5, 10); // returns 3
MyCalendarThree.book(25, 55); // returns 3
Explanation:
The first two events can be booked and are disjoint, so the maximum K-booking is a 1-booking.
The third event [10, 40) intersects the first event, and the maximum K-booking is a 2-booking.
The remaining events cause the maximum K-booking to be only a 3-booking.
Note that the last event locally causes a 2-booking, but the answer is still 3 because
eg. [10, 20), [10, 40), and [5, 15) are still triple booked.

     

    Note:

    
        The number of calls to MyCalendarThree.book per test case will be at most
            400.
        
        In calls to MyCalendarThree.book(start, end), start and end
            are integers in the range [0, 10^9].
-----------------

# 1263_Minimum_Moves_to_Move_a_Box_to_Their_Target_Location
# 1263. Minimum Moves to Move a Box to Their Target Location


-----------------

# 65_Valid_Number
# 65. Valid Number

Validate if a given string can be interpreted as a decimal number.

    Some examples:
        "0" => true
        " 0.1 " => true
        "abc" => false
        "1 a" => false
        "2e10" => true
        " -90e3   " => true
        " 1e" => false
        "e3" => false
        " 6e-1" => true
        " 99e2.5 " => false
        "53.5e93" => true
        " --6 " => false
        "-+3" => false
        "95a54e53" => false

    Note: It is intended for the problem statement to be ambiguous. You should
        gather all requirements up front before implementing one. However, here is a list of
        characters that can be in a valid decimal number:

    
        Numbers 0-9
        Exponent - "e"
        Positive/negative sign - "+"/"-"
        Decimal point - "."
    

    Of course, the context of these characters also matters in the input.

    Update (2015-02-10):
        The signature of the C++ function had been updated. If you still see your
        function signature accepts a const char * argument, please click the reload
        button to reset your code definition.
-----------------

# 744_Find_Smallest_Letter_Greater_Than_Target
# 744. Find Smallest Letter Greater Than Target

Given a list of sorted characters letters containing only lowercase letters,
        and given a target letter target, find the smallest element in the list that is
        larger than the given target.
    
    
        Letters also wrap around. For example, if the target is target = 'z' and letters
        = ['a', 'b'], the answer is 'a'.
    

    Examples:
    Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"

    

    Note:
    
        letters has a length in range [2, 10000].
        letters consists of lowercase letters, and contains at least 2 unique
            letters.
        
        target is a lowercase letter.
-----------------

# 845_Longest_Mountain_in_Array
# 845. Longest Mountain in Array

Let's call any (contiguous) subarray B (of A) a mountain if the following
        properties hold:

    
        B.length >= 3
        There exists some 0 < i < B.length - 1 such that B[0] <
            B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
    

    (Note that B could be any subarray of A, including the entire array A.)

    Given an array A of integers, return the length of the
        longest mountain. 

    Return 0 if there is no mountain.

    Example 1:

    Input: [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

    Example 2:

    Input: [2,2,2]
Output: 0
Explanation: There is no mountain.

    Note:

    
        0 <= A.length <= 10000
        0 <= A[i] <= 10000
    

    Follow up:

    
        Can you solve it using only one pass?
        Can you solve it in O(1) space?
-----------------

# 1474_Delete_N_Nodes_After_M_Nodes_of_a_Linked_List
# 1474. Delete N Nodes After M Nodes of a Linked List


-----------------

# 415_Add_Strings
# 415. Add Strings

Given two non-negative integers num1 and num2 represented as
        string, return the sum of num1 and num2.

    Note:
    
        The length of both num1 and num2 is < 5100.
        Both num1 and num2 contains only digits 0-9.
        Both num1 and num2 does not contain any leading zero.
        You must not use any built-in BigInteger library or convert the inputs to
            integer directly.
-----------------

# 428_Serialize_and_Deserialize_N-ary_Tree
# 428. Serialize and Deserialize N-ary Tree

Serialization is the process of converting a data structure or object into a sequence of bits
        so that it can be stored in a file or memory buffer, or transmitted across a network
        connection link to be reconstructed later in the same or another computer environment.

    Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted
        tree in which each node has no more than N children. There is no restriction on how your
        serialization/deserialization algorithm should work. You just need to ensure that an N-ary
        tree can be serialized to a string and this string can be deserialized to the original tree
        structure.

    For example, you may serialize the following 3-ary tree

     

    
        

     

    as [1 [3[5 6] 2 4]]. You do not necessarily need to follow this format, so
        please be creative and come up with different approaches yourself.

     

    Note:

    
        N is in the range of  [1, 1000]
        Do not use class member/global/static variables to store states. Your serialize and
            deserialize algorithms should be stateless.
-----------------

# 810_Chalkboard_XOR_Game
# 810. Chalkboard XOR Game

We are given non-negative integers nums[i] which are written on a chalkboard.  Alice and
        Bob take turns erasing exactly one number from the chalkboard, with Alice starting first. 
        If erasing a number causes the bitwise XOR of all the elements of the chalkboard to
        become 0, then that player loses.  (Also, we'll say the bitwise XOR of one
        element is that element itself, and the bitwise XOR of no elements is 0.)

    Also, if any player starts their turn with the bitwise XOR of all the elements of the
        chalkboard equal to 0, then that player wins.

    Return True if and only if Alice wins the game, assuming both players play optimally.

    Example:
Input: nums = [1, 1, 2]
Output: false
Explanation:
Alice has two choices: erase 1 or erase 2.
If she erases 1, the nums array becomes [1, 2]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 2 = 3. Now Bob can remove any element he wants, because Alice will be the one to erase the last element and she will lose.
If Alice erases 2 first, now nums becomes [1, 1]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 1 = 0. Alice will lose.

    Notes: 

    
        1 <= N <= 1000. 
        0 <= nums[i] <= 2^16.
-----------------

# 1621_Number_of_Sets_of_K_Non-Overlapping_Line_Segments
# 1621. Number of Sets of K Non-Overlapping Line Segments


-----------------

# 487_Max_Consecutive_Ones_II
# 487. Max Consecutive Ones II

Given a binary array, find the maximum number of consecutive 1s in this array if you can
        flip at most one 0.
    

    Example 1:
    Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.

    

    Note:
    
        The input array will only contain 0 and 1.
        The length of input array is a positive integer and will not exceed 10,000
    
    

    Follow up:
        What if the input numbers come in one by one as an infinite stream? In other words,
        you can't store all numbers coming from the stream as it's too large to hold in memory.
        Could you solve it efficiently?
-----------------

# 650_2_Keys_Keyboard
# 650. 2 Keys Keyboard

Initially on a notepad only one character 'A' is present. You can perform two
        operations on this notepad for each step:

    
        Copy All: You can copy all the characters present on the notepad (partial
            copy is not allowed).
        
        Paste: You can paste the characters which are copied last time.
    

     

    Given a number n. You have to get exactly n 'A' on
        the notepad by performing the minimum number of steps permitted. Output the minimum number
        of steps to get n 'A'.

    Example 1:

    Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.

     

    Note:

    
        The n will be in the range [1, 1000].
-----------------

# 1458_Max_Dot_Product_of_Two_Subsequences
# 1458. Max Dot Product of Two Subsequences


-----------------

# 385_Mini_Parser
# 385. Mini Parser

Given a nested list of integers represented as a string, implement a parser to deserialize
        it.

    Each element is either an integer, or a list -- whose elements may also be integers or other
        lists.

    Note:
        You may assume that the string is well-formed:
    
        String is non-empty.
        String does not contain white spaces.
        String contains only digits 0-9, [, -
            ,, ].
        
    
    

    Example 1:
    Given s = "324",

You should return a NestedInteger object which contains a single integer 324.

    

    Example 2:
    Given s = "[123,[456,[789]]]",

Return a NestedInteger object containing a nested list with 2 elements:

1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789.
-----------------

# 1854_Maximum_Population_Year
# 1854. Maximum Population Year


-----------------

# 1393_Capital_GainLoss
# 1393. Capital Gain/Loss


-----------------

# 595_Big_Countries
# 595. Big Countries

There is a table World

    +-----------------+------------+------------+--------------+---------------+
| name            | continent  | area       | population   | gdp           |
+-----------------+------------+------------+--------------+---------------+
| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
| Albania         | Europe     | 28748      | 2831741      | 12960000      |
| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
| Andorra         | Europe     | 468        | 78115        | 3712000       |
| Angola          | Africa     | 1246700    | 20609294     | 100990000     |
+-----------------+------------+------------+--------------+---------------+

    A country is big if it has an area of bigger than 3 million square km or a population of more
        than 25 million.

    Write a SQL solution to output big countries' name, population and area.

    For example, according to the above table, we should output:

    +--------------+-------------+--------------+
| name         | population  | area         |
+--------------+-------------+--------------+
| Afghanistan  | 25500100    | 652230       |
| Algeria      | 37100000    | 2381741      |
+--------------+-------------+--------------+
-----------------

# 568_Maximum_Vacation_Days
# 568. Maximum Vacation Days

LeetCode wants to give one of its best employees the option to travel among N cities
        to collect algorithm problems. But all work and no play makes Jack a dull boy, you could
        take vacations in some particular cities and weeks. Your job is to schedule the traveling to
        maximize the number of vacation days you could take, but there are certain rules and
        restrictions you need to follow.
    

    Rules and restrictions:
    
        You can only travel among N cities, represented by indexes from 0 to N-1.
            Initially, you are in the city indexed 0 on Monday.
        
        The cities are connected by flights. The flights are represented as a N*N matrix
            (not necessary symmetrical), called flights representing the airline status from
            the city i to the city j. If there is no flight from the city i to the city j, flights[i][j]
                = 0; Otherwise, flights[i][j] = 1. Also, flights[i][i] = 0 for all
            i.
        
        You totally have K weeks (each week has 7 days) to travel. You can only
            take flights at most once per day and can only take flights on each week's Monday
            morning. Since flight time is so short, we don't consider the impact of flight time.
        
        For each city, you can only have restricted vacation days in different weeks, given an
            N*K matrix called days representing this relationship. For the value of
            days[i][j], it represents the maximum days you could take vacation in the city
            i in the week j.
        
    
    

    You're given the flights matrix and days matrix, and you need to output the
        maximum vacation days you could take during K weeks.

    Example 1:
    Input:flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[1,3,1],[6,0,3],[3,3,3]]
Output: 12
Explanation: Ans = 6 + 3 + 3 = 12. 
One of the best strategies is:
1st week : fly from city 0 to city 1 on Monday, and play 6 days and work 1 day. (Although you start at city 0, we could also fly to and start at other cities since it is Monday.)
2nd week : fly from city 1 to city 2 on Monday, and play 3 days and work 4 days.
3rd week : stay at city 2, and play 3 days and work 4 days.

    

    Example 2:
    Input:flights = [[0,0,0],[0,0,0],[0,0,0]], days = [[1,1,1],[7,7,7],[7,7,7]]
Output: 3
Explanation: Ans = 1 + 1 + 1 = 3. 
Since there is no flights enable you to move to another city, you have to stay at city 0 for the whole 3 weeks. For each week, you only have one day to play and six days to work. So the maximum number of vacation days is 3.

    

    Example 3:
    Input:flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[7,0,0],[0,7,0],[0,0,7]]
Output: 21
Explanation:Ans = 7 + 7 + 7 = 21
One of the best strategies is:
1st week : stay at city 0, and play 7 days.
2nd week : fly from city 0 to city 1 on Monday, and play 7 days.
3rd week : fly from city 1 to city 2 on Monday, and play 7 days.

    

    Note:
    
        N and K are positive integers, which are in the range of [1, 100].
        In the matrix flights, all the values are integers in the range of [0, 1].
        In the matrix days, all the values are integers in the range [0, 7].
        You could stay at a city beyond the number of vacation days, but you should work
            on the extra days, which won't be counted as vacation days.
        
        If you fly from the city A to the city B and take the vacation on that day, the
            deduction towards vacation days will count towards the vacation days of city B in that
            week.
        
        We don't consider the impact of flight hours towards the calculation of vacation days.
-----------------

# 895_Maximum_Frequency_Stack
# 895. Maximum Frequency Stack

Implement FreqStack, a class which simulates the operation of a stack-like data
        structure.

    FreqStack has two functions:

    
        push(int x), which pushes an integer x onto the stack.
        pop(), which removes and returns the most frequent element
            in the stack.
            
                If there is a tie for most frequent element, the element closest to the top of
                    the stack is removed and returned.
                
            
        
    

     

    Example 1:

    Input: 
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]
Explanation:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -> returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -> returns 5.
The stack becomes [5,7,4].

pop() -> returns 4.
The stack becomes [5,7].

     

    Note:

    
        Calls to FreqStack.push(int x) will be such that 0 <= x <=
            10^9.
        
        It is guaranteed that FreqStack.pop() won't be called if the stack has
            zero elements.
        
        The total number of FreqStack.push calls will not exceed 10000
            in a single test case.
        
        The total number of FreqStack.pop calls will not exceed
            10000 in a single test case.
        
        The total number of FreqStack.push and FreqStack.pop calls
            will not exceed 150000 across all test cases.
-----------------

# 160_Intersection_of_Two_Linked_Lists
# 160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists
        begins.

    For example, the following two linked lists:
    

    begin to intersect at node c1.

     

    Example 1:
    

    Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

     

    Example 2:
    

    Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

     

    Example 3:
    

    Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

     

    Notes:

    
        If the two linked lists have no intersection at all, return null.
        The linked lists must retain their original structure after the function returns.
        You may assume there are no cycles anywhere in the entire linked structure.
        Your code should preferably run in O(n) time and use only O(1) memory.
-----------------

# 223_Rectangle_Area
# 223. Rectangle Area

Find the total area covered by two rectilinear rectangles in a
        2D plane.

    Each rectangle is defined by its bottom left corner and top right corner as shown in the
        figure.

    

    Example:

    Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45

    Note:

    Assume that the total area is never beyond the maximum possible value of int.
-----------------

# 735_Asteroid_Collision
# 735. Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row.
    
    
        For each asteroid, the absolute value represents its size, and the sign represents its
        direction (positive meaning right, negative meaning left). Each asteroid moves at the same
        speed.
    
    
        Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller
        one will explode. If both are the same size, both will explode. Two asteroids moving in the
        same direction will never meet.
    

    Example 1:
    Input:
asteroids = [5, 10, -5]
Output: [5, 10]
Explanation:
The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

    

    Example 2:
    Input:
asteroids = [8, -8]
Output: []
Explanation:
The 8 and -8 collide exploding each other.

    

    Example 3:
    Input:
asteroids = [10, 2, -5]
Output: [10]
Explanation:
The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.

    

    Example 4:
    Input:
asteroids = [-2, -1, 1, 2]
Output: [-2, -1, 1, 2]
Explanation:
The -2 and -1 are moving left, while the 1 and 2 are moving right.
Asteroids moving the same direction never meet, so no asteroids will meet each other.

    

    Note:
    The length of asteroids will be at most 10000.
    Each asteroid will be a non-zero integer in the range [-1000, 1000]..
-----------------

# 1190_Reverse_Substrings_Between_Each_Pair_of_Parentheses
# 1190. Reverse Substrings Between Each Pair of Parentheses

You are given a string s that consists of lower case English letters and
        brackets. 

    Reverse the strings in each pair of matching parentheses, starting from the
        innermost one.

    Your result should not contain any brackets.

     
    Example 1:

    Input: s = "(abcd)"
Output: "dcba"

    Example 2:

    Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

    Example 3:

    Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

    Example 4:

    Input: s = "a(bcdefghijkl(mno)p)q"
Output: "apmnolkjihgfedcbq"

     
    Constraints:

    
        0 <= s.length <= 2000
        s only contains lower case English characters and parentheses.
        It's guaranteed that all parentheses are balanced.
-----------------

# 1388_Pizza_With_3n_Slices
# 1388. Pizza With 3n Slices


-----------------

# 1390_Four_Divisors
# 1390. Four Divisors


-----------------

# 2_Add_Two_Numbers
# 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The
        digits are stored in reverse order and each of their nodes contain a single digit.
        Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0
        itself.

    Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
-----------------

# 1300_Sum_of_Mutated_Array_Closest_to_Target
# 1300. Sum of Mutated Array Closest to Target


-----------------

# 958_Check_Completeness_of_a_Binary_Tree
# 958. Check Completeness of a Binary Tree

Given a binary tree, determine if it is a complete binary tree.

    Definition of a complete binary tree from Wikipedia:
        In a complete binary tree every level, except possibly the last, is completely filled, and
        all nodes in the last level are as far left as possible. It can have between 1 and
        2h nodes inclusive at the last level h.

     

    Example 1:

    

    Input: [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
-----------------

# 1036_Escape_a_Large_Maze
# 1036. Escape a Large Maze

In a 1 million by 1 million grid, the coordinates of each grid square are (x, y)
        with 0 <= x, y < 10^6.

    We start at the source square and want to reach the target square. 
        Each move, we can walk to a 4-directionally adjacent square in the grid that isn't in
        the given list of blocked squares.

    Return true if and only if it is possible to reach the target square through a
        sequence of moves.

     

    Example 1:

    Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
Output: false
Explanation: 
The target square is inaccessible starting from the source square, because we can't walk outside the grid.

    Example 2:

    Input: blocked = [], source = [0,0], target = [999999,999999]
Output: true
Explanation: 
Because there are no blocked cells, it's possible to reach the target square.

     

    Note:

    
        0 <= blocked.length <= 200
        blocked[i].length == 2
        0 <= blocked[i][j] < 10^6
        source.length == target.length == 2
        0 <= source[i][j], target[i][j] < 10^6
        source != target
-----------------

# 903_Valid_Permutations_for_DI_Sequence
# 903. Valid Permutations for DI Sequence

We are given S, a length n string of characters from the set {'D',
        'I'}. (These letters stand for "decreasing" and "increasing".)
    

    A valid permutation is a permutation P[0], P[1], ..., P[n] of
        integers {0, 1, ..., n}, such that for all i:

    
        If S[i] == 'D', then P[i] > P[i+1], and;
        If S[i] == 'I', then P[i] < P[i+1].
    

    How many valid permutations are there?  Since the answer may be large, return
        your answer modulo 10^9 + 7.

     

    Example 1:

    Input: "DID"
Output: 5
Explanation: 
The 5 valid permutations of (0, 1, 2, 3) are:
(1, 0, 3, 2)
(2, 0, 3, 1)
(2, 1, 3, 0)
(3, 0, 2, 1)
(3, 1, 2, 0)

     

    Note:

    
        1 <= S.length <= 200
        S consists only of characters from the set {'D',
            'I'}.
-----------------

# 120_Triangle
# 120. Triangle

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to
        adjacent numbers on the row below.

    For example, given the following triangle

    [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

    The minimum path sum from top to bottom is 11 (i.e., 2 +
        3 + 5 + 1 = 11).

    Note:

    Bonus point if you are able to do this using only O(n) extra space, where
        n is the total number of rows in the triangle.
-----------------

# 24_Swap_Nodes_in_Pairs
# 24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

    You may not modify the values in the list's nodes, only nodes itself may
        be changed.

     

    Example:

    Given 1->2->3->4, you should return the list as 2->1->4->3.
-----------------

# 352_Data_Stream_as_Disjoint_Intervals
# 352. Data Stream as Disjoint Intervals

Given a data stream input of non-negative integers a1, a2, ...,
        an, ..., summarize the numbers seen so far as a list of disjoint intervals.

    For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the
        summary will be:

    [1, 1]
[1, 1], [3, 3]
[1, 1], [3, 3], [7, 7]
[1, 3], [7, 7]
[1, 3], [6, 7]

     

    Follow up:

    What if there are lots of merges and the number of disjoint intervals are small compared to
        the data stream's size?
-----------------

# 1840_Maximum_Building_Height
# 1840. Maximum Building Height


-----------------

# 1437_Check_If_All_1's_Are_at_Least_Length_K_Places_Away
# 1437. Check If All 1's Are at Least Length K Places Away


-----------------

# 1252_Cells_with_Odd_Values_in_a_Matrix
# 1252. Cells with Odd Values in a Matrix

Given n and m which are the dimensions of a
        matrix initialized by zeros and given an array indices where indices[i]
            = [ri, ci]. For each pair of [ri, ci] you have to increment all
        cells in row ri and column ci by 1.

    Return the number of cells with odd values in the matrix after applying the
        increment to all indices.

     
    Example 1:
    
    Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

    Example 2:
    
    Input: n = 2, m = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.

     
    Constraints:

    
        1 <= n <= 50
        1 <= m <= 50
        1 <= indices.length <= 100
        0 <= indices[i][0] < n
        0 <= indices[i][1] < m
-----------------

# 751_IP_to_CIDR
# 751. IP to CIDR

Given a start IP address ip and a number of ips we need to cover n,
        return a representation of the range as a list (of smallest possible length) of CIDR blocks.
    
    
        A CIDR block is a string consisting of an IP, followed by a slash, and then the prefix
        length. For example: "123.45.67.89/20". That prefix length "20" represents the number of
        common prefix bits in the specified range.
    

    Example 1:
    Input: ip = "255.0.0.7", n = 10
Output: ["255.0.0.7/32","255.0.0.8/29","255.0.0.16/32"]
Explanation:
The initial ip address, when converted to binary, looks like this (spaces added for clarity):
255.0.0.7 -> 11111111 00000000 00000000 00000111
The address "255.0.0.7/32" specifies all addresses with a common prefix of 32 bits to the given address,
ie. just this one address.

The address "255.0.0.8/29" specifies all addresses with a common prefix of 29 bits to the given address:
255.0.0.8 -> 11111111 00000000 00000000 00001000
Addresses with common prefix of 29 bits are:
11111111 00000000 00000000 00001000
11111111 00000000 00000000 00001001
11111111 00000000 00000000 00001010
11111111 00000000 00000000 00001011
11111111 00000000 00000000 00001100
11111111 00000000 00000000 00001101
11111111 00000000 00000000 00001110
11111111 00000000 00000000 00001111

The address "255.0.0.16/32" specifies all addresses with a common prefix of 32 bits to the given address,
ie. just 11111111 00000000 00000000 00010000.

In total, the answer specifies the range of 10 ips starting with the address 255.0.0.7 .

There were other representations, such as:
["255.0.0.7/32","255.0.0.8/30", "255.0.0.12/30", "255.0.0.16/32"],
but our answer was the shortest possible.

Also note that a representation beginning with say, "255.0.0.7/30" would be incorrect,
because it includes addresses like 255.0.0.4 = 11111111 00000000 00000000 00000100
that are outside the specified range.

    

    Note:
    
        ip will be a valid IPv4 address.
        Every implied address ip + x (for x < n) will be a valid IPv4
            address.
        
        n will be an integer in the range [1, 1000].
-----------------

# 1102_Path_With_Maximum_Minimum_Value
# 1102. Path With Maximum Minimum Value

Given a matrix of integers A with R rows
        and C columns, find the maximum score of
        a path starting at [0,0] and ending at [R-1,C-1].

    The score of a path is the minimum value in that path.  For
        example, the value of the path 8 →  4 →  5 →  9 is 4.

    A path moves some number of times from one visited cell to any neighbouring
        unvisited cell in one of the 4 cardinal directions (north, east, west, south).

     

    Example 1:

    

    Input: [[5,4,5],[1,2,6],[7,4,6]]
Output: 4
Explanation: 
The path with the maximum score is highlighted in yellow.

    Example 2:

    

    Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
Output: 2

    Example 3:

    
    

    Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
Output: 3

     

    Note:

    
        1 <= R, C <= 100
        0 <= A[i][j] <= 10^9
-----------------

# 13_Roman_to_Integer
# 13. Roman to Integer

Roman numerals are represented by seven different symbols: I,
        V, X, L, C, D and
        M.

    Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

    For example, two is written as II in Roman numeral, just two one's
        added together. Twelve is written as, XII, which is simply X +
        II. The number twenty seven is written as XXVII, which is
        XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the
        numeral for four is not IIII. Instead, the number four is written as
        IV. Because the one is before the five we subtract it making four. The same
        principle applies to the number nine, which is written as IX. There are six
        instances where subtraction is used:

    
        I can be placed before V (5) and X (10) to make 4
            and 9. 
        
        X can be placed before L (50) and C (100) to make
            40 and 90. 
        
        C can be placed before D (500) and M (1000) to
            make 400 and 900.
        
    

    Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range
        from 1 to 3999.

    Example 1:

    Input: "III"
Output: 3

    Example 2:

    Input: "IV"
Output: 4

    Example 3:

    Input: "IX"
Output: 9

    Example 4:

    Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

    Example 5:

    Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
-----------------

# 988_Smallest_String_Starting_From_Leaf
# 988. Smallest String Starting From Leaf

Given the root of a binary tree, each node has a value from 0 to
        25 representing the letters 'a' to
        'z': a value of 0 represents 'a', a
        value of 1 represents 'b', and so on.

    Find the lexicographically smallest string that starts at a leaf of this tree and ends at the
        root.

    (As a reminder, any shorter prefix of a string is lexicographically smaller: for example,
        "ab" is lexicographically smaller than "aba". 
        A leaf of a node is a node that has no children.)
-----------------

# 1686_Stone_Game_VI
# 1686. Stone Game VI


-----------------

# 1794_Count_Pairs_of_Equal_Substrings_With_Minimum_Difference
# 1794. Count Pairs of Equal Substrings With Minimum Difference


-----------------

# 837_New_21_Game
# 837. New 21 Game

Alice plays the following game, loosely based on the card game "21".

    Alice starts with 0 points, and draws numbers while she has less than
        K points.  During each draw, she gains an integer number of points
        randomly from the range [1, W], where W is an integer.  Each
        draw is independent and the outcomes have equal probabilities.

    Alice stops drawing numbers when she gets K or more points.  What is the
        probability that she has N or less points?

    Example 1:

    Input: N = 10, K = 1, W = 10
Output: 1.00000
Explanation:  Alice gets a single card, then stops.

    Example 2:

    Input: N = 6, K = 1, W = 10
Output: 0.60000
Explanation:  Alice gets a single card, then stops.
In 6 out of W = 10 possibilities, she is at or below N = 6 points.

    Example 3:

    Input: N = 21, K = 17, W = 10
Output: 0.73278

    Note:

    
        0 <= K <= N <= 10000
        1 <= W <= 10000
        Answers will be accepted as correct if they are within 10^-5 of the correct
            answer.
        
        The judging time limit has been reduced for this question.
-----------------

# 1254_Number_of_Closed_Islands
# 1254. Number of Closed Islands

Given a 2D grid consists of 0s (land) and 1s
        (water).  An island is a maximal 4-directionally connected group of
        0s and a closed island is an island
        totally (all left, top, right, bottom) surrounded by 1s.
    

    Return the number of closed islands.

     
    Example 1:

    

    Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation:
Islands in gray are closed because they are completely surrounded by water (group of 1s).

    Example 2:

    

    Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

    Example 3:

    Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

     
    Constraints:

    
        1 <= grid.length, grid[0].length <= 100
        0 <= grid[i][j] <=1
-----------------

# 1678_Goal_Parser_Interpretation
# 1678. Goal Parser Interpretation


-----------------

# 1230_Toss_Strange_Coins
# 1230. Toss Strange Coins

You have some coins.  The i-th coin has a probability prob[i]
        of facing heads when tossed.

    Return the probability that the number of coins facing heads equals target if
        you toss every coin exactly once.

     
    Example 1:
    Input: prob = [0.4], target = 1
Output: 0.40000

    Example 2:
    Input: prob = [0.5,0.5,0.5,0.5,0.5], target = 0
Output: 0.03125

     
    Constraints:

    
        1 <= prob.length <= 1000
        0 <= prob[i] <= 1
        0 <= target <= prob.length
        Answers will be accepted as correct if they are within 10^-5 of the correct
            answer.
-----------------

# 939_Minimum_Area_Rectangle
# 939. Minimum Area Rectangle

Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from
        these points, with sides parallel to the x and y axes.

    If there isn't any rectangle, return 0.
-----------------

# 212_Word_Search_II
# 212. Word Search II

Given a 2D board and a list of words from the dictionary, find all words in the board.

    Each word must be constructed from letters of sequentially adjacent cell, where "adjacent"
        cells are those horizontally or vertically neighboring. The same letter cell may not be used
        more than once in a word.

     

    Example:

    Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]

     

    Note:

    
        All inputs are consist of lowercase letters a-z.
        The values of words are distinct.
-----------------

# 1319_Number_of_Operations_to_Make_Network_Connected
# 1319. Number of Operations to Make Network Connected


-----------------

# 1837_Sum_of_Digits_in_Base_K
# 1837. Sum of Digits in Base K


-----------------

# 882_Reachable_Nodes_In_Subdivided_Graph
# 882. Reachable Nodes In Subdivided Graph

Starting with an undirected graph (the "original graph") with
        nodes from 0 to N-1, subdivisions are made to some of the edges.
    

    The graph is given as follows: edges[k] is a list of integer pairs (i, j,
        n) such that (i, j) is an edge of the original graph,

    and n is the total number of new nodes on that edge. 

    Then, the edge (i, j) is deleted from the original graph, n new
        nodes (x_1, x_2, ..., x_n) are added to the original graph,

    and n+1 new edges (i, x_1), (x_1, x_2), (x_2, x_3), ..., (x_{n-1},
        x_n), (x_n, j) are added to the original graph.

    Now, you start at node 0 from the original graph, and in each move, you
        travel along one edge. 

    Return how many nodes you can reach in at most M moves.

     

    Example 1:

    Input: edges = [[0,1,10],[0,2,1],[1,2,2]], M = 6, N = 3
Output: 13
Explanation: 
The nodes that are reachable in the final graph after M = 6 moves are indicated below.
-----------------

# 58_Length_of_Last_Word
# 58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters
        ' ', return the length of last word in the string.

    If the last word does not exist, return 0.

    Note: A word is defined as a character sequence consists of non-space characters only.
    

    Example:

    Input: "Hello World"
Output: 5
-----------------

# 166_Fraction_to_Recurring_Decimal
# 166. Fraction to Recurring Decimal

Given two integers representing the numerator and denominator of a fraction, return the
        fraction in string format.

    If the fractional part is repeating, enclose the repeating part in parentheses.

    Example 1:

    Input: numerator = 1, denominator = 2
Output: "0.5"

    Example 2:

    Input: numerator = 2, denominator = 1
Output: "2"

    Example 3:

    Input: numerator = 2, denominator = 3
Output: "0.(6)"
-----------------

# 1747_Leetflex_Banned_Accounts
# 1747. Leetflex Banned Accounts


-----------------

# 844_Backspace_String_Compare
# 844. Backspace String Compare

Given two strings S and T, return if they are
        equal when both are typed into empty text editors. # means a backspace
        character.
-----------------

# 1807_Evaluate_the_Bracket_Pairs_of_a_String
# 1807. Evaluate the Bracket Pairs of a String


-----------------

# 1493_Longest_Subarray_of_1's_After_Deleting_One_Element
# 1493. Longest Subarray of 1's After Deleting One Element


-----------------

# 1314_Matrix_Block_Sum
# 1314. Matrix Block Sum


-----------------

# 1693_Daily_Leads_and_Partners
# 1693. Daily Leads and Partners


-----------------

# 271_Encode_and_Decode_Strings
# 271. Encode and Decode Strings

Design an algorithm to encode a list of strings to a string. The encoded string
        is then sent over the network and is decoded back to the original list of strings.

    Machine 1 (sender) has the function:

    string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
    Machine 2 (receiver) has the function:

    vector<string> decode(string s) {
  //... your code
  return strs;
}

    So Machine 1 does:

    string encoded_string = encode(strs);

    and Machine 2 does:

    vector<string> strs2 = decode(encoded_string);

    strs2 in Machine 2 should be the same as strs in Machine 1.

    Implement the encode and decode methods.

     

    Note:

    
        The string may contain any possible characters out of 256 valid ascii characters. Your
            algorithm should be generalized enough to work on any possible characters.
        
        Do not use class member/global/static variables to store states. Your encode and decode
            algorithms should be stateless.
        
        Do not rely on any library method such as eval or serialize methods. You
            should implement your own encode/decode algorithm.
-----------------

# 1363_Largest_Multiple_of_Three
# 1363. Largest Multiple of Three


-----------------

# 449_Serialize_and_Deserialize_BST
# 449. Serialize and Deserialize BST

Serialization is the process of converting a data structure or object into a sequence of bits
        so that it can be stored in a file or memory buffer, or transmitted across a network
        connection link to be reconstructed later in the same or another computer environment.

    Design an algorithm to serialize and deserialize a binary search tree. There is no
        restriction on how your serialization/deserialization algorithm should work. You just need
        to ensure that a binary search tree can be serialized to a string and this string can be
        deserialized to the original tree structure.

    The encoded string should be as compact as possible.

    Note: Do not use class member/global/static variables to store states. Your serialize
        and deserialize algorithms should be stateless.
-----------------

# 1149_Article_Views_II
# 1149. Article Views II

Table: Views

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| article_id    | int     |
| author_id     | int     |
| viewer_id     | int     |
| view_date     | date    |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
Each row of this table indicates that some viewer viewed an article (written by some author) on some date.
Note that equal author_id and viewer_id indicate the same person.

     

    Write an SQL query to find all the people who viewed more than one article on the same date,
        sorted in ascending order by their id.

    The query result format is in the following example:

    Views table:
+------------+-----------+-----------+------------+
| article_id | author_id | viewer_id | view_date  |
+------------+-----------+-----------+------------+
| 1          | 3         | 5         | 2019-08-01 |
| 3          | 4         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |
+------------+-----------+-----------+------------+

Result table:
+------+
| id   |
+------+
| 5    |
| 6    |
+------+
-----------------

# 165_Compare_Version_Numbers
# 165. Compare Version Numbers

Compare two version numbers version1 and version2.
        If version1 > version2 return 1; if
        version1 < version2 return -1;otherwise
        return 0.

    You may assume that the version strings are non-empty and contain only digits and the
        . character.
    The . character does not represent a decimal point and is used to separate
        number sequences.
    For instance, 2.5 is not "two and a half" or "half way to version
        three", it is the fifth second-level revision of the second first-level revision.
    You may assume the default revision number for each level of a version number to be
        0. For example, version number 3.4 has a revision number of 3
        and 4 for its first and second level revision number. Its third and fourth
        level revision number are both 0.

     

    Example 1:
    Input: version1 = "0.1", version2 = "1.1"
Output: -1

    Example 2:
    Input: version1 = "1.0.1", version2 = "1"
Output: 1

    Example 3:
    Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1

    Example 4:
    Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

    Example 5:
    Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: The first version number does not have a third level revision number, which means its third level revision number is default to "0"

     

    Note:
    
        Version strings are composed of numeric strings separated by dots . and
            this numeric strings may have leading zeroes.
        
        Version strings do not start or end with dots, and they will not be two consecutive
            dots.
-----------------

# 1798_Maximum_Number_of_Consecutive_Values_You_Can_Make
# 1798. Maximum Number of Consecutive Values You Can Make


-----------------

# 820_Short_Encoding_of_Words
# 820. Short Encoding of Words

Given a list of words, we may encode it by writing a reference string S and a
        list of indexes A.

    For example, if the list of words is ["time", "me", "bell"],
        we can write it as S = "time#bell#" and indexes = [0, 2,
            5].

    Then for each index, we will recover the word by reading from the reference string from that
        index until we reach a "#" character.

    What is the length of the shortest reference string S possible that encodes the given
        words?

    Example:

    Input: words = ["time", "me", "bell"]
Output: 10
Explanation: S = "time#bell#" and indexes = [0, 2, 5].

     

    Note:

    
        1 <= words.length <= 2000.
        1 <= words[i].length <= 7.
        Each word has only lowercase letters.
-----------------

# 1620_Coordinate_With_Maximum_Network_Quality
# 1620. Coordinate With Maximum Network Quality


-----------------

# 1061_Lexicographically_Smallest_Equivalent_String
# 1061. Lexicographically Smallest Equivalent String

Given strings A and B of the same length, we say A[i] and B[i] are
        equivalent characters. For example, if A = "abc" and B = "cde",
        then we have 'a' == 'c', 'b' == 'd', 'c' ==
            'e'.

    Equivalent characters follow the usual rules of any equivalence relation:

    
        Reflexivity: 'a' == 'a'
        Symmetry: 'a' == 'b' implies 'b' == 'a'
        Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a'
            == 'c'
        
    

    For example, given the equivalency information from A and B above,
        S = "eed", "acd", and
        "aab" are equivalent strings, and "aab" is the
        lexicographically smallest equivalent string of S.

    Return the lexicographically smallest equivalent string of S by using the
        equivalency information from A and B.

     

    Example 1:

    Input: A = "parker", B = "morris", S = "parser"
Output: "makkek"
Explanation: Based on the equivalency information in A and B, we can group their characters as [m,p], [a,o], [k,r,s], [e,i]. The characters in each group are equivalent and sorted in lexicographical order. So the answer is "makkek".

    Example 2:

    Input: A = "hello", B = "world", S = "hold"
Output: "hdld"
Explanation:  Based on the equivalency information in A and B, we can group their characters as [h,w], [d,e,o], [l,r]. So only the second letter 'o' in S is changed to 'd', the answer is "hdld".

    Example 3:

    Input: A = "leetcode", B = "programs", S = "sourcecode"
Output: "aauaaaaada"
Explanation:  We group the equivalent characters in A and B as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in S except 'u' and 'd' are transformed to 'a', the answer is "aauaaaaada".

     

    Note:

    
        String A, B and S consist of only lowercase
            English letters from 'a' - 'z'.
        
        The lengths of string A, B and S are between
            1 and 1000.
        
        String A and B are of the same length.
-----------------

# 1472_Design_Browser_History
# 1472. Design Browser History


-----------------

# 329_Longest_Increasing_Path_in_a_Matrix
# 329. Longest Increasing Path in a Matrix

Given an integer matrix, find the length of the longest increasing path.

    From each cell, you can either move to four directions: left, right, up or down. You may NOT
        move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

    Example 1:

    Input: nums =
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

    Example 2:

    Input: nums =
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
-----------------

# 1424_Diagonal_Traverse_II
# 1424. Diagonal Traverse II


-----------------

# 235_Lowest_Common_Ancestor_of_a_Binary_Search_Tree
# 235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in
        the BST.

    According to the definition of LCA on Wikipedia: “The lowest
        common ancestor is defined between two nodes p and q as the lowest node in T that has
        both p and q as descendants (where we allow a node to be a descendant of itself).”
    

    Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]
    
     

    Example 1:

    Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

    Example 2:

    Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

     

    Note:

    
        All of the nodes' values will be unique.
        p and q are different and both values will exist in the BST.
-----------------

# 334_Increasing_Triplet_Subsequence
# 334. Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in
        the array.

    Formally the function should:

    Return true if there exists i, j, k 
        such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j
        < k ≤ n-1 else return false.
    

    Note: Your algorithm should run in O(n) time complexity and
        O(1) space complexity.
-----------------

# 1176_Diet_Plan_Performance
# 1176. Diet Plan Performance

A dieter consumes calories[i] calories on the i-th day. 
    

    Given an integer k, for every consecutive sequence of
        k days (calories[i], calories[i+1], ..., calories[i+k-1] for
        all 0 <= i <= n-k), they look at T, the total calories consumed
        during that sequence of k days (calories[i] + calories[i+1] + ... +
            calories[i+k-1]):

    
        If T < lower, they performed poorly on their diet and lose 1 point; 
        
        If T > upper, they performed well on their diet and gain 1 point;
        Otherwise, they performed normally and there is no change in points.
    

    Initially, the dieter has zero points. Return the total number of points the dieter has after
        dieting for calories.length days.

    Note that the total points can be negative.

     
    Example 1:

    Input: calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3
Output: 0
Explanation: Since k = 1, we consider each element of the array separately and compare it to lower and upper.
calories[0] and calories[1] are less than lower so 2 points are lost.
calories[3] and calories[4] are greater than upper so 2 points are gained.

    Example 2:

    Input: calories = [3,2], k = 2, lower = 0, upper = 1
Output: 1
Explanation: Since k = 2, we consider subarrays of length 2.
calories[0] + calories[1] > upper so 1 point is gained.

    Example 3:

    Input: calories = [6,5,0,0], k = 2, lower = 1, upper = 5
Output: 0
Explanation:
calories[0] + calories[1] > upper so 1 point is gained.
lower <= calories[1] + calories[2] <= upper so no change in points.
calories[2] + calories[3] < lower so 1 point is lost.

     
    Constraints:

    
        1 <= k <= calories.length <= 10^5
        0 <= calories[i] <= 20000
        0 <= lower <= upper
-----------------

# 1804_Implement_Trie_II_(Prefix_Tree)
# 1804. Implement Trie II (Prefix Tree)


-----------------

# 128_Longest_Consecutive_Sequence
# 128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements
        sequence.

    Your algorithm should run in O(n) complexity.

    Example:

    Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
-----------------

# 443_String_Compression
# 443. String Compression

Given an array of characters, compress it in-place.
    

    The length after compression must always be smaller than or equal to the original array.

    Every element of the array should be a character (not int) of length 1.

    After you are done modifying the input array in-place,
        return the new length of the array.
     

    Follow up:
        Could you solve it using only O(1) extra space?
     

    Example 1:

    Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

     

    Example 2:

    Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.

     

    Example 3:

    Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.

     

    Note:

    
        All characters have an ASCII value in [35, 126].
        1 <= len(chars) <= 1000.
-----------------

# 451_Sort_Characters_By_Frequency
# 451. Sort Characters By Frequency

Given a string, sort it in decreasing order based on the frequency of characters.

    Example 1:
    Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

    

    Example 2:
    Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

    

    Example 3:
    Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
-----------------

# 1208_Get_Equal_Substrings_Within_Budget
# 1208. Get Equal Substrings Within Budget

You are given two strings s and t of the same length. You want to
        change s to t. Changing the i-th character of
        s to i-th character of t costs |s[i] -
            t[i]| that is, the absolute difference between the ASCII values of the
        characters.

    You are also given an integer maxCost.

    Return the maximum length of a substring of s that can be changed to be the same
        as the corresponding substring of twith a cost less than or equal to maxCost.
    

    If there is no substring from s that can be changed to its corresponding
        substring from t, return 0.

     
    Example 1:

    Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd". That costs 3, so the maximum length is 3.

    Example 2:

    Input: s = "abcd", t = "cdef", maxCost = 3
Output: 1
Explanation: Each character in s costs 2 to change to charactor in t, so the maximum length is 1.

    Example 3:

    Input: s = "abcd", t = "acde", maxCost = 0
Output: 1
Explanation: You can't make any change, so the maximum length is 1.

     
    Constraints:

    
        1 <= s.length, t.length <= 10^5
        0 <= maxCost <= 10^6
        s and t only contain lower case English letters.
-----------------

# 529_Minesweeper
# 529. Minesweeper

Let's play the minesweeper game (Wikipedia, online game)!

    You are given a 2D char matrix representing the game board. 'M' represents an
        unrevealed mine, 'E' represents an unrevealed empty square, 'B'
        represents a revealed blank square that has no adjacent (above, below, left, right,
        and all 4 diagonals) mines, digit ('1' to '8') represents how many
        mines are adjacent to this revealed square, and finally 'X' represents
        a revealed mine.

    Now given the next click position (row and column indices) among all the unrevealed
        squares ('M' or 'E'), return the board after revealing this position
        according to the following rules:

    
        If a mine ('M') is revealed, then the game is over - change it to
            'X'.
        
        If an empty square ('E') with no adjacent mines is revealed, then change
            it to revealed blank ('B') and all of its adjacent unrevealed squares
            should be revealed recursively.
        
        If an empty square ('E') with at least one adjacent mine is revealed,
            then change it to a digit ('1' to '8') representing the number of
            adjacent mines.
        
        Return the board when no more squares will be revealed.
    

     

    Example 1:

    Input:

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

    Example 2:

    Input:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

     

    Note:

    
        The range of the input matrix's height and width is [1,50].
        The click position will only be an unrevealed square ('M' or 'E'), which
            also means the input board contains at least one clickable square.
        
        The input board won't be a stage when game is over (some mines have been
            revealed).
        
        For simplicity, not mentioned rules should be ignored in this problem. For example, you
            don't need to reveal all the unrevealed mines when the game is over, consider
            any cases that you will win the game or flag any squares.
-----------------

# 1483_Kth_Ancestor_of_a_Tree_Node
# 1483. Kth Ancestor of a Tree Node


-----------------

# 1739_Building_Boxes
# 1739. Building Boxes


-----------------

# 1637_Widest_Vertical_Area_Between_Two_Points_Containing_No_Points
# 1637. Widest Vertical Area Between Two Points Containing No Points


-----------------

# 419_Battleships_in_a_Board
# 419. Battleships in a Board

Given an 2D board, count how many battleships are in it. The battleships are represented with
    'X's, empty slots are represented with '.'s. You may assume the
    following rules:

    
        You receive a valid board, made of only battleships or empty slots.
        Battleships can only be placed horizontally or vertically. In other words, they can only
            be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1
            column), where N can be of any size.
        
        At least one horizontal or vertical cell separates between two battleships - there are
            no adjacent battleships.
        
    

    Example:
    X..X
...X
...X

    In the above board there are 2 battleships.

    Invalid Example:
    ...X
XXXX
...X

    This is an invalid board that you will not receive - as battleships will always have a cell
    separating between them.
    
    Follow up:Could you do it in one-pass, using only O(1) extra memory
        and without modifying the value of the board?
-----------------

# 893_Groups_of_Special-Equivalent_Strings
# 893. Groups of Special-Equivalent Strings

You are given an array A of strings.

    Two strings S and T are special-equivalent if
        after any number of moves, S == T.

    A move consists of choosing two indices i and j with
        i % 2 == j % 2, and swapping S[i] with S[j].

    Now, a group of special-equivalent strings from A is a non-empty
        subset S of A such that any string not in S is not special-equivalent
        with any string in S.

    Return the number of groups of special-equivalent strings from A.
-----------------

# 561_Array_Partition_I
# 561. Array Partition I

Given an array of 2n integers, your task is to group these integers into n
        pairs of integer, say (a1, b1), (a2, b2), ...,
        (an, bn) which makes sum of min(ai, bi) for all
        i from 1 to n as large as possible.
    

    Example 1:
    Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

    

    Note:
    
        n is a positive integer, which is in the range of [1, 10000].
        All the integers in the array will be in the range of [-10000, 10000].
-----------------

# 475_Heaters
# 475. Heaters

Winter is coming! Your first job during the contest is to design a standard heater with fixed
        warm radius to warm all the houses.

    Now, you are given positions of houses and heaters on a horizontal line, find out minimum
        radius of heaters so that all houses could be covered by those heaters.

    So, your input will be the positions of houses and heaters seperately, and your expected
        output will be the minimum radius standard of heaters.

    Note:

    
        Numbers of houses and heaters you are given are non-negative and will not exceed
            25000.
        
        Positions of houses and heaters you are given are non-negative and will not exceed
            10^9.
        
        As long as a house is in the heaters' warm radius range, it can be warmed.
        All the heaters follow your radius standard and the warm radius will the same.
    

     

    Example 1:

    Input: [1,2,3],[2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

     

    Example 2:

    Input: [1,2,3,4],[1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
-----------------

# 1822_Sign_of_the_Product_of_an_Array
# 1822. Sign of the Product of an Array


-----------------

# 1511_Customer_Order_Frequency
# 1511. Customer Order Frequency


-----------------

# 138_Copy_List_with_Random_Pointer
# 138. Copy List with Random Pointer

A linked list is given such that each node contains an additional random pointer which could
        point to any node in the list or null.

    Return a deep copy of the list.

     

    Example 1:

    

    Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.

     

    Note:

    
        You must return the copy of the given head as a reference to the
            cloned list.
-----------------

# 1688_Count_of_Matches_in_Tournament
# 1688. Count of Matches in Tournament


-----------------

# 546_Remove_Boxes
# 546. Remove Boxes

Given several boxes with different colors represented by different positive numbers. 
        You may experience several rounds to remove boxes until there is no box left. Each time you
        can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove
        them and get k*k points.
        Find the maximum points you can get.
    

    Example 1:
        Input:
    [1, 3, 2, 2, 2, 3, 4, 3, 1]

    Output:
    23

    Explanation:
    [1, 3, 2, 2, 2, 3, 4, 3, 1]
----> [1, 3, 3, 4, 3, 1] (3*3=9 points)
----> [1, 3, 3, 3, 1] (1*1=1 points)
----> [1, 1] (3*3=9 points)
----> [] (2*2=4 points)

    

    Note:
        The number of boxes n would not exceed 100.
-----------------

# 1827_Minimum_Operations_to_Make_the_Array_Increasing
# 1827. Minimum Operations to Make the Array Increasing


-----------------

# 764_Largest_Plus_Sign
# 764. Largest Plus Sign

In a 2D grid from (0, 0) to (N-1, N-1), every cell contains a 1,
        except those cells in the given list mines which are 0. What is
        the largest axis-aligned plus sign of 1s contained in the grid? Return the
        order of the plus sign. If there is none, return 0.
    
    
        An "axis-aligned plus sign of 1s of order k" has some center
        grid[x][y] = 1 along with 4 arms of length k-1 going up, down,
        left, and right, and made of 1s. This is demonstrated in the diagrams below.
        Note that there could be 0s or 1s beyond the arms of the plus
        sign, only the relevant area of the plus sign is checked for 1s.
    
    

    Examples of Axis-Aligned Plus Signs of Order k:
    Order 1:
000
010
000

Order 2:
00000
00100
01110
00100
00000

Order 3:
0000000
0001000
0001000
0111110
0001000
0001000
0000000

    

    Example 1:
    Input: N = 5, mines = [[4, 2]]
Output: 2
Explanation:
11111
11111
11111
11111
11011
In the above grid, the largest plus sign can only be order 2.  One of them is marked in bold.

    

    Example 2:
    Input: N = 2, mines = []
Output: 1
Explanation:
There is no plus sign of order 2, but there is of order 1.

    

    Example 3:
    Input: N = 1, mines = [[0, 0]]
Output: 0
Explanation:
There is no plus sign, so return 0.

    

    Note:
    
        N will be an integer in the range [1, 500].
        mines will have length at most 5000.
        mines[i] will be length 2 and consist of integers in the range [0,
            N-1].
        
        (Additionally, programs submitted in C, C++, or C# will be judged with a slightly
            smaller time limit.)
-----------------

# 1369_Get_the_Second_Most_Recent_Activity
# 1369. Get the Second Most Recent Activity


-----------------

# 345_Reverse_Vowels_of_a_String
# 345. Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

    Example 1:

    Input: "hello"
Output: "holle"
-----------------

# 1098_Unpopular_Books
# 1098. Unpopular Books

Table: Books

    +----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| book_id        | int     |
| name           | varchar |
| available_from | date    |
+----------------+---------+
book_id is the primary key of this table.

    Table: Orders

    +----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| order_id       | int     |
| book_id        | int     |
| quantity       | int     |
| dispatch_date  | date    |
+----------------+---------+
order_id is the primary key of this table.
book_id is a foreign key to the Books table.

     

    Write an SQL query that reports the books that have sold less
        than 10 copies in the last year, excluding books that have been available for less
        than 1 month from today. Assume today is 2019-06-23.

    The query result format is in the following example:

    Books table:
+---------+--------------------+----------------+
| book_id | name               | available_from |
+---------+--------------------+----------------+
| 1       | "Kalila And Demna" | 2010-01-01     |
| 2       | "28 Letters"       | 2012-05-12     |
| 3       | "The Hobbit"       | 2019-06-10     |
| 4       | "13 Reasons Why"   | 2019-06-01     |
| 5       | "The Hunger Games" | 2008-09-21     |
+---------+--------------------+----------------+

Orders table:
+----------+---------+----------+---------------+
| order_id | book_id | quantity | dispatch_date |
+----------+---------+----------+---------------+
| 1        | 1       | 2        | 2018-07-26    |
| 2        | 1       | 1        | 2018-11-05    |
| 3        | 3       | 8        | 2019-06-11    |
| 4        | 4       | 6        | 2019-06-05    |
| 5        | 4       | 5        | 2019-06-20    |
| 6        | 5       | 9        | 2009-02-02    |
| 7        | 5       | 8        | 2010-04-13    |
+----------+---------+----------+---------------+

Result table:
+-----------+--------------------+
| book_id   | name               |
+-----------+--------------------+
| 1         | "Kalila And Demna" |
| 2         | "28 Letters"       |
| 5         | "The Hunger Games" |
+-----------+--------------------+
-----------------

# 797_All_Paths_From_Source_to_Target
# 797. All Paths From Source to Target

Given a directed, acyclic graph of N nodes.  Find all possible paths from
        node 0 to node N-1, and return them in any order.

    The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1. 
        graph[i] is a list of all nodes j for which the edge (i, j) exists.

    Example:
Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

    Note:

    
        The number of nodes in the graph will be in the range [2, 15].
        You can print different paths in any order, but you should keep the order of nodes
            inside one path.
-----------------

# 1542_Find_Longest_Awesome_Substring
# 1542. Find Longest Awesome Substring


-----------------

# 1407_Top_Travellers
# 1407. Top Travellers


-----------------

# 1622_Fancy_Sequence
# 1622. Fancy Sequence


-----------------

# 721_Accounts_Merge
# 721. Accounts Merge

Given a list accounts, each element accounts[i] is a list of
        strings, where the first element accounts[i][0] is a name, and the rest
        of the elements are emails representing emails of the account.

    Now, we would like to merge these accounts. Two accounts definitely belong to the same person
        if there is some email that is common to both accounts. Note that even if two accounts have
        the same name, they may belong to different people as people could have the same name. A
        person can have any number of accounts initially, but all of their accounts definitely have
        the same name.

    After merging the accounts, return the accounts in the following format: the first element of
        each account is the name, and the rest of the elements are emails in sorted order.
        The accounts themselves can be returned in any order.

    Example 1:
    Input:
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation:
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

    

    Note:
    The length of accounts will be in the range [1, 1000].
    The length of accounts[i] will be in the range [1, 10].
    The length of accounts[i][j] will be in the range [1, 30].
-----------------

# 418_Sentence_Screen_Fitting
# 418. Sentence Screen Fitting

Given a rows x cols screen and a sentence represented by a list of
        non-empty words, find how many times the given sentence can be fitted on the
        screen.
    

    Note:
    
        A word cannot be split into two lines.
        The order of words in the sentence must remain unchanged.
        Two consecutive words in a line must be separated by a single space.
        Total words in the sentence won't exceed 100.
        Length of each word is greater than 0 and won't exceed 10.
        1 ≤ rows, cols ≤ 20,000.
    
    

    
        Example 1:
    Input:
rows = 2, cols = 8, sentence = ["hello", "world"]

Output:
1

Explanation:
hello---
world---

The character '-' signifies an empty space on the screen.

    

    
        Example 2:
    Input:
rows = 3, cols = 6, sentence = ["a", "bcd", "e"]

Output:
2

Explanation:
a-bcd-
e-a---
bcd-e-

The character '-' signifies an empty space on the screen.

    

    
        Example 3:
    Input:
rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]

Output:
1

Explanation:
I-had
apple
pie-I
had--

The character '-' signifies an empty space on the screen.
-----------------

# 1599_Maximum_Profit_of_Operating_a_Centennial_Wheel
# 1599. Maximum Profit of Operating a Centennial Wheel


-----------------

# 1278_Palindrome_Partitioning_III
# 1278. Palindrome Partitioning III


-----------------

# 532_K-diff_Pairs_in_an_Array
# 532. K-diff Pairs in an Array

Given an array of integers and an integer k, you need to find the number of
        unique k-diff pairs in the array. Here a k-diff pair is defined as an integer
        pair (i, j), where i and j are both numbers in the array and their absolute difference is
        k.
    

    Example 1:
    Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).Although we have two 1s in the input, we should only return the number of unique pairs.

    

    Example 2:
    Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).

    

    Example 3:
    Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).

    

    Note:
    
        The pairs (i, j) and (j, i) count as the same pair.
        The length of the array won't exceed 10,000.
        All the integers in the given input belong to the range: [-1e7, 1e7].
-----------------

# 1382_Balance_a_Binary_Search_Tree
# 1382. Balance a Binary Search Tree


-----------------

# 1170_Compare_Strings_by_Frequency_of_the_Smallest_Character
# 1170. Compare Strings by Frequency of the Smallest Character

Let's define a function f(s) over a non-empty string s, which
        calculates the frequency of the smallest character in s. For example, if
        s = "dcce" then f(s) = 2 because the smallest character
        is "c" and its frequency is 2.

    Now, given string arrays queries and words, return an integer
        array answer, where each answer[i] is the number of words
        such that f(queries[i]) < f(W), where W is
        a word in words.

     
    Example 1:

    Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").

    Example 2:

    Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").

     
    Constraints:

    
        1 <= queries.length <= 2000
        1 <= words.length <= 2000
        1 <= queries[i].length, words[i].length <= 10
        queries[i][j], words[i][j] are English lowercase letters.
-----------------

# 1775_Equal_Sum_Arrays_With_Minimum_Number_of_Operations
# 1775. Equal Sum Arrays With Minimum Number of Operations


-----------------

# 1617_Count_Subtrees_With_Max_Distance_Between_Cities
# 1617. Count Subtrees With Max Distance Between Cities


-----------------

# 1619_Mean_of_Array_After_Removing_Some_Elements
# 1619. Mean of Array After Removing Some Elements


-----------------

# 719_Find_K-th_Smallest_Pair_Distance
# 719. Find K-th Smallest Pair Distance

Given an integer array, return the k-th smallest distance among all the pairs. The
        distance of a pair (A, B) is defined as the absolute difference between A and B. 

    Example 1:
    Input:
nums = [1,3,1]
k = 1
Output: 0
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

    

    Note:
    
        2 <= len(nums) <= 10000.
        0 <= nums[i] < 1000000.
        1 <= k <= len(nums) * (len(nums) - 1) / 2.
-----------------

# 708_Insert_into_a_Cyclic_Sorted_List
# 708. Insert into a Cyclic Sorted List

Given a node from a cyclic linked list which is sorted in ascending order, write a function
        to insert a value into the list such that it remains a cyclic sorted list. The given node
        can be a reference to any single node in the list, and may not be necessarily the
        smallest value in the cyclic list.

    If there are multiple suitable places for insertion, you may choose any place to insert the
        new value. After the insertion, the cyclic list should remain sorted.

    If the list is empty (i.e., given node is null), you should create a new single
        cyclic list and return the reference to that single node. Otherwise, you should return the
        original given node.

    The following example may help you understand the problem better:

     

    
        
        In the figure above, there is a cyclic sorted list of three elements. You are given a
            reference to the node with value 3, and we need to insert 2 into the list.
        
    

     

    
        The new node should insert between node 1 and node 3. After the insertion, the list
            should look like this, and we should still return node 3.
-----------------

# 698_Partition_to_K_Equal_Sum_Subsets
# 698. Partition to K Equal Sum Subsets

Given an array of integers nums and a positive integer k, find
        whether it's possible to divide this array into k non-empty subsets whose
        sums are all equal.

     

    Example 1:

    Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

     

    Note:

    
        1 <= k <= len(nums) <= 16.
        0 < nums[i] < 10000.
-----------------

# 1512_Number_of_Good_Pairs
# 1512. Number of Good Pairs


-----------------

# 1631_Path_With_Minimum_Effort
# 1631. Path With Minimum Effort


-----------------

# 1111_Maximum_Nesting_Depth_of_Two_Valid_Parentheses_Strings
# 1111. Maximum Nesting Depth of Two Valid Parentheses Strings

A string is a valid parentheses string (denoted VPS) if and only if it consists
        of "(" and ")" characters only, and:

    
        It is the empty string, or
        It can be written as AB (A concatenated with B),
            where A and B are VPS's, or
        
        It can be written as (A), where A is a VPS.
        
    

    We can similarly define the nesting depth depth(S) of any VPS
        S as follows:

    
        depth("") = 0
        depth(A + B) = max(depth(A), depth(B)), where A and
            B are VPS's
        
        depth("(" + A + ")") = 1 + depth(A), where
            A is a VPS.
        
    

    For example,  "", "()()",
        and "()(()())" are VPS's (with nesting depths 0, 1, and
        2), and ")(" and "(()" are not VPS's.

     

    Given a VPS seq, split it into two disjoint subsequences A
        and B, such that A and B are VPS's (and A.length
            + B.length = seq.length).

    Now choose any such A and B such that max(depth(A),
        depth(B)) is the minimum possible value.

    Return an answer array (of length seq.length) that encodes such a choice
        of A and B:  answer[i] = 0 if
        seq[i] is part of A, else answer[i] = 1.  Note
        that even though multiple answers may exist, you may return any of them.

     
    Example 1:

    Input: seq = "(()())"
Output: [0,1,1,1,1,0]

    Example 2:

    Input: seq = "()(())()"
Output: [0,0,0,1,1,0,1,1]

     
    Constraints:

    
        1 <= seq.size <= 10000
-----------------

# 261_Graph_Valid_Tree
# 261. Graph Valid Tree

Given n nodes labeled from 0 to n-1 and a list of
        undirected edges (each edge is a pair of nodes), write a function to check whether these
        edges make up a valid tree.

    Example 1:

    Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true

    Example 2:

    Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false

    Note: you can assume that no duplicate edges will appear in edges. Since
        all edges are undirected, [0,1] is the same as [1,0] and thus will
        not appear together in edges.
-----------------

# 288_Unique_Word_Abbreviation
# 288. Unique Word Abbreviation

An abbreviation of a word follows the form <first letter><number><last letter>.
        Below are some examples of word abbreviations:

    a) it                      --> it    (no abbreviation)

     1
     ↓
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
     ↓   ↓    ↓    ↓  ↓
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
     ↓   ↓    ↓
d) l|ocalizatio|n          --> l10n

    Assume you have a dictionary and given a word, find whether its abbreviation is unique in the
        dictionary. A word's abbreviation is unique if no other word from the dictionary
        has the same abbreviation.

    Example:

    Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true
-----------------

# 1066_Campus_Bikes_II
# 1066. Campus Bikes II

On a campus represented as a 2D grid, there are N workers and M
        bikes, with N <= M. Each worker and bike is a 2D coordinate on this grid.
    

    We assign one unique bike to each worker so that the sum of the Manhattan distances between
        each worker and their assigned bike is minimized.

    The Manhattan distance between two points p1 and p2 is Manhattan(p1,
        p2) = |p1.x - p2.x| + |p1.y - p2.y|.

    Return the minimum possible sum of Manhattan distances between each worker and their assigned
        bike.

     

    Example 1:

    

    Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
Output: 6
Explanation: 
We assign bike 0 to worker 0, bike 1 to worker 1. The Manhattan distance of both assignments is 3, so the output is 6.

    Example 2:

    

    Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
Output: 4
Explanation: 
We first assign bike 0 to worker 0, then assign bike 1 to worker 1 or worker 2, bike 2 to worker 2 or worker 1. Both assignments lead to sum of the Manhattan distances as 4.

     

    Note:

    
        0 <= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] < 1000
        
        All worker and bike locations are distinct.
        1 <= workers.length <= bikes.length <= 10
-----------------

# 1146_Snapshot_Array
# 1146. Snapshot Array

Implement a SnapshotArray that supports the following interface:

    
        SnapshotArray(int length) initializes an array-like data structure with the
            given length.  Initially, each element equals 0.
        
        void set(index, val) sets the element at the given index to be
            equal to val.
        
        int snap() takes a snapshot of the array and returns the
            snap_id: the total number of times we called snap() minus
            1.
        
        int get(index, snap_id) returns the value at the given
            index, at the time we took the snapshot with the given snap_id
        
    

     
    Example 1:

    Input: ["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]
Output: [null,null,0,null,5]
Explanation: 
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5

     
    Constraints:

    
        1 <= length <= 50000
        At most 50000 calls will be made to set,
            snap, and get.
        
        0 <= index < length
        0 <= snap_id < (the total number of times we call snap())
        
        0 <= val <= 10^9
-----------------

# 1591_Strange_Printer_II
# 1591. Strange Printer II


-----------------

# 835_Image_Overlap
# 835. Image Overlap

Two images A and B are given, represented as binary, square
        matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

    We translate one image however we choose (sliding it left, right, up, or down any number of
        units), and place it on top of the other image.  After, the overlap of this
        translation is the number of positions that have a 1 in both images.

    (Note also that a translation does not include any kind of rotation.)

    What is the largest possible overlap?

    Example 1:

    Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.

    Notes: 

    
        1 <= A.length = A[0].length = B.length = B[0].length <= 30
        0 <= A[i][j], B[i][j] <= 1
-----------------

# 898_Bitwise_ORs_of_Subarrays
# 898. Bitwise ORs of Subarrays

We have an array A of non-negative integers.

    For every (contiguous) subarray B = [A[i], A[i+1], ..., A[j]] (with i
        <= j), we take the bitwise OR of all the elements in B, obtaining a
        result A[i] | A[i+1] | ... | A[j].

    Return the number of possible results.  (Results that occur more than once are only
        counted once in the final answer.)
-----------------

# 1160_Find_Words_That_Can_Be_Formed_by_Characters
# 1160. Find Words That Can Be Formed by Characters

You are given an array of strings words and a
        string chars.

    A string is good if it can be formed by characters from
        chars (each character can only be used once).

    Return the sum of lengths of all good strings in words.

     

    Example 1:

    Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

    Example 2:

    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

     

    Note:

    
        1 <= words.length <= 1000
        1 <= words[i].length, chars.length <= 100
        All strings contain lowercase English letters only.
-----------------

# 1272_Remove_Interval
# 1272. Remove Interval


-----------------

# 1692_Count_Ways_to_Distribute_Candies
# 1692. Count Ways to Distribute Candies


-----------------

# 1463_Cherry_Pickup_II
# 1463. Cherry Pickup II


-----------------

# 1783_Grand_Slam_Titles
# 1783. Grand Slam Titles


-----------------

# 923_3Sum_With_Multiplicity
# 923. 3Sum With Multiplicity

Given an integer array A, and an integer target, return the number
        of tuples i, j, k  such that i < j < k and A[i]
            + A[j] + A[k] == target.

    As the answer can be very large, return it modulo 10^9 + 7.
    

     

    Example 1:

    Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (A[i], A[j], A[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
-----------------

# 1844_Replace_All_Digits_with_Characters
# 1844. Replace All Digits with Characters


-----------------

# 287_Find_the_Duplicate_Number
# 287. Find the Duplicate Number

Given an array nums containing n + 1 integers where each integer is between 1
        and n (inclusive), prove that at least one duplicate number must exist. Assume that
        there is only one duplicate number, find the duplicate one.

    Example 1:

    Input: [1,3,4,2,2]
Output: 2

    Example 2:

    Input: [3,1,3,4,2]
Output: 3

    Note:

    
        You must not modify the array (assume the array is read only).
        You must use only constant, O(1) extra space.
        Your runtime complexity should be less than O(n2).
        There is only one duplicate number in the array, but it could be repeated more than
            once.
-----------------

# 149_Max_Points_on_a_Line
# 149. Max Points on a Line

Given n points on a 2D plane, find the maximum number of points that lie on the same
        straight line.

    Example 1:

    Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4

    Example 2:

    Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6

    NOTE: input types have been changed on April 15, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 1506_Find_Root_of_N-Ary_Tree
# 1506. Find Root of N-Ary Tree


-----------------

# 859_Buddy_Strings
# 859. Buddy Strings

Given two strings A and B of lowercase letters, return true
        if and only if we can swap two letters in A so that the result equals
        B.

     

    Example 1:
-----------------

# 786_K-th_Smallest_Prime_Fraction
# 786. K-th Smallest Prime Fraction

A sorted list A contains 1, plus some number of primes.  Then, for every p
        < q in the list, we consider the fraction p/q.

    What is the K-th smallest fraction considered?  Return your answer as an
        array of ints, where answer[0] = p and answer[1] = q.

    Examples:
Input: A = [1, 2, 3, 5], K = 3
Output: [2, 5]
Explanation:
The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, 2/3.
The third fraction is 2/5.

Input: A = [1, 7], K = 1
Output: [1, 7]

    Note:

    
        A will have length between 2 and 2000.
        Each A[i] will be between 1 and 30000.
        K will be between 1 and A.length * (A.length - 1) /
            2.
-----------------

# 1575_Count_All_Possible_Routes
# 1575. Count All Possible Routes


-----------------

# 1033_Moving_Stones_Until_Consecutive
# 1033. Moving Stones Until Consecutive

Three stones are on a number line at positions a, b, and
        c.

    Each turn, you pick up a stone at an endpoint (ie., either the lowest or highest position
        stone), and move it to an unoccupied position between those endpoints.  Formally,
        let's say the stones are currently at positions x, y, z with x < y
            < z.  You pick up the stone at either position x or position
        z, and move that stone to an integer position k, with x <
            k < z and k != y.

    The game ends when you cannot make any more moves, ie. the stones are in consecutive
        positions.

    When the game ends, what is the minimum and maximum number of moves that you could have made? 
        Return the answer as an length 2 array: answer = [minimum_moves, maximum_moves]
    

     

    Example 1:

    Input: a = 1, b = 2, c = 5
Output: [1,2]
Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.
-----------------

# 49_Group_Anagrams
# 49. Group Anagrams

Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

    Note:

    
        All inputs will be in lowercase.
        The order of your output does not matter.
-----------------

# 1516_Move_Sub-Tree_of_N-Ary_Tree
# 1516. Move Sub-Tree of N-Ary Tree


-----------------

# 734_Sentence_Similarity
# 734. Sentence Similarity

Given two sentences words1, words2 (each represented as an array of strings),
        and a list of similar word pairs pairs, determine if two sentences are similar.
    

    For example, "great acting skills" and "fine drama talent" are similar,
        if the similar word pairs are pairs = [["great", "fine"], ["acting","drama"],
            ["skills","talent"]].

    Note that the similarity relation is not transitive. For example, if "great" and
        "fine" are similar, and "fine" and "good" are similar, "great"
        and "good" are not necessarily similar.

    However, similarity is symmetric. For example, "great" and "fine" being
        similar is the same as "fine" and "great" being similar.

    Also, a word is always similar with itself. For example, the sentences words1 = ["great"],
        words2 = ["great"], pairs = [] are similar, even though there are no
        specified similar word pairs.

    Finally, sentences can only be similar if they have the same number of words. So a sentence
        like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].
    

    Note:

    
        The length of words1 and words2 will not exceed
            1000.
        
        The length of pairs will not exceed 2000.
        The length of each pairs[i] will be 2.
        The length of each words[i] and pairs[i][j] will be in the
            range [1, 20].
-----------------

# 1849_Splitting_a_String_Into_Descending_Consecutive_Values
# 1849. Splitting a String Into Descending Consecutive Values


-----------------

# 1099_Two_Sum_Less_Than_K
# 1099. Two Sum Less Than K

Given an array A of integers and integer K, return the maximum
        S such that there exists i < j with A[i] + A[j] =
            S and S < K. If no i, j exist satisfying this
        equation, return -1.

     

    Example 1:

    Input: A = [34,23,1,24,75,33,54,8], K = 60
Output: 58
Explanation: 
We can use 34 and 24 to sum 58 which is less than 60.

    Example 2:

    Input: A = [10,20,30], K = 15
Output: -1
Explanation: 
In this case it's not possible to get a pair sum less that 15.

     

    Note:

    
        1 <= A.length <= 100
        1 <= A[i] <= 1000
        1 <= K <= 2000
-----------------

# 883_Projection_Area_of_3D_Shapes
# 883. Projection Area of 3D Shapes

On a N * N grid, we place some 1 * 1 * 1 cubes
        that are axis-aligned with the x, y, and z axes.

    Each value v = grid[i][j] represents a tower of v cubes
        placed on top of grid cell (i, j).

    Now we view the projection of these cubes onto the xy, yz, and zx
        planes.

    A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional
        plane. 

    Here, we are viewing the "shadow" when looking at the cubes from the top, the
        front, and the side.

    Return the total area of all three projections.
-----------------

# 1389_Create_Target_Array_in_the_Given_Order
# 1389. Create Target Array in the Given Order


-----------------

# 1049_Last_Stone_Weight_II
# 1049. Last Stone Weight II

We have a collection of rocks, each rock has a positive integer weight.

    Each turn, we choose any two rocks and smash them together. 
        Suppose the stones have weights x and y with x <=
            y.  The result of this smash is:

    
        If x == y, both stones are totally destroyed;
        If x != y, the stone of weight x is totally destroyed, and the
            stone of weight y has new weight y-x.
        
    

    At the end, there is at most 1 stone left.  Return the smallest
        possible weight of this stone (the weight is 0 if there are no stones left.)
    

     

    Example 1:

    Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We can combine 2 and 4 to get 2 so the array converts to [2,7,1,8,1] then,
we can combine 7 and 8 to get 1 so the array converts to [2,1,1,1] then,
we can combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we can combine 1 and 1 to get 0 so the array converts to [1] then that's the optimal value.

     

    Note:

    
        1 <= stones.length <= 30
        1 <= stones[i] <= 100
-----------------

# 222_Count_Complete_Tree_Nodes
# 222. Count Complete Tree Nodes

Given a complete binary tree, count the number of nodes.

    Note: 

    Definition of a complete binary tree from Wikipedia:
        In a complete binary tree every level, except possibly the last, is completely filled, and
        all nodes in the last level are as far left as possible. It can have between 1 and
        2h nodes inclusive at the last level h.

    Example:

    Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
-----------------

# 1841_League_Statistics
# 1841. League Statistics


-----------------

# 1853_Convert_Date_Format
# 1853. Convert Date Format


-----------------

# 902_Numbers_At_Most_N_Given_Digit_Set
# 902. Numbers At Most N Given Digit Set

We have a sorted set of digits D, a non-empty subset of {'1','2','3','4','5','6','7','8','9'}. 
        (Note that '0' is not included.)

    Now, we write numbers using these digits, using each digit as many times as we want. 
        For example, if D = {'1','3','5'}, we may write numbers
        such as '13', '551', '1351315'.

    Return the number of positive integers that can be written (using the digits of
        D) that are less than or equal to N.

     

    Example 1:

    Input: D = ["1","3","5","7"], N = 100
Output: 20
Explanation: 
The 20 numbers that can be written are:
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
-----------------

# 242_Valid_Anagram
# 242. Valid Anagram

Given two strings s and t , write a function to determine if
        t is an anagram of s.

    Example 1:

    Input: s = "anagram", t = "nagaram"
Output: true

    Example 2:

    Input: s = "rat", t = "car"
Output: false

    Note:
        You may assume the string contains only lowercase alphabets.

    Follow up:
        What if the inputs contain unicode characters? How would you adapt your solution to such
        case?
-----------------

# 553_Optimal_Division
# 553. Optimal Division

Given a list of positive integers, the adjacent integers will perform the float
        division. For example, [2,3,4] -> 2 / 3 / 4.

    However, you can add any number of parenthesis at any position to change the priority of
        operations. You should find out how to add parenthesis to get the maximum result, and
        return the corresponding expression in string format. Your expression should NOT contain
            redundant parenthesis.

    Example:
    Input: [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation:
1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant, since they don't influence the operation priority. So you should return "1000/(100/10/2)".

Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2

    

    Note:
    
        The length of the input array is [1, 10].
        Elements in the given array will be in range [2, 1000].
        There is only one optimal division for each test case.
-----------------

# 971_Flip_Binary_Tree_To_Match_Preorder_Traversal
# 971. Flip Binary Tree To Match Preorder Traversal

Given a binary tree with N nodes, each node has a different value
        from {1, ..., N}.

    A node in this binary tree can be flipped by swapping the left child and the
        right child of that node.

    Consider the sequence of N values reported by a preorder traversal starting
        from the root.  Call such a sequence of N values the voyage of
        the tree.

    (Recall that a preorder traversal of a node means we report the current node's
        value, then preorder-traverse the left child, then preorder-traverse the right child.)

    Our goal is to flip the least number of nodes in the tree so that the voyage
        of the tree matches the voyage we are given.

    If we can do so, then return a list of the values of all nodes flipped.  You
        may return the answer in any order.

    If we cannot do so, then return the list [-1].
-----------------

# 582_Kill_Process
# 582. Kill Process

Given n processes, each process has a unique PID (process id) and its PPID
        (parent process id).

    Each process only has one parent process, but may have one or more children processes. This
        is just like a tree structure. Only one process has PPID that is 0, which means this process
        has no parent process. All the PIDs will be distinct positive integers.

    We use two list of integers to represent a list of processes, where the first list contains
        PID for each process and the second list contains the corresponding PPID. 

    Now given the two lists, and a PID representing a process you want to kill, return a list of
        PIDs of processes that will be killed in the end. You should assume that when a process is
        killed, all its children processes will be killed. No order is required for the final
        answer.

    Example 1:
    Input:
pid =  [1, 3, 10, 5]
ppid = [3, 0, 5, 3]
kill = 5
Output: [5,10]
Explanation:
           3
         /   \
        1     5
             /
            10
Kill 5 will also kill 10.

    

    Note:
    
        The given kill id is guaranteed to be one of the given PIDs.
        n >= 1.
-----------------

# 1731_The_Number_of_Employees_Which_Report_to_Each_Employee
# 1731. The Number of Employees Which Report to Each Employee


-----------------

# 1687_Delivering_Boxes_from_Storage_to_Ports
# 1687. Delivering Boxes from Storage to Ports


