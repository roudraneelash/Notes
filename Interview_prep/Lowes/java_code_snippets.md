final abstract class SuperClass{
public SuperClass(){}
public void method1()throws IOException{
System.out.println("SuperClass");
}
public abstract method2();
}

public class ChildClass extends SuperClass{
public void method1()throws Exception{
System.out.println("ChildClass");
}
public static void main(String[] args)throws Exception{
SuperClass childClass=new ChildClass();
childClass.method1();
}
}

---

public class Car{
public void break(){
System.out.println("Vehicle Stops");
}

public void accelerate(){
System.out.println("Vehicle accelerates");
}
}

public class MercedesBenz extends Car{
public void break(){
System.out.println("Vehicle Stops");
}

public void accelerate(){
System.out.println("Vehicle accelerates");
}
public void opensunroof(){
System.out.println("Sunroof opened");
}
}

public class Test{
public static void main(String[] args)
{
Car car= new MercedesBenz();
car.opensunroof();
}
}

---
