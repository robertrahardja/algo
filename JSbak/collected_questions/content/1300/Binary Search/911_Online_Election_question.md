911_Online_Election
# 911. Online Election

In an election, the i-th vote was cast for persons[i] at time
        times[i].

    Now, we would like to implement the following query function: TopVotedCandidate.q(int
        t) will return the number of the person that was leading the election at time
        t.  

    Votes cast at time t will count towards our query.  In the case of a tie,
        the most recent vote (among tied candidates) wins.