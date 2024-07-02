-- SET is a collection that does not holds any duplicate values.

SET<String> names= new HashSet<>();

names.add("Name A");
names.add("Name B");

System.out.println(names);

names.add("Name B");
System.out.println(names);
// doesnt add name .

// add method returns boolean value
boolean result= names.add("Name B");
System.out.println(result);// it will be false

--------------------- HashSet

- HashSet in Java uses a HashMap internally to store its elements
- When a HashSet is created, it initializes an underlying HashMap with a default initial capacity (16 buckets) and a default load factor (0.75).
  -- When an element is added to the HashSet, the HashSet uses the hashCode method of the object to determine the hash code.  
  -- Load Factor, 1/16(number of element/number of bucket), when the load factor reaches .75, i.e 12/16 it rehash, i.e double its capacity

---- Working of a HashSet

Initialization: When a HashSet is created, it initializes an underlying HashMap with a default initial capacity (16 buckets) and a default load factor (0.75).

Adding Elements: When an element is added to the HashSet, the HashSet uses the hashCode method of the object to determine the hash code.
This hash code is then used to determine the bucket where the element should be placed in the underlying HashMap.

-If the bucket is empty, a new entry is created.
-If the bucket already contains one or more entries, the HashSet checks if any of these entries are equal to the new element (using the equals method).
-If a match is found, the new element is not added (since sets do not allow duplicates). If no match is found, the new element is added to the bucket.

Hash Collision Handling: If multiple elements are hashed to the same bucket, they are stored in a linked list or a balanced tree (from Java 8 onwards) within that bucket.
This helps in efficiently handling collisions.

Rehashing: When the number of elements in the HashSet exceeds the product of the load factor and the current capacity (e.g., 0.75 \* 16 = 12),
the HashMap rehashes the elements to a new hash table with double the capacity (e.g., 32 buckets).
This involves recalculating the bucket positions for all elements and distributing them across the new hash table.

---------------- TreeSet

-- Sorted Order: Elements are stored in a sorted (natural ordering or a custom comparator) fashion.
-- NavigableSet Interface: It provides additional navigation methods such as lower(), floor(), ceiling(), and higher().
-- No Duplicates: Like all Set implementations, TreeSet does not allow duplicate elements.
-- Performance: Basic operations like add, remove, and contains have a time complexity of O(log n) due to the underlying tree structure.
.

--------------------------- Map interface
Map Interface:

Introduction: A Map is an object that maps keys to values. It cannot contain duplicate keys, and each key can map to at most one value.
Common Implementations: HashMap, TreeMap, LinkedHashMap, etc.

------------------------------- HashMap

Introduction: HashMap is a part of Java's Collections Framework and implements the Map interface.
Key Features:
Hashing: Uses a hash table to store the map.
Performance: O(1) time complexity for basic operations (put, get, remove) assuming good hash function and low collision rate.
\*\*Null Values: Allows one null key and multiple null values.

-- Map, HashMap , functions
-- Vector
-- HashTable
