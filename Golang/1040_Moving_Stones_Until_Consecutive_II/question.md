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