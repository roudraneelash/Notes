-- singleton pattern , its usage
-- final vs finalize()

The keywords final and finalize in Java serve entirely different purposes and are used in different contexts. Let's explore each one in detail:

1. final Keyword
   The final keyword in Java is a modifier that can be applied to variables, methods, and classes. It is used to enforce non-changeable (constant) behavior in different contexts.

Final Variable:

A final variable acts as a constant; once it is initialized, its value cannot be changed.
Example:
java
Copy code
final int MAX_COUNT = 100;
The above variable MAX_COUNT cannot be reassigned a new value once it has been set.
Final Method:

A final method cannot be overridden by subclasses. This is useful when you want to prevent altering the method's implementation in derived classes.
Example:
java
Copy code
class Parent {
final void show() {
System.out.println("This is a final method.");
}
}
In this example, the show() method cannot be overridden by any subclass of Parent.
Final Class:

A final class cannot be subclassed. This is useful when you want to prevent inheritance, ensuring that the class's implementation remains unchanged.
Example:
java
Copy code
final class Utility {
// Class content
}
In this example, no class can inherit from the Utility class. 2. finalize Method
finalize Method: The finalize method is a protected method of the java.lang.Object class. It is invoked by the garbage collector before an object is removed from memory. The finalize method can be overridden in a class to release resources, like closing files or releasing connections, before the object is garbage collected.

Usage:

You typically override the finalize method to perform cleanup operations before an object is destroyed. However, this method is considered deprecated and unreliable in Java for resource management because:
There is no guarantee that finalize will be called promptly or even at all before the program exits.
It can cause performance problems due to unpredictable behavior.
Since Java 9, finalize has been deprecated due to these issues and better alternatives are recommended, like using try-with-resources or finally blocks for resource management.
Example:

java
Copy code
public class ResourceHolder {
@Override
protected void finalize() throws Throwable {
try {
// Release resources here
System.out.println("Finalize method called, releasing resources.");
} finally {
super.finalize(); // Ensure superclass finalize is also called
}
}
}
Key Differences
Feature final finalize
Purpose Prevents change in variables, methods, or inheritance of classes Used for cleanup before garbage collection (now deprecated)
Context of Use Can be applied to variables, methods, and classes Method for resource cleanup
Functionality Ensures immutability, non-overridability, or non-inheritability Provides a mechanism to clean up resources before an object is garbage collected
Usage Level Compile-time enforcement Runtime method invoked by the garbage collector
Modern Practice Commonly used Deprecated; not recommended for use

// reverse a linked list

Node reverse(Node head) {
Node previous = null;
Node current = head;
Node next = null;

        while (current != null) {
            // Store the next node
            next = current.next;

            // Reverse the current node's pointer
            current.next = previous;

            // Move pointers one step forward
            previous = current;
            current = next;
        }

        // Previous will be the new head after the loop
        return previous;
    }

//Write a program to change the colour of the webpage every 5 secs

<body class="main"></body>

const main= document.querySelector(".main");
main.addEvent

const [val,setValue]=useState(0);

// using UseEffect

useEffect(()=>{
const interval=setInterval(()=>{
// using state variable update state
},5000);

return ()=>{clearInterval(interval}
},[]);

return <>
{// condition of rendering colour on state variable}
</>

class Main {
public static void main(String args[]) {
// Your code goes here
try{
int x = 10/0;
System.out.println(x);
}catch(Exception e)
{
System.out.println("Invalid operation, Dividing by Zero");
}
System.out.println("end of program");
}
}

class Main {
public static void main(String args[]) {
// Your code goes here
String s1 = "InterviewBit";
String s2 = new String("InterviewBit");

    	System.out.println(s1 == s2);// false
    	System.out.println(s1.equals(s2));// true
    }

}

// go through pragma/Gama programming
