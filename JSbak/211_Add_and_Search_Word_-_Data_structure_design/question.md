211_Add_and_Search_Word_-_Data_structure_design
# 211. Add and Search Word - Data structure design

Design a data structure that supports the following two operations:

    void addWord(word)
bool search(word)

    search(word) can search a literal word or a regular expression string containing only letters
        a-z or .. A . means it can represent any one letter.
    

    Example:

    addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

    Note:
        You may assume that all words are consist of lowercase letters a-z.