Iterable
-Collection
-- List , Queue , SET

Map

-- Iterable: Used to Traverse the Collection
iterator()- methods, hasNext(),next(),remove()
forEach()- used with lamda expression

Collection is a framework in Java
Collections is an Utility class and provide static method by java to do sorting/searching ...

Collection: interface , defines the contract of the collection type, implementation implements it

List

- ArrayList
- LinkedList
  SET
  - HashSet
  - LinkedHashSet
  - TreeSet

Map

- HashMap
- TreeMap

Queue

- PriorityQueue
- Dequeue
- Queue

---------- Object Equality/Hashcode/Ordering

-- Object Equality,
for primitive DataType , it is checked using ==, operators.
for reference DataType, .equals() compare the reference(i.e Heap memory address) to check if it points to the same obj or not .

-- To check object Equality, we need to Override the equals methods From obj class.

@Override
public boolean equals(Object o) {
if (this == o) return true;
if (!(o instanceof Employee)) return false;
Employee employee = (Employee) o;
return Objects.equals(name, employee.name) &&
Objects.equals(dept, employee.dept) &&
Objects.equals(phn_no, employee.phn_no);
}
@Override
public int hashCode() {
return Objects.hash(name, dept, phn_no);
}
HashCode() by defauls sends a integer value comparing the reference for objs .

we need to override it .

--If two objects are equal according to the equals(Object) method, then they must have the same hash code.
--If two objects are not equal, their hash codes do not need to be different, but different objects having different hash codes can improve performance of hash-based collections.

-- Object Ordering ,

Objects implement the Comparable interface
Comparator, Custom Comparator

Collection interface

Method Type

--Add: add, addAll
--Remove remove, removeAll,clear,retainAll
--Inspect isEmpty,size
--Process iterator, stream, toArray
