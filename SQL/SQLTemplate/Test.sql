-- Basic SELECT to verify data
SELECT \* FROM TestTable;

-- Test counting records
SELECT COUNT(\*) as total_records FROM TestTable;

-- Test filtering with WHERE
SELECT name, email
FROM TestTable
WHERE age > 30;

-- Test aggregation functions
SELECT
AVG(age) as average_age,
MIN(age) as youngest,
MAX(age) as oldest,
AVG(score) as average_score
FROM TestTable;

-- Test GROUP BY with HAVING
SELECT
active,
COUNT(_) as count,
AVG(score) as avg_score
FROM TestTable
GROUP BY active
HAVING COUNT(_) > 2;

-- Test ORDER BY
SELECT name, score
FROM TestTable
ORDER BY score DESC
LIMIT 5;

-- Test date operations
SELECT
name,
registration_date,
AGE(CURRENT_DATE, registration_date) as account_age
FROM TestTable;

-- Test string operations
SELECT
name,
LOWER(email) as lowercase_email,
LENGTH(name) as name_length
FROM TestTable;

-- Test conditional logic
SELECT
name,
score,
CASE
WHEN score >= 90 THEN 'Excellent'
WHEN score >= 80 THEN 'Good'
ELSE 'Average'
END as performance
FROM TestTable;

-- Test joins (self-join example finding pairs of users with similar ages)
SELECT
a.name as person1,
b.name as person2,
a.age
FROM TestTable a
JOIN TestTable b ON ABS(a.age - b.age) <= 2
AND a.id < b.id;

-- Test data integrity
SELECT
'Null values' as check_type,
COUNT(_) as issues
FROM TestTable
WHERE name IS NULL
OR email IS NULL
OR age IS NULL
UNION ALL
SELECT
'Invalid ages' as check_type,
COUNT(_)
FROM TestTable
WHERE age < 0 OR age > 120
UNION ALL
SELECT
'Invalid emails' as check_type,
COUNT(\*)
FROM TestTable
WHERE email NOT LIKE '%@%.%';

-- Test statistical analysis
SELECT
ROUND(STDDEV(age)::numeric, 2) as age_stddev,
ROUND(VARIANCE(age)::numeric, 2) as age_variance,
PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY score) as median_score
FROM TestTable;

-- Update test (wrapped in transaction)
BEGIN;
UPDATE TestTable
SET score = score + 5
WHERE score < 80;
-- View the results
SELECT name, score FROM TestTable WHERE score < 85;
ROLLBACK; -- Roll back the changes
