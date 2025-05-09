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