// given a jumble collection of segments, each of which is represented as a Pair(startPoint,endPoint), this function sorts the segments to make a continuous path.

// a few assumptions you can make:
1. Each particular segment goes in on direction only , i.e : if you see(1,2), you will not see (2,1).
2. Each starting point only have one way to the end point, i.e : if you see(6,5), you will not see (6,10),(6,3) etc.

for example, if you're passed a list containing the following int arrays:
[(4,5),(9,4),(5,1),(11,9)]
then your implementation should sort it such:
[(11,9),(9,4),(4,5),(5,1)]

@param segements collection of segments, each represented by a Pair(startPoint,endPoint).
@return The sorted segments such that they form a continuous path.
@throws Exception if there is no way to create one continuous path from all the segments passed into this function.


public static List<Pair> sortSegments(final List<Pair> segments) throws Exception{
    //Naive solution, starts breaking in CoderPad around 120_000 segments

    if(segments==null || segments.isEmpty()){
        return Collections.emptylist();
    }

    // make defensive copy 
    List<Pair> copiedSegments= new ArrayList<>(segments);

    Deque<Pair> sortedSegments= new ArrayDeque<>();
    sortedSegments.addLast(copiedSegments.remove(0));

    int segSize=0;
    while((segSize=copiedSegments.size())>0){
        var iter= copiedSegments.iterator();
        while(iter.hasNext()){
            var startPoint= sortedSegments.peekFirst();
            var endPoint= sortedSegments.peekLast();

            var segment= iter.next();
            if(startPoint.left==segment.right){
                sortedSegments.offerFirst(segment);
                iter.remove();
            }else if(endPoint.right==segment.left){
                sortedSegments.offerLast(segment);
                iter.remove();
            }
        }

        if(segSize==copiedSegments.size()){
            throw new Exception("Could not use all segments to form a continuous path");
        }
    }

    // much faster solution - scales up to millions of segments and only capped
    // by CoderPas limitation
    if(segments==null || segments.isEmpty())
    {
        return Collections.emptyList();
    }

    var startMap= segment.stream().collect(Collectors.toMap(Pair::left,indentity()));
    var endMap= segment.stream().collect(Collectors.toMap(Pair::right,indentity()));

    Deque<Pair> sortedSegments= new ArrayDeque<>();
    Pair middleSegment= segment.get(0);
    sortedSegments.add(middleSegment);

    var nextSegment= startMap.get(middleSegment.right);
    while(nextSegment!=null){
        sortedSegments.addLast(nextSegment);
        nextSegment= startMap.get(nextSegment.right);
    }

    var prevSegment= endMap.get(middleSegment.left);
    while(prevSegment!=null)
    {
        sortedSegments.addFirst(prevSegment);
        prevSegment= endMap.get(prevSegment.left);
    }

    if(segments.size()!=sortedSegments.size()){
        throw new Exception("Could not use all segment to form a continuous path");
    }

    return new ArrayList<>(sortedSegments);

}

private static List<Pair> generateContinuoussEGMENTS(int n){
    List<Integer> points= new ArrayList<>(IntStream.rangeClosed(0,n),boxed().toList());
    Collections.shuffle(points);
    var continuousSegments= IntStream.range(1,points.size()).mapToObj(i->new Pair(points.get(i-1),points.get(i))).toList();

    return new ArrayList<>(continuousSegments);
}

@Test
public void testBasicSort() throws Exception{
    var jumbledSegments=new ArrayList<>(
        List.of(new Pair(4,5),
        new Pair(9,4),
        new Pair(5,1),
        new Pair(11,9))
    );

    var actualContinuousPath= sortSegments(jumbledSegments);
    var expectedContinuousPath= new ArrayList<>(
        List.of(new Pair(11,9),new Pair(9,4),new Pair(4,5),new Pair(5,1))
    );

    assertEquals(expectedContinuousPath,actualContinuousPath);

}
@Test

public void testSortComplexity() throws Exception (

// this test won't run to completion in CoderPad for the naive solution

var continuousSegments generateContinuousSegments (500.000); var randomSegments new ArrayList<>(continuousSegments); Collections.shuffle(randomSegments);

var sortedSegments sortSegments(randomSegments);

assertEquals(continuous Segments, sortedSegments);

Test

public void testEmpty() throws Exception {

var resultaall sortSegments (null);

assertEquals(Collections.emptyList(), resultNull); var resultEmpty sortSegments(Collections, emptyList());

assertEquals(Collections.emptyList(), resultEmpty);

@Test(expected-Exception.class)

public void testMissingSegment() throws Exception { new

var pathwith MissingSegments ArrayList<>( List.of(new Pair(11, 9),

new Pair(5, 1))

);

sortSegments (pathwithMissingSegments);

}

@Test (expected-Exception.class)

public void testDuplicate() throws Exception (

var duplicateSegments new ArrayList<>( List.of(new Pair(10, 9),4

new Pair(9, 4),

new Pair(9, 4),

new Pair(4, 5),

new Pair(5, 1))

);

sortSegments(duplicateSegments);

public static void main(String[] args) ( JUnitCore.main("Solution");