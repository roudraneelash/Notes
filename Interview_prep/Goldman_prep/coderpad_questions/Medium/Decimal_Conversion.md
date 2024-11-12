public class Solution {
    // Implement the method that provided numerator and denominator will return a string representing a fraction's decimal form.
    // some fractions in decimal form have cyclic deicmal points.
    // example:
    1/2=0.5
    1/3=0.(3)

    public static vulgarToDecimal(long numerator, long denominator){

        if (denominator <= 0) throw new IllegalArgumentException("denominator must be a positive number");
            boolean isNegative numerator < 0; numerator Math.abs(numerator);
            long integer = numerator / denominator; numerator = numerator % denominator;
            var remainders = new LinkedHashSet<Long>(); long cycleBeginsAtRemainder = -1L;

            while (numerator != 0) {
            numerator *= 10;
            long reminder = numerator % denominator;
            if(remainders.contains (numerator)) { 
                cycleBeginsAtRemainder = numerator; break;
            }

            remainders.add(numerator); numerator = reminder;
            }

            var sb = new StringBuilder();

            if (isNegative) sb.append('-');
            sb.append(integer);

            if (!remainders.isEmpty()) {

                sb.append('.');

                for (long remainder: remainders) {
                    if (remainder cycleBeginsAtRemainder) { 
                        sb.append('(');
                    }

                    sb.append(remainder / denominator);

                    if(cycleBeginsAtRemainder != -1L) { 
                        sb.append(')');
                    }

                }

                return sb.toString();

            }

                /**

                boolean doTestsPass()

                * Returns true if all tests pass. Otherwise false

                */

                public static boolean doTestsPass(){

                boolean testsPassed = true;

                testsPassed &= vulgarToDecimal(1L, 2L).equals("0.5"); testsPassed & vulgarToDecimal(1L, 3L).equals("0.(3)"); testsPassed & vulgarToDecimal(1L, 30L).equals("0.0(3)"); testsPassed &= vulgarToDecimal(1L, 75L).equals("0.01(3)"); testsPassed &= vulgarToDecimal(4L, 7L).equals("0. (571428)"); testsPassed &= vulgarToDecimal(1L, 56L).equals("0.017 (857142)

                if(testsPassed) { System.out.println("Tests passed");

                } else { } System.out.println("Tests failed");

                return testsPassed;

                }
}