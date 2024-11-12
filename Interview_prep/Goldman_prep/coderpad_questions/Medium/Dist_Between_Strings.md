Problem Name is &&& Dist. Between Strings &&& PLEASE DO NOT REMOVE THIS LINE. */

public class Solution (

/"

Instructions

Debug why the included test cases aren't succeeding and account for them in the code

A description of the expected behaviour is given below.

Missing enhancements:

Support case insensitivity (comparing word to word or word2)

Account for punctuation (allow multiple separators in the split)

Account for the split char in the total length between words, (i.e. index += word.length()+1)

Allow for words in either order (Math.abs(word1Loc word21.oc))

Handle case where either word is not present

Given two words returns the shortest distance between their two midpoints in number of characters Words can appear multiple times in any order and should be case insensitive.

E.g. for the document "This is a sample document we just made up"

shortestDistance(document, "we", "just") == 4

shortestDistance(document, "is", "not")== -1

shortestDistance(document, "is", "a") = 2.5

public static double shortestDistance(String document, String wordi, String word2) (

String[] words document.split("[,. ]");

int index 0;

document.length();

double shortest double wordlLoc = 0;

double word2Lac = 0;

for (String word words) (

if (word, equalsIgnoreCase (word1)) {

word1Loc index (word.length()/2d); } else if (word.equalsIgnoreCase (word2)) {


word.equarsignorecase(wor word1Loc index + (word.length()/2d);

} else if (word.equalsIgnoreCase (word2)) {

word2Loc index (word.length()/2d);

}

if (word1Loc > 0 && word2Loc > 0) {

double current = Math.abs(word1Loc word2Loc); if (current < shortest) ( shortest current;

}

}

index word.length() + 1;

if (wordiloc== 0 || word2Loc == 0) {

return -1;

}

return shortest;

}

Returns true if the tests pass. Otherwise, false.

public static boolean doTestsPass() {

// todo: implement more tests if you'd like

return shortestDistance (DOCUMENT, "and", "graphic") == 6d 88 shortestDistance (DOCUMENT, "transfer", "it") == 14d && shortestDistance (DOCUMENT, "layout", "It") = 6d && shortestDistance (DOCUMENT, "Design", "filler") == 25d && shortestDistance (DOCUMENT, "It", "transfer") == 14d && Math.abs(shortest Distance (DOCUMENT, "of", "lorem") 4.5) < 0.000001 && shortestDistance (DOCUMENT, "thiswordisnotthere", "lorem") == -1d;

*/

}

}

/**

* Returns true if the tests pass. Otherwise, false.

*/

public static boolean doTestsPass() {

// todo: implement more tests if you'd like

return shortestDistance (DOCUMENT, "and", "graphic") == 6d &&

shortestDistance (DOCUMENT, "transfer", "it") == 14d && shortestDistance (DOCUMENT, "layout", "It") == 6d && shortestDistance (DOCUMENT, "Design", "filler") == 25d && shortestDistance (DOCUMENT, "It", "transfer") == 14d && Math.abs(shortestDistance (DOCUMENT, "of", "lorem") 4.5) < 0.000001 && shortestDistance (DOCUMENT, "thiswordisnotthere", "lorem") == -1d;

}

/**

* Execution entry point.

*/

public static void main(String[] args) {

// Run the tests

if (doTestsPass()) {

System.out.println("All tests pass");

} else { System.out.println("There are test failures");

}

}