The Collectors class in Java’s Stream API provides a range of factory methods that create collectors, which are used to accumulate elements of a stream into various data structures or perform aggregate operations like joining, counting, or summarizing data. Here’s a breakdown of the main Collectors functions and their use cases:

1. toList()

	•	Description: Collects elements into a List.
	•	Example:

List<String> list = stream.collect(Collectors.toList());

------- Example

List<String> list = Stream.of("apple", "banana", "cherry")
                                  .collect(Collectors.toList());
        System.out.println(list);  // Output: [apple, banana, cherry]



2. toSet()

	•	Description: Collects elements into a Set (eliminates duplicates).
	•	Example:

Set<String> set = stream.collect(Collectors.toSet());

Set<String> set = Stream.of("apple", "banana", "banana", "cherry")
                                .collect(Collectors.toSet());
        System.out.println(set);  // Output: [apple, banana, cherry]



3. toMap()

	•	Description: Collects elements into a Map, where you can define the key and value functions.
	•	Example:

Map<String, Integer> map = stream.collect(
    Collectors.toMap(
        Function.identity(),  // key mapper
        String::length        // value mapper
    )
);

Map<String, Integer> map = Stream.of("apple", "banana", "cherry")
                                         .collect(Collectors.toMap(
                                             fruit -> fruit,  // key is the fruit name
                                             String::length   // value is the length of the fruit name
                                         ));
        System.out.println(map);  // Output: {apple=5, banana=6, cherry=6}


4. joining()

	•	Description: Concatenates the elements of the stream into a single String. Can optionally include a delimiter, a prefix, and a suffix.
	•	Example:

String result = stream.collect(Collectors.joining(", "));
// Example: "apple, banana, cherry"

String result = Stream.of("apple", "banana", "cherry")
                              .collect(Collectors.joining(", "));
        System.out.println(result);  // Output: apple, banana, cherry



5. counting()

	•	Description: Counts the number of elements in the stream.
	•	Example:

long count = stream.collect(Collectors.counting());

long count = Stream.of("apple", "banana", "cherry")
                           .collect(Collectors.counting());
        System.out.println(count);  // Output: 3



6. summarizingInt(), summarizingDouble(), summarizingLong()

	•	Description: Returns a summary of statistics (like count, sum, min, average, max) for the elements in the stream.
	•	Example:

IntSummaryStatistics stats = stream.collect(Collectors.summarizingInt(String::length));
// stats.getSum(), stats.getAverage(), stats.getMin(), stats.getMax()

IntSummaryStatistics stats = Stream.of("apple", "banana", "cherry")
                                           .collect(Collectors.summarizingInt(String::length));
        System.out.println(stats);  
        // Output: IntSummaryStatistics{count=3, sum=17, min=5, average=5.666667, max=6}


7. groupingBy()

	•	Description: Groups the elements of the stream based on a classification function, returning a Map where the keys are the result of applying the classifier, and the values are lists of items that match that classifier.
	•	Example:

Map<Integer, List<String>> groupedByLength = stream.collect(Collectors.groupingBy(String::length));

Map<Integer, List<String>> groupedByLength = Stream.of("apple", "banana", "cherry", "dog", "cat")
                                                           .collect(Collectors.groupingBy(String::length));
        System.out.println(groupedByLength);  
        // Output: {3=[dog, cat], 5=[apple], 6=[banana], 6=[cherry]}



8. partitioningBy()

	•	Description: Partitions elements into two groups based on a predicate. Returns a Map with Boolean keys (true/false).
	•	Example:

Map<Boolean, List<String>> partitioned = stream.collect(Collectors.partitioningBy(s -> s.length() > 3));

Map<Boolean, List<String>> partitioned = Stream.of("apple", "banana", "dog", "cat")
                                                       .collect(Collectors.partitioningBy(s -> s.length() > 3));
        System.out.println(partitioned);
        // Output: {false=[dog, cat], true=[apple, banana]}

9. reducing()

	•	Description: Performs a reduction on the elements of the stream using an associative accumulation function and an identity element. This is similar to Stream.reduce().
	•	Example:

int sum = stream.collect(Collectors.reducing(0, Integer::sum));

int sum = Stream.of(1, 2, 3, 4, 5)
                        .collect(Collectors.reducing(0, Integer::sum));
        System.out.println(sum);  // Output: 15


10. mapping()

	•	Description: Transforms elements of the stream before collecting them. This is used with another collector.
	•	Example:

List<Integer> lengths = stream.collect(Collectors.mapping(String::length, Collectors.toList()));

 List<Integer> lengths = Stream.of("apple", "banana", "cherry")
                                      .collect(Collectors.mapping(String::length, Collectors.toList()));
        System.out.println(lengths);  // Output: [5, 6, 6]

11. maxBy() / minBy()

	•	Description: Returns the maximum or minimum element according to a provided comparator.
	•	Example:

Optional<String> max = stream.collect(Collectors.maxBy(Comparator.comparing(String::length)));



12. filtering()

	•	Description: Applies a filter to elements before collecting them into a downstream collector.
	•	Example:

List<String> result = stream.collect(Collectors.filtering(s -> s.length() > 3, Collectors.toList()));

List<String> filtered = Stream.of("apple", "banana", "dog", "cat")
                                      .collect(Collectors.filtering(s -> s.length() > 3, Collectors.toList()));
        System.out.println(filtered);  // Output: [apple, banana]

13. flatMapping()

	•	Description: Transforms elements to a stream and flattens the result before collecting them into a downstream collector.
	•	Example:

List<String> result = stream.collect(
    Collectors.flatMapping(s -> Arrays.stream(s.split("")), Collectors.toList())
);

List<String> letters = Stream.of("apple", "banana")
                                     .collect(Collectors.flatMapping(s -> Stream.of(s.split("")), Collectors.toList()));
        System.out.println(letters);  // Output: [a, p, p, l, e, b, a, n, a, n, a]

14. collectingAndThen()

	•	Description: Performs a collection operation and then applies a finishing function to the result.
	•	Example:

List<String> immutableList = stream.collect(
    Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList)
);



15. teeing() (introduced in Java 12)

	•	Description: Combines two collectors and applies a final merging function to their results.
	•	Example:

int result = stream.collect(Collectors.teeing(
    Collectors.summingInt(Integer::intValue),     // first collector
    Collectors.counting(),                        // second collector
    (sum, count) -> (int) (sum / count)           // merge function
));



Summary

	•	Basic Collection: toList(), toSet(), toMap()
	•	String Operations: joining()
	•	Counting and Summarizing: counting(), summarizingInt()
	•	Grouping and Partitioning: groupingBy(), partitioningBy()
	•	Reduction: reducing()
	•	Transformations: mapping(), filtering(), flatMapping()
	•	Advanced: collectingAndThen(), teeing()

The Collectors class is highly versatile and provides powerful ways to process, aggregate, and transform streams of data into meaningful structures.