-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
    SELECT * 
    FROM authors 
    JOIN books ON authors.id=books.author_id WHERE UPPER(author.name)= UPPER('George R.R. Martin');
-- Find all fields (book and author related) for all books written by Milan Kundera.
    SELECT * FROM authors JOIN books ON authors.id=books.author_id WHERE UPPER(author.name='Milan Kundera';
-- Find all books written by an author from China or the UK.
    SELECT title 
    FROM authors 
    JOIN books ON authors.id=books.author_id 
    WHERE UPPER(author.nationality) = UPPER('China') OR UPPER(author.nationality) = UPPER('United Kingdom');

    SELECT * 
    FROM authors 
    JOIN books ON authors.id=books.author_id 
    WHERE authors.nationl IN ('China', 'UNited Kindgom');

-- Find out how many books Albert Camus wrote.
    SELECT COUNT (title) 
    FROM authors 
    JOIN books ON authors.id=books.author_id 
    WHERE name='Albert Camus';

-- Find out how many books were written by US authors.
    SELECT COUNT (title) 
    FROM authors 
    JOIN books ON authors.id=books.author_id 
    WHERE nationality='United States';
-- Find all books written after 1930 by authors from Argentina.
    SELECT title 
    FROM authors 
    JOIN books ON authors.id=books.author_id 
    WHERE nationality='Argentina' 
    AND publication_date > 1930;
-- Find all books written before 1980 by authors not from the US.
    SELECT * 
    FROM books 
    JOIN authors ON authors.id=books.author_id 
    WHERE NOT nationality='United States' AND publication_date < 1980;
-- Find all authors whose names start with 'J'.
    SELECT * FROM authors WHERE name LIKE 'J%';

    //Allows us to ignore capitalization
    SELECT * FROM authors WHERE name ILIKE 'J%';
-- Find all books whose titles contain 'the'.
    SELECT * FROM books WHERE title LIKE '%the%';
-- Find all authors who have written books with that start with the letter 'N'.
    SELECT * 
    FROM authors 
    JOIN books ON authors.id = books.author_id 
    WHERE title ILIKE 'N%';
