Java Application-> JDBC-> DB

JDBC is a low level api to connect to DB, and do data handling operations.

Java apps with DB

1. JDBC
2. Data access services
3. Data access objects (DAO)

--

Business Services <-> Data Services <-> JDBC <-> DB

-- JPA is responsible for Data Access Service
------------------------ Read operations: Desired result: Collection of Employee instances

1. Prepare SQL query
2. Run the query
3. Loop through the result set
4. Create a new instance of Employee per row
5. Extract each column and assign to new instance
6. Put instance in a collection
7. Handle errors

--------------------- Write operations Employee object added/ updated as a row in Employee table

1. Get all attributes of the instance
2. Prepare a SQL query
3. Manage keys
4. Run the query
5. Manage transactions
6. Handle errors

---------- Mapping class member variables into table

Employee table
emp_id | fname | lname | dept | address | manager

Address Table
id | address | city | pincode

---- Employee table contains detail of a Employee class, having reference to different other tables , like address table/employee table(manager), to optimise the table architecture, this is known as normalisation.

-- to manage this relational mapping, Employee class would look like

class Employee{
String fname;
String lname;
String dept;
Address address;// refer to the address table-> primary key
Employee manager;// refer to the manager employee-> primary key
}

Hibernate

1. Add a library to your class path.
2. Map your classes to databse table.
3. Map your member variables to columns.
4. Use APIs to save/update/retrieve

-- Java Persistence API (JPA)

1. JPA is a specification for accessing, persisting, and managing data between Java objects and a relational database.
2. It defines a set of interfaces and annotations that must be implemented by any compliant persistence provider.
3. JPA is part of the Java EE (Enterprise Edition) specification, but it can also be used in Java SE (Standard Edition) applications.

--------------Hibernate

1. Hibernate is a popular open-source framework that provides an implementation of the JPA specification.
2. It is a robust, high-performance object-relational mapping (ORM) tool for Java.
3. Hibernate extends JPA with additional features and capabilities, such as caching, custom SQL, and more.

--------------How They Work Together

1. When you use JPA in your application, you write code against the JPA interfaces and use the JPA annotations.
2. Hibernate, as the JPA provider, will provide the underlying implementation for these interfaces and manage the database interactions.

Advantages of JPA

1. Developer productivity-> it minimises alot of reducdant work with JDBC
2. DB consistency-> for multiple different DB, PostgresSQL/MYSQL , it maintain consistency with the API
3. Caching & Perfomance -> JPA cache the data , and only make write calles to the DB when it is necessary , thus optimise the performance.
