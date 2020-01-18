problem0: "select * from students"

Basic Queries:

1- SELECT Name
   FROM students;

2- SELECT *
   FROM students
   WHERE Age>30

3- SELECT Name
   FROM students
   WHERE Age=30 AND Gender='F'

4- SELECT Points
   FROM students
   WHERE name= "Alex"

5- INSERT INTO students(ID, Name, Age, Gender, Points)
   VALUES (8, 'Abdulkader', 28, 'M', 600)

6- UPDATE students SET Points=400 WHERE ID=2

7- UPDATE students SET Points=100 WHERE ID=1

8- UPDATED!!

9- COMMITED!!



Creating Table:

CREATE TABLE graduates (ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name Text Not Null Unique, Age INTEGER, Gender TEXT, Points INTEGER, Graduation TEXT)

1- INSERT INTO graduates (ID, Name, Age, Gender, Points)
SELECT ID, Name, Age, Gender, Points
FROM students where ID=4

2- UPDATE graduates SET Graduation="08/09/2018" WHERE ID=4

3- DELETE FROM students WHERE ID=4

4- COMMITED !!


