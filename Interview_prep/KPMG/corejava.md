final abstract class SuperClass{
public SuperClass(){
}
public void method1() throws IOException{
System.out.println("SuperClass");
}
public abstract method2();
}

public class ChildClass extends SuperClass {
public void method1() throws Exception {
System.out.println("ChildClass");
}
public static void main(String[] args) throws Exception {
SuperClass childClass = new ChildClass();
childClass.method1();
}
}

import java.io.\*;

class Car{
public void brake(){
System.out.println( "Vehicle stops");
}
public void accelerate(){
System.out.println("Vehicle accelerates");
}
}

class MercedesBenz extends Car{

public void brake(){
System.out.println( "Vehicle stops");
}

public void accelerate(){
System.out.println("Vehicle accelerates");
}

public void opensunroof(){
System.out.println("sunroof opened");
}

}

public class Main{
public static void main(String[] args){
Car car = new MercedesBenz();

car.opensunroof();
}
}
// sunroof opened

14
u=117
a=97
c=99
d=100

g=103
b=98
e=101
g=103
1+1+1
bbe
s=uaccd ; t=gbbeg ; k=4

// convert char in s to char in t
// max length of the substring in s equal to substring in t , after conversion
// each conversion cost , abs(s(i)-t(i));
//s=uaccd ; t=gbbeg ; k=4
//((int)(u)-(int)(g))=> +value=> sum

// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class HelloWorld {
public static void main(String[] args) {
int i=0,j=0,k=4,sum=0;
String s="uaccd", t="gbbeg" ;
int n=s.length();

        while(true){
            if(j==n)
            break;
            int cost = Math.abs((int)s.charAt(j)-(int)t.charAt(j));
            sum+=cost;
            if(sum>k && j<n)
            {
                // initialize  start point
                i=j;
                // initialize current sum
                sum=cost;
            }
            if(sum==k)
            {
                break;
            }
            j++;
        }
        if(sum==k)
        {
        System.out.println("length of the max substring "+(j));
        }else
        {
        System.out.println(0);
        }
            }

}

owasp top 10 vulnerabilities
