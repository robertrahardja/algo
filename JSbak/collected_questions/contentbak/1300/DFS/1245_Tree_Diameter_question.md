1245_Tree_Diameter
# 1245. Tree Diameter

Given an undirected tree, return its diameter: the number of edges in a
        longest path in that tree.

    The tree is given as an array of edges where edges[i] = [u,
        v] is a bidirectional edge between nodes u and v. 
        Each node has labels in the set {0, 1, ..., edges.length}.

     
    Example 1:

    

    Input: edges = [[0,1],[0,2]]
Output: 2
Explanation: 
A longest path of the tree is the path 1 - 0 - 2.

    Example 2:

    

    Input: edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
Output: 4
Explanation: 
A longest path of the tree is the path 3 - 2 - 1 - 4 - 5.

     
    Constraints:

    
        0 <= edges.length < 10^4
        edges[i][0] != edges[i][1]
        0 <= edges[i][j] <= edges.length
        The given edges form an undirected tree.