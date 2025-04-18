# 851. Loud and Rich

In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different
        amounts of money, and different levels of quietness.

    For convenience, we'll call the person with label x, simply "person
        x".

    We'll say that richer[i] = [x, y] if person x definitely
        has more money than person y.  Note that richer may
        only be a subset of valid observations.

    Also, we'll say quiet[x] = q if person x has
        quietness q.

    Now, return answer, where answer[x] = y if y is the
        least quiet person (that is, the person y with the smallest value of quiet[y]),
        among all people who definitely have equal to or more money than person
        x.