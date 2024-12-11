CREATE TABLE TestTable (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255),
    age INTEGER,
    registration_date DATE,
    active BOOLEAN,
    score DECIMAL(5,2)
);

-- Insert test data
INSERT INTO TestTable (name, email, age, registration_date, active, score) VALUES
    ('John Doe', 'john@example.com', 25, '2023-01-15', true, 85.50),
    ('Jane Smith', 'jane@example.com', 30, '2023-02-20', true, 92.75),
    ('Bob Johnson', 'bob@example.com', 45, '2023-03-10', false, 78.25),
    ('Alice Brown', 'alice@example.com', 28, '2023-04-05', true, 88.00),
    ('Charlie Wilson', 'charlie@example.com', 35, '2023-05-12', true, 95.50),
    ('Diana Miller', 'diana@example.com', 42, '2023-06-18', false, 72.25),
    ('Edward Davis', 'edward@example.com', 31, '2023-07-22', true, 89.75),
    ('Fiona Clark', 'fiona@example.com', 29, '2023-08-30', true, 91.00),
    ('George White', 'george@example.com', 38, '2023-09-14', false, 76.50),
    ('Helen Garcia', 'helen@example.com', 33, '2023-10-25', true, 87.25);
