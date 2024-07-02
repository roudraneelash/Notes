Vector
Introduction:

Vector is a part of Java's legacy collection framework. It implements a growable array of objects.
Unlike ArrayList, Vector is synchronized.
Key Features:

Synchronized: All methods of Vector are synchronized, making it thread-safe.
Dynamic Array: Can grow or shrink as needed to accommodate adding and removing elements.
Performance: Generally slower than ArrayList due to synchronization overhead.
Legacy Class: Part of Java 1.0, before the introduction of the Collections Framework.
Example:

import java.util.Vector;

public class VectorExample {
public static void main(String[] args) {
Vector<String> vector = new Vector<>();

        vector.add("Apple");
        vector.add("Banana");
        vector.add("Orange");

        System.out.println(vector); // Output: [Apple, Banana, Orange]
    }

}

HashTable
Introduction:

Hashtable is a part of Java's legacy collection framework and is similar to HashMap.
It stores key-value pairs in a hash table and is synchronized.
Key Features:

Synchronized: Thread-safe as all methods are synchronized.
No Null: Does not allow null keys or values.
Legacy Class: Part of Java 1.0, before the introduction of the Collections Framework.
Performance: Generally slower than HashMap due to synchronization overhead.
Example:

java
Copy code
import java.util.Hashtable;

public class HashtableExample {
public static void main(String[] args) {
Hashtable<String, Integer> table = new Hashtable<>();

        table.put("Apple", 1);
        table.put("Banana", 2);
        table.put("Orange", 3);

        System.out.println(table); // Output: {Apple=1, Banana=2, Orange=3}
    }

}

Summary
TreeSet: Uses a binary search tree for sorted elements.
Map Interface: General interface for key-value pairs.
HashMap: Uses a hash table for fast key-value mapping, allows null values.
Vector: Synchronized dynamic array, legacy class.
Hashtable: Synchronized hash table, does not allow null values, legacy class.
These notes cover the basics of each topic, providing a solid foundation for understanding and utilizing these Java collections.
