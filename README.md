# Notes

Interview notes

- Java as a platform independent language
  JDK: it is required to write and compile and convert source code into bytecode. ByteCode is machine independent.
  JRE: it converts the bytecode into machine specific code. JVM has JIT compiler that converts the bytecode into machine dependent code.
  -JVM
  -JIT
- Procedure oriented langauge vs OOPS

Sequence of tasks,
-OOPSData and method, implements Encapsulation

OOPS

- static block & static members
- Non-static block and members
- DataTypes
- wrapper class , Autoboxing & unboxing
- Access modifiers

-- static block excutes once when the class is loaded
-- nonstatic block executes everytime a new instance is created

-Exception Handling

- Checked Exceptins -- compile time error- due to syntax error
- Unchecked Exceptions -- RunTime error- Abnormal termination of a program

Throwable is the parent class of all Exceptions in Java

- Exception class=>belongs to RuntimeException
- ArithmeticException(divide by 0)
- NumberFormatException(Integer.parseInt("abcd"));
- ArrayIndexOutOfBound(when the index does no exist for the array)
- NullPointerException(when the obj ref is null)

Handling Exceptions
try,catch,throw,finally,throws

try{
//code that might generate exception
}catch(Exception obj)
{
//handling the exception
}finally{
//always execute
}

--Throw is use to generate exception
--throws is use to not handle the exception directly using catch block,
whoever calls the functionn, it will be handled by it

//Custom checked exception class
class DivisionByZeroException extends Exception {
public DivisionByZeroException(String message) {
super(message);
}
}

public class Test {

// Method that performs division operation and throws DivisionByZeroException if denominator is zero
public static double divide(int numerator, int denominator) throws DivisionByZeroException {
if (denominator == 0) {
throw new DivisionByZeroException("Cannot divide by zero!");
}
return (double) numerator / denominator;
}

public static void main(String[] args) {
try {
// Calling the divide method with a denominator of 0
double result = divide(10, 0);
System.out.println("Result of division: " + result);
} catch (DivisionByZeroException e) {
// Handling the DivisionByZeroException
System.out.println("Exception caught: " + e.getMessage());
}
}
}

- Assertions






SR NO	ITEM	COVERAGES
1	FAMILY SIZE	
1+5 ( Employee + Spouse/Spouse Equivalent + 1st Child + 2nd Child + Dependent parents/parents in law ).
Disclaimer: The dependent coverage for the colleagues who have joined on or after 1st July 2024 will be employee + spouse/spouse equivalent + children (max 2 children up to 25 years of age). Colleagues have an option to add their parents/parents-in-law (One set, cross combination is not allowed) on a voluntary and paid basis in the same sum insured category as they fall under the base group mediclaim plan.
The annual premium to add your parent/parents-in-law under the base policy will be INR 23,600 (including GST). The premium will be charged on a pro-rated basis from the date of your joining till 31st March, 2025. Please refer to the Pro-rated premium details in the PDF named, ‘Pro-rated premium details for Voluntary Parental Policy’ available in the download center on the portal.
If you add your parent/in law details as a part of firm sponsored plan in the benefit me portal it shall be deemed considered as voluntary paid enrollment for which applicable premium shall be charged to you.

2	AGE BRACKET	0-90 YEARS
 	FOR CHILD	UPTO 25 YEARS
3	SUM INSURED	INR 400,000/- Senior Managers and below & INR 500,000/- for Sr. Associate Directors / Technical Director / Director and above
4	EXCLUSION CLAUSE	1st, 2nd and 4th year exclusion clause: Waived
5	FIRST 30 DAYS EXCLUSION CLAUSE	WAIVED
6	PRE EXISTING DISEASE WAIVER	WAIVED FOR ALL
7	MATERNITY BENEFITS - LIMITS AND COVERAGES	INR 1.5 lacs for Normal and C-Sec
(Maternity related complications leading to life threatening situation will be covered up to full Sum Insured)
8	9 MONTHS WAITING PERIOD FOR MATERNITY	Waived for all
9	PRE-NATAL & POST-NATAL	Coverage period for Pre Natal 90 days and Post Natal 30 days on OPD & no time limit for inpatient cases within maternity limit
10	NEW BORN BABY  COVERAGE	Yes. Up to Floater Sum Insured from Day 1
11	INTERNAL& EXTERNAL CONGENITAL	Covered
 	DISEASE	up to SI
12	Pre-existing diseases / injuries	Covered up to SI
13	Pre/ Post Hospitalization Expenses	30 Days Pre-Hospitalization & 60 days Post-Hospitalization respectively
14	Domiciliary Hospitalization	Covered - (SUBJECT TO BILLS REQUIRED WITH PROPER NUMBER AND OTHER TERMS ARE AS PER POLICIES T&C.
1). Treatment taken at home when hospital bed is not available or condition of person is such that cannot be moved to hospital ( doctor certification needed)
2). Overall limit up to 50% of base SI.
3). Sublimit: Doctor Consultations: INR 25,000. Medications: INR 50,000. Diagnostics: INR 50,000. Physiotherapy/ Nursing charges: INR 25,000
4) Exclusions: Equipment, experimental treatment, consumables, care without active line of treatment
15	DAY CARE PROCEDURES	As per Policy
16	ROOM RENT RESTRICTION	Student, PS & Non-PS:- INR 8,000 per day, Directors & Partners:– INR 9,500 per day for Normal Hospitalization and No capping for I.C.U
17	AMBULANCE	INR 2,000/- per event
18	Deductible clause &	Assistant Manager & Below : 10% of the Admissible claim amount
Co-payment	Manager & Above : 20% of the Admissible claim amount
 	For Each & Every Parents : 25% of the Admissible claim amount
19	Vaporization of prostate	Covered up to SI
20	Psychiatric treatment	5 cases with sublimit if 1 lac per case.
21	Neurodegenerative	Covered up to SI
22	Uterine artery embolization	Covered up to SI
23	Surrogacy	Covered up to SI
24	Balloon sinuplasty	Covered up to SI
25	Bronchial thermoplasty	Covered up to SI
26	Behavioral and neurodevelopmental disorders	Covered up to SI
27	Intra-operative neuro-monitoring	Covered up to SI
28	Bariatric surgery	Covered
A) BMI greater than or equal to 40
B) BMI is greater than or equal to 35 in conjunction with any of the following comorbidities
Obesity related cardiomyopathy
coronary heart disease
Severe sleep apnea
Uncontrolled type 2 Diabetes
29	Intra-vitreal injections	Covered up to SI
30	Coverage for parents and adopted kids of partners of LGBT colleagues	Covered up to SI
31	HIV	Covered Inpatient hospitalization arising due to HIV and associated complications is covered
32	Cochlear implant	Covered up to SI
33	Covid Home Care	Covered up to INR 20,000/- per family
34	COVID vaccination side effects observation	Covered on IPD basis even if active line of treatment is not present
35	Care needed to treat severe adverse events of Covid vaccination	Covered even if 24 hour hospitalization not needed
36	Organ donor expenses	These will cover the hospitalization expenses when the member wants to donate an organ hospitalization expenses incurred for organ harvest from another individual for transplant in the member hospitalization expenses incurred for organ harvest from another individual for transplant in the member
37	Capping on cataract surgery	No capping on cataract surgery as well as lenses
38	Mental Health treatment	Therapies for mental and physical disabilities covered on outpatient basis with per family limit of 1 L and per therapy session limit of 10,000. For inpatient, coverage will be up to SI.
39	Post hospitalization benefit for cancer cases	Covered for 90 days
40	Diagnostics for Cancer treatment	Up on completion of cancer treatments, follow-up diagnostics for monitoring will be covered on day care/ hospitalization basis
41	Biopsy test for cancer care	Covered up to SI
42	Infertility coverage	Coverage for all infertility procedures ( hospitalization and day care) including artificial reproductive techniques ( IVF, IUI etc.) up to full SI for both men and women
43	Voluntary Termination of Pregnancy	Covered up to maternity limit unless there is a life threatening complication in which case full sum insured will be made available
44	AYUSH coverage	Covered up to Sum Insured
