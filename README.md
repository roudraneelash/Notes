# Notes

Interview notes

- Java as a platform independent language
  JDK: it is required to write and compile and convert source code into bytecode. ByteCode is machine independent.
  JRE: it converts the bytecode into machine specific code. JVM has JIT compiler that converts the bytecode into machine dependent code.
  -JVM
  -JIT
- Procedure oriented langauge vs OOPS

Sequence of tasks,
-OOPSData and method, implements Encapsulation

OOPS

- static block & static members
- Non-static block and members
- DataTypes
- wrapper class , Autoboxing & unboxing
- Access modifiers

-- static block excutes once when the class is loaded
-- nonstatic block executes everytime a new instance is created

-Exception Handling

- Checked Exceptins -- compile time error- due to syntax error
- Unchecked Exceptions -- RunTime error- Abnormal termination of a program

Throwable is the parent class of all Exceptions in Java

- Exception class=>belongs to RuntimeException
- ArithmeticException(divide by 0)
- NumberFormatException(Integer.parseInt("abcd"));
- ArrayIndexOutOfBound(when the index does no exist for the array)
- NullPointerException(when the obj ref is null)

Handling Exceptions
try,catch,throw,finally,throws

try{
//code that might generate exception
}catch(Exception obj)
{
//handling the exception
}finally{
//always execute
}

--Throw is use to generate exception
--throws is use to not handle the exception directly using catch block,
whoever calls the functionn, it will be handled by it

//Custom checked exception class
class DivisionByZeroException extends Exception {
public DivisionByZeroException(String message) {
super(message);
}
}

public class Test {

// Method that performs division operation and throws DivisionByZeroException if denominator is zero
public static double divide(int numerator, int denominator) throws DivisionByZeroException {
if (denominator == 0) {
throw new DivisionByZeroException("Cannot divide by zero!");
}
return (double) numerator / denominator;
}

public static void main(String[] args) {
try {
// Calling the divide method with a denominator of 0
double result = divide(10, 0);
System.out.println("Result of division: " + result);
} catch (DivisionByZeroException e) {
// Handling the DivisionByZeroException
System.out.println("Exception caught: " + e.getMessage());
}
}
}

- Assertions
