1034_Coloring_A_Border
# 1034. Coloring A Border

Given a 2-dimensional grid of integers, each value in the grid represents
        the color of the grid square at that location.

    Two squares belong to the same connected component if and only if they have the same
        color and are next to each other in any of the 4 directions.

    The border of a connected component is all the squares in the connected
        component that are either 4-directionally adjacent to a square not in the
        component, or on the boundary of the grid (the first or last row or column).

    Given a square at location (r0, c0) in the grid and a
        color, color the border of the connected component of that square with the
        given color, and return the final grid.

     

    Example 1:

    Input: grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3
Output: [[3, 3], [3, 2]]