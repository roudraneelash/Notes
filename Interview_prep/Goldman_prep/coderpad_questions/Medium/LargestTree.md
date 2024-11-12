Given a forest (one or more disconnected trees), find the root of largest tree
and return its Id. If there are multiple such roots, return the smallest Id of them.

Complete the largest Tree function in the editor below.
It has one parameter, immediateParent, which is a map containing key-value pair indicating child -> parent relationship. The key is child and value is the corresponding immediate parent.

Constraints

Child cannot have more than one immediate parent.
Parent can have more than one immediate child.
The given key-value pair forms a well-formed forest (a tree of n nodes will have n-1 edges)

Example:
Input:

{{1->2}, {3 -> 4}}
Expected output: 2
Explanation: There are two trees one having root of Id 2 and another having root of Id 4. Both trees have size 2. The smaller number of 2 and 4 is 2. Hence the answer is 2.

-- Solution 

class Solution {

**Get the size of the tree with root index root Index

*/

public static int getTreeSize(final Map<Integer, List<Integer>> parentToChild, final int rootIndex) (

int result = 0;

final Stack<Integer> nodes = new Stack<>();

nodes.push(root Index); while (!nodes.empty()) {

final int index = nodes.pop(); result++;

for(final int childIndex: parentToChild.getOrDefault(index, new ArrayList<>())) { nodes.push(childIndex);

} }

return result;

Find the largest tree.

public static int largest Tree(final Map<Integer, Integer> immediateParent) (

int maxTreeSize = 0;

int minRootId = 0;

final Map<Integer, List<Integer>> parentToChild = new HashMap<>();

final List<Integer> root Indexes new ArrayList<>(); for (final var childToParent: immediateParent.entrySet()) {

final int childIndex = childToParent.getKey();

final int parentIndex = childToParent.getValue();

parentToChild.putIfAbsent(parentIndex, new ArrayList<>());

parentToChild.get(parent Index).add(childIndex);

if(limmediateParent.containsKey(parentIndex)) { rootIndexes.add(parentIndex);

for (final int root Index: root Indexes) {
final int treesize getTreeSize (parentToChild, rootIndex);

if(treeSize > maxTreeSize) {

maxTreeSize treeSize;

minRootid rootIndex; } else if (treeSize = maxTreeSize)

{ minRootId Math.min(minRootId, rootIndex);

return minRootId;

}

Returns true if the tests pass. Otherwise, returns false;

public static boolean testsPass()

{

// map of test cases to expected results

final Map<Map<Integer, Integer>, Integer> testCases new HashMap<>();

// example

final Map<Integer, Integer> testCaseOnekey= new HashMap<>() {{ put(1, 2);

put(3, 4);

});

testCases.put(testCaseOneKey, 2);

// More than two trees Final Map<Integer, Integer> testCaseTwoKey = new HashMap<>() {{

put (2, 3);

put (7, 8);

put (12, 15); put(3, 1);

put(13, 15);

put(11, 15);

put(9, 8);

put(5, 12);

}); testCases.put(testCaseTwokey, 15);
// really large index values

final MapcInteger, Integer> testCaseThreeKey new HashMap<>() {{

put (200000000, 300000000);

put(500000000, 200000000);

put(700000000, 300000000); put (600000000, 700000000);

put (900000000, 400000000);

put(100000000, 400000000); put (800000000, 400000000);

put(1000000000, 400000000);

));

testCases.put(testCase ThreeKey, 300000000);

// two trees of same size

final MapcInteger, Integer> testCaseFourkey new HashMap<>() {{

put(9, 4);

put(1, 4); put (5, 2);

put(8, 4); put (7, 3);

put (2, 3);

put (6, 7);

put(10, 4);

}}; testCases.put(testCaseFourkey, 3);

// tree sizes differ by one

final Map<Integer, Integer) testCaseFiveKey new HashMap<>() {{

put (35, 33);

put (33, 28);

put (31, 22);

put (28, 25);

put (34, 31); put (29, 27);

put (21, 23);

put(25, 21);

put (22, 29);

}); testCases.put(testCaseFiveKey, 23);
boolean passed = true;

for (var entry: testCases.entrySet()) {

final int actual largestTree(entry.getKey());

if (actual != entry.getValue()) {

passed false;

System.out.printf("Failed for %s%n expected %s, actual %s%n", entry.getKey(), entry.getValue(), actual);

}

}

return passed;

}

/*

"/

Execution entry point.

public static void main(String[] args) {

// Run the tests

System.out.println("All tests pass");

}

if (testsPass()) {

else { System.out.println("Tests fail.");

}

}

