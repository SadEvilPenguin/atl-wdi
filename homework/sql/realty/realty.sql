--1--
SELECT AVG (square_footage) FROM offices;

--2--
SELECT COUNT (*) FROM apartments;

--3--
SELECT * FROM apartments WHERE tenant=NULL;

--4--
SELECT company_name FROM offices;

--5--
SELECT number_of_cubicles, number_of_bathrooms FROM offices WHERE id = 3;

--6--
SELECT * FROM storefronts WHERE kitchen=true;

--7--
SELECT * FROM storefronts WHERE outdoor_seating=true ORDER BY square_footage DESC LIMIT 1;

--8--
SELECT * FROM offices ORDER BY number_of_cubicles LIMIT 1;

--9--
SELECT * FROM offices ORDER BY number_of_cubicles + number_of_bathrooms LIMIT 1;