// you are given an integer array of size N.
// every element in the array is greated that or equal to 0.
// starting from arr[startIndex], follow each element to the index it points to,
// continue to do this until you find a cycle.
// return the length of the cycle. if no cycle is found return -1.

-- Example :
countLengthOfCycle([1,0],0)==2
countLengthOfCycle([1,2,0],0)==3
