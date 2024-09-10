### Inheritance in Java

**Inheritance** is a mechanism in object-oriented programming where a new class (child or subclass) derives properties and behavior (fields and methods) from an existing class (parent or superclass).

- **Key Concepts**:

  - **Super Class (Parent Class)**: The class whose properties are inherited by another class.
  - **Sub Class (Child Class)**: The class that inherits properties from another class.

- **Types of Inheritance**:

  - **Single Inheritance**: A class inherits from one superclass.
  - **Multilevel Inheritance**: A class is derived from a class, which is also derived from another class.
  - **Hierarchical Inheritance**: Multiple classes inherit from one superclass.
  - **Multiple Inheritance**: Java does not support multiple inheritance with classes directly, but it can be achieved using interfaces.

- **Syntax**:

  ```java
  class Parent {
      // Parent class members
  }

  class Child extends Parent {
      // Child class inherits Parent
  }
  ```

### Exception Inheritance

In Java, exceptions follow the inheritance hierarchy.

- **Checked Exceptions** (`java.lang.Exception`):

  - Must be either caught or declared in the method signature using `throws`.
  - Examples: `IOException`, `SQLException`.

- **Unchecked Exceptions** (`java.lang.RuntimeException`):
  - Not required to be caught or declared.
  - Examples: `NullPointerException`, `ArrayIndexOutOfBoundsException`.

**Key Points**:

- A method overriding another method cannot throw broader checked exceptions than the method it overrides.
- Unchecked exceptions do not have this limitation.
- Subclasses can throw the same exceptions, narrower exceptions, or no exceptions at all.

**Example**:

```java
class Parent {
    void show() throws IOException {
        // Method logic
    }
}

class Child extends Parent {
    @Override
    void show() throws FileNotFoundException {  // FileNotFoundException is a subclass of IOException
        // Method logic
    }
}
```

### Tricky Corner Cases in Inheritance

1. **Method Overriding with Exceptions**:

   - The overriding method in a subclass cannot declare new or broader checked exceptions that are not declared by the method in the superclass.

   ```java
   class Parent {
       void show() throws IOException {
           // Method logic
       }
   }

   class Child extends Parent {
       @Override
       void show() throws Exception {  // Compile-time error: broader exception
           // Method logic
       }
   }
   ```

2. **Constructor Calls**:

   - Constructors are not inherited. However, the first line of a subclass constructor is an implicit or explicit call to the superclass constructor using `super()`.
   - If the superclass does not have a no-argument constructor, the subclass must explicitly call a constructor from the superclass using `super(args)`.

3. **Final Methods and Classes**:

   - A `final` method cannot be overridden by a subclass.
   - A `final` class cannot be subclassed.

   ```java
   final class Parent {
       // This class cannot be subclassed
   }

   class Child extends Parent {  // Compile-time error
       // Cannot inherit from final class
   }
   ```

4. **Covariant Return Types**:

   - Java allows a method in a subclass to return a more specific type than the method in the superclass.

   ```java
   class Parent {
       Parent method() {
           return new Parent();
       }
   }

   class Child extends Parent {
       @Override
       Child method() {  // Valid due to covariant return type
           return new Child();
       }
   }
   ```

5. **Shadowing Variables**:

   - A subclass can declare fields with the same name as those in the superclass. This practice is generally discouraged as it can lead to confusion.
   - The subclass field will hide the superclass field, but they can still be accessed using `super`.

   ```java
   class Parent {
       int x = 10;
   }

   class Child extends Parent {
       int x = 20;

       void show() {
           System.out.println(x);        // Prints 20
           System.out.println(super.x);  // Prints 10
       }
   }
   ```

6. **Super Keyword**:

   - Used to refer to the superclass's methods, constructors, or fields.
   - If both a parent and a child class have a method with the same name, `super.methodName()` can be used to call the parent's method.

7. **Multiple Inheritance with Interfaces**:

   - While Java does not support multiple inheritance with classes, it does with interfaces. A class can implement multiple interfaces.

   ```java
   interface A {
       void methodA();
   }

   interface B {
       void methodB();
   }

   class C implements A, B {
       public void methodA() {
           // Implementation
       }

       public void methodB() {
           // Implementation
       }
   }
   ```

8. **Abstract Classes and Methods**:

   - An abstract class cannot be instantiated and may contain abstract methods (methods without a body).
   - A subclass of an abstract class must provide implementations for all abstract methods, unless it is also abstract.

   ```java
   abstract class Parent {
       abstract void show();  // Abstract method
   }

   class Child extends Parent {
       @Override
       void show() {
           // Implementation
       }
   }
   ```

These concepts form the core of inheritance and exception handling in Java, and understanding these tricky cases can help avoid common pitfalls in OOP design.
