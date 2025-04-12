879_Profitable_Schemes
# 879. Profitable Schemes

There are G people in a gang, and a list of various crimes they could commit.

    The i-th crime generates a profit[i] and requires
        group[i] gang members to participate.

    If a gang member participates in one crime, that member can't participate in another
        crime.

    Let's call a profitable scheme any subset of these crimes that
        generates at least P profit, and the total number of gang members participating
        in that subset of crimes is at most G.

    How many schemes can be chosen?  Since the answer may be very large, return
        it modulo 10^9 + 7.

     

    Example 1:

    Input: G = 5, P = 3, group = [2,2], profit = [2,3]
Output: 2
Explanation: 
To make a profit of at least 3, the gang could either commit crimes 0 and 1, or just crime 1.
In total, there are 2 schemes.