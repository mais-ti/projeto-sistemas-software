-- Parte 1
CREATE TABLE livros (
    id INTEGER PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100),
    ano INTEGER,
    categoria VARCHAR(50)
);

-- Parte 2
INSERT INTO livros VALUES
(1, 'O Hobbit', 'Tolkien', 1937, 'Fantasia'),
(2, 'Dom Casmurro', 'Machado de Assis', 1899, 'Romance'),
(3, 'Capitães da Areia', 'Jorge Amado', 1937, 'Romance'),
(4, 'Harry Potter', 'J.K. Rowling', 1997, 'Fantasia'),
(5, 'A Revolução dos Bichos', 'George Orwell', 1945, 'Ficção');

-- Parte 3
-- 3.1
SELECT * FROM livros;

-- 3.2
SELECT titulo
FROM livros;

-- 3.3
SELECT titulo, autor
FROM livros;

-- Parte 4
-- 4.1
SELECT *
FROM livros
WHERE ano > 1940;

-- 4.2
SELECT *
FROM livros
WHERE categoria = 'Fantasia';

-- 4.3
SELECT *
FROM livros
WHERE ano > 1900
AND ano < 2000;

-- 4.4
SELECT *
FROM livros
WHERE autor = 'Tolkien'
OR autor = 'George Orwell';

-- Parte 5
-- 5.1
SELECT *
FROM livros
ORDER BY titulo ASC;

-- 5.2
SELECT *
FROM livros
ORDER BY ano ASC;

-- 5.3
SELECT *
FROM livros
ORDER BY ano DESC;


-- Parte 6
-- 6.1
UPDATE livros
SET ano = 1900
WHERE id = 2;

-- 6.2
UPDATE livros
SET categoria = 'Literatura Fantástica'
WHERE id = 4;

-- Parte 7
-- 7.1
DELETE FROM livros
WHERE id = 5;

-- 7.2
SELECT *
FROM livros;

-- Parte 8
DROP TABLE livros;
