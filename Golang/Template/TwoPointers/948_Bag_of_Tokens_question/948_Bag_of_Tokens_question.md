948_Bag_of_Tokens
# 948. Bag of Tokens

You have an initial power P, an initial score of 0 points, and a
        bag of tokens.

    Each token can be used at most once, has a value token[i], and has potentially
        two ways to use it.

    
        If we have at least token[i] power, we may play the token face up, losing
            token[i] power, and gaining 1 point.
        
        If we have at least 1 point, we may play the token face down, gaining
            token[i] power, and losing 1 point.
        
    

    Return the largest number of points we can have after playing any number of tokens.