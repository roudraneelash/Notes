//  Given an apache log file, return IP address(es) which access the site most often.

our log is in this format(Common log format), one entry per line. 
10.0.0.1 - frank[10/Dec//2000:12:34:56 - 0500] "GET/a.gif HTTP/1.0" 200 234

log file entries are passed as an array.
Note: incase of a tie, this returns a comma-seperated list of the IP addresses. Tie is not mentioned explicitly in the excercise on purpose.


--- solution

public class Solution {

// Our log is in this format (Common Log Format). One entry per line.

// 10.0.0.1 frank [10/Dec/2000:12:34:56 -0500] "GET /a.gif HTTP/1.0 200 234

// Log file entries are passsed as an array.

// NOTE: In case of tie, this returns a comma-separated list of the IP addresses. Tie is not mentioned explicitly in the exercise on purpose.

public static String findTopIpaddress (String[] lines){
 Map<String, Integer> counter new HashMap<>();

Arrays.stream(lines).forEach((line)-> { String ipAddress line.split("")[0];

Integer count counter.getOrDefault(ipAddress, 0); counter.put(ipAddress, count + 1);

});

// Method 1: Find max value first and filter by that

StringJoiner sj new StringJoiner(","); 

final Integer max =counter.entrySet().stream().max((p1, p2) -> p1.getValue() > p2.getValue()?1:-1).get() .getValue();

counter.entrySet().stream().filter(p -> max==p.getValue()).sorted((p1, p2)->p1.getValue() > p2.getValue()? 1:-1) .forEach(p->sj.add(p.getKey()));

return sj.toString();

// Method 2: Iterate the map once

max=null;

List<String> topIpAddresses = new ArrayList<>();

for (Entry<String, Integer>p: counter.entrySet()) { if (max == null || max < p.getValue()) {

max=p.getValue(); 
topIpAddresses.clear(); 
topIpAddresses.add(p.getKey()); 
 } else if (max== p.getValue()) {

topIpAddresses.add(p.getKey());

}

Collections.sort(topIpAddresses);

return String.join(",", topIpAddresses);
}