1078_Occurrences_After_Bigram
# 1078. Occurrences After Bigram

Given words first and second, consider occurrences in
        some text of the form "first second third", where
        second comes immediately after first, and third comes
        immediately after second.

    For each such occurrence, add "third" to the answer, and return the
        answer.

     

    Example 1:

    Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]