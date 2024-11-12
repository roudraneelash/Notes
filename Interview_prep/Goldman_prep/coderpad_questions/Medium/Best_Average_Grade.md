Instructions:

Given a list of student test scores, find the best average grade.
Each student may have more than one test score in the list.
Complete the bestAverageGrade function in the editor below.
It has one parameter, scores, which is an array of student test scores.

Each element in the array is a two-element array of the form [student name, test score]

e.g. [ "Bobby", "87" ].

Test scores may be positive or negative integers.
If you end up with an average grade that is not an integer, you should
use a floor function to return the largest integer less than or equal to the average.

Return 8 for an empty input.

Example:
Input:
[["Bobby","87"],
["Charles","100"],
["Eric","64"],
["Charles","22"]].

Expected output: 87
Explanation: The average scores are 87, 61, and 64 for Bobby, Charles, and Eric, respectively. 87 is the highest.


public static int bestAverageGrade(String[][] scores) {
// Check for empty list
if (scores.length == 0) {
return 0;
}

// Build hashmap of students to list of scores
// var studentsToScores new HashMap<String, ArrayList<Integer>>();

for (String[] scoreRow: scores) {
// Check for well formed input 
if(scoreRow.length != 2)
return 0;

String student = scoreRow[0];

int score Integer.parseInt(scoreRow[1]);

// Find student in list
ArrayList<Integer> currentScores studentsToScores.get(student);

if (currentScores == null) { 
    currentScores = new ArrayList<>(); 
    currentScores.add(score); 
    studentsToScores.put(student, currentScores);
}else {
    // append score to list
    currentScores.add(score);
}
}



// get averages and max
double max=-Double.MAX_VALUE;
for (var studentScores: studentsToScores.values()) {
int sum = 0;
for (int i: studentScores) {
sum += 1;
}

double average sum / (double) studentScores.size();
max= Math.max(max, average);
}

return (int)Math.floor(max);
}


public static boolean doTestsPass() {

// map of test cases to expected results

var testCases new HashMap<String[][], Integer>();

// example

testCases.put(new String[][] {

{"Bobby", "87"},

{"Charles", "100"},

{"Eric", "64"},

{"Charles", "22"}},

// empty

87);

testCases.put(new String[][] (). 0);

// multiple scores each

testCases.put(new String[][](

{"Sarah", "91"},

{"Goldie", "92"},

{"Elaine", "93"},

{"Elaine", "95"),

{"Goldie", "94"),

{"Sarah", "93")),

94);

// negatives and zeros

testCases.put(new String[][] {

("Janie", "-66"),

{"Janie", "0"},

{"Gina", "-88"},

{"Bobby", "0"},

("Gina", "44"),

("Bobby", "0"},

("Bobby", "-6")),

-2);

// same value and average


testCases.put(new String[][]{

("Alpha", "99"},

("Bravo", "99"],

("Charlie", "99"},

("Delta", "99"),

{"Echo", "99"), ["Foxtrot", "99"),

{"Foxtrot", "99"}},

99);

// non-integer average

testCases.put(new String[][][

("Gerald", "91"},

{"Gerald", "92"}},

91);

// negative non-integer average

testCases.put(new String[][] {

["Barry", "-66"},

("Barry", "-65"),

("Alfred", "-122"}},

-66);

// same student has two identical test scores and one that is different (this test case has proven especially beneficial for running average

testCases.put(new String[][] (

{"Bobby", "82"},

{"Charles", "100"},

{"Charles", "100"},

{"Eric", "64"},

{"Charles", "50"}},

83);

boolean passed = true;

for (var entry: testCases.entrySet()) {

int actual bestAverageGrade(entry.getKey()); if (actual I entry.getValue()) {

passed = false;

System.out.printf("Failed for %s\n expected %s, actual %s" + actual, entry.getValue(), Arrays.deepToString(entry.getKey()),

return passed;