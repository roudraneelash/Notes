Setup a JPA project with dependencies
Created a persistence context
Created an entity and mapped it to the database using JPA annotations.
Used JPA API to persist an instance to the DB.

-- Persistence context-> Persistence XML-> Persitence Unit->EntityManagerFactory(persistence unit)->create an entity manager to control entities

-- Persistence context

- DB connection string
- User name & password
- SQL related options
- Transaction related options
- Provider configuration- like "automatic" behavior

--Jpa bootstraps an EntityManagerFactory from a persistence unit
--Entity manager is responsible for creating and managing entities
-- code example

entityManagerFactory = Persistence.createEntityManagerFactory("myApp");
// Create an EntityManager
entityManager = entityManagerFactory.createEntityManager();
// Get the transaction
EntityTransaction transaction = entityManager.getTransaction();
// Begin the transaction
transaction.begin();
// Persist the Employee object
entityManager.persist(emp);
// Commit the transaction
transaction.commit();

----------------- JPA Persistence unit
<property name="hibernate.hbm2ddl.auto" value="update"/>
create-drop- it will give a clean slate, i.e it will drop existing table and create a new table , do the transactions, and drop after the jpa context is closed.
create- it will give a clean slate, i.e it will drop existing table and create a new table , do the transactions.
update- it will update the if any new mod is done to the existing table/schema.
validate- it will validate if the entity in the java side is equivalent to the table schema.
