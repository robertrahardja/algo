584_Find_Customer_Referee
# 584. Find Customer Referee

Given a table customer holding customers information and the referee.

    +------+------+-----------+
| id   | name | referee_id|
+------+------+-----------+
|    1 | Will |      NULL |
|    2 | Jane |      NULL |
|    3 | Alex |         2 |
|    4 | Bill |      NULL |
|    5 | Zack |         1 |
|    6 | Mark |         2 |
+------+------+-----------+

    Write a query to return the list of customers NOT referred by the person with id '2'.
    

    For the sample data above, the result is:

    +------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+