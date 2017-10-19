--Answer To Clue 1--
SELECT name, region, population, code FROM country  WHERE region='Southern Europe' ORDER BY population;--
--HOLY See for clue 1--

--Answer To Clue 2--
SELECT * FROM countrylanguage WHERE countrycode = 'VAT';
--Italian--

--Answer To Clue 3 --
SELECT country.name, country.code, country.region  From country INNER JOIN countrylanguage AS lang ON country.code=lang.countrycode WHERE lang.language = 'Italian' AND lang.percentage=100
--San Marino, SMR--

--Answer To Clue 4--
SELECT * FROM city WHERE countrycode='SMR';
--Serravalle--

--Answer To Clue 5--
SELECT * FROM city WHERE name LIKE 'Serra%';
--SERRA, BRA--

--Answer To Clue 6--
SELECT capital FROM country WHERE code='BRA';
SELECT name FROM country WHERE id=211;
--Brasilia--

--ANSWER TO Clue 7, 8--
SELECT * FROM city WHERE population=91084;
--Santa Monica--