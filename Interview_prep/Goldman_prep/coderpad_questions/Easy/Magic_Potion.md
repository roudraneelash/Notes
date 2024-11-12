// Hermoine is preparing a cheat-sheet for her final exam in Potions class.
// to create a potion, one must combine ingredients in a specific order, any of which may be repeated.

example:
consider the following potion which uses 4 distinct ingredients

(A,B,C,D) in 11 steps: A,B,C,A,B,A,B,C,D

Hermoine realises she can save tremendous space on her cheat-sheet by introducin a special instruction, '*', which means "repeat from the beginning".

Using these optimizations, Hermoine is able to encode the potion above using only 6 characters : A, B, *, C, *, D

your job is to write a function that takes as input an un-encoded potion and returns the minimum number of characters required to encode the potion on Hermoine's cheat sheet.

public class Solution {

    // Method to calculate minimal steps
    private Integer minimalSteps(String ingredients) {
        int n = ingredients.length();

        if (n == 0) {
            return 0;
        }

        Integer[] dp = new Integer[n];
        for (int i = 0; i < n; i++) {
            dp[i] = Integer.MAX_VALUE;
        }
        
        dp[0] = 1;

        for (int i = 1; i < n; i++) {
            dp[i] = Math.min(dp[i], dp[i - 1] + 1);

            // Check if substring can be replicated and update dp array accordingly
            if (2 * i + 1 < n && ingredients.substring(0, i + 1).equals(ingredients.substring(i + 1, 2 * i + 2))) {
                dp[2 * i + 1] = Math.min(dp[2 * i + 1], dp[i] + 1);
            }
        }

        return dp[n - 1];
    }

    // Method to run tests
    private boolean doTestsPass() {
        return minimalSteps("ABCDABCE") == 8 
            && minimalSteps("ABCABCE") == 5 
            && minimalSteps("AAAAAA") == 4 
            && minimalSteps("AAAABBBB") == 7 
            && minimalSteps("ABABCABABCD") == 6;
    }

    // Main method for execution entry point
    public static void main(String[] args) {
        Solution solution = new Solution();
        if (solution.doTestsPass()) {
            System.out.println("All tests passed");
        } else {
            System.out.println("Tests failed");
        }
    }
}
