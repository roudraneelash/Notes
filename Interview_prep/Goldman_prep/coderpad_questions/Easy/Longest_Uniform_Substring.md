// this method should return an interger array with 2 elements that correctly indentifies the location fo the longest uniform substring within the input string.
The first element of the array should be the starting index of the longest substring and second element should be the length.

eg: input : "abbbccda" the longest uniform substring is "bbb" (which starts at index 1 and is 3 character long).

import java.util.*;

public class Solution {

    private static final Map<String, int[]> testCases = new HashMap<String, int[]>();

    static int[] longestUniformSubstring(String input) {
        int longestStart = -1;
        int longestLength = 0;
        int ix = 0;
        int length = input.length();

        while (ix < length) {
            int start = ix;
            int currentLength = 1;

            // Continue to find the length of the current uniform substring
            while (ix + 1 < length && input.charAt(ix) == input.charAt(ix + 1)) {
                ix++;
                currentLength++;
            }

            // Update longest substring information if current is longer
            if (currentLength > longestLength) {
                longestStart = start;
                longestLength = currentLength;
            }
            ix++;
        }

        return new int[]{longestStart, longestLength};
    }

    public static void main(String[] args) {
        // Setting up test cases
        testCases.put("", new int[]{-1, 0});
        testCases.put("10000111", new int[]{1, 4});
        testCases.put("aabbbbbCdAA", new int[]{2, 5});
        testCases.put("1000011010101110110100010010011111111", new int[]{29, 8});

        // TODO: implement more tests if needed
        // Feel free to make testing more elegant

        boolean pass = true;

        for (Map.Entry<String, int[]> testCase : testCases.entrySet()) {
            int[] result = longestUniformSubstring(testCase.getKey());
            pass = pass && Arrays.equals(result, testCase.getValue());
        }

        if (pass) {
            System.out.println("All tests pass!");
        } else {
            System.out.println("At least one failure :(");
        }
    }
}