1033_Moving_Stones_Until_Consecutive
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