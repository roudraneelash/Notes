1.) Find the second smallest number in an array.
2.) Given a dictionary of the words(strings) which contains different words & you are given an input string e.g. “abd”. You need to find the largest word available in the supplied dictionary which can be made using the letters of input string. The returned word can contain only the same no of occurrences of the letters as given in the input string i.e. if a letter is given once then in the output it should be existed only once. Examples:

1, Dictionary {“to”, “banana”, “toe”, “dogs”, “ababcd”, “elephant”} and input string is “eot”. Output should be “toe”
2, Dictionary is same as specified in example a but the input string is “ogtdes” and the output is “dogs” and “toes”

Link : https://leetcode.com/discuss/interview-question/760987/Hard-Problem-%3A-was-asked-in-Goldman-Sachs-..-Please-solve-%3A)

I cleared this round and have been selected for the CoderPad Round 2, anyone has any idea what to expect from this round?

I had a coderpad interview with goldman sachs.
I had 2 exercises: one easy and one medium.

find the intersection elements in two arrays. Example:
Input: arr1: [1,1,2,2,2] arr2: [1,1,1,2,2,3,4,5]
Output: [1,1,2,2];

was exactly https://leetcode.com/problems/top-k-frequent-words/description/ , I applied the brute force of creating the hash, sort the hash and return the k elements.

https://www.geeksforgeeks.org/must-coding-questions-company-wise/#goldman-sachs-interview-coding-questions

/\*\*

- Instructions to candidate:
- 1. Run this code in the REPL to observe its behaviour. The
-     execution entry point is main().
- 2. Your task is to implement the following function ('longestUniformSubstring')
-
- This function should return an array with exactly two elements that describe the location of the longest
- uniform substring of a string input. The first element of the array should be the start index and the second
- element is the length
-
- e.g.
-
-      for the input: "abbbccda" the longest uniform substring is "bbb" (which starts at index 1 and is 3 characters long).
-      Therefore the return value would be a new Tuple<int, int>(1, 3);
-
- 3. If time permits, consider adding additional test cases.
     \*/
Here’s a unique set of questions picked from the list you shared, ensuring diversity across topics:

Easy-Level Questions

	1.	Merge Two Sorted Arrays in O(n) Time:
Merge two sorted arrays into a single sorted array.
	2.	Second Largest Number in an Array:
Find the second-largest number in an array of integers in O(n) time.
	3.	String Reversal in O(n) Time:
Reverse a given string in linear time.
	4.	Find Duplicates in an Array in O(n) Time:
Identify all duplicates in an array of integers in O(n) time.
	5.	Check if String and List are Same:
Given a string and a list of words, check if they represent the same content in O(n) time.
	6.	Find the Very First Non-Repeating Character:
Given a string array, return the first non-repeating character from each string.
	7.	Print Number of Occurrences of Alphabets in a String:
Count the occurrences of each alphabet in a string in O(n) time.

Medium-Level Questions

	1.	Min Number of Platforms for Trains:
Calculate the minimum number of platforms needed for trains based on their arrival and departure times.
	2.	Find Missing Number in Array of N-1 Integers:
Given an array of distinct integers from 1 to N, find the missing integer.
	3.	Minimum Number of Jumps to Reach End:
Given an array where each element represents the maximum steps that can be made forward, return the minimum number of jumps to reach the end.
	4.	Longest Substring Without Repeating Characters:
Find the length of the longest substring without repeating characters in a string.
	5.	Trapping Rainwater:
Calculate the maximum amount of water that can be trapped between bars of given heights.

Algorithmic Questions

	1.	Run Length Encoding of a String:
Compress a string using run-length encoding in O(n) time.
	2.	Count Number of Possible Decodings of Digit Sequence:
Count the number of possible decodings for a given sequence of digits where each digit represents a letter.
	3.	Group Anagrams Together:
Given an array of strings, group the anagrams together.
	4.	N-Queens Problem:
Solve the N-Queens problem using recursion and backtracking.
	5.	Move Zeroes to End in O(n) Time:
Move all zeroes in an array to the end while maintaining the order of other elements.

This set offers a balanced mix of easy, medium, and algorithmic questions across different problem types like arrays, strings, linked lists, trees, and backtracking.