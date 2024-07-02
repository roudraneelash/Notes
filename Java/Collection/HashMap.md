HashMap is a concrete class implementing Map Interface.

it is used to store <Key,Value> pair.

TimeComplexity-
Insert- O(1)
Search- O(1)
Delete- O(1)

-- But the entries made into a Hashmap is not sequential, the entries are made randomly.

Hashing
hash function- it will produce output for hash(i)- output, IT MIGHT produce hash(p)- output also.

this is called collision.

Hash function
- Map Larger values to smaller values.
- Should be O(1) or O(len) for string.length for opertations
- Should uniformly distribute large keys into table slots.


HashMap stores and Array of Node. 

Node{
  K key,
  V value,
  int hash,
  Node next.
}