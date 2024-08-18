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
