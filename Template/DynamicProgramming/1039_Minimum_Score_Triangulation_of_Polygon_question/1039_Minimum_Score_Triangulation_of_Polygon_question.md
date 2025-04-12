1039_Minimum_Score_Triangulation_of_Polygon
# 1039. Minimum Score Triangulation of Polygon

Given N, consider a convex N-sided polygon with vertices labelled
        A[0], A[i], ..., A[N-1] in clockwise order.

    Suppose you triangulate the polygon into N-2 triangles.  For each triangle,
        the value of that triangle is the product of the labels of the
        vertices, and the total score of the triangulation is the sum of these values over
        all N-2 triangles in the triangulation.

    Return the smallest possible total score that you can achieve with some triangulation of the
        polygon.