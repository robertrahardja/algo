1096_Brace_Expansion_II
# 1096. Brace Expansion II

Under a grammar given below, strings can represent a set of lowercase words.  Let's use
        R(expr) to denote the set of words the expression
        represents.

    Grammar can best be understood through simple examples:

    
        Single letters represent a singleton set containing that word.
            
                R("a") = {"a"}
                R("w") = {"w"}
            
        
        When we take a comma delimited list of 2 or more expressions, we take the union of
            possibilities.
            
                R("{a,b,c}") =
                    {"a","b","c"}
                R("{{a,b},{b,c}}") =
                    {"a","b","c"} (notice the final set
                    only contains each word at most once)
                
            
        
        When we concatenate two expressions, we take the set of possible concatenations between
            two words where the first word comes from the first expression and the second word comes
            from the second expression.
            
                R("{a,b}{c,d}") = {"ac","ad","bc","bd"}
                
                R("a{b,c}{d,e}f{g,h}") = {"abdfg", "abdfh",
                    "abefg", "abefh", "acdfg", "acdfh",
                    "acefg", "acefh"}
            
        
    

    Formally, the 3 rules for our grammar:

    
        For every lowercase letter x, we have R(x) = {x}
        For expressions e_1, e_2, ... , e_k with k >= 2, we
            have R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
        For expressions e_1 and e_2, we have R(e_1 + e_2) =
            {a + b for (a, b) in R(e_1) × R(e_2)}, where + denotes
            concatenation, and × denotes the cartesian product.
        
    

    Given an expression representing a set of words under the given grammar, return
        the sorted list of words that the expression represents.