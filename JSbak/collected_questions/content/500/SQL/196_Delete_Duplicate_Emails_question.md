196_Delete_Duplicate_Emails
# 196. Delete Duplicate Emails

Write a SQL query to delete all duplicate email entries in a table named
        Person, keeping only unique emails based on its smallest Id.

    +----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.

    For example, after running your query, the above Person table should have the
        following rows:

    +----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+

    Note:

    Your output is the whole Person table after executing your sql. Use delete
        statement.