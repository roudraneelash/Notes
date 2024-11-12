// median two sorted arrays

public class Solution (

public static double findMedianSortedArrays (int[] A, int[] B) {

int m A.length, n 8.length;

int 1 = (m + n + 1) / 2

r = (m + n + 2) / 2 return (getkth(A, B, B, 0, 1) getkth(A, B, B, 8, r)) / 2.0;

}

public static double getkth(int[] a, int aStart, int[] B int bStart, int k) ( if (aStart > A.length 1) return B[bStart + k - 1 ] if (bStart > B.length 1) return A[aStart+k-1]; if (k = 1) return Math.min(A[aStart], B[bStart]);

int amid Integer.MAX_VALUE, Mid Integer.MAX_VALUE; if (aStart+k/21 A.length) aMid A[aStart+ k / 2 - 11 if (bStart+k/21 B.length) bMid B[bStart+;

if (amid bMid)

else

return getkth(A, aStart+k/2, B, bStart, k + (- k) / 2 ) ;// Check: aRight bleft

return getkth(A, aStart, B, bStart+k/2, kk/2);// Check: bRight + aleft

/**

boolean doTestsPass()

Returns true if all tests pass. Otherwise returns false.

public static boolean doTestsPass() {

//todo: implement more tests, please // feel free to make testing more elegant

boolean result = true;

result result && findMedianSortedArrays (new int[]{1, 3}, new int[] (2, 4)) == 2.5; result result && findMedianSortedArrays(new int[]{1, 3), new int[](2)) 2.0;

return result;