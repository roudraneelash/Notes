// a group of students are sitting in a circle. the teacher is electing a new class president.
// the teacher does this by singing a song while walking around the circle. After the song is finished the student at which the teacher stopped is removed from the circle.

// starting at the student next to the one that was just removed, the teacher resumes singing and walking around the circle.
// After the teacher is done singing, the next student is removed. the teacher repeats this untill only one student is left.

// a song of length k will result in the teacher walking past k students on each round. the students are numbered 1 to n. the teacher starts at student 1.

// for example, suppose song length is 2(k=2) and there are four students to start with (1,2,3,4). the first student to go would be `2`, after that `4` and after that `3`.
Student `1`  would be the next president in this example.

@param n the number of students sitting in a circle.
@param k the length (in students) of each song.
@return the number of the student that is elected.

import java.util.LinkedList;

public class Election {

    // Recursive method to find the selected person
    public static int wholsElected(int n, int k) {
        if (n == 1) return 1;
        return (wholsElected(n - 1, k) + k - 1) % n + 1;
    }

    // Method using LinkedList to find the selected person
    public static int wholsElected2(int n, int k) {
        LinkedList<Integer> list = new LinkedList<>();
        for (int i = 1; i <= n; i++) {
            list.add(i);
        }

        int index = 0;
        while (list.size() > 1) {
            index = (index + k - 1) % list.size();
            list.remove(index);
        }

        return list.getFirst();
    }

    // Test method
    public static boolean doTestsPass() {
        // Test cases structured as (n, k, expected answer)
        int[][] testCases = {
            {1, 1, 1},
            {2, 2, 1},
            {4, 1, 1},
            {100, 2, 73},
            {5, 3, 4},
            {6, 4, 5},
            {1000, 5, 763}
        };

        for (int[] testCase : testCases) {
            int answer = wholsElected(testCase[0], testCase[1]);
            if (answer != testCase[2]) {
                System.out.println("Test failed!");
                System.out.printf("n: %3d, k: %d, answer got: %3d, should be: %d%n", testCase[0], testCase[1], answer, testCase[2]);
                return false;
            }
        }
        
        System.out.println("All tests passed.");
        return true;
    }

    public static void main(String[] args) {
        doTestsPass();
    }
}