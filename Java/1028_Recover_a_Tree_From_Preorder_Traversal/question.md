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