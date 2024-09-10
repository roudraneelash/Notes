### Core Java Questions

1. What is a bean in java in spring?

- it is used to instantaite object , and it is totally taken care by Spring IOC container, and the obj instance is provided by the IOC container whenever needed.

2. Different scopes of a bean ?

- Singleton: a single instance is created by the Spring container, and is used whenever the bean is requested
- Prototype: everytime a new instance is requested whenever the bean is called.
- Request
- Session
- Application.

3. How to connect with a database.

- by defining the application.properties file, defining the database string uri, username,password,and the jdbc driver props.

4. Advantages of Spring Boot.

- Auto-configuration: it helps us get the spring boot application auto-configured , on the basis of the dependencies.it helps us to get started quickly, without manually configuring the dependecies.
  we just need to add the respective dependencies in pom.xml file. springboot will auto configure the relative dependencies.
- actuator: it provides us the health metrics
- embedded servers: it comes with auto configured default embedded servers,
-

5. By default, which server is enabled for a Spring Boot application?

- tomcat is the default server.
  it comes with spring-boot-starter-web

6. How to exclude the default server.

- we could change that in the pom.xml by adding jetty dependecny

7. What is meant by scope `prototype`?

everytime the bean is requested, the IOC container provides new instace of the object.

8. In `prototype`, how to restrict the instances being created with different classes?
   by injecting/autowiring , and mentioning the specific bean using @qualifier

9. If I have millions of data in the DB, how to use pagination and fetch a limited number of data (expecting an approach other than `PagingAndSortingRepository`)?

10. How to log everything, including SQL statements, in the console in Spring Boot.
    -- by including the logger4j dependency and adding the attributes in the application.properties file.

- for sql, show.sql=true

11. Methods of autowiring in Spring Boot.

- field injection
- constructor injection
- setters injection

12. What is the default autowiring mode?
13. Passing a string value, performing some regex operations, and returning the string. How will you do it? (Assuming this is asked in a Spring Boot flow, explain all the steps.)
    @Service
    public class StringService {
    public String processString(String input) {
    return input.replaceAll("[^a-zA-Z0-9]", ""); // Example: Removing non-alphanumeric characters
    }
    }
    since we put all the business logic in the service layer.
    and call it from the controller layer .

    @GetMapping("/process")
    public ResponseEntity<String> processString(@RequestParam String input) {
    return ResponseEntity.ok(stringService.processString(input));
    }

14. If you need to write a complex query with multiple joins in Spring Boot, what will be your approach?

- we could use to build the query using JPQL.
  @Query("SELECT e FROM Employee e JOIN e.department d WHERE d.name = :departmentName")
  List<Employee> findByDepartment(@Param("departmentName") String departmentName);

15. How to configure Spring Data JPA.
16. Explain the internal logic behind this line of code: `Set<Integer> targetSet = new HashSet<>(sourceList);`.
17. Create a custom comparator to sort `List<Employee>` objects by id, name, city, salary based on the required condition (Asked for the best approach).
18. How to connect with multiple databases for the same application?
    -- add the dependecies
    -- modify the application.properties file
    -- configure the configuration class with the respective db config

### Data Structures & Algorithms (DSA) Questions

1. **Merge two sorted arrays of integers into a single array in O(n) time.**
2. **Find the second largest number in an array of integers in O(n) time.**
3. **Reverse a string in O(n) time.**
4. **Check if a string and list are the same (e.g., `list = ["I","Like", "Apple"]` and `str = "I Like Apple"`) in O(n) time.**
5. **Find duplicates in an array in O(n) time.**
6. **Find the occurrence of an integer in the array in linear time.**
7. **Write a program to sort a given array in O(n log n) time.**
8. **Print the number of occurrences of alphabets in a string using arrays with O(n) time complexity.**
   - **Input:** `s = "abcabcbb"`
   - **Output:** `{a:2, b:4, c:2}`
   - **Input:** `s = "bbbbb"`
   - **Output:** `{b:4}`
9. **Find the first non-repeating character in a string array.**
   - **Input:** `String[] strArr = {"apple", "aappllee", "", "aabbcde", "kettle"};`
   - **Output:** `Character[] chArr = {'a','0','\u0000', 'c','k'}`
10. **Given a linked list of size N, reverse every k nodes in the linked list. If the number of nodes is not a multiple of k, the left-out nodes should be considered as a group and reversed.**
    - **Input:** `LinkedList: 1->2->2->4->5->6->7->8, K=4`
    - **Output:** `4->2->2->1->8->7->6->5`
11. **Add two numbers represented using Linked Lists and store the output in a linked list.**
12. **Check if a Singly Linked List is cyclic or not.**
13. **Calculate the height of a Binary Tree.**
14. **Check if a tree is a Perfect Binary Tree (a tree where every node has either 0 or 2 children).**
15. **Check if a tree is a Complete Binary Tree.**
16. **Print the nodes of the left view and right view of a binary tree.**

### Java 8 & Spring Boot Questions

1. **Features in Java 8 (since you mentioned working with Java 8 version).**
2. **Advantages of lambda expressions.**
3. **Difference between `map` and `flatMap` with working code snippets.**
4. **How will you use lambda expressions for a comparator?**
5. **Ways to convert a `List` to a `Set` and which is the best approach.**
6. **Different ways to get a response format in XML in Spring Boot.**
7. **Different HTTP methods in Spring Boot.**
8. **Autowiring in Spring Boot.**
9. **Use of `@Qualifier` in Spring Boot.**
10. **About projects and tech skills worked on, and challenges faced.**
11. **Which do you think is an achievement in your IT career?**

Let me know if you need further details or more questions!

- implement treeset in decreasing order
  Let's break down each of the questions:

### 1. Program to Provide Integer Pairs that Add up to Target Value

```java
import java.util.HashSet;
import java.util.Set;

public class PairSum {
    public static void main(String[] args) {
        int[] arr = {1, 2, 10, 4, 5, 6, 3, 7};
        int target = 11;
        findPairs(arr, target);
    }

    public static void findPairs(int[] arr, int target) {
        Set<Integer> seenNumbers = new HashSet<>();
        for (int num : arr) {
            int complement = target - num;
            if (seenNumbers.contains(complement)) {
                System.out.println("Pair: (" + complement + ", " + num + ")");
            }
            seenNumbers.add(num);
        }
    }
}
```

### 2. Stream Program for Character Count in a String

```java
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class CharCount {
    public static void main(String[] args) {
        String input = "target";
        Map<Character, Long> charCount = input.chars()
                                              .mapToObj(c -> (char) c)
                                              .collect(Collectors.groupingBy(c -> c, Collectors.counting()));
        System.out.println(charCount);
    }
}
```

### 3. Is Java Pass by Value or Pass by Reference?

Java is strictly "pass-by-value." However, when objects are passed, the reference to the object is passed by value. Therefore, changes to the object’s content will reflect outside the method, but reassigning the object within the method will not affect the original object.

### 4. Singleton Design Pattern and Comparison with Final and Static Classes

A Singleton design pattern ensures that a class has only one instance and provides a global point of access to it.

- **Singleton**: Useful when a single instance of a class is required (e.g., a logging service or a configuration class).
- **Static Class**: Cannot be instantiated; all members are static. Suitable for utility methods.
- **Final Class**: Can be instantiated, but cannot be subclassed.

Singletons are preferred when you need controlled instantiation and lazy initialization.

### 5. Comparable vs Comparator Interface

- **Comparable**: Used for natural ordering of objects (e.g., sorting by name). The class itself implements the `Comparable` interface and overrides the `compareTo` method.

- **Comparator**: Used for custom ordering outside the natural ordering. Implementations are typically provided externally.

**Sorting a Collection:**

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class EmployeeSort {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("John", 30));
        employees.add(new Employee("Jane", 25));

        // Natural order using Comparable
        Collections.sort(employees);

        // Custom order using Comparator
        Collections.sort(employees, new Comparator<Employee>() {
            @Override
            public int compare(Employee e1, Employee e2) {
                return e1.getAge() - e2.getAge();
            }
        });
    }
}

class Employee implements Comparable<Employee> {
    private String name;
    private int age;

    // Constructor, Getters, Setters...

    @Override
    public int compareTo(Employee other) {
        return this.name.compareTo(other.name);
    }
}
```

### 6. How Does Garbage Collection Work in Java?

Garbage Collection in Java is an automatic memory management process that identifies and disposes of objects that are no longer reachable by any reference. The JVM has several garbage collection algorithms like **Serial GC**, **Parallel GC**, **CMS**, and **G1 GC**.

### 7. Return Statement in Finally Block

If a return statement is present in the finally block, it will override any return statement in the try or catch block. However, it's not recommended as it makes the code less readable and predictable.

### 8. Print All Sets of Numbers from an Array Whose Sum Totals 5

```java
import java.util.ArrayList;
import java.util.List;

public class SubsetsWithSum {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 5;
        findSubsets(arr, sum);
    }

    public static void findSubsets(int[] arr, int target) {
        findSubsetsRec(arr, new ArrayList<>(), 0, target);
    }

    private static void findSubsetsRec(int[] arr, List<Integer> currentSet, int index, int target) {
        if (target == 0) {
            System.out.println(currentSet);
            return;
        }
        if (index == arr.length || target < 0) {
            return;
        }
        currentSet.add(arr[index]);
        findSubsetsRec(arr, currentSet, index + 1, target - arr[index]);
        currentSet.remove(currentSet.size() - 1);
        findSubsetsRec(arr, currentSet, index + 1, target);
    }
}
```

### 9. Define an ArrayList with Employee Objects

```java
import java.util.ArrayList;
import java.util.List;

public class EmployeeList {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("John", 50000, "HR"));
        employees.add(new Employee("Jane", 60000, "IT"));

        for (Employee emp : employees) {
            System.out.println(emp);
        }
    }
}

class Employee {
    private String name;
    private double salary;
    private String department;

    // Constructor, Getters, Setters, toString...
}
```

### 10. Theory

**Abstraction & Interface**:

- **Abstraction**: Hides implementation details from the user, showing only the functionality.
- **Interface**: Defines a contract of methods that implementing classes must follow.

**Annotations in Spring Boot**:

- **@SpringBootApplication**: Marks the main class as a Spring Boot application.
- **@RestController**: Combines @Controller and @ResponseBody to handle RESTful requests.
- **@Autowired**: Dependency injection of beans.
- **@Service**: Marks a class as a service layer component.
- **@Repository**: Marks a class as a data repository.

**HashMap vs SynchronizedMap**:

- **HashMap**: Non-thread-safe.
- **SynchronizedMap**: Thread-safe but with lower performance due to synchronized access.

### 11. OOPS Concepts

**OOP Concepts**:

- **Encapsulation**: Wrapping data and methods into a single unit (class).
- **Inheritance**: Mechanism by which a class can inherit features from another class.
- **Polymorphism**: Ability to take multiple forms (e.g., method overloading and overriding).
- **Abstraction**: Hiding complex implementation details and showing only the necessary features.

### 12. Create a User Database Using Encapsulation

```java
public class User {
    private String username;
    private String password;
    private String email;

    // Constructor, Getters, Setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Additional methods
}
```

### 13. Create CRUD Using Rest

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}
```

### 14. URL Links of CRUD Operations

- **Create (POST)**: `/users`
- **Read (GET)**: `/users/{id}`
- **Update (PUT)**: `/users/{id}`
- **Delete (DELETE)**: `/users/{id}`

### 15. Basic Annotations in Spring Boot

- **@SpringBootApplication**: Entry point for Spring Boot application.
- **@RestController**: Handles RESTful web services.
- **@RequestMapping**: Maps HTTP requests to handler methods.
- **@Autowired**: Injects bean dependencies.
- **@Service, @Repository, @Component**: Marks the service, repository, or any other Spring component.

### 16. Problem Solving Using Collections

**Example**: Finding the frequency of words in a list using `HashMap`.

```java
import java.util.HashMap;
import java.util.List;

public class WordFrequency {
    public static void main(String[] args) {
        List<String> words = List.of("apple", "banana", "apple", "orange", "banana");
        HashMap<String, Integer> frequencyMap = new HashMap<>();

        for (String word : words) {
            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
        }

        System.out.println(frequencyMap);
    }
}
```

### 17. SQL Queries

**Example**: Returning age-wise average salary.

```java
Map
```
