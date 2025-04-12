1080_Insufficient_Nodes_in_Root_to_Leaf_Paths
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