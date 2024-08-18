var solution = (function () {
function longestUniformSubstring(input) {
// if string is empty
if (input.length == 0) return [-1, 0];

    let l = 0,
      r = 1;
    let start = l,
      end = r,
      maxlen = 0,
      currlen = 0;
    while (r < input.length) {
      // "abbbccda"
      if (input[l] === input[r]) {
        //continue
        r++;
        currlen++;
        console.log(input[l], input[r], start, end);
      } else {
        // restart
        l++;
        r++;
        currlen = 0;
      }

      if (maxlen < currlen) {
        // update maxlen
        maxlen = currlen;
        start = l;
        end = r - l; // length
        // update start index
        // update end index
      }
    }
    console.log(start, end);
    return [start, end];
    // return[ -1, 0 ];

}

// /\*

// - This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
// \*/
function doTestsPass(testCases) {
var passes = true;
for (var testCase in testCases) {
if (testCases.hasOwnProperty(testCase)) {
var expectedResult = testCases[testCase];
var actualResult = longestUniformSubstring(testCase);
passes =
passes &&
expectedResult[0] == actualResult[0] &&
expectedResult[1] == actualResult[1];
}
}
return passes;
}

return {
doTestsPass: doTestsPass,
longestUniformSubstring: longestUniformSubstring,
};
})();

// /_
// todo: add more test cases please!
// _/
var testCases = {
"": [-1, 0],
10000111: [1, 4],
aabbbbbCdAA: [2, 5],
};

if (solution.doTestsPass(testCases)) {
console.log("All tests pass!");
} else {
console.error("Not all tests pass :(");
}
