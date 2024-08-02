public class JPAStarter {
public static void main(String[] args) {
// Create an Employee object
Employee emp = new Employee("John Doe", 123456789,EmployeeType.CONTRACTOR);
Employee emp2 = new Employee("Jane Doe", 123456781,EmployeeType.FULLTIME);

        // Create an EntityManagerFactory
        EntityManagerFactory entityManagerFactory = null;
        EntityManager entityManager = null;

        try {
            entityManagerFactory = Persistence.createEntityManagerFactory("myApp");
            // Create an EntityManager
            entityManager = entityManagerFactory.createEntityManager();
            // Get the transaction
            EntityTransaction transaction = entityManager.getTransaction();
            // Begin the transaction
            transaction.begin();
            // Persist the Employee object,
            // Create
            System.out.println("creating a new record in the DB");
            entityManager.persist(emp);
            entityManager.persist((emp2));
            // Commit the transaction
            transaction.commit();
            // READ
            System.out.println("reading a record from the DB");
            Employee employee=entityManager.find(Employee.class,1);
            System.out.println(employee);
            System.out.println("updating employee type record to the DB");
            employee.setType(EmployeeType.PAYROLL_EXEMPT);
            transaction.begin();
            entityManager.persist(employee);
            transaction.commit();
            employee=entityManager.find(Employee.class,1);
            System.out.println(employee);
            System.out.println("Deleting the record");
            // to delete the record,
            transaction.begin();
            entityManager.remove(employee);
            transaction.commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the EntityManager
            if (entityManager != null) {
                entityManager.close();
            }
            // Close the EntityManagerFactory
            if (entityManagerFactory != null) {
                entityManagerFactory.close();
            }
        }
    }

}

-- to manage

1. configure entitymanagerFactory(passing persistence unit name)
2. configure the entityManager to manage crud opt
3. to read we dont need to do any transaction
4. to update/create/delete , create an instance of the EntityTransaction, from EntityManager.
5. transaction.begin(), entitymanager.persist(data),entityManager.commit();
