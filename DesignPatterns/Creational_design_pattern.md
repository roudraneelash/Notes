- Prototype
- SingleTon
- Factory
- Abstract Factory
- Builder Pattern

--------------------- Prototype Design Pattern
-this pattern is particularly useful when the cost of creating a new instance of a class is expensive or complicated. By cloning an existing instance, we can create a new instance more efficiently.

class Student{
String name;
private Integer rollNumber;
Integer age;

Student(int age,int rollNumber,String name)
{
this.age=age;
this.rollNumber=rollNumber;
this.name=name;
}

}

class Main{
main()
{
//
Student obj= new Student(23,51,"Ash");
// now to clone the obj
Student cloneObj= new Studen(obj.age,obj.rollNumber,obj.name);
// there 2 primary limitation, since cloning the obj , u need to create another obj and pass the value of the original obj.
// responsibility of creating the clone obj , is shifted to another class.
}
}

-- it should implement Prototype interface with method clone()

interface Prototype{
Prototype clone();
}

class Student implements Prototype{
String name;
private Integer rollNumber;
Integer age;

Student(int age,int rollNumber,String name)
{
this.age=age;
this.rollNumber=rollNumber;
this.name=name;
}

public Prototype clone(){
return new Student(age,rollNumber,name);
}
}

------------------ SingleTon (when we have to create only 1 instance of the class)

4 ways to achieve this:

1. Eager
2. Lazy
3. Synchronized Method
4. Double Locking

---- Eager Initialization

public class DBConnection{
private static DBConnection conObject= new DBConnection();

private DBConnection(){
}

public static DBConnection getInstance(){
return conObject;
}
}

-------- Lazy Initialization
public class DBConnection{
private static DBConnection conObject;

private DBConnection(){
}

public static DBConnection getInstance(){
if(conObject==null)
{
this.conObject=new DBConnection();
}
return conObject;
}
}

--------------- Synchronized Method

public class DBConnection{
private static DBConnection conObject= new DBConnection();

private DBConnection(){
}

synchronized public static DBConnection getInstance(){
if(conObject==null)
{
this.conObject=new DBConnection();
}
return conObject;
}
}

use case:

case 1- Thread 1 comes and acquire lock, and create obj and return instance
case 2- Thread 2 comes and acquire lock , and return existing instance.

-- acquiring monitor lock is expensive when also there is no need, since obj creation is already done.

---------------- Double Locking

public class DBConnection{
private static DBConnection conObject= new DBConnection();

private DBConnection(){
}

public static DBConnection getInstance(){
if(conObject==null)
{
synchronized(DBConnection.class)
{
if(conObject==null)
{
this.conObject=new DBConnection();
}
}
}
return conObject;
}
}

-- use case
-- T1,T2 Both reach at the same time , so both T1 will acquire monitor lock , and create obj instance and then return it
-- T2 will again acquire lock, it will check if the instance is empty, if not then it will return the existing obj instance.

----------------------------- Factory Pattern

when all the obj creating and its business logic we need to keep it at one place.

client ---- Shape Factory ---- Shape - Circle, Square, Rectangle

public interface Shape{
public void computeArea();
}

public class Square implements Shape{

@Override
public void computeArea(){
System.out.println("Compute Square Area");
}
}

public class Circle implements Shape{

@Override
public void computeArea(){
System.out.println("Compute Circle Area");
}
}

public class Rectangle implements Shape{

@Override
public void computeArea(){
System.out.println("Compute Square Area");
}
}

public ShapeInstanceFactory{
public Shape getShapeInstance(String type)
{
switch(type)
{
case "Rectangle":return new Rectangle();
case "Circle":return new Circle();
case "Square":return new Square();
default:return null;
}
}
}

main(){
ShapeInstanceFactory factoryobj= new ShapeInstanceFactory();
Shape Circleobj= new getShapeInstance("Circle");
Circleobj.computeArea();
}

-------------------- Abstract Factory Pattern

-- logic is factory of factory , example entityManagerFactory-> entityManager

// Abstract Product interface for Tyre
public interface Tyre {
void design();
}

// Concrete Product for Luxury Tyre
public class LuxuryTyre implements Tyre {
@Override
public void design() {
System.out.println("Designing Luxury Tyre");
}
}

// Concrete Product for Economical Tyre
public class EconomicalTyre implements Tyre {
@Override
public void design() {
System.out.println("Designing Economical Tyre");
}
}

// Abstract Factory interface for Tyre Factory
public interface TyreFactory {
Tyre createTyre();
}

// Concrete Factory for Luxury Tyre Factory
public class LuxuryTyreFactory implements TyreFactory {
@Override
public Tyre createTyre() {
return new LuxuryTyre();
}
}

// Concrete Factory for Economical Tyre Factory
public class EconomicalTyreFactory implements TyreFactory {
@Override
public Tyre createTyre() {
return new EconomicalTyre();
}
}

// Main class to demonstrate the Abstract Factory Pattern
public class AbstractFactoryPatternDemo {
public static void main(String[] args) {
// Create a luxury tyre using the luxury tyre factory
TyreFactory luxuryFactory = new LuxuryTyreFactory();
Tyre luxuryTyre = luxuryFactory.createTyre();
luxuryTyre.design();

        // Create an economical tyre using the economical tyre factory
        TyreFactory economicalFactory = new EconomicalTyreFactory();
        Tyre economicalTyre = economicalFactory.createTyre();
        economicalTyre.design();
    }

}

----------------------------- Builder Pattern
class Pizza{
private String dough;
private String sauce;
private String cheese;
private String topping;

      Pizza(PizzaBuilder pizza)
      {
        this.dough=pizza.dough;
        this.sauce=pizza.sauce;
        this.cheese=pizza.cheese;
        this.topping=pizza.topping;
      }

}

class PizzaBuilder{
private String dough;
private String sauce;
private String cheese;
private String topping;

    public setDough(String dough)
    {
      this.dough=dough;
      return this
    }
    public setSauce(String sauce)
    {
      this.sauce=sauce;
      return this
    }
    public setCheese(String cheese)
    {
      this.cheese=cheese;
      return this
    }
    public setTopping(String topping)
    {
      this.topping=topping;
      return this
    }

public Pizza build()
{
return new Pizza(this);
}
}
public static void main(String[] args) {
// Creating a pizza using the builder pattern
Pizza pizza = new Pizza.PizzaBuilder()
.setDough("Thin Crust")
.setSauce("Tomato Basil")
.setCheese("Mozzarella")
.setTopping("Pepperoni")
.build();

        System.out.println(pizza);
    }
