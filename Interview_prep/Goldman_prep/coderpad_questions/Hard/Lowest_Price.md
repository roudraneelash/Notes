// A popular online retailer allows vendors to specify different prices in advance for the same item throughout the day. we not need to design an alogrithm that helps identify the lowest price for the item at any point of the day. 

// assumptions:
1. For the algorithm, assum all vendors are selling the same product and there is only one product being sold. Given a list that has vendor info(startTime, endTime, price) of the deal, return a sorted list with different possible intervals and the least price of the product during the interval.

2. the interval is inclusive of start and endtime. 
3. all the 3 values passed by the vendor are integer.


// solution 

public class Solution {
    private record Interval(int startTime, int endTime, int price){
        public Interval{
            if(startTime>=endTime){
                throw new IllegalArgumentException("startTime greater than or equal to endTime for an interval");
            }else if(startTime<0 || endTime<0 || price<0)
            {
                throw new IllegalArgumentException("vendor information has negative values");
            }
        }

        public Interval withMaxEnd(int max){
            return (endTime<=max)? this: new Interval(startTime,max,price);
        }

        public Interval withMinStart(int min){
            return (startTime>=min) ? this:new Interval(min,endTime,price);
        }
    }
}

public static class BinaryTree{
    private final Interval data;
    private BinaryTree left;
    private BinaryTree right;

    BinaryTree(Interval data){
        this.data=data;
        left=null;
        right=null;
    }

    // Invariant: BinaryTree is a sorted list of non-overlapping intervals.
    // this method will take the given interval and apply it to any gaps in betweem the intervals.
    // @param interval

    void applyInterval(Interval interval){
        if(interval.startTime<data.startTime){
            var leftInterval = interval.withMaxEnd(data.startTime);
            if(this.left !=null){
                this.left.applyInterval(leftInterval);
            }else{
                this.left=new BinaryTree(leftInterval);
            }
        }

        if(interval.endTime>data.endTime){
            var rightInterval= interval.withMinStart(data.endTime);
            if(this.right!=null)
            {
                this.right.applyInterval(rightInterval);
            }else{
                this.right=new BinaryTree(rightInterval);
            }
        }
    }

    private void traverse(List<Interval> results){
        if(this.left!=null)
        {
            this.left.traverse(results);
        }
        results.add(this.data);
        if(this.right!=null)
        {
            this.right.traverse(results);
        }
    }

    List<Interval> inOrder(){
        List<Interval> results= new Arraylist<>();
        this.traverse(results);
        return results;
    }
}

private List<Interval> getLowestPrices(List<Interval> inputIntervals) throws IllegalArgumentException{
    if(inputIntervals=null || inputintervals.size()==0){
        throw new IllegalArgumentException("inputIntervals has 0 elements");
    }
    for(var inputInterval:inputIntervals){
        if(inputInterval==null){
            throw new IllegalArgumentException("inputIntervals has a NULL element");
        }
    }
    var sortedIntervalQueue= inputIntervals.stream().sorted(Comparator.comparing(Interval::price)).collect(Collectors.toCollection(ArrayDeque::new));

    Interval root= sortedIntervalQueue.pop();
    BinaryTree tree= new BinaryTree(root);
    for(var interval: sortedIntervalQueue){
        tree.applyInterval(interval);
    }

    return tree.inOrder();
}
// Input: (1,20,13), (7,10,8),(3,8,15),(1,5,20)
// output: (1,7,13),(7,10,8),(10,20,13)

Example2.
Input: (7,10,8), (3,8,15), (1,5,20), (1,20,4)
Output:(1,20,4)

Example3:(3,6,2), (1,9,3), (5,8,1)
Ouput:(1,3,3), (3,5,2), (5,8,1), (8,9,3)


private boolean doTestPass(){
    try{
        var inputList= List.of(
            new Interval(1,5,20),
            new Interval(3,8,15),
            new Interval(7,10,8)
        );
        var expectedList= List.of(
            new Interval(1,3,20),
            new Interval(3,7,15),
            new Interval(7,10,8)
        );

        return expectedList.equals(getLowestPrices(inputList));
    }catch(IllegalArgumentException e){
        System.out.println(e.getMessage());
    }

    return false;
}

