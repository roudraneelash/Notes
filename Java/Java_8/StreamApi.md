	22,A
	55,B
	33,Z
	44,M
	99,I
	88,X

	// sort on the basis of values of a HashMap

	data set, 
	1,"Rakshith",65,"CS",
	2,"Pronoy",75,"EC",
	3,"Roudra",85,"CS"
	4,"Avinash",95,"ME"

	// multi sort
	// get top student from each student
	// top salaried emp from each dept
	// avg marks/salary, dept/salary wise

	// diff b/w stream and parallelstream
	// flatmap & map
	// underlying interface for map/filter/flatmap





    ------------------------------      Intermediate Operations

    1.	filter(Predicate<T> predicate)
	•	Filters elements based on a given condition.
	2.	map(Function<T, R> mapper)
	•	Transforms each element by applying a function.
	3.	flatMap(Function<T, Stream<R>> mapper)
	•	Flattens a stream of streams into a single stream.
	4.	distinct()
	•	Removes duplicates from the stream.
	5.	sorted()
	•	Sorts the elements in their natural order.
	6.	sorted(Comparator<T> comparator)
	•	Sorts elements based on a custom comparator.
	7.	peek(Consumer<T> action)
	•	Performs an action on each element as it is consumed from the stream (mainly for debugging).
	8.	limit(long maxSize)
	•	Truncates the stream to contain no more than maxSize elements.
	9.	skip(long n)
	•	Skips the first n elements and processes the remaining elements.


    ----------------------------- Terminal Operations 

    1.	forEach(Consumer<T> action)
	•	Performs an action for each element in the stream.
	2.	forEachOrdered(Consumer<T> action)
	•	Similar to forEach(), but respects the encounter order.
	3.	toArray()
	•	Converts the elements of the stream into an array.
	4.	reduce(BinaryOperator<T> accumulator)
	•	Reduces the stream to a single value by combining elements using an associative function.
	5.	reduce(T identity, BinaryOperator<T> accumulator)
	•	Performs reduction with an initial value (identity).
	6.	collect(Collector<T, A, R> collector)
	•	Converts the elements of the stream into a collection or other result container (e.g., toList(), toSet(), etc.).
	7.	min(Comparator<T> comparator)
	•	Returns the minimum element based on a comparator.
	8.	max(Comparator<T> comparator)
	•	Returns the maximum element based on a comparator.
	9.	count()
	•	Returns the count of elements in the stream.
	10.	anyMatch(Predicate<T> predicate)
	•	Returns true if any elements match the given predicate.
	11.	allMatch(Predicate<T> predicate)
	•	Returns true if all elements match the given predicate.
	12.	noneMatch(Predicate<T> predicate)
	•	Returns true if no elements match the given predicate.
	13.	findFirst()
	•	Returns the first element in the stream (or an Optional if the stream is empty).
	14.	findAny()
	•	Returns any element from the stream (useful in parallel streams).

--------------------------------- Practise questions

Here’s a set of 15 Stream API practice questions categorized by difficulty: easy, medium, and hard.

Easy Level

	1.	Convert a List of Strings to Uppercase:
Given a list of strings, return a new list with all elements in uppercase.

List<String> strings = Arrays.asList("apple", "banana", "cherry");
// Expected output: ["APPLE", "BANANA", "CHERRY"]


	2.	Filter Even Numbers:
Given a list of integers, filter out the even numbers and return them as a list.

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
// Expected output: [2, 4, 6]


	3.	Count Strings with Length Greater than 3:
Given a list of strings, count how many strings have a length greater than 3.

List<String> strings = Arrays.asList("cat", "house", "dog", "building");
// Expected output: 2


	4.	Find the First Element in a List:
Given a list of integers, return the first element. If the list is empty, return -1.

List<Integer> numbers = Arrays.asList(5, 2, 9, 11);
// Expected output: 5


	5.	Create a List of Squared Numbers:
Given a list of integers, return a list where each integer is squared.

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
// Expected output: [1, 4, 9, 16, 25]



Medium Level

	1.	Find Distinct Elements:
Given a list of integers, return a new list containing only distinct elements.

List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5);
// Expected output: [1, 2, 3, 4, 5]


	2.	Sort Strings in Alphabetical Order:
Given a list of strings, return the list sorted in alphabetical order.

List<String> strings = Arrays.asList("banana", "apple", "cherry", "date");
// Expected output: ["apple", "banana", "cherry", "date"]


	3.	Find the Maximum Value:
Given a list of integers, find the maximum value. If the list is empty, return -1.

List<Integer> numbers = Arrays.asList(5, 9, 3, 12, 7);
// Expected output: 12


	4.	Group Strings by Length:
Given a list of strings, group them by their length.

List<String> strings = Arrays.asList("cat", "house", "dog", "building", "hi");
// Expected output: {2=[hi], 3=[cat, dog], 5=[house], 8=[building]}

strings.stream().collect(Collectors.toMap(String::length,(el)->el));

	5.	Concatenate Strings with Comma Separator:
Given a list of strings, concatenate them into a single string, separated by commas.

List<String> strings = Arrays.asList("apple", "banana", "cherry");
// Expected output: "apple, banana, cherry"



Hard Level

	1.	Find the Sum of Odd Numbers:
Given a list of integers, find the sum of all odd numbers.

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
// Expected output: 16 (1 + 3 + 5 + 7)
numbers.stream().filter((el)->el%2!=0).collect(Collectors.reduce(0,Integer:sum));


	2.	Partition List into Even and Odd Numbers:
Given a list of integers, partition them into two lists: one with even numbers and one with odd numbers.

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
// Expected output: {true=[2, 4, 6], false=[1, 3, 5]}

List<Boolean, List<Integer>> partitioned=numbers.stream().collect(Collectors.partitioningBy((el)->el%2==0));


	3.	Calculate Frequency of Each Character in a String:
Given a string, calculate the frequency of each character.

String str = "hello world";
// Expected output: {h=1, e=1, l=3, o=2, w=1, r=1, d=1}


	4.	Find the Longest Word:
Given a list of words, find the word with the maximum length.

List<String> words = Arrays.asList("Java", "Stream", "API", "Programming");
// Expected output: "Programming"


	5.	FlatMap Nested Lists and Find Sum:
Given a list of lists of integers, flatten the list and find the sum of all elements.

List<List<Integer>> numbers = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5),
    Arrays.asList(6, 7, 8)
);
// Expected output: 36 (1+2+3+4+5+6+7+8)



Explanation for Each Difficulty

	1.	Easy Level:
	•	These problems focus on basic Stream operations like filtering, mapping, counting, and collecting into lists. They help practice common transformations and simple aggregations.
	2.	Medium Level:
	•	These involve using more advanced stream operations like sorting, grouping, distinct filtering, and handling optional values. They also introduce collecting into maps and combining multiple Stream operations.
	3.	Hard Level:
	•	These problems involve complex aggregations, partitioning, character frequency counting, and using flatMap to deal with nested lists. The problems require chaining multiple Stream operations and deeper knowledge of collectors.

This set of questions should provide comprehensive practice for mastering the Java Stream API from basic to more advanced usage.

------------------------------------ Collectors Questions	

	Here are 10 questions focused on using Collectors functions in Java Streams to help solidify your understanding of various Collectors operations:

Easy Level

	1.	Collect to List:
Given a stream of strings, collect them into a List.

List<String> strings = Stream.of("apple", "banana", "cherry").collect(Collectors.toList());
// Expected output: List<String> containing ["apple", "banana", "cherry"]


	2.	Collect to Set:
Given a stream of integers, collect them into a Set (remove duplicates).

List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4);
Set<Integer> distinctNumbers = numbers.stream().collect(Collectors.toSet());
// Expected output: Set<Integer> containing [1, 2, 3, 4]


	3.	Counting Elements:
Given a stream of strings, count the total number of elements.

List<String> words = Arrays.asList("apple", "banana", "cherry");
long count = words.stream().collect(Collectors.counting());
// Expected output: 3


	4.	Joining Strings:
Given a stream of strings, concatenate them into a single string separated by commas.

List<String> names = Arrays.asList("John", "Paul", "George");
String result = names.stream().collect(Collectors.joining(", "));
// Expected output: "John, Paul, George"


	5.	Summing Integers:
Given a stream of integers, find the sum of all elements using Collectors.summingInt.

List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
int sum = numbers.stream().collect(Collectors.summingInt(Integer::intValue));
// Expected output: 10



Medium Level

	6.	Mapping to Another Collector:
Given a list of strings, collect the uppercase versions of these strings into a list using Collectors.mapping.

List<String> words = Arrays.asList("java", "stream", "api");
List<String> upperCaseWords = words.stream()
                                   .collect(Collectors.mapping(String::toUpperCase, Collectors.toList()));
// Expected output: ["JAVA", "STREAM", "API"]


	7.	Grouping by Length:
Given a list of strings, group them by their lengths.

List<String> words = Arrays.asList("apple", "banana", "kiwi", "orange");
Map<Integer, List<String>> groupedByLength = words.stream()
                                                  .collect(Collectors.groupingBy(String::length));
// Expected output: {5=[apple, kiwi], 6=[banana], 6=[orange]}


	8.	Partitioning by a Predicate:
Given a list of integers, partition them into two lists: one with even numbers and one with odd numbers.

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
Map<Boolean, List<Integer>> partitioned = numbers.stream()
                                                 .collect(Collectors.partitioningBy(n -> n % 2 == 0));
// Expected output: {true=[2, 4, 6], false=[1, 3, 5]}


	9.	Collecting to Map with Key-Value Pairs:
Given a list of strings, create a map where the keys are the strings, and the values are their lengths.

List<String> words = Arrays.asList("java", "stream", "api");
Map<String, Integer> lengthMap = words.stream()
                                      .collect(Collectors.toMap(word -> word, String::length));
// Expected output: {java=4, stream=6, api=3}


	10.	Reducing to Maximum Value:
Given a stream of integers, find the maximum value using Collectors.reducing.

List<Integer> numbers = Arrays.asList(1, 4, 2, 9, 3);
int max = numbers.stream().collect(Collectors.reducing(Integer::max)).orElse(-1);
// Expected output: 9



Explanation for Questions:

	•	Easy Level focuses on basic collectors like toList(), toSet(), counting(), and joining(), which are fundamental collectors for creating simple collections or string representations.
	•	Medium Level involves more advanced collectors like mapping(), groupingBy(), and partitioningBy(), which allow more complex data aggregation and transformation operations. These exercises help with grouping, partitioning, and collecting data into more advanced structures like maps.

Bonus Challenge:

Use multiple Collectors in a single pipeline:
Given a list of words, group them by length and, within each group, count how many words there are with the same starting letter.

List<String> words = Arrays.asList("apple", "apricot", "banana", "blueberry", "cherry", "cranberry");

Map<Integer, Map<Character, Long>> result = words.stream()
    .collect(Collectors.groupingBy(
        String::length,
        Collectors.groupingBy(
            word -> word.charAt(0),
            Collectors.counting()
        )
    ));
// Expected output: {5={a=2, b=1}, 6={b=1}, 7={c=1}, 9={c=1}}

This complex query shows how to combine multiple Collectors like groupingBy() and counting() to perform nested aggregation.