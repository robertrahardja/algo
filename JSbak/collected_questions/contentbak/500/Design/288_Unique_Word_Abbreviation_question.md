288_Unique_Word_Abbreviation
# 288. Unique Word Abbreviation

An abbreviation of a word follows the form <first letter><number><last letter>.
        Below are some examples of word abbreviations:

    a) it                      --> it    (no abbreviation)

     1
     ↓
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
     ↓   ↓    ↓    ↓  ↓
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
     ↓   ↓    ↓
d) l|ocalizatio|n          --> l10n

    Assume you have a dictionary and given a word, find whether its abbreviation is unique in the
        dictionary. A word's abbreviation is unique if no other word from the dictionary
        has the same abbreviation.

    Example:

    Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true