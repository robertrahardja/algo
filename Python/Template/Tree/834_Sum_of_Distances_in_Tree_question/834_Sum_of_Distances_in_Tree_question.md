834_Sum_of_Distances_in_Tree
# 834. Sum of Distances in Tree

An undirected, connected tree with N nodes labelled 0...N-1
        and N-1 edges are given.

    The ith edge connects nodes edges[i][0] and edges[i][1] together.
    

    Return a list ans, where ans[i] is the sum of the distances between
        node i and all other nodes.

    Example 1:

    Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: 
Here is a diagram of the given tree:
  0
 / \
1   2
   /|\
  3 4 5
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.  Hence, answer[0] = 8, and so on.

    Note: 1 <= N <= 10000