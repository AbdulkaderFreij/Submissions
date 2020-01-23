

"SELECT Name FROM students"

"SELECT * FROM students WHERE Age>30"

"SELECT Name FROM students WHERE Age=30 AND Gender='F'"

"SELECT Points FROM students WHERE name= "Alex""

"INSERT INTO students(ID, Name, Age, Gender, Points) VALUES (8, 'Abdulkader', 28, 'M', 600)"

"UPDATE students SET Points=400 WHERE ID=2"

"UPDATE students SET Points=100 WHERE ID=1"




"CREATE TABLE graduates (ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name Text Not Null Unique, Age INTEGER, Gender TEXT, Points INTEGER, Graduation TEXT Date)"

"INSERT INTO graduates (ID, Name, Age, Gender, Points) SELECT ID, Name, Age, Gender, Points FROM students where ID=4"

"UPDATE graduates SET Graduation="08/09/2018" WHERE ID=4"

"DELETE FROM students WHERE ID=4"




"CREATE TABLE newTable (Name Text Not Null Unique, Company TEXT, Date INTEGER Not Null)"
   
"INSERT INTO newTable (Name, Company, Date) SELECT employees.Name, companies.Name, companies.Date FROM employees JOIN companies ON companies.Name = employees.Company"

"Select Name FROM newTable WHERE Date<2000"

"Select Company FROM employees WHERE Role= "Graphic Designer""
 




"SELECT * FROM students WHERE Points= (SELECT MAX(Points) FROM students)"

"SELECT avg(Points) FROM students"

"SELECT COUNT(*) FROM students WHERE Points=500"

"SELECT * FROM students WHERE Name like "%s%""

"SELECT * FROM students ORDER BY Points DESC;"

